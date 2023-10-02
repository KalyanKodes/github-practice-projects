const API = 'https://source.unsplash.com/random';

const imageContainers = document.querySelectorAll('.image');

imageContainers.forEach((image) =>{
  generateUrl(image);
})




async function generateUrl(image){
  console.log("Generate Url Function called");
  let p = fetch(API);
  console.log("Fetched Url");
  p.then((d) =>{
      renderImage(image , d.url);
  })
}


function renderImage(image , url){
  let imageUrl = new Promise((res) =>{
    image.src = url;
  });
}