const menuSymbol = document.querySelector('.fa-bars');
const crossSymbol = document.querySelector('.fa-xmark');
const sideBar = document.querySelector(".sideBar");

menuSymbol.addEventListener('click' , ()=>{
    sideBar.classList.toggle('show');
        document.querySelector('.blackContainer').classList.toggle('show');
        setTimeout(()=>{
            document.querySelector('.redContainer').classList.toggle('show');
            setTimeout(()=>{
                document.querySelector('.whiteContainer').classList.toggle('show');
            } , 100);
        } , 100);
        
    })
    
    crossSymbol.addEventListener('click' , ()=>{
        sideBar.classList.toggle('show');
        document.querySelector('.blackContainer').classList.toggle('show');
        document.querySelector('.redContainer').classList.toggle('show');
        document.querySelector('.whiteContainer').classList.toggle('show');
    })

