// console.log(document.querySelector('body h1').getBoundingClientRect())

const elements = document.querySelectorAll('.box');

function render()
{elements.forEach((element) =>{
    let windowHeight = window.innerHeight;
    let elementBottomValue = element.getBoundingClientRect().bottom;
    if(elementBottomValue > windowHeight){
        element.classList.add('hide')
    }
    else{
        element.classList.remove('hide')
    }
})}

render();





window.addEventListener('scroll' , render)