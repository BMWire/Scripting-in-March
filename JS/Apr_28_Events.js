/*
This one contains:
    Inline Event Handlers - In the HTML Document
*/
//Learnt onFocus and onBlur - Fields
//Learnt getElementById - Getting data from fields 
//Learnt .innerHTML - Giving data to the DOM elements

function checkAddress(fieldId)
{
    var val = document.getElementById(fieldId).value;

    if (val === "")
    {
        alert("The email address you entered is invalid");
    }
}

var par = document.getElementById('writeTry');
par.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ducimus sed tenetur dignissimos non fuga, laudantium consequuntur atque adipisci quo!"