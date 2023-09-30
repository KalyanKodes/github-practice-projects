const playStationContainer = document.querySelector('.playStationContainer');
const xBoxContainer = document.querySelector('.xBoxContainer');

playStationContainer.addEventListener('mouseover', () => {
    // alert("Mouseover");
    xBoxContainer.classList.add('show');
    setTimeout( ()=>{
        playStationContainer.style.scale = '1.1'
    }
    ,200)
});
playStationContainer.addEventListener('mouseout', () => {
    // alert("Mouseout");
    xBoxContainer.classList.remove('show');
    setTimeout(
        playStationContainer.style.scale = '1'
    ,1000)
});
xBoxContainer.addEventListener('mouseover', () => {
    // alert("Mouseover");
    xBoxContainer.classList.add('hide');
});
xBoxContainer.addEventListener('mouseout', () => {
    // alert("Mouseout");
    xBoxContainer.classList.remove('hide');
});
