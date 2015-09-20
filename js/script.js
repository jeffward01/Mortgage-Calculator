//Varibles
var mortgageAmount = getById('mAmount');
var mortgageAmountOutput = logger('mAmount');
var calc = getById('calculateBtn');
var years = +document.getElementById('mPeriod').value;
var months = years * 12;







//Event Listeners
$('#calculateBtn').on('click', test);
$("input[name=interestInterval]:radio").change(function () {
  var intPer = parseInt($('input[name="interestInterval"]:checked').val());
  var button = document.getElementById('calculateBtn');
  if (button.disabled === true) {

    test();

  }
});

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


  //Grab Radio input/value
  var intPer = parseInt($('input[name="interestInterval"]:checked').val());


  //---------Begin Math-----------



  var M; //monthly mortgage payment
  var P = totalMort; //principle / initial amount borrowed
  var I = intRate / 100 / 12; //monthly interest rate
  var N = years * 12; //number of payments months

  //monthly mortgage payment
  M = monthlyPayment(P, N, I, intPer);
  parseInt(M);
  Math.floor(M);
  //  alert("Your monthly Payment is: " + M);
  var ans = formatMoneyPayment(M);
  //  alert("Your Answer is: " + ans);
  //remove , from ans after format and replace with .
  document.getElementById('monthPayments').innerHTML = years + " years of payments" + '<br>' + N + " monthly payments of " + ans;
}

//Calculate Monthly Payment
function monthlyPayment(p, n, i, interestInterval) {
  var longAnswer;
  longAnswer = p * i * (Math.pow(1 + i, n * interestInterval)) / (Math.pow(1 + i, n * interestInterval) - 1);
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


//Populate Principle and add commas while typing
$('#mAmount').keyup(function (event) {
  // skip for arrow keys
  if (event.which >= 37 && event.which <= 40) return;

  // format number
  $(this).val(function (index, value) {
    return value
      .replace(/[^0-9$.]/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  });
});

//add % while typing
//Need to add delay
//$('#intRate').keyup(function (event) {
//  // skip for arrow keys
//  if (event.which >= 37 && event.which <= 40) return;
//
//  // format number
//  $(this).val(function (index, value) {
//    return value
//      .replace(/[^0-9%$.]/g, "")
//      .replace(/$/g, "%");
//  });
//});

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
  //Set decimal point If number is 5 digit number (XXX.XX)
  //  if (num.length === 6) {
  //    num = num.replace(",", ".");
  //  }
  //Set last decimal point if number is greater than a 5 digit number (X,XXX.XX)
  num = "$" + num;
  return num;
}

function formatMoneyPayment(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  parts.join(".");
  var num = parts.toString();
  //Set decimal point If number is 5 digit number (XXX.XX)
  if (num.length <= 6) {
    num = num.replace(",", ".");
  }
  //Set last decimal point if number is greater than a 5 digit number (X,XXX.XX)
  if (num.length > 6) {
    var str = num,
      replacement = '.';
    str = str.replace(/,([^,]*)$/, replacement + '$1');
    num = str;
  }
  num = "$" + num;
  return num;
}





//Notes:
// add % to end of percentage (add a delay)
//Add a $ to beginning of Mortgage Principle input box while typing
//Fix Math for radio buttons
