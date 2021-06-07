
const navClick = document.querySelectorAll('nav a');
navClick.forEach((item) => {
  item.addEventListener('click', (event) => {
  console.log(`clicked`)
  event.target.style.backgroundColor = 'purple'
  })
});

const contentText = document.querySelector('.text-content p');
contentText.addEventListener('dblclick', (event) => {
  event.target.style.fontSize = '5rem'
  console.log(`${event.target} was double clicked`)
});

const copyAttempt = document.querySelector('body');
copyAttempt.addEventListener('copy', (event) => {
  console.log('copy action initiated')
});

document.addEventListener('paste', (event) => {
  console.log(`paste was initiated at the ${event.target} location`)
});


document.addEventListener('selectstart', (event) => {
  console.log('Selection started');
  event.target.style.backgroundColor = 'blue'
});


const mouser = document.querySelector('img');
mouser.addEventListener('mouseover', hoverOver);

function hoverOver() {
	mouser.src = "https://www.slashfilm.com/wp/wp-content/images/bttf-hoverboard-ad.jpg";
	console.log(`I am hovering in the future on a Hover Board`)
};

const scrollOver = document.querySelector('body');
document.addEventListener('mousewheel', (event) => {
	event.target.style.color = 'pink';
  event.target.style.font = '3rem'
  event.target.style.fontStyle = 'Italic'
  event.target.style.fontWeight = 'Bold'
  
});

const controller = new AbortController();
const signal = controller.signal;

signal.addEventListener('abort', function() {
 console.log('Mission Control, Abort');
});

document.addEventListener ('mouseover', event => {
  console.log("x: ", event.x)
  console.log("y: ", event.y)
});

document.addEventListener('cut', (event) => {
  console.log('cut this snippit')
});

