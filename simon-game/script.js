// select elements
const topLeft = document.querySelector(".top-left-panel");
const topRight = document.querySelector(".top-right-panel");
const bottomLeft = document.querySelector(".bottom-left-panel");
const bottomRight = document.querySelector(".bottom-right-panel");

const getRandomPanel = () => {
  const panels = [
    topLeft,
    topRight,
    bottomLeft,
    bottomRight
  ];
  return panels[parseInt(Math.random() * panels.length)];
};

const sequence =[
  getRandomPanel(),
];
let sequenceToGuess = [...sequence];


// panel flashes every second in random sequence
const flash = panel => {
  return new Promise((resolve,reject) => {
    panel.className += ' active';
    setTimeout(() => {
      panel.className = panel.className.replace(
        ' active',
        ''
      );
      setTimeout(() => {
        resolve();
      })
    }, 1000);
  });
};

let canClick = false;
const panelClicked = panel => {
  if(!canClick) return;
  const expectedPanel = sequenceToGuess.shift();
  if (expectedPanel === panelClicked) {
    if(sequenceToGuess.length === 0) {
      // start new round
      }
  } else {
      // end game
    alert('game over');
  }
};


const main = async () => {
  for(const panel of sequence) {
    await flash(panel);
  }
  canClick = true;
};

main();
// game lose logic
// if you click wrong panel, game over

// counter for score?
// panel sequence mastery as score

// panels flash in same order with additional flashes added
// if correct panel clicked
