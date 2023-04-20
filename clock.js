let formatTime = (timeObj) => {
    if (timeObj.hours < 10) { 
        timeObj.hours = `0${timeObj.hours}`;
    }
    if (timeObj.minutes < 10) { 
        timeObj.minutes = `0${timeObj.minutes}`;
    }
    if (timeObj.seconds < 10) { 
        timeObj.seconds = `0${timeObj.seconds}`;
    }
    return timeObj
}
let getTime = () => {
    let timeNow = new Date()
    timeNow = {
        hours: timeNow.getHours(),
        minutes: timeNow.getMinutes(),
        seconds: timeNow.getSeconds()
    }
    return formatTime(timeNow)
}

console.log(getTime());

let setTime = () => {
let elTime = document.querySelector('#clock')
let currentTime = getTime()
elTime.innerHTML = `${currentTime.hours}:${currentTime.minutes}:${currentTime.seconds}`
elTime.style.color = 'White';
elTime.style.fontSize = 'large';
elTime.style.marginLeft = '46%';
elTime.style.marginRight = '45%';
elTime.style.marginTop = '25%';
}

setInterval(setTime, 1000)