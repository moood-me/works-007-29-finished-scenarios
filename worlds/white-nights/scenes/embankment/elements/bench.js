// A wooden bench along the parapet, its back to the canal: this card is its back, x 0…1.8 along the canal — three rails
// of worn wood between the iron back posts at either end, from the seat (0.45 m, the plane bench_seat) up to 0.9 m.
// Its seat is a plane, its two ends cards facing the viewer (bench_end), so it reads from up the street as a bench
const wood = '#8a6f58', iron = '#3f4644', rails = [-0.6, -0.72, -0.84];
g.fillStyle = iron;
for (const x of [0.06, 1.74]) g.fillRect(x - 0.03, -0.9, 0.06, 0.45);
g.fillStyle = wood;
for (const y of rails) g.fillRect(0.02, y, 1.76, 0.07);
g.strokeStyle = e.lib.INK;
g.lineWidth = 0.012;
for (const y of rails) g.strokeRect(0.02, y, 1.76, 0.07);
