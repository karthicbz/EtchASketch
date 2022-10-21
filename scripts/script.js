const container = document.querySelector('.container');
// const childdiv = document.querySelectorAll('.childdiv');
const pickColor = document.querySelector('#pickColor');
const colorButton = document.querySelector('.colorButton');
const clearButton = document.querySelector('.clearButton');
const rainbowMode = document.querySelector('.rainbowMode');
const pixelSize = document.querySelector('#pixelSize');
const pixelValue = document.querySelector('.pixelValue');

pixelValue.textContent = pixelSize.value+' px';
let pixel = pixelSize.value;

let childdiv;

let color = pickColor.value;
let isToggle = false;
let randomColor = false;

pixelSize.addEventListener('change', (e)=>{
  pixelValue.textContent = pixelSize.value+' px';
  pixel = Number(pixelSize.value);
  makeSketchPad(pixel);
  mouseMovement();
})

colorButton.addEventListener('click', (e)=>{
  randomColor = false;
  pickColor.click();
  pickColor.addEventListener('change', (e)=>{
    color = pickColor.value;
  });
});

rainbowMode.addEventListener('click', (e)=>{
  randomColor = true;
});

function makeSketchPad(pixel){
  container.innerHTML = '';
  for(let i=0; i<pixel; i++){
    for(let j=0; j<pixel; j++){
      const div = document.createElement('div');
      div.setAttribute('style', `width:${500/pixel}px;height:${500/pixel}px;`)
      div.classList.add('childdiv');
      container.appendChild(div);
  }
  }
}

clearButton.addEventListener('click', (e)=>{
  makeSketchPad(pixel);
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
      if(randomColor){
        e.target.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
      }else{
        e.target.style.backgroundColor = `${color}`;
      }
    }
    e.target.addEventListener('mouseup', mouseUp);
  }));
}

makeSketchPad(pixel);
mouseMovement();