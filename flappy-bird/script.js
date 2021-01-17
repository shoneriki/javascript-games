// select (game?), block, hole, bird
var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;

hole.addEventListener('animationiteration', () => {
  // hole random heights
  var random = Math.random() * 3;
  var top = (random*100)+150;
  hole.style.top = -(top) + "px";
});
setInterval(function(){
  // get top of character/bird
  var characterTop =
  parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  if(jumping==0){
    // bird falls when nothing is pressed
    character.style.top = (characterTop +3) + "px";
  }

}, 10);


// bird jumps
// if bird goes through hole logic
// timer? score?
// game over/you lose
  // if bird hits block edge
  // if bird hits ground
