const dial = document.getElementById("dial");
const text = document.getElementById("text");
const image = document.getElementById("image");
let song;
let audio;
const songs = ["runaway", "skitzo", "stop", "roses", "popout", "myeyes", "special"];

document.addEventListener("DOMContentLoaded", (event) => {
    let n = Math.floor(Math.floor(Math.random() * 61) / 10);

    song = songs[n];

    audio = new Audio("./music/" + song + ".mp3");

    image.src = "./imgs/" + song + ".png";
});

dial.addEventListener('click', (event) => {
    
    dial.classList.toggle("fa-play");
    dial.classList.toggle("fa-pause");
    
    text.classList.add("vanish");

    if (dial.classList[1] === "fa-pause") {
        audio.play();
    } else {
        audio.pause();
    }
    
    image.style.transform = "rotateY(0deg)";
});