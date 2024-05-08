import { io } from "socket.io-client";
const socket = io("https://e50d30fac17e4b0de12213a9b2101015.serveo.net");
const on = document.querySelector("#on");
const off = document.querySelector("#off");
const vp = document.querySelector("#vp");
const vm = document.querySelector("#vm");
const play = document.querySelector("#play");
const pre = document.querySelector("#pre");
const next = document.querySelector("#next");
const tp = document.querySelector("#tp");
const tm = document.querySelector("#tm");



/// ------- Connect to socket io --------

socket.on('connect', (socket) => {
  console.log(socket);
})


on.onclick = () => {
  socket.emit("on");
}

off.onclick = () => {
  socket.emit("off");
}

vp.onclick = () => {
  socket.emit("vp");
}

vm.onclick = () => {
  socket.emit("vm");
}

play.onclick = () => {
  socket.emit("play");
}

pre.onclick = () => {
  socket.emit("pre");
}

next.onclick = () => {
  socket.emit("next");
}

tp.onclick = () => {
  socket.emit("tp");
}

tm.onclick = () => {
  socket.emit("tm");
}