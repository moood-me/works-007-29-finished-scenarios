// The house's side over the valley (from its corner on the terrace, running away from us 3.6 m): whitewash over the
// plinth, a small shuttered window, the sun on it.
g.fillStyle = "#efe8db";
g.fillRect(0, -4.4, 3.6, 4.42);
g.fillStyle = "#cfc2a6";
g.fillRect(0, -0.42, 3.6, 0.44);
g.fillStyle = "#e6dfd0";
for (let y = -0.45; y > -4.4; y -= 0.5) g.fillRect(0, y - 0.24, 0.3, 0.22);
// a small window upstairs, its shutters closed
g.fillStyle = "#9fbab4";
g.fillRect(1.9, -3.95, 0.6, 0.85);
g.strokeStyle = "#86a39c";
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(2.2, -3.95);
g.lineTo(2.2, -3.1);
g.stroke();
g.fillStyle = "#d6cab0";
g.fillRect(1.82, -3.1, 0.76, 0.06);
