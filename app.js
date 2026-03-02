// Page switch
function showPage(id){
document.querySelectorAll(".page")
.forEach(p=>p.classList.remove("active"));

document.getElementById(id).classList.add("active");
}

// Calculator
function add(val){
display.value += val;
}

function clearDisplay(){
display.value="";
}

function calculate(){
try{
display.value = eval(display.value);
}catch{
display.value="Error";
}
}

// Money Counter
let total = 0;

function countMoney(){
let note = Number(note.value);
let qty = Number(qty.value);

total += note * qty;
totalMoney.innerText = total;
}

// Loan Calculator
function loanCalc(){
let P = amount.value;
let R = rate.value/100/12;
let N = years.value*12;

let EMI = (P*R*Math.pow(1+R,N))/(Math.pow(1+R,N)-1);

loanResult.innerText = "Monthly EMI: ₹ " + EMI.toFixed(2);
}

// Average
function averageCalc(){
let nums = numbers.value.split(',').map(Number);
let avg = nums.reduce((a,b)=>a+b)/nums.length;

avgResult.innerText = "Average = " + avg;
}

// REGISTER SERVICE WORKER (OFFLINE)
if("serviceWorker" in navigator){
navigator.serviceWorker.register("service-worker.js");
}