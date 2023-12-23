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

function bg(){
document.body.style.backgroundColor=color[Math.floor(Math.random()*color.length)];
}