/*
This contains:
    A better way of finding strings and replacing them with others.
    string.
    indexOf
*/

var bigText = "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magic precisely because he is just enough like them to grasp their minds and motives in ways they cannot grasp his.";
document.write(bigText);

var majorNumber = bigText.indexOf("World War II");
for (let i = 0; i < bigText.length; i++) 
{
    if (majorNumber !== -1) 
    {
        bigText = bigText.slice(0, majorNumber) + "the Second World War" + bigText.slice(majorNumber + 12);
    }
    
}
document.write(bigText);
