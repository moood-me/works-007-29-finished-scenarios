// Algernon's maze from above (metres, its middle at across −0.25, distance 3.0, y toward the viewer): a white board in
// an oak frame, its corridors walled with white strips a mouse's height — a maze of 12 cells by 7, the same every
// time (made from the element's seed) — the start box at its near left corner, the goal at its far right with a dish
// of food. A sheet of glass lies over it all: the plane's mirror (the window and the people faintly in it).
const C = 12;
const R = 7;
const S = 0.1;
const X0 = -0.6;
const Y0 = -0.35;
g.fillStyle = '#9b7a55';
g.fillRect(-0.65, -0.39, 1.3, 0.78);
g.fillStyle = '#eceee8';
g.fillRect(X0, Y0, C * S, R * S);
// the maze: a passage carved through every cell (walls[r][c] = [right, down] standing)
const right = [];
const down = [];
const seen = [];
for (let r = 0; r < R; r++) {
  right.push(new Array(C).fill(true));
  down.push(new Array(C).fill(true));
  seen.push(new Array(C).fill(false));
}
const stack = [[R - 1, 0]];
seen[R - 1][0] = true;
while (stack.length) {
  const [r, c] = stack[stack.length - 1];
  const next = [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]].filter(([a, b]) => a >= 0 && a < R && b >= 0 && b < C && !seen[a][b]);
  if (!next.length) {
    stack.pop();
    continue;
  }
  const [a, b] = next[Math.floor(e.rnd() * next.length)];
  if (a > r) down[r][c] = false;
  if (a < r) down[a][b] = false;
  if (b > c) right[r][c] = false;
  if (b < c) right[a][b] = false;
  seen[a][b] = true;
  stack.push([a, b]);
}
// the corridor where Algernon is (row 5, from column 3 to 6) kept open along
for (let c = 3; c < 6; c++) right[5][c] = false;
const W = 0.014;
const wall = (x, y, w, h) => {
  g.fillStyle = '#b9bdb6';
  g.fillRect(x, y + h - 0.002, w, 0.008);
  g.fillStyle = '#fbfbf7';
  g.fillRect(x, y, w, h);
};
for (let r = 0; r < R; r++) {
  for (let c = 0; c < C; c++) {
    const x = X0 + c * S;
    const y = Y0 + r * S;
    if (right[r][c] && c < C - 1) wall(x + S - W / 2, y - W / 2, W, S + W);
    if (down[r][c] && r < R - 1) wall(x - W / 2, y + S - W / 2, S + W, W);
  }
}
wall(X0 - W / 2, Y0 - W / 2, C * S + W, W);
wall(X0 - W / 2, Y0 + R * S - W / 2, C * S + W, W);
wall(X0 - W / 2, Y0 - W / 2, W, R * S + W);
wall(X0 + C * S - W / 2, Y0 - W / 2, W, R * S + W);
// the goal's dish of food, the start's little door
g.fillStyle = '#c9c4b5';
g.beginPath();
g.arc(X0 + (C - 0.5) * S, Y0 + 0.5 * S, 0.028, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#d8b56a';
g.beginPath();
g.arc(X0 + (C - 0.5) * S, Y0 + 0.5 * S, 0.018, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#9b7a55';
g.fillRect(X0 - 0.03, Y0 + (R - 0.8) * S, 0.03, 0.06);
e.at(X0 + (C - 0.5) * S, Y0 + 0.5 * S, 'goal');
