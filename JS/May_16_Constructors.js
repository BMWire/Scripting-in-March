/*
This one is about learning constructors
    Constructors do exactly as their names suggest - they are functions that construct methods.
*/

//Plain Constructors for the plain methods
function Plan(name, price, space, transfer, pages)
{
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
    this.calcAnnual = function(discPercent)
    {
        var monthPrice = this.price;

        var currDate = new Date()
        var currMonth = currDate.getMonth();
        
        for (let i = 0; i < this.discountMonths.length; i++) 
        {
            if (this.discountMonths[i] === currMonth) 
            {
                monthPrice = Math.round(monthPrice * discPercent);
                var goodMessage = "Such luck lad. You got a discount just because you signed up this month.";

                var infoPar = document.getElementById("infoPar");
                var goodMess = document.createTextNode(goodMessage);
                infoPar.appendChild(goodMess);  
            }else
            {
                monthPrice = this.price;

                var poorMessage = "Tough luck lad. You did not qualify for the discount this time. It's definitely not you, it's the month you came by.";

                var poorMess = document.createTextNode(poorMessage);
                infoPar.appendChild(poorMess);
            }

            var yearPrice = monthPrice * 12;
        }
    }
}

var planBasic = new Plan("Basic", 3.99, 100, 1000, 10);
planBasic.discountMonths = [5, 7];
var planProfessional = new Plan("Professional", 5.99, 500, 5000, 50);
var planUltimate = new Plan("Ultimate", 9.99, 2000, 20000, 500);
