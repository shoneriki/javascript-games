const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 900;
canvas.height = 600;

// global variables
const cellSize = 100;
const cellGap = 3;
const gameGrid = [];
// game board
const controlsBar = {
  width: canvas.width,
  height: cellSize,
}
// projectiles
// defenders
// enemies
// resources
// utilities
function animate(){
  ctx.fillStyle= 'blue';
  ctx.fillRect(0,0, controlsBar.width, controlsBar.height);
  requestAnimationFrame(animate);
}
animate();

// enemies die when hit with certain about of projectiles
// enemies approaches
// enemies kill defender logic
// click on defender icon to spawn them on field
// shoot projectiles from defender
// gaining resources
