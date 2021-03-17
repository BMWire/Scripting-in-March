/*
This covers:
    Arrays
        Creation
        Removing elements (pop, shift, splice)
        Inserting (push, unshift, splice)
        Extracting elements (slice)

*/

//Array creation
var fruits = ["Mango", "Lemon", "Apple", "Pineapple", "Peach"];

console.log("The pope's favourite fruit is:" + " " + fruits[3]);

//Removal of elements
fruits.pop(); //At the end
console.log(fruits[4]);

fruits.shift(); // At the start
console.log(fruits);

//Inserting elements
fruits.push("Citrus", "Avocado"); //At the end
console.log(fruits);

fruits.unshift("Mango", "Mapera"); //At the start
console.log(fruits);

fruits.splice(3,0, "chungwa", "embe"); //Starting from after position 2 and removing 0 elements
console.log(fruits);

var favoriteFruits = fruits.slice(2,6);
console.log(favoriteFruits);

fruits,slice(0,5);
console.log(fruits);