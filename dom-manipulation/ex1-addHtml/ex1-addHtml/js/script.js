//example
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

//ex1 - a <p> with red text that says “Hey I’m red!”
const p = document.createElement('p');
p.classList.add('p');
p.style.color = "red";
p.textContent = "Hey I'm red!";
container.appendChild(p);

//ex2 - an <h3> with blue text that says “I’m a blue h3!”
const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";
container.appendChild(h3);

/*
ex3 - a <div> with a black border and pink background color with the 
following elements inside of it:
- another <h1> that says “I’m in a div” 
- a <p> that says “ME TOO!”
*/    
const divBlack = document.createElement('div');
divBlack.classList.add("divBlack");
divBlack.style.cssText = "border: 1px solid Black; background: Pink";

const h1B = document.createElement('h1');
h1B.classList.add('h1');
h1B.textContent = "I'm in a Div";
divBlack.appendChild(h1B);

const pB = document.createElement('p');
pB.classList.add('p');
pB.textContent = "ME TOO!";
divBlack.appendChild(pB);

container.appendChild(divBlack);
