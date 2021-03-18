/*
This covers:
    Changing case
*/

var i;
var cityToCheck = "Nairobi";
cityToCheck = cityToCheck.toLowerCase();

var cleanestCities = ["Toronto", "Kigali", "Arusha", "Bujumbura", "Turkana", "Nairobi"];
cleanestCities = cleanestCities.toLowerCase();
for (i = 0; i < cleanestCities.length; i++) 
{
    if (cityToCheck == cleanestCities[i]) 
    {
        console.log("I told you. Nairobi is one of the cleanest cities in the World!");    
    }    
    
}

console.log(cleanestCities);
