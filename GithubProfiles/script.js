const inputBox = document.getElementById('profileNameInput');
const displayBox = document.querySelector('.profileDetails');
const profileImage = document.querySelector(".profileImage");
const profileName = document.querySelector(".profileName");
const API = "https://api.github.com/users/";


inputBox.focus();
inputBox.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        inputBox.blur();
        let name = inputBox.value.split(' ').join("");
        inputBox.value = "";
        fetchData(name);
    }
});






function fetchData(userName){
    let p = fetch(API+userName);
    p.then((res)=>{
        if(res.ok != true){
            if(displayBox.classList.contains('show')){
                displayBox.classList.remove('show');
            }
            document.querySelector(".noUserFound").classList.add('show');
        }
        else{
            res.json().then((data) => {
                renderProfileImage(data);
            });
        }
    })
}

function renderProfileImage(data){
    if(document.querySelector(".noUserFound").classList.contains('show')){
        document.querySelector(".noUserFound").classList.remove('show');
    }
    let rendered = new Promise((resolve) =>{
        profileImage.setAttribute('src' , `${data.avatar_url}`)
        resolve();
    })
    rendered.then(()=>{
        renderDetails(data)
    })
    
}


function renderDetails(data){
    document.querySelector('.followers').innerHTML = `${data.followers} Followers`;
    document.querySelector('.following').innerHTML = `${data.following} Following`;
    document.querySelector('.repos').innerHTML = `${data.public_repos} Repos`;
    if(data.name === null){
        profileName.innerHTML = data.login;
    }
    else{
        profileName.innerHTML = data.name;
    }
    if(data.bio === null){
        document.querySelector('.bio').innerHTML = "";
        // 
    }
    else{
        document.querySelector('.bio').innerHTML = data.bio;
    }
    displayBox.classList.add('show');
}