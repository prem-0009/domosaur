
const span1 = document.querySelector('.mess-with-me');
span1.style.fontSize = '3em'

span1.style.backgroundColor = 'green'

const hide1 = document.querySelector('#hide-me')
// document.querySelector('#hide-me').style.display = 'hidden';
hide1.style.display = 'none'

//change 1st image size to 324px wide
const firstDino = document.querySelector('#triceratops');
firstDino.style.width = '324px'

//event listener challenges

//1. when click, change span color to orange
const changeColorToOrange = function(){
    span1.style.color = 'orange';
}

span1.addEventListener('click',changeColorToOrange);

//2. first dinosaur gets red border
const getRedBorder = function(){
    firstDino.style.border = '1px solid red'
}

firstDino.addEventListener('click', getRedBorder)

//3. feather dinosaur becomes 50% transparent- on click
const featherDino = document.querySelector('#feathers');

const featherDinoBecomesTrasnparent = function(){
    featherDino.style.opacity = '50%'
}

featherDino.addEventListener('click', featherDinoBecomesTrasnparent);

//4. background color becomes teal on rows of dinosaur on click
const rowOfDino = document.querySelector('#row');

const backgroundBecomesTeal = function(){
    rowOfDino.style.backgroundColor = 'teal'
}

rowOfDino.addEventListener('click', backgroundBecomesTeal)

//when hovered image size changes to 200px
const  biggifyImage= document.querySelector('#biggify');

const changeSizeIfHovered = function(){
    biggifyImage.style.width = '200px';
}

biggifyImage.addEventListener('mouseover', changeSizeIfHovered)