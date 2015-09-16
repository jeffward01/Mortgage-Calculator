$(document).ready(function () {
  //Hide results container
  $('#results-container').hide();


  //reveal results container
  $("#calculateBtn").click(function () {
    $("#results-container").show("slow", function () {
      // Animation complete.
    });
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
