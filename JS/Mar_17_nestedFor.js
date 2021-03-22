/*
This covers:
    Nested for Loops
*/
var i, j;
var baseJuice = ["Mango", "Passion", "Pineapple", "Lemon"];
var tasteJuice = ["Mint", "Beetroot", "Cocktail", "Orange"];
var perfectCollab = [];

for (i = 0; i < baseJuice.length; i++) //Works like the hour hand of a clock
{
    for (j = 0; j < tasteJuice.length; j++) //Works like the minute hand of a clock.
    {
        perfectCollab.push(baseJuice[i] + tasteJuice[j]);
    }    
}


console.log(perfectCollab);
