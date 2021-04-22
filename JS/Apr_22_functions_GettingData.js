/*
This one goes deeper into functions. Specifically, it:
    1. Gets data from the user;
    2. Works on the data, doing some calculations
    3. Gives back the results 
*/


function addDelivery(goodsTotal)
{
    var ordTotal; 
    goodsTotal = prompt("What is the Grand Total of your order?");
    goodsTotal = parseInt(goodsTotal);

    if (goodsTotal >= 100) 
    {
        ordTotal = goodsTotal;
    }
    else if (goodsTotal < 50.01) 
    {
        ordTotal = goodsTotal + 5;
    }
    else
    {
        ordTotal = goodsTotal + 5 + (.03 * (goodsTotal - 50));
    }

    console.log(ordTotal);
}

addDelivery();