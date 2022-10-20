const container = document.querySelector('.container');
// const childdiv = document.querySelectorAll('.childdiv');
const width = 500/64;
const height = 500/64;
let isToggle = false;

for(let i=0; i<64; i++){
  for(let j=0; j<64; j++){
    const div = document.createElement('div');
    div.setAttribute('style', `width:${width}px;height:${height}px;`)
    div.classList.add('childdiv');
    container.appendChild(div);
}
}