// Add a title attribute

let imp = document.querySelectorAll('.important');
for (let i = 0; i < imp.length; i++) {
imp[i].setAttribute('title', 'This is an important item'); 
}

// display none on images that aren't important

let image = document.querySelectorAll('img');
for (const child of image) {
if (child.className !== 'important') {
    child.style.display = 'none';
}
};


// Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well
// Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.

// random color function 

function randColor(){
    function rand(){
        return Math.floor(Math.random() * 256);
    }
    let x = rand();
    let y = rand();
    let z = rand();
    let mycolor = `rgb(${x}, ${y}, ${z})`;
    return mycolor;
}

let paragraph = document.querySelectorAll('p');
for (const pChild of paragraph){
    console.log(pChild.innerText);
    if (pChild.className) {
        console.log('class: ' + pChild.className);
    } else {
        pChild.style.color = randColor();
    }
}