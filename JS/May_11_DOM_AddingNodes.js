/*
This one contains:
    1. Adding nodes to the DOM
    2. Adding nodes to the added nodes.
*/

var mainOne = document.getElementById("mainOne");
var cOne = mainOne.childNodes[0];
var cTwo = mainOne.childNodes[1];
var cThree = mainOne.childNodes[2];

var cTwoPar = document.createElement("p");
var cTwoText = document.createTextNode("Lorem ipsum dolor sit amet.");

cTwoPar.appendChild(cTwoText);

var mainBody = document.getElementsByTagName("body");
mainBody.setAttribute("background-color", "white");

//Second trial
var parentDiv = document.getElementById("div1");
var newParagraph = document.createElement("p");
var t = document.createTextNode("Hello world!");
newParagraph.appendChild(t);
parentDiv.appendChild(newParagraph);
console.log(t);