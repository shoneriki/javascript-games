// select elements
const topLeft = document.querySelector(".top-left-panel");
const topRight = document.querySelector(".top-right-panel");
const bottomLeft = document.querySelector(".bottom-left-panel");
const bottomRight = document.querySelector(".bottom-right-panel");

const sequence =[
  topLeft,
  bottomRight,
  bottomLeft,
  topRight,
]

const flash = (panel) => {
  return new Promise((resolve,reject) => {
    panel.className += ' active';
    setTimeout(() => {
      panel.className = panel.className.replace(
      ' active',
      ''
      );
      resolve();
    }, 1000)
  });
};

const main = async () => {
  for(const panel of sequence) {
    await flash(panel);
  }
};

main();
// game lose logic
// if you click wrong panel, game over

// counter for score?
// panel sequence mastery as score

// panel flashes every second in random sequence
// panels flash in same order with additional flashes added
// panel
