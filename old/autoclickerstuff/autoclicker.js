const autoclicker = document.querySelector("[data-autoclicker]");
const starter = document.querySelector("[data-start]");
const stoper = document.querySelector("[data-stoper]");

function start() {
    starter.innerHTML = "started";
    stoper.innerHTML = "stop";
}

function stop() {
    starter.innerHTML = "start";
    stoper.innerHTML = "stoped";
    document.getElementById("text1").innerHTML = "stoped";
}

