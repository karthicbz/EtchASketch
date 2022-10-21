const container = document.querySelector('.container');
// const childdiv = document.querySelectorAll('.childdiv');
const pickColor = document.querySelector('#pickColor');
const colorButton = document.querySelector('.colorButton');
const clearButton = document.querySelector('.clearButton');
const rainbowMode = document.querySelector('.rainbowMode');

let childdiv;

let color = pickColor.value;
const width = 500/64;
const height = 500/64;
let isToggle = false;
let randomColor = false;

colorButton.addEventListener('click', (e)=>{
  randomColor = false;
  pickColor.click();
  pickColor.addEventListener('change', (e)=>{
    color = pickColor.value;
  });
});

rainbowMode.addEventListener('click', (e)=>{
  randomColor = true;
  // while(colorMode){
  //   color = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
  // }
  
  console.log(color);
});

function makeSketchPad(){
  container.innerHTML = '';
  for(let i=0; i<64; i++){
    for(let j=0; j<64; j++){
      const div = document.createElement('div');
      div.setAttribute('style', `width:${width}px;height:${height}px;`)
      div.classList.add('childdiv');
      container.appendChild(div);
  }
  }
}

clearButton.addEventListener('click', (e)=>{
  makeSketchPad();
  // childdiv = document.querySelectorAll('.childdiv');
  mouseMovement();
});


function mouseMovement(){
  childdiv = document.querySelectorAll('.childdiv');

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
      if(randomColor){
        e.target.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
      }else{
        e.target.style.backgroundColor = `${color}`;
      }
    }
    e.target.addEventListener('mouseup', mouseUp);
    // console.log(e);
  }));
}

makeSketchPad();
mouseMovement();