/*
This covers:
    Changing case
*/

var i;
var cityToCheck = prompt("Enter the cleanest city");
cityToCheck = cityToCheck.toLowerCase();

var cleanestCities = ["toronto", "kigali", "arusha", "bujumbura", "turkana", "nairobi"];
// cleanestCities = cleanestCities.toLowerCase();
for (i = 0; i < cleanestCities.length; i++) 
{
    if (cityToCheck == cleanestCities[i]) 
    {
        alert("I told you. Nairobi is one of the cleanest cities in the World!");    
    }    
    
}

alert(cleanestCities);
