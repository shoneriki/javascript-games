const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

// create player
  //color
  //size
class Player {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
  }
}

const x = canvas.width / 2
const y = canvas.height / 2

const player = new Player(x, y, 30, 'purple')

player.draw()

console.log(player)


// shoot
// create enemies
// detect hit/ hit by bullet
// detect hit on player
// remove projectiles that are off-screen
// color game
// shrink enemies when hit
// create explosion for enemy when it dies
// add score
// add game over ui
// restart button
// start game button
