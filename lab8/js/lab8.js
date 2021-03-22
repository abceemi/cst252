// Lab 8: Anon Functions and Callbacks
// Author: Aimee Castellon
// Created: February 28, 2021
// License: Public Domain

//Create an array of numbers and assign it to a variable.
//Create a named function that will take a single parameter, do a calculation on it (sqrt, sqr, addition, etc), and return the result.
function addition(x,y){
    var result = (x + y >= 1);
    return result;
}

//Test your function with a few different numbers.
console.log("Is 5+2 greater than or equal to 1?", addition(5,2));
console.log("Is 0+0 greater than or equal to 1?", addition(0,0));

// Use map on your array to apply your function to all the numbers in your array.
array = [10,2,3,5,6,0];
console.log("Original array", array);

//add array to document
//var newEl = document.createElement("p");
//newEl.innerHTML = " Original array:" + JSON.stringify(array);
//outputEl.appendChild(newEl);

//array.map(yourFunctionName);
var result = array.map(addition);
console.log("Test arrays:", result);

//Now use a new anonymous function with map to do some new operation on each of the numbers in your array.
var result = array.map(function(x,y){
    return result = x-y;

})
console.log("addition",result);
//new array results
document.write("addition",result);
