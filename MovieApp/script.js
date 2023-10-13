const wrapper = document.querySelector(".wrapper");
const inputBox = document.querySelector("input[type = 'search']");
const popularMovieAPI =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const searchAPI =
  "https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=";
const imageAPI = "https://image.tmdb.org/t/p/w1280";

async function getPopularMoviesData(API) {
  await fetch(API).then(async (data) => {
    let finalData = await data.json();
    let fileteredData = [];
    finalData.results.forEach((result) => {
      if (result.poster_path != null) {
        fileteredData.push(result);
      }
    });
    renderPopularMovies(fileteredData);
  });
}

function renderPopularMovies(data) {
  if (data.length != 0) {
    if (document.querySelector(".invalid").classList.contains("show")) {
      document.querySelector(".invalid").classList.remove("show");
    }
    data.forEach((item) => {
      let movieBox = document.createElement("div");
      movieBox.className = "movieBox";
      movieBox.innerHTML = `
                <img src="${
                  imageAPI + item.poster_path
                }" class="posterImage" loading = 'lazy'>
                <div class="titleAndRating">
                        <p class="movieTitle">${item.title}</p>
                        <p class="movieRating">${item.vote_average}</p>
                </div>
                <div class="overview">
                <p>Overview</p>
                <p>${item.overview}</p>
                </div>
    
        `;
      wrapper.appendChild(movieBox);
    });
  } else {
    document.querySelector(".invalid").classList.add("show");
  }
}

function removePreviousResults() {
  let movies = document.querySelectorAll(".movieBox");
  movies.forEach((movie) => {
    wrapper.removeChild(movie);
  });
}

async function searchMovie(API, movieName) {
  await fetch(API + movieName).then(async (data) => {
    let finalData = await data.json();
    let filteredData = [];
    finalData.results.forEach((result) => {
      if (result.poster_path != null) {
        filteredData.push(result);
      }
    });
    removePreviousResults();
    renderPopularMovies(filteredData);
  });
}

inputBox.addEventListener("keyup", (e) => {
  searchMovie(searchAPI, inputBox.value);
  if (e.key === "Enter") {
    inputBox.blur();
  }
});

getPopularMoviesData(popularMovieAPI);
