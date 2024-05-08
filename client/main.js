import { io } from "socket.io-client";
const socket = io("https://e50d30fac17e4b0de12213a9b2101015.serveo.net");
const vid = document.querySelector("video");

console.log(vid.currentTime);
console.log("hello");

/// ------- Connect to socket io --------

socket.on('connect', (socket) => {
  console.log(socket);
  // want to do something ??
})

socket.on('on', () => {
  document.querySelector(".StartModal").style = "background-color: blue;";
  document.querySelector(".loader").style = "display: block;";

})

socket.on("off", () => {
  vid.pause();
  document.querySelector(".StartModal").style = "background-color: blue;";
  document.querySelector(".loader").style = "display: block;";
})

socket.on("vp", () => {
  volumeIncrease();
})

socket.on("vm", () => {
  volumeDecrease();
})

socket.on("play", () => {
  playpause();
})

socket.on("pre", () => {
  preVideo();
})

socket.on("next", () => {
  nextVideo();
})

socket.on("tp", () => {
  skipForward();
})

socket.on("tm", () => {
  skipBackward();
})



// functions
document.querySelector("#start").onclick = () => {
  start();
  console.log("clicked");
  setTimeout(() => {
    document.querySelector(".StartModal").style = "display: none;";
  }, 4000);
}

function playpause(){
  if (vid.paused) {
    vid.play();
  } else {
    vid.pause();
  }
}

let count = 2;

function start() {
  // count = 0;
  // vid.src = `./movie/${count}.mp4`;
  // vid.load();
  vid.play();
}

function nextVideo() {
  count++;
  vid.src = `./movie/${count}.mp4`;
  vid.load();
  vid.play();
}

function preVideo() {
  count--;
  vid.src = `./movie/${count}.mp4`;
  vid.load();
  vid.play();
}

function skipForward() {
  vid.currentTime += 10; 
}

function skipBackward() {
  vid.currentTime -= 10;
}

function volumeIncrease() {
  if(vid.volume < 1) vid.volume += 5;
}

function volumeDecrease() {
  if(vid.volume > 0) vid.volume -= 5;
}