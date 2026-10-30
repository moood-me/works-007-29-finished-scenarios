// What the sky's painting and its animate share: the three lines' lamps (sky.js paints each where its way begins,
// sky.animate.js carries it along). Each line: where its lamp is first seen ([x as a share of the stage's width, y in
// screen heights]), its way from there (the same units), and the second of the cycle it sets out; every CYCLE seconds
// one lamp on each line comes in over FLIGHT seconds — the lines in turn, never together.
const LINES = {
  south: { from: [0.04, 0.4], way: [0.4, 0.2], at: 10 },
  west: { from: [0.5, 0.36], way: [-0.02, 0.24], at: 60 },
  north: { from: [1.02, 0.42], way: [-0.42, 0.18], at: 110 },
};
return { LINES, CYCLE: 150, FLIGHT: 60 };
