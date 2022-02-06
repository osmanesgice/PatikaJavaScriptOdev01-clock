let myName = document.querySelector("#myName")
let myClock = document.querySelector("#myClock")

let name = prompt("Adınız nedir?")

myName.innerHTML = name

CLOCK = `
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg>
`

let date = new Date();
let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();
let d = date.getDay();

let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]

myClock.innerHTML = `${CLOCK} ${h}:${m}:${s} ${days[d]} ${CLOCK}`
