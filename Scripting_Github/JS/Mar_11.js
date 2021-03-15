/*
It covers :
    string concantenation
    Prompts
*/


//1. String concantenation

var mainMessage = "Welcome to this website, ";
var userName = "Barry";

console.log(mainMessage + userName);
document.write(mainMessage + userName + '<br>');

//2. Window prompts
//Task 1
var question = "How are you?";
var normalAnswer = "I am fine!";

var greeting = prompt(question, normalAnswer);

document.write(greeting);

//Task 2
var catQuestion = "How many cats do you want?";
var tooManyCats = window.prompt(catQuestion + 1);

document.write(tooManyCats);
