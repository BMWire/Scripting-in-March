/*
This contains:
    Math.x functions
        Math.round
        Math.ceil(Forcefully rounds the number to the upper limit)
        Math.floor(Forcefully rounds the number to the lower limit)
        Math.random 
*/
var sizeKenya = 544899.456;
alert("The average size of the African country of Kenya is:" + Math.round(sizeKenya));

//Generating random numbers between 1 and 8
var numberOfStars;


for (let i = 1; i < 8; i++) 
{
    var bigDecimal = Math.random();
    var improvedNum = (bigDecimal * 8) + 1;
    var numberOfStars = Math.floor(improvedNum);    
    alert(numberOfStars);
}
var yourNum = prompt("How many stars do you think there are in Kenya?");
alert(numberOfStars);