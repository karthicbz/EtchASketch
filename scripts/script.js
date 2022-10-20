const container = document.querySelector('.container');
// const childdiv = document.querySelectorAll('.childdiv');
const colorPicker = document.querySelector('.colorPicker');
let color = 'black';
const width = 500/64;
const height = 500/64;
let isToggle = false;

colorPicker.addEventListener('click', (e)=>{
    color = prompt('enter the color name'); 
});

for(let i=0; i<64; i++){
  for(let j=0; j<64; j++){
    const div = document.createElement('div');
    div.setAttribute('style', `width:${width}px;height:${height}px;`)
    div.classList.add('childdiv');
    container.appendChild(div);
}
}

const childdiv = document.querySelectorAll('.childdiv');

function mouseDown(){
  isToggle = true;
}

function mouseUp(){
  isToggle = false;
}


childdiv.forEach(div=>div.addEventListener('mouseenter', (e)=>{
  e.target.addEventListener('mousedown', mouseDown);
  if(isToggle){
    // e.target.classList.add('style');
    e.target.style.backgroundColor = `${color}`;
  }
  e.target.addEventListener('mouseup', mouseUp);
  // console.log(e);
}));