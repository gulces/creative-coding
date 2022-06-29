const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = ({ context, width, height }) => {
  const agents = [];

  for (let index = 0; index < 40; index++) {
    const x = random.range(0, width);
    const y = random.range(0, height);
    const dotSizes = [10, 20, 40];
    const radius = random.pick(dotSizes);
    // const radius = random.range(0, 40);

    agents.push(new Agent(x, y, radius))
  }

  return ({ context, width, height }) => {
    context.fillStyle = '#F8C632';
    context.fillRect(0, 0, width, height);

    agents.forEach(agent => {
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
