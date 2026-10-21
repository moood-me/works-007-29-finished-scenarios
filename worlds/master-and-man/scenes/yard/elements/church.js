// The village church beyond the fence, 80 m off: a white stone church with one green onion dome on its drum, a low
// refectory and a tall bell tower with a tent spire; snow on every ledge and roof, small gilt crosses.
// (x −10…10 m, its foot at 0)
const L = e.lib;
const WALL = "#ebe7df";
const WALL_SIDE = "#d6d3cf";
const ROOF = "#55705f";
const GOLD = "#c9a24e";
const DARK = "#5a5e66";

// a cross on a point
function cross(x, y, h) {
  g.fillStyle = GOLD;
  g.fillRect(x - 0.08, y - h, 0.16, h);
  g.fillRect(x - 0.45, y - h * 0.72, 0.9, 0.14);
  g.fillRect(x - 0.3, y - h * 0.38, 0.6, 0.11);
}
// an arched window
function arch(x, y, w, h) {
  g.fillStyle = DARK;
  g.beginPath();
  g.moveTo(x - w / 2, y);
  g.lineTo(x - w / 2, y - h + w / 2);
  g.arc(x, y - h + w / 2, w / 2, Math.PI, 0);
  g.lineTo(x + w / 2, y);
  g.closePath();
  g.fill();
}

// the church's body
g.fillStyle = WALL;
g.fillRect(-6, -9, 8, 9);
g.fillStyle = WALL_SIDE;
g.fillRect(1.2, -9, 0.8, 9);
// its cornice and the low roof round the drum
g.fillStyle = ROOF;
g.beginPath();
g.moveTo(-6.4, -9);
g.lineTo(-2, -10.4);
g.lineTo(2.4, -9);
g.closePath();
g.fill();
L.snowCap(g, -6.3, 2.3, -9.1, 0.3, 1);
for (const wx of [-4.6, -2, 0.6]) arch(wx, -3.2, 0.9, 2.6);
for (const wx of [-4.6, -2, 0.6]) arch(wx, -6.4, 0.7, 1.6);
// the apse to the left
g.fillStyle = WALL_SIDE;
g.beginPath();
g.moveTo(-6, 0);
g.lineTo(-6, -6.5);
g.quadraticCurveTo(-8.6, -6.4, -8.6, -3.2);
g.lineTo(-8.6, 0);
g.closePath();
g.fill();
L.snowCap(g, -8.5, -6, -6.5, 0.25, 2);

// the drum and the onion dome over it
g.fillStyle = WALL;
g.fillRect(-3.3, -12.6, 2.6, 2.4);
L.snowCap(g, -3.4, -0.6, -12.6, 0.18, 3);
arch(-2, -10.6, 0.5, 1.3);
g.fillStyle = ROOF;
g.beginPath();
g.moveTo(-2, -17.6);
g.bezierCurveTo(-2.3, -16.4, -3.9, -15.6, -3.6, -13.9);
g.bezierCurveTo(-3.4, -12.9, -0.6, -12.9, -0.4, -13.9);
g.bezierCurveTo(-0.1, -15.6, -1.7, -16.4, -2, -17.6);
g.closePath();
g.fill();
// (snow lying on the dome's shoulders)
g.fillStyle = L.C.snow;
g.beginPath();
g.ellipse(-2, -15.2, 1.15, 0.45, 0, Math.PI, 0);
g.fill();
cross(-2, -17.5, 2.2);

// the refectory joining the tower
g.fillStyle = WALL;
g.fillRect(2, -5.8, 2.6, 5.8);
g.fillStyle = ROOF;
g.fillRect(1.9, -6.3, 2.8, 0.5);
L.snowCap(g, 1.9, 4.7, -6.3, 0.25, 4);
arch(3.3, -2.2, 0.7, 2);

// the bell tower: two tiers, the bell opening, the tent spire
g.fillStyle = WALL;
g.fillRect(4.6, -12, 3.2, 12);
g.fillStyle = WALL_SIDE;
g.fillRect(7.1, -12, 0.7, 12);
L.snowCap(g, 4.4, 8, -8, 0.22, 5);
arch(6.2, -2.4, 0.8, 2.4);
g.fillStyle = WALL;
g.fillRect(4.9, -15.6, 2.6, 3.6);
g.fillStyle = DARK;
g.beginPath();
g.moveTo(5.5, -12.6);
g.lineTo(5.5, -14.4);
g.arc(6.2, -14.4, 0.7, Math.PI, 0);
g.lineTo(6.9, -12.6);
g.closePath();
g.fill();
// (the bell in it)
g.fillStyle = "#6f5a3a";
g.beginPath();
g.moveTo(5.85, -13.1);
g.quadraticCurveTo(5.95, -14.2, 6.2, -14.25);
g.quadraticCurveTo(6.45, -14.2, 6.55, -13.1);
g.closePath();
g.fill();
L.snowCap(g, 4.4, 8, -12.05, 0.25, 6);
g.fillStyle = ROOF;
g.beginPath();
g.moveTo(4.6, -15.6);
g.lineTo(6.2, -22.4);
g.lineTo(7.8, -15.6);
g.closePath();
g.fill();
g.fillStyle = L.C.snow;
g.beginPath();
g.moveTo(4.7, -15.7);
g.lineTo(5.4, -18.6);
g.lineTo(5.9, -17.6);
g.lineTo(6.6, -18.4);
g.lineTo(7.7, -15.7);
g.closePath();
g.fill();
cross(6.2, -22.3, 2.2);
