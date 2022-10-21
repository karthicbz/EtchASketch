const container = document.querySelector('.container');
// const childdiv = document.querySelectorAll('.childdiv');
const pickColor = document.querySelector('#pickColor');
const colorButton = document.querySelector('.colorButton');
const clearButton = document.querySelector('.clearButton');
let childdiv;

let color = pickColor.value;
const width = 500/64;
const height = 500/64;
let isToggle = false;

colorButton.addEventListener('click', (e)=>{
  pickColor.click();
  pickColor.addEventListener('change', (e)=>{
    color = pickColor.value;
  });
});

// pickColor.addEventListener('change', (e)=>{
//     // console.log(pickColor.value);
//     color = pickColor.value;
// });
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
      e.target.style.backgroundColor = `${color}`;
    }
    e.target.addEventListener('mouseup', mouseUp);
    // console.log(e);
  }));
}

makeSketchPad();
mouseMovement();