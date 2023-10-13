const secondsHand = document.querySelector('.secondsHand');
const minutesHand = document.querySelector('.minutesHand');
const hoursHand = document.querySelector('.hoursHand');
const darkModeButton = document.querySelector('.darkModeButton');
// console.log(secondsHand , minutesHand , hoursHand)

const weekDays = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thrusday' , 'Firday' , 'Saturday']
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

darkModeButton.addEventListener('click' , ()=>{
    darkModeButton.classList.toggle('modeOn');
    document.body.classList.toggle('modeOn');
    minutesHand.classList.toggle('modeOn');
    hoursHand.classList.toggle('modeOn');
    document.querySelector('.digitalClock').classList.toggle('modeOn');
    document.querySelector('.date').classList.toggle('modeOn');
})

function timer(){
    let time = new Date;
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours() % 12; 
    const weekDay = time.getDay();
    const month = time.getMonth();
    const date = time.getDate();
    // console.log(weekDay,month , date)

    const secondDegree = (seconds / 60) * 360;
    const minuteDegree = ((minutes + seconds / 60) / 60) * 360;
    const hourDegree = ((hours + minutes / 60) / 12) * 360;
    console.clear();
    console.log(weekDays[weekDay])
    console.log(months[month])
    console.log(date)
    console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`)
    // console.log(`${weekDays[weekDay]}:${months[month]}:${date}`);
    secondsHand.style.transform = `rotate(${secondDegree}deg)`;
    minutesHand.style.transform = `rotate(${minuteDegree}deg)`;
    hoursHand.style.transform = `rotate(${hourDegree}deg)`;
    renderDigitalTime(minutes , hours , weekDay , month , date);

    // console.log(secondDegree , minuteDegree , hourDegree)
}


function renderDigitalTime(minutes , hours , weekDay , month , date){
    let min = minutes<10?`0${minutes}`:minutes;
    let hr = hours<10?`0${hours}`:hours;
    if (hours >= 0 && hours < 12) {
        document.querySelector('.amOrPm').innerHTML = "AM"
    } else {
        document.querySelector('.amOrPm').innerHTML = "PM"
    }
    document.querySelector('.hours').innerHTML = hr;
    document.querySelector('.minutes').innerHTML = min;
    document.querySelector('.weekDayAndMonth').innerHTML = `${weekDays[weekDay]}, ${months[month]}`;
    document.querySelector('.date').innerHTML = date;
}



setInterval(timer , 1000);
