const li = document.querySelector('ol');
const a = li.children[4];
li.prepend(a);

const section = document.querySelectorAll('section');
const titre = document.querySelectorAll('h2');

const b = titre[1];
const c = titre[2];
const d = section[1];
const e = section[2];
let title = Array.from(titre);
 
d.prepend(c);
e.prepend(b);

e.remove();