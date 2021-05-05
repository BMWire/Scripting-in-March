/*
This contains: 
    DOM Manipulation
*/
var div = document.getElementById('mainDiv');
var par = div.getElementsByTagName('p');
var contents = par[0].innerHTML;

console.log(contents);

var othDiv = document.getElementById('subDiv');
var pTwo = othDiv.getElementsByTagName('p');
pTwo[0].innerHTML = contents;
