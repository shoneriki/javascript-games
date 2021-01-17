// select (game?), block, hole, bird
var block = document.getElementById("block");
var hole = document.getElementById("hole");
var transparent = document.getElement

hole.addEventListener('animationiteration', () => {
  // hole random heights
  var random = -((Math.random()*300)+150);
  hole.style.top = random + "px";
});

// bird jumps
// if bird goes through hole logic
// timer? score?
// if bird hits block edge, game stops
//  game stops
//  you lose
