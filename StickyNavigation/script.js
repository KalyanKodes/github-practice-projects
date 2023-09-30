const menuSymbol = document.querySelector('.menuSymbol');


// var status = false;

menuSymbol.addEventListener('click' , ()=>{
    // status = true;
    document.querySelector('.header').classList.toggle('down');
    document.querySelector('.listItems').classList.toggle('show');
});

window.addEventListener('resize' , ()=>{
    if(window.innerWidth > 500 && document.querySelector('.header').classList.contains('down')){
        document.querySelector('.header').classList.toggle('down');
        document.querySelector('.listItems').classList.toggle('show');
    }
})


window.addEventListener('scroll' , ()=>{
    // console.log(window.scrollY);
    if(window.scrollY > 50){
        // console.log("Working")
        document.querySelector('.header').classList.add('scrolled');
    }
    else{
        document.querySelector('.header').classList.remove('scrolled');
    }
    
})