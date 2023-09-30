const toDoParentElement = document.querySelector('.inputsAndTodos')
const toDoInput = document.querySelector('.toDoInput');
let idArr = [];


window.addEventListener('keypress' , ()=>{
    // console.log(event.key)
    if(event.key === "Enter" && toDoInput.value != '' && toDoInput.value != " "){
        createToDoElement(toDoInput.value);
    }

})


if(localStorage.length != 0){
    let numberOfItems = localStorage.length;
    for(let i = 0; i<numberOfItems ; i++){
        let key = localStorage.key(i);
        let element = document.createElement('div');
        // let id = generateId();
        element.className = 'todosList';
        element.setAttribute('value' , key);
        element.innerHTML = `${localStorage.getItem(key)}`;
        element.addEventListener('click' , ()=>{
            removeElement(element)
        })
        toDoParentElement.appendChild(element);
    }
}




function createToDoElement(todo){
    let element = document.createElement('div');
    let id = generateId();
    element.className = 'todosList';
    element.setAttribute('value' , id);
    element.innerHTML = `${todo}`;
    element.addEventListener('click' , ()=>{
        removeElement(element)
    })
    toDoParentElement.appendChild(element);
    empytInputValue();
    localStorage.setItem(id , todo);
}


function removeElement(element){
    console.clear();
    console.log("Clicked")
    console.log(element.getAttribute('value'));
    localStorage.removeItem(element.getAttribute('value'))
    var elementToRemove = element.getAttribute('value');
    var index = idArr.indexOf(elementToRemove);
    if (index !== -1) {
        idArr.splice(index, 1); 
    }
    toDoParentElement.removeChild(element);
}

function generateId(){
    let id = Math.floor(Math.random() * 50) + 1;
    if(idArr.includes(id)){
        generateId();
    }
    else{
        return id;
    }
}

function empytInputValue(){
    toDoInput.value = '';
}