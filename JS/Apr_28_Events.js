/*
This one contains:
    Inline Event Handlers - In the HTML Document
*/
//Learnt onFocus and onBlur - Fields
//Learnt getElementById - Getting data from fields 

function checkAddress(fieldId)
{
    var val = document.getElementById(fieldId).value;

    if (val === "")
    {
        alert("The email address you entered is invalid");
    }
}