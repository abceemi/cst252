// Lab 9: JavaScript for the Web
// Author: Aimee Castellon
// Created: March 2, 2021
// License: Public Domain

//Use getElementById() to find your output <div> and assign it to a variable outputEl
var targetel=
document.getElementById("output");
//Create a new element with document.createElement("p") and assign it to a variable new1El
var new1El =
document.createElement("button");
//Change the html attribute of new1El to say something new.
var new1El.inner.HTML = ("I am a button");
//Create another new element and assign it to a variable new2El
var new2El =
document.createElement("newbutton")
//Change the html attribute of new2El to say something else.
var new2El.inner.HTML = ("I am a new button");
//Append both new elements one at a time using appendChild()
targetEl.appendChild(new1El);
targetEl.appendChild(new2El);
//Change the css attributes of at least two elements of your page
new1El.style.backgroundColor = pink;
newEl.style.Color = green;
