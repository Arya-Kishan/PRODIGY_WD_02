let start = document.getElementById("start");
let stop = document.getElementById("stop");
let watch = document.getElementById("watch");
let reset = document.getElementById("reset");
let lap = document.getElementById("lap");
let resetlap = document.getElementById("resetlap");
let lapContainer = document.getElementById("lapContainer");
let seconds = 0;
let minutes = 0;
let hours = 0;
let lapTime = null;



function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    var sec = seconds < 10 ? "0" + seconds : seconds;
    var min = minutes < 10 ? "0" + minutes : minutes;
    var hr = hours < 10 ? "0" + hours : hours;
    watch.innerHTML = `${hr}:${min}:${sec}`;
    lapTime = `${hr}:${min}:${sec}`;
}

let timer = null;


function watchstart() {
    if (timer !== null) {``}
    
    timer = setInterval(() => {
        stopwatch();
    }, 100);
}


function watchstop() {
    clearInterval(timer);
}

function watchreset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    watch.innerHTML = `${hours + "0"}:${minutes + "0"}:${seconds + "0"}`;
}

start.addEventListener("click", () => {
    watchstart();
});
stop.addEventListener("click", () => {
    watchstop();
});
reset.addEventListener("click", () => {
    watchreset();
});
lap.addEventListener("click", () => {
    console.log(lapTime);
    lapContainer.innerHTML += `<div class="lapDiv">${lapTime}</div>`;
});
resetlap.addEventListener("click", () => {
    lapContainer.innerHTML = "";
});
