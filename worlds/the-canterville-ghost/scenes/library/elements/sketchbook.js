// М10 «Портрет» close up (an insert, stage heights; `sketchbook_open`): her sketchbook's page by the lamp, and her
// pencil drawing her father's face in profile — down the line of his brow, his nose, his mouth, his chin, from
// sketchbook#start to sketchbook#end (`portrait` 0…1: how far the line is drawn, its segments layers the animate shows;
// at the end his eye, ear, hair and collar come). `askew` — the miss: the nose drawn too long, askew.
const L = e.lib.PORTRAIT;
// the page, warm in the lamplight, the book's dark edge round it
g.fillStyle = '#2a1e16';
g.fillRect(0.2, 0, 1.38, 1);
g.fillStyle = '#efe4c8';
g.fillRect(0.42, 0.06, 0.94, 0.88);
g.fillStyle = 'rgba(160,120,70,0.12)';
g.fillRect(0.42, 0.06, 0.06, 0.88);
g.strokeStyle = 'rgba(120,100,70,0.25)';
g.lineWidth = 0.002;
for (let y = 0.1; y < 0.92; y += 0.035) {
  g.beginPath();
  g.moveTo(0.5, y + e.rnd() * 0.004);
  g.lineTo(1.32, y + e.rnd() * 0.004);
  g.stroke();
}
const P = L.path(e.state.askew);
const pencil = (f, a, b) => {
  f.strokeStyle = '#2e2a28';
  f.lineWidth = 0.006;
  f.lineCap = 'round';
  f.beginPath();
  f.moveTo(a[0], a[1]);
  f.lineTo(b[0], b[1]);
  f.stroke();
};
for (let i = 0; i < P.length - 1; i++) e.layer(`seg${i}`, {}, f => pencil(f, P[i], P[i + 1]));
// the rest of the face: the eye, the ear, the hair, the collar and the frock coat's shoulder
e.layer('rest', {}, f => {
  f.strokeStyle = '#3a3430';
  f.lineWidth = 0.005;
  f.lineCap = 'round';
  f.beginPath();
  f.ellipse(0.925, 0.355, 0.016, 0.009, 0, 0, Math.PI * 2);
  f.moveTo(0.9, 0.335);
  f.lineTo(0.945, 0.33);
  f.moveTo(0.8, 0.37);
  f.quadraticCurveTo(0.76, 0.41, 0.8, 0.45);
  f.moveTo(0.97, 0.24);
  f.quadraticCurveTo(0.84, 0.15, 0.74, 0.3);
  f.quadraticCurveTo(0.7, 0.45, 0.76, 0.56);
  f.moveTo(0.8, 0.62);
  f.lineTo(0.82, 0.74);
  f.lineTo(0.95, 0.76);
  f.moveTo(0.72, 0.66);
  f.quadraticCurveTo(0.6, 0.72, 0.56, 0.86);
  f.stroke();
  f.fillStyle = 'rgba(60,54,50,0.12)';
  f.beginPath();
  f.moveTo(0.97, 0.24);
  f.quadraticCurveTo(0.84, 0.15, 0.74, 0.3);
  f.quadraticCurveTo(0.7, 0.45, 0.76, 0.56);
  f.lineTo(0.8, 0.45);
  f.closePath();
  f.fill();
});
// the pencil's point, where the line is now (the animate moves it along)
e.layer('pencil', {}, f => {
  f.fillStyle = '#c89a4a';
  f.beginPath();
  f.moveTo(0, 0);
  f.lineTo(0.08, -0.12);
  f.lineTo(0.1, -0.11);
  f.closePath();
  f.fill();
  f.fillStyle = '#2e2a28';
  f.beginPath();
  f.arc(0.004, -0.004, 0.006, 0, Math.PI * 2);
  f.fill();
});
e.at(P[0][0], P[0][1], 'start');
e.at(P[P.length - 1][0], P[P.length - 1][1], 'end');
