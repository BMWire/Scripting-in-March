/*
This covers:
    for Loops intro
    Flags, Booleans;
    Array Length,
    Loopus Interuptus
*/

// for Loops intro
var i;
var cityToCheck = "Toronto";

var cleanestCities = ["Nairobi", "Bujumbura", /* "Pretoria" */ "Toronto", "Connecticut", "New York"];

var matchFound = "No"; //Flag

for ( i = 0; i < cleanestCities.length; i++)
{
    if (cityToCheck === cleanestCities[i]) 
    {
        matchFound = "Yes";
        console.log("Your city is among the five cleanest in the world!"); 
        
        break; //Loopus interuptus. It cuts the looping immediately the element being sought has been found.
    }
    // else
    // {
    //     console.log("I am sorry. Your city could do a bit better at trash collection and recycling.");
    // }
}
if (matchFound === "No") 
{
    console.log("I am sorry. Your city should do a bit better at trash collection and recycling");
}
//Array Length
console.log(cleanestCities.length);

