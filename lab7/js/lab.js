// lab7.js - Functions
// Author: Aimee Castellon
// Created: February 16, 2021
// License: Public Domain


//Create a new function in your file, call it what you like, but choose wisely.
//In the function, declare a variable userName and use window.prompt() to get the user's name from the user. Here's some help.
//Sort the letters of the user's name and return those from the function. Hint: You can't sort strings, but you can sort arrays. Can you convert it back and forth?
function userNameSort(){
  // creates place to input name
   var userName = window.prompt("What is your mothers maiden name?");
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

document.write("Here is your Sorted Name:", userNameSort(), "</br>"," Now, what is your social security number?");
 
