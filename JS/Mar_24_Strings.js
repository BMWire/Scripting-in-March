/*
This contains:
    Finding a Character at a Location
*/
var mainWord = "Lovely";
var firstChar = mainWord.charAt(0);
var lastChar = mainWord.charAt(length - 1);

alert(mainWord + firstChar + lastChar);

//Looks for an exclamation mark
var seekWord = "I love my girl!!!";
for (let i = 0; i < seekWord.length; i++) {
    if (seekWord[i] === "!")
    {
        alert("Exclamation mark found!");
        break;    
    }
    
}