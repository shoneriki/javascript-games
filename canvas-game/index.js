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
// shoot
  // x, y

    //velocity
      // x velocity, y velocity
        // get angle
          // put in atan
          // get x and y velocities


class Laser {
  constructor(x, y, radius, color, velocity) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.velocity = velocity
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
  }

  update() {
    this.draw()
    this.x = this.x + this.velocity.x
    this.y = this.y + this.velocity.y
  }
}

class Enemy {
  constructor(x, y, radius, color, velocity) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.velocity = velocity
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
  }

  update() {
    this.draw()
    this.x = this.x + this.velocity.x
    this.y = this.y + this.velocity.y
  }
}


const x = canvas.width / 2
const y = canvas.height / 2

const player = new Player(x, y, 30, 'purple')
const lasers = []
const enemies = []

function spawnEnemies() {
  setInterval(() => {
    const x = 100
    const y = 100
    const radius = 30
    const color = 'green'

    const angle = Math.atan2(
    canvas.height / 2 - y,
    canvas.width / 2 - x
  )
  const velocity = {
    x: Math.cos(angle),
    y: Math.sin(angle)
  }
    enemies.push(new Enemy(x, y, radius, color, velocity));
  }, 1000)
}


function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)
  player.draw()
  lasers.forEach(laser =>{
    laser.update()
  })
  enemies.forEach(enemy => {
    enemy.update()
  })
}

const laser = new Laser(
    canvas.width / 2,
    canvas.height / 2,
    5,
    'red',
    {
      x: 1,
      y: 1
    }
  )



addEventListener('click', (event) => {
  const angle = Math.atan2(
    event.clientY - canvas.height / 2,
    event.clientX - canvas.width / 2
  )
  const velocity = {
    x: Math.cos(angle),
    y: Math.sin(angle)
  }
    lasers.push(new Laser(
      canvas.width / 2, canvas.height / 2, 5, 'red',
      velocity
    ))
})

animate()
spawnEnemies()



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
