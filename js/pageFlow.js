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
  });

}); //End Ready
