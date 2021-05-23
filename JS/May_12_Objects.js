/*
    This one contains Objects:
        1. Their creation
        2. Their manipulation
*/

var plan1 = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10
};

plan1.discountedMonths = [6, 7, 12];
console.log(plan1.discountedMonths[0]);

const propertyExists = "space" in plan1;
console.log(propertyExists);