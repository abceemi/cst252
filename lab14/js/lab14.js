// Lab 14: Javascript Classes and Objects
// Author: Aimee Castellon
// Created: March 24, 2021
// License: Public Domain

//Create a constructor for vehicles called Vehicle, including make, model, year, color, and extras.
function vehicle(make, model, year, color, extras) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.extras = extras;
  this.info = function(){  //add a method info()
    return this.color + "" + this.year + " " + this.make + " " + this.model + "with" + this.extras; //neatly returns a string with all that information
  }
}

//Instantiate objects with your constructor for every vehicle you've ever owned:
var vehicles =[];

vehicles.push(new Vehicle("Schwinn", "LeToure", 1974, "gold", "Brooks saddle"));
vehicles.push(new Vehicle("Mazda", "6", 2016, "grey", "runs well"));


outputEl = document.getElementById("output");
for (var i = 0; i<vehicles.length; i++){
  var newEl = document.createElement("li");
  newEl.innerText = vehicles[i].info();
  outputEl.appendChild(newEl);
}

//For each instantiated object, call your method info() and output the results to your output div. Here's a reminder:
// we add text (including <p> tags to the end of our output div


//document.getElementById("output").innerHTML += "<li>" + vehicle.info() + "</p>";
