const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth
canvas.height = innerHeight

// => begin: create player
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
// => end player

// => begin: laser
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
// => end laser

//=> begin: create enemy
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

const player = new Player(x, y, 10, 'white')
const lasers = []


const enemies = []

function spawnEnemies() {
  setInterval(() => {
    const radius = Math.random() * (30 - 5) + 5

    let x
    let y

    if (Math.random() < 0.5) {
      x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius
      y = Math.random() * canvas.height
    } else {
      x = Math.random() * canvas.width
      y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius
    }
    const color = `hsl(${Math.random() * 360}, 50%, 50%)`

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
// => end create enemy

let animationId

function animate() {
  animationId = requestAnimationFrame(animate)
  c.fillStyle = 'rgba(0, 0, 0, 0.1)'
  c.fillRect(0, 0, canvas.width, canvas.height)
  player.draw()
  lasers.forEach((laser, index) =>{
    laser.update()

    // remove lasers from edge of screen
    if(
    laser.x + laser.radius < 0 ||
    laser.x - laser.radius > canvas.width ||
    laser.y + laser.radius < 0 ||
    laser.y - laser.radius > canvas.height
    ) {
      setTimeout(() => {
        lasers.splice(index, 1)
      }, 0)
    }
  })
  // detect hit/ hit by laser
  enemies.forEach((enemy, index) => {
    enemy.update()

    const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y)

    //when laser touches
    if (dist - enemy.radius - player.radius < 1) {
      cancelAnimationFrame(animationId)
    }

    lasers.forEach((laser, laserIndex) => {
      const dist = Math.hypot(laser.x - enemy.x, laser.y - enemy.y)

      if (dist - enemy.radius - laser.radius < 1) {

        if (enemy.radius > 10) {
          enemy.radius -= 10
          setTimeout(() => {
            lasers.splice(laserIndex, 1)
          }, 0)
        } else {
          setTimeout(() => {
            enemies.splice(index, 1)
            lasers.splice(laserIndex, 1)
          }, 0)
        }
      }
    })
  })
}

const laser = new Laser(
    canvas.width / 2,
    canvas.height / 2,
    5,
    'white',
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
    x: Math.cos(angle) * 4,
    y: Math.sin(angle) * 4
  }
    lasers.push(new Laser(
      canvas.width / 2, canvas.height / 2, 5, 'red',
      velocity
    ))
})

animate()
spawnEnemies()





// shrink enemies when hit
// create explosion for enemy when it dies
// add score
// add game over ui
// restart button
// start game button
