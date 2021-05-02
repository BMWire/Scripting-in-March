/*
In this one;
    We get to target elements and manipulate them using their tag names
*/


function changePFont()
{
    var theTag= document.getElementsByTagName("p");
    for (let i = 0; i < theTag.length; i++) 
    {
        const currentP = theTag[i];
        currentP.style.fontFamily = "Arial, Helvetica, sans-serif";
    }
}
