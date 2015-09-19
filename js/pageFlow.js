$(document).ready(function () {



  //Hide results container
  $('#results-container').hide();
  $('#calcCon').hide();


  //Header drop in on load and fade in calcCon
  $(document).ready(function () {
    var function1 = $('.page-header').hide(0).delay(100).slideDown(2000);
    function1.done($('#calcCon').hide(0).delay(2000).fadeIn(2000));
  });


  //reveal results container
  $("#calculateBtn").click(function () {
    //validation not working for some reason....
    if ($('#mAmount').val() == '' || $('#mPeriod').val() == '' || $('#intRate').val() == '') {
      alert("Fill in all inputs before Calculating!!");
    } else {

      $("#results-container").show("slow", function () {
        // Animation complete.
      });
    }
  });


  //Reset Screen
  $("#resetBtn").click(function () {
    $("#results-container").hide("slow", function () {
      // Animation complete.
    });
    //Reset input to blank
    $('#mAmount').val('');
    $('#mPeriod').val('');
    $('#intRate').val('');
    //Enable Button
    var button = document.getElementById('calculateBtn');
    enableButton(button);

  });


  //Button Handler (Prevents Double Submission without clicking the 'reset' button)
  $('#calculateBtn').on('click', function () {
    var button = document.getElementById('calculateBtn');
    disableButton(button);
    //toggleText not working for some reason...
    toggleText(button);


  }); //End on click



}); //End Ready


function disableButton(button) {
  if ($('#mAmount').val() == '' || $('#mPeriod').val() == '' || $('#intRate').val() == '') {
    return null;
  }
  button.disabled = true;
}

function enableButton(button) {
  button.disabled = false;
}

//Not working for some reason...
function toggleText(button_id) {
  document.getElementById(button_id).childNodes[0].nodeValue = 'Lock';
}
