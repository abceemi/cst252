// lab6.js - Arrays and Objects
// Author: Aimee Castellon
// Created: February 16, 2021
// License: Public Domain


console.log("Arrays and Objects")


// Declare variables
myTransport = ["Mazda","BMW", "Mazda CX9", "My feet"];

myMainRide = {
 make: "Mazda",
 model : "Mazda3",
 color : "grey",
 year : 2016,
 extras : "5sitter, effective",
 age : function() { return 2016 - this.year;
 }
}


// Use document.writeln() to neatly output each of your variables,
document.writeln("Kinds of transportion I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
document.writeln("The age of my ", myMainRide.model, " is ", myMainRide.age(), " years.");
