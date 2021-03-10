// Lab 11: Conditionals
// Author: Aimee Castellon
// Created: March 9, 2021
// License: Public Domain

//Create a function sortingHat()
//that takes a string as an argument: function sortingHat(str)
function sortingHat(name){
  //counts the letters in str and assigns it to a variable len
  var len = name.length;
  console.log("length of name:", len);

  //uses modulus (% operator) to get the remainder with 4: mod = len % 4;
  var mod = len % 4;
  console.log("mod", mod);

  //mod will now be a value between 0 and 3
  if (mod == 0){
      //create a conditional that will return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff depending on whether the value of mod is 0, 1, 2, or 3
    return("Gryffindor");
  } else if (mod == 1){
      return("Ravenclaw");
  } else if (mod == 2){
      return("Slytherin");
  } else {
      return("Hufflepuff");
  }
}
//locate button
//var buttonEl = document.getElementById("button");
var name = document.getElementById("text");
//outputEl

//sorting house
var sortHouse = sortingHat(name);
console.log(sortingHouse);
//Create an event listener attached to #button
//that gets the value of #input and assigns it to a variable name
//runs sortingHat(name) and stores the result in a variable house
//appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
var buttonEl = document.getElementById("button");

buttonEl.addEventListener("click", function(){
  //input
  var name = document.getElementById("input").value;
  console.log("name", );
  var house = sortingHat(name);
  newText = "<p> You are now an exlusive member of: </p>" + house;
  document.getElementById("output").innerHTML = newText;
})
