const button = document.querySelector('.showNotificationButton');
const parentElement = document.querySelector('.notification');

button.addEventListener('click' , createToast);


var toastElementsArr = []

function createToast(){
    let toastElement = document.createElement('div');
    toastElement.className = 'toast';
    toastElement.innerHTML = "Message";
    toastElementsArr.push(toastElement);
    parentElement.appendChild(toastElement);
    // console.clear();
    // console.log(toastElementsArr)
    if(toastElementsArr.length != 0){
        setTimeout(()=>{
            parentElement.removeChild(toastElementsArr[toastElementsArr.length-1]);
            toastElementsArr.pop();
        } , 2000)
    }
    // console.log(toastElementsArr)
}

