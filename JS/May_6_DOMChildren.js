/*
This one contains:
    Identification and manipulation of DOM Children using the DOM structure and nodeType
*/

var div = document.getElementById('smallDiv');
var nodeCounter = 0;

for (let i = 0; i < div.childNodes.length; i++) 
{
    if (div.childNodes[i].nodeType === 1)
    {
        nodeCounter++;
        console.log(nodeType);    
    }
    else if (div.childNodes[i].nodeType === 8)
    {
        nodeCounter++;
        console.log(nodeType);
        break;   
    }
    console.log(nodeCounter);
}