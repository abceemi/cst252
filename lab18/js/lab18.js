// Lab 18: Libraries and Frameworks 1
// Author: Aimee Castellon
// Created: April 10, 2021
// License: Public Domain

//Using jQuery, do the following:
//Add a click event to each button
//In the event code, toggle a new class within the div
//Go into your css and style each of the classes
//Test each button

$("#button").click(function(){
  $("#button").toggleClass("now")
  var input = $("#inputText").val();
  $("#output").html(input);
});

$("#button2").click(function(){
  $("#button2").toggleClass("now2")
  var input = $("#inputText").val();
  $("#output2").html(input2);
});
