const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1440, 1152 ]
};

const sketch = ({ context, width, height }) => {
  const smallDotsLeft = [];
  const smallDotsCentre = [];
  const smallDotsRight = [];

  for (let index = 0; index < 400; index++) {
    for (let y = -10; y < height; y = y + 20) {
      for (let x = -64; x < 200; x = x + 20) {
        const radius = 6;
        smallDotsLeft.push(new Agent(x, y, radius))
        smallDotsCentre.push(new Agent(x + 640, y, radius))
        smallDotsRight.push(new Agent(x + 1280, y, radius))
      }
    }
  }

  return ({ context, width, height }) => {
    context.fillStyle = '#F8C632';
    context.fillRect(0, 0, width, height);

    smallDotsLeft.forEach(agent => {
      agent.draw(context);
    })

    smallDotsCentre.forEach(agent => {
      agent.draw(context);
    })

    smallDotsRight.forEach(agent => {
      agent.draw(context);
    })
  };
};

canvasSketch(sketch, settings);

// The keyword 'this' refers to the scope of this class. Line 27 means "the class Point has a property, 'x', that we're going to pass into the constructor method as a parameter.'

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

}

class Agent {
  constructor(x, y, radius) {
    this.position = new Point(x, y);
    this.radius = radius;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    context.fillStyle = 'black';
    context.fill();
  }
}
