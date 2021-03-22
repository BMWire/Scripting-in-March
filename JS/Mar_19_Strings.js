/*
This covers:
    Strings: Measuring length
    String : Extracting parts
*/
var cityToCheck = prompt("Enter your home town:");

var firstChar = cityToCheck.slice(0,1);
var otherChars = cityToCheck.slice(1);

firstChar = firstChar.toUpperCase();
otherChars = otherChars.toLowerCase();

var cappedCity = firstChar + otherChars;

var cityAbsent = false;
var beautifulCities = ["London", "Moscow", "Nairobi", "Hong Kong", "Pretoria"];
for (let i = 0; i < beautifulCities.length; i++) 
{
    if (cappedCity === beautifulCities[i]) 
    {
        cityPresent = true;
        alert("Your home city is among the most beautiful ones in the world.");
    }
    
}
if (cityAbsent = false)
{
    alert("Your home city is not among the most beautiful ones.");
}


// console.log(firstChar);
// console.log(otherChars);

//=======================================
var month = prompt("Enter your birthday month");
if (month.length > 3)
{
    alert("The abbreviation of " + month + " is " + month.slice(0,3));    
}
