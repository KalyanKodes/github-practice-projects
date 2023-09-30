const playButtons = document.querySelectorAll('.playButton');

playButtons.forEach((button) =>{
    let sound = button.value;
    button.addEventListener('click' , ()=>{
        stopSound();
        document.querySelector(`.${sound}`).play();
    })
})

function stopSound(){
    let audioTags = document.querySelectorAll('.audio')
    audioTags.forEach((tag) =>{
        tag.pause();
    })
}

