/*
    This one contains:
        1. Prototypes
*/

function Plan(name, price, space, transfer, pages, discountMonths)
{
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
    this.discountMonths = discountMonths;
}

Plan.prototype.calcAnnual = function(discountPercentage)
{
    var custPrice = this.price;

    var d = new Date();
    var currentMonth = d.getMonth();

    for (let i = 0; i < discountMonths.length; i++) 
    {
        if (currentMonth === discountMonths[i])
        {
            custPrice = this.price * discountPercentage;          
        }else
        {
            custPrice = custPrice;
        }         
    }
    var annPrice = custPrice * 12; 
    return annPrice;
};

var planBasic = new Plan("Basic", 3.99, 100, 1000, 10, [6, 7]);
var planPro = new Plan("Professional", 5.99, 500, 5000, 50, [6, 7, 12]);
var planUltimate = new Plan("Ultimate", 9.99, 2000, 20000, 500, [6, 7]);

planBasic.discountMonths = false;
var propertyPresent = "discountMonths" in planBasic;
console.log(propertyPresent);

