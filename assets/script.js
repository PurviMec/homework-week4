//Define vars to hold time value
let startingMinutes = 1;
let time = startingMinutes * 60;

let countdownEl = document.getElementById('display');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    countdownEl.innerHTML = `Time: ${seconds}`;
    time--;
}