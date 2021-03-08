// Lab 10: JavaScript Events and Forms
// Author: Aimee Castellon
// Created: March , 2021
// License: Public Domain

//Borrow the sort() function or my anagram() function from Lab 7.
function userNameSort(){
  // creates place to input name
   var userName = window.prompt("What is your name?");
   console.log ("userName =", userName);
   //splitts the letters of the inputted name
   var nameArray = userName.split('');
   //sorts them in alphabetical order?
   var nameArraySort = nameArray.sort();
   //console output
  console.log("nameArraySort =", nameArraySort);
   //array to string
   var nameSorted = nameArraySort.join('');
   //console output
   console.log("nameSorted =", nameSorted);
   //Output
   return nameSorted;
 }
//Outside of the function, call the function and output the results with document.write() to neatly output the user's sorted name.
document.write("Here is your Sorted Name:", userNameSort());


//Step 1 locate button
var buttonEl = document.getElementById("my-button");
console.log("button:", buttonEl);
//Step 2


//Attach an event listener to your button that does the following:
my-button document.addEventListener("click", function(){
  var name = inputEl.value;
  //var name = prompt("Type your name");
  titleEl.innerText = "Welcome," + name;
})
  //Gets the value of your input field
  //var user-name= inputEl.value;
  //var my-button = document.getElementById("myText")
//}
//Runs that value through your sort() or anagram() function and saves the results.

//Replaces the html in <div id=output> with the results.
