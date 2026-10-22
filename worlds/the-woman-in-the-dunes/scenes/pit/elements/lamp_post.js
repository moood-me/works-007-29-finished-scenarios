// The lamp post on the pit's floor: a weathered pole, a short arm at its top, a hurricane lantern hanging from it — its
// glass a warm pale cream, its flame the glow `flame` (the scene's light `lantern`, lit by the key `lantern`); a little
// sand heaped round its foot. Point `lantern` — the lantern.
g.fillStyle = "#6f5d4a";
g.beginPath();
g.moveTo(-0.07, 0);
g.lineTo(-0.05, -2.95);
g.lineTo(0.05, -2.95);
g.lineTo(0.07, 0);
g.closePath();
g.fill();
g.fillStyle = "rgba(210, 202, 186, 0.3)";
g.fillRect(-0.05, -2.9, 0.025, 2.85);
// the arm and its brace
g.fillStyle = "#62513f";
g.fillRect(-0.05, -2.86, 0.5, 0.06);
g.strokeStyle = "#62513f";
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(0.02, -2.5);
g.lineTo(0.3, -2.82);
g.stroke();
// the lantern on its hook
g.strokeStyle = "#35322d";
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(0.4, -2.8);
g.lineTo(0.4, -2.68);
g.stroke();
g.fillStyle = "#3b3833";
g.fillRect(0.33, -2.69, 0.14, 0.04);
g.fillStyle = "#efe2c4";
g.beginPath();
g.ellipse(0.4, -2.55, 0.06, 0.1, 0, 0, Math.PI * 2);
g.fill();
g.strokeStyle = "#3b3833";
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(0.34, -2.66);
g.lineTo(0.34, -2.44);
g.moveTo(0.46, -2.66);
g.lineTo(0.46, -2.44);
g.stroke();
g.fillStyle = "#3b3833";
g.fillRect(0.32, -2.46, 0.16, 0.05);
e.light(0.4, -2.55, 0.26, "#ffc27a", 1.4, "flame");
e.at(0.4, -2.55, "lantern");
// sand round its foot
g.fillStyle = "#d8b680";
g.beginPath();
g.ellipse(0, 0, 0.32, 0.1, 0, Math.PI, 0);
g.fill();
