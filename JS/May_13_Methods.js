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

var months

function priceCalc()
{
    for (let i = 0; i < discountedMonths.length; i++) 
    {
        const setMonth = discountedMonths[i];
        if (setMonth === currentMonth) 
        {
            var monthlyPrice = (planOne.price * .8);
        } else
        {
            monthlyPrice = planOne.price;
        }
    }
    var annualPrice = monthlyPrice*12;

    return annualPrice;
}