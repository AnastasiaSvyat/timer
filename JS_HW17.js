//Додаємо дату
function date(){
    let date = new Date,
    day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate();
    month = (date.getMonth() < 10) ? '0' + date.getMonth() : date.getMonth(),
    year = date.getFullYear();
    document.getElementById('date').innerHTML = day + ':' + month + ':' + year;
}
setInterval(date, 1000);
date();



//додаємо годину 
function clock(){
    let date = new Date,
    hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
    minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
    seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
}
setInterval(clock, 1000);
clock();


let sec = 0;
let min = 0;
let hour = 0;
let stopStopWatch;
let stopwatch = document.getElementById('stopwatch')


//кнопка страту
let start = document.getElementsByClassName('start')
start[0].addEventListener('click',function(){
    stopStopWatch = setInterval(tick,1000);

})

//зовнішній вигяд секундоміру
function tick(){
    sec++
    if(sec>= 60){
        min++
        sec = sec - 60
    }
    else if(min >= 60){
        hour++
        min = min - 60
    }
    if (sec < 10) { 
        if (min < 10) {
            if (hour < 10) {
                document.getElementById('stopwatch').innerHTML ='0' + hour + ':0' + min + ':0' + sec;
            } else {
                document.getElementById('stopwatch').innerHTML = hour + ':0' + min + ':0' + sec;
            }
        } else {
            if (hour < 10) {
                document.getElementById('stopwatch').innerHTML = '0' + hour + ':' + min + ':0' + sec;
            } else {
                document.getElementById('stopwatch').innerHTML = hour + ':' + min + ':0' + sec;
            }
        }
    } else {
        if (min < 10) {
            if (hour < 10) {
                document.getElementById('stopwatch').innerHTML = '0' + hour + ':0' + min + ':' + sec;
            } else {
                document.getElementById('stopwatch').innerHTML = hour + ':0' + min + ':' + sec;
            }
        } else {
            if (hour < 10) {
                document.getElementById('stopwatch').innerHTML = '0' + hour + ':' + min + ':' + sec;
            } else {
                document.getElementById('stopwatch').innerHTML = hour + ':' + min + ':' + sec;
            }
        }
    }
}

//зупинення секундоміру 
let stop = document.getElementsByClassName('stop')
stop[0].addEventListener('click',function(){
  clearInterval(stopStopWatch);
})

//зберігаємо зупинений час
let loop = document.getElementsByClassName('loop')
loop[0].addEventListener('click',function(){
let txt = stopwatch.textContent
    document.getElementById('loopBox').innerHTML = txt
})

let reset = document.getElementsByClassName('reset')
reset[0].addEventListener('click',function(){
    document.getElementById('loopBox').innerHTML = " "
    document.getElementById('stopwatch').innerHTML = "00:00:00"
    clearInterval(stopStopWatch);
    sec = 0;
    min = 0;
    hour = 0;
})

//таймер
let count = 0;
let minus = document.getElementsByClassName('minus')
let plus = document.getElementsByClassName('plus')
plus[0].addEventListener('click',function(){
    if(count<9){
    document.getElementById('timerNumber').innerHTML = "0" + ++count
}
else{
    document.getElementById('timerNumber').innerHTML = ++count
}
})
minus[0].addEventListener('click',function(){
    if(count<11){
    document.getElementById('timerNumber').innerHTML = "0" + --count
}
else{
    document.getElementById('timerNumber').innerHTML = --count
}
})

//запуск таймеру 
let timerNumber= document.getElementById('timerNumber')
let startTimer = document.getElementsByClassName('startTimer')
startTimer[0].addEventListener('click',function(){
    let number = timerNumber.textContent
    document.getElementById('timer').innerHTML = number +':00'
    stopTimer = setInterval(tickTimer,1000);
})



function tickTimer(){
    let my_timer = document.getElementById("timer");
    let time = timer.innerHTML;
    let arr = time.split(":");
    let minTimer = arr[0];
    let secTimer = arr[1];
    if (secTimer == 0) {
      if (minTimer == 0) {
        alert("Время вышло");
        window.location.reload();
        return;
    }
        minTimer--;
    if (minTimer < 10){
        minTimer = "0" + minTimer;
        secTimer = 59;
      }
    }
    else{
        secTimer--;
    }
    if (secTimer < 10) {
        secTimer = "0" + secTimer;
    }
    document.getElementById("timer").innerHTML = minTimer+":"+secTimer;
    }


//зупинка таймеру 
let stopTimer = document.getElementsByClassName('stopTimer')
stopTimer[0].addEventListener('click',function(){
    clearInterval(stopTimer)
})

//виключення таймеру
let resetTimer = document.getElementsByClassName('resetTimer')
resetTimer[0].addEventListener('click',function(){
    timer.textContent = '00:00'
})



    