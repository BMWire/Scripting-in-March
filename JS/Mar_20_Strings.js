/*
This covers:
    Strings - Finding segments

*/

var bigText = "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magic precisely because he is just enough like them to grasp their minds and motives in ways they cannot grasp his.";

var i;
for (i = 0; i < bigText.length; i++) 
{
    if (bigText.slice(i, i+12) === "World War II") //Runs through bigText and looks for any 11 character sequence that is equivalent to "World War II".
    {
        bigText = bigText.slice(0, i) + "the Second World War" + bigText.slice(i + 12); //Adds the text before the 11 character sequence to what we want to change and the rest of the bigText
    }
    
}
alert(bigText);