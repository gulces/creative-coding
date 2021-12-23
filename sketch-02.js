const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');
const Color = require('canvas-sketch-util/color');

const settings = {
  dimensions: [ 1080, 1080 ],
  animate: true,
  playbackRate: 'throttle',
  timeScale: 0.01,
  pixelated: true,
  totalFrames: 24,
  frame: 12
};

// const degToRad = (degrees) => {
//   return degrees / 180 * Math.PI;
// };

// const randomRange = (min, max) => {
//   return Math.random() * (max - min) + min;
// };


const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'pink';
    context.fillRect(0, 0, width, height);

    const cx = width * 0.5;
    const cy = height * 0.5;

    const w = width * 0.01;
    const he = height * 0.1;
    let x, y;

    const num = 20;
    const radius = width * 0.3;

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(0.1, 2), random.range(0.2, 2));



      const [h, s, l] = Color.parse('crimson').hsl;
      context.fillStyle = 'crimson';
      context.beginPath();
      context.rect(-w * 0.5, random.range(0, -he * 0.5), w, he);
      context.fill();
      context.restore();

      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);

      context.lineWidth = random.range(1, 5);

      context.strokeStyle = 'white';
      context.beginPath();
      context.arc(0, 0, radius * random.range(0.7, 1.3), slice * random.range(1, -8), slice * random.range(1, 5));
      context.stroke();
      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
