// Lab 16: Libraries & Intro to jQuery
// Author: Aimee Castellon
// Created: March 24, 2021
// License: Public Domain

//Using jQuery, do the following:
//Create a <button> element (in jQuery, NOT In your HTML).
//Give it a text label
//Add it to your output div
//Add a click event to it that will bring up an alert
//Restyle the button with jQuery so it is a pleasant green.

  var myButton = $("<button>");
  myButton.html("Press me");
  $("#output").append(myButton);
  $("h3").click(function(){
    alert("Thanks for the press.");
  });
