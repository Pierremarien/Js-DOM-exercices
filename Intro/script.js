console.log(document.title);
document.title = 'Modifying the DOM';
function rand(){
    return Math.floor(Math.random() * 256);
}
let x = rand();
let y = rand();
let z = rand();
console.log(x);
console.log(y);
console.log(z);
let mycolor = `rgb(${x}, ${y}, ${z})`;
function color() { 
document.body.style.backgroundColor = mycolor;
}

const myElement = document.body;
for (const child of myElement.children) {
  console.log(child.tagName);
}