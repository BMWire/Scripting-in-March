/*
This one contains:
    1. targetting elements in the DOM using the names of their parents or their number in the family hierarchy.
    2. finding out the attributes of nodes and manipulating those.
    3. adding new node to the DOM
*/
//Finding nodes in the DOM using their number in the family hierarchy
let newP = '';
var parentDiv = document.getElementById('motherDiv');
var firstKid = parentDiv.childNodes[0];
var midChild = firstKid.nextSibling;
var lastKid = parentDiv.lastChild;


newP += '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit numquam nisi libero magnam mollitia. Aliquid possimus fuga placeat voluptas! Itaque quae reprehenderit praesentium cupiditate saepe omnis error iusto, animi repudiandae.</p>';

midChild.innerHTML = newP;

console.log(midChild);
console.log(parentDiv.childNodes);

console.log(parentDiv.nodeValue);

//Finding the attributes of nodes in the DOM and manipulating them.
var classAvail = midChild.hasAttribute('class');

if (classAvail === 'true')
{
    console.log('Great codemanship! Good job.');    
}
else
{
    midChild.setAttribute('class', 'embedded');
    console.log(midChild.getAttribute('class'));
}

//Adding a new node to the DOM
var lastPar = document.createElement('p');
lastKid.appendChild(lastPar);
lastPar.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis velit id earum laboriosam rerum nihil beatae sint neque eaque. Voluptas repudiandae neque, facere ut dolor voluptates soluta odio laboriosam similique laborum sunt fugit, placeat maxime. Ullam perspiciatis debitis facere possimus!';
