/*
This one contains:
    1. Methods that work on Objects.
*/
var planOne = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10,
};

planOne.discountedMonths = [6, 7];

d = new Date();
currentMonth = d.getMonth();

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthString = months[currentMonth];

var monthHTML = document.getElementById("monthString");
monthHTML.innerHTML = monthString;

function priceCalc()
{
    for (let i = 0; i < planOne.discountedMonths.length; i++) 
    {
        var setMonth = planOne.discountedMonths[i];
        if (setMonth === currentMonth) 
        {
            var monthlyPrice = Math.round((planOne.price * .8));
            
            //Test to see if it works            
            console.log(monthlyPrice);

            var monthlyPriceHTML = document.getElementById("monthlyPrice");
            var monthlyValue =  document.createTextNode(monthlyPrice);
            monthlyPriceHTML.appendChild(monthlyValue);
        } else
        {
            monthlyPrice = planOne.price;

            //Test to see if it works
            console.log(monthlyPrice);
            
            var monthlyPriceHTML = document.getElementById("monthlyPrice");
            var monthlyValue =  document.createTextNode(monthlyPrice);
            monthlyPriceHTML.appendChild(monthlyValue);
        }
    }
    var annualPrice = monthlyPrice*12;
    //Test to see if it works
    console.log(annualPrice);

    var annualPriceHTML = document.getElementById("annualPrice");
    var annualValue = document.createTextNode(annualPrice);
    
    annualPriceHTML.appendChild(annualValue);
    return annualPrice;
}

var answer = priceCalc(); 