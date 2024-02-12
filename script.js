const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("mins");
const seconds = document.getElementById("seconds");

const currentYear = new Date().getFullYear();
const salesEndsIn = new Date("February 29 2024");
salesEndsIn.setFullYear(currentYear);
console.log(salesEndsIn);

// to get difference 
function updateCountDown() {
const currentTime = new Date();
const diff = salesEndsIn - currentTime;
console.log(diff);

// to get exact days,hours,mins & seconds
const d = Math.floor(diff/(1000*60*60*24));
const h = Math.floor(diff/(1000*60*60)%24);
const m = Math.floor(diff/(1000*60)%60);
const s = Math.floor(diff/(1000)%60);
console.log(d,h,m,s);

//displaying the values
days.innerHTML = d<10 ? "0" + d : d;
hours.innerHTML = h<10 ? "0" + h : h;
minutes.innerHTML = m<10 ? "0" + m : m;
seconds.innerHTML = s<10 ? "0" + s : s;
}

//to run the time
setInterval(updateCountDown,1000);