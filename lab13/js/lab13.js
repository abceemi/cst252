// Lab 12: Loops
// Author: Aimee Castellon
// Created: March 9, 2021
// License: Public Domain

//Create a "FizzBuzz" function similar to how we did in class.
function fizzeBuzz(){
  for (var i=1; i<200; i++){ //Loop through numbers 1 to 200, listing them as you go
    //multiple of 5&7
    if (i % 35 == 0){
      console.log("Fizz Buzz!");
        //multiple of 5
        } else if (i % 5 == 0){
          console.log("Buzz!");
        //multiple of 7
        } else if (i % 7 == 0){
          console.log("Boom!");
        }
      //multiple of 3&7
      if (i % 21 == 0){
      console.log("Fizz Boom!");
            //multiple of 3
          } else if (i % 3 == 0){
            console.log("Fizz!");
    //incase none work
    } else {
      console.log(i);

    } //closes for statement

} //closes for function


//Make it so the output of your program appears in your output div.

function results(str){
  str += "Fizz";
  var newEl = document.createElement("p");
  newEl.innerHTML = str;
  document.getElementById("output").appendChild(newEl);
}
