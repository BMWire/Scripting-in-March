/*
It covers:
    If Statements.
    Nested Ifs
*/

//Normal Ifs
var popeHome = prompt("What is the home city of the pope?");
if (popeHome === "Vatican") 
{
    alert("Correct");    
}
else
{
    alert("Enda soma World History.");
}

// Nessted Ifs
if (c === d)
{
    if (x === y) 
    {
    g = h;
    } // If c = d AND x = y; g = h.
    else if (a === b) 
    {
    g = h;
    } // If c = d AND a = b; g = h.
    else {
    e = f;
    } //Otherwise, e = f. Otherwise ya x != y or a != b.
    }
    else {
    e = f;
    // Otherwise ya c != d
}

if ((x === y || a === b) && c === d) // If x = y, OR a = b AND c = d; g = h. Otherwise, e = f. 
{
    g = h;
}
else 
{
    e = f;
}
