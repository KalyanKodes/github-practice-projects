const cards = document.querySelectorAll('.cards');

cards[0].classList.add('show');


cards.forEach((card) =>{
    card.addEventListener("click" , ()=>{
        expandCard(card);
    })
})


function expandCard(card){
    cards.forEach((c)=>{
        if(c != card){
            if(c.classList.contains('show')){
                c.classList.remove('show');
            }
        }else{
            c.classList.add('show');
        }
    })
}