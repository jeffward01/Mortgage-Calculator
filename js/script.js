//Varibles
var mortgageAmount = getById('mAmount');
var mortgageAmountOutput = logger('mAmount');
var calc = getById('calculateBtn');
var years = +document.getElementById('mPeriod').value;
var months = years * 12;
//calc.addEventListener('click', populate);

//Test JS to see if loaded properly
//alert("JS Works!");


//Functions
function test() {
  //Test to see if numbers are 'numbers'
  //Populate Page
  populateMortgage();
  populateIntRate();

  //Grab Years and Months
  var years = +document.getElementById('mPeriod').value;
  var months = years * 12;

  //Convert $,% symbols to workable numbers
  var intRate = document.getElementById('intRate').value;
  intRate = intRate.replace(/\$%|\,/g, '');
  intRate = intRate.replace(/%/g, '');
  var totalMort = document.getElementById('mAmount').value;
  totalMort = totalMort.replace(/\$|\,/g, '');


  //---------Begin Math-----------

  var M; //monthly mortgage payment
  var P = totalMort; //principle / initial amount borrowed
  var I = intRate / 100 / 12; //monthly interest rate
  var N = years * 12; //number of payments months

  //monthly mortgage payment
  M = monthlyPayment(P, N, I);
  parseInt(M);
  Math.floor(M);
  //  alert("Your monthly Payment is: " + M);
  var ans = formatMoney(M);
  //  alert("Your Answer is: " + ans);
  document.getElementById('monthPayments').innerHTML = N + " monthly payments of " + ans;
}

//Calculate Monthly Payment
function monthlyPayment(p, n, i) {
  var longAnswer;
  longAnswer = p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
  longAnswer = longAnswer.toFixed(2);
  return longAnswer;
}

//Populate Mortgage $XX,XXX output
function populateMortgage() {
  var totalMort = document.getElementById('mAmount').value;
  var num = totalMort;
  num = num.toString().replace(/\$|\,/g, '');
  if (num.isNaN()) {
    alert("Please enter a valid Number for Mortgage amount.");
  } else {
    num = formatMoney(num);
    document.getElementById('mortOut').innerHTML = num;
  }
}

//Populate Interest Rate Output
function populateIntRate() {
  var intRate = document.getElementById('intRate').value;
  intRate = intRate.replace(/[^\d.-]/g, '');
  checkIfNum(intRate);
  intRate = intRate + "%";
  document.getElementById('intOut').innerHTML = intRate;
}


function checkIfNum(x) {
  x = x.toString().replace(/\$%|\,/g, '');
  x = x.toString().replace(/%/g, '');
  if (x.isNaN()) {
    alert("Please enter a valid Number");
  }
  return x;
}

function formatNumber(x) {
  x = x.toString().replace(/\$%|\,/g, '');
  return x;
}

String.prototype.isNaN = function () {
  return isNaN(this.split(",").join(""));
}

function validDigits(n) {
  return n.replace(/[^\d,]+/g, '');
}

function getById(x) {
  document.getElementById(x);
}

function logger(x) {
  var output = getById(x);
  return function (text) {
    output.innerHTML += text + '\n';
  };
}

function formatMoney(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  parts.join(".");
  var num = parts.toString();
  num = "$" + num;
  return num;
}
