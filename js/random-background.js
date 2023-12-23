var color =[
    "red",
    "blue",
    "green",
    "purple",
    "orange",
    "yellow",
    "pink",
    "black",
    "white",
    "gray",
    "teal",
    "navy",
    "olive",
    "maroon",
    "lime",
    "aqua",
    "fuchsia",
    "silver",
    "gold",
]

var i=Math.floor(Math.random()*color.length);
const newDiv = document.createElement('div');
const button1 = document.createElement('button');
const button2 = document.createElement('button');
const button3 = document.createElement('button');
const button4 = document.createElement('button');

function bg(){
document.body.style.backgroundColor='white';
var options =[color[i],color[Math.floor(Math.random()*color.length)],color[Math.floor(Math.random()*color.length)],color[Math.floor(Math.random()*color.length)]];
var shuffle=options.sort( () => .5 - Math.random() );
var parent = document.querySelector("div");

if(parent!=null)
document.body.removeChild(parent);

const parentDiv = document.createElement('div');


button1.innerHTML=shuffle[0];
button2.innerHTML=shuffle[1];
button3.innerHTML=shuffle[3];
button4.innerHTML=shuffle[2];
newDiv.appendChild(button1);
newDiv.appendChild(button2);
newDiv.appendChild(button3);
newDiv.appendChild(button4);
parentDiv.appendChild(newDiv);
document.body.appendChild(parentDiv);

}

button1.addEventListener('click',setbgcolor);
button2.addEventListener('click',setbgcolor);
button3.addEventListener('click',setbgcolor);
button4.addEventListener('click',setbgcolor);

function setbgcolor()
{
	document.body.style.backgroundColor=color[i];
	console.log(color[i]);
	i=Math.floor(Math.random()*color.length);
}