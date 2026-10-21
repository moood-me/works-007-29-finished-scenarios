// The ceiling of the hut, seen from below: boards laid across the great beam (the matitsa) that runs over the middle
// of the room, the beam itself darker, an iron ring in it.
// (x −3.4…3.4 across, y −2.35 at the back wall … 2.35 toward the eye; the beam along y 0)
const L = e.lib;
const C = L.C;
const rnd = () => e.rnd();
L.boards(g, -3.4, 3.4, -2.35, 2.35, 0.36, rnd);
g.fillStyle = "rgba(60,44,30,0.25)";
g.fillRect(-3.4, -2.35, 6.8, 4.7);
g.fillStyle = C.logDark;
g.fillRect(-3.4, -0.18, 6.8, 0.36);
g.fillStyle = "rgba(190,160,120,0.35)";
g.fillRect(-3.4, -0.1, 6.8, 0.06);
g.strokeStyle = C.iron;
g.lineWidth = 0.025;
g.beginPath();
g.arc(1.2, 0, 0.06, 0, Math.PI * 2);
g.stroke();
