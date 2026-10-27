// The kitchen's floor from above: square red tiles, worn paler along the way from the door to the hearth
const A = e.anim;
g.fillStyle = '#8f5a3e';
g.fillRect(-1.6, -1.1, 3.2, 2.2);
for (let x = -1.6; x < 1.6; x += 0.3) {
  for (let y = -1.1; y < 1.1; y += 0.3) {
    const k = A.hash(Math.round(x * 10) * 31 + Math.round(y * 10), 1);
    g.fillStyle = k < 0.33 ? '#a2664a' : k < 0.66 ? '#9a5f44' : '#ab6e50';
    g.fillRect(x + 0.012, y + 0.012, 0.276, 0.276);
  }
}
const worn = g.createLinearGradient(0, 1.1, 0.5, -0.8);
worn.addColorStop(0, 'rgba(200, 160, 130, 0.35)');
worn.addColorStop(1, 'rgba(200, 160, 130, 0)');
g.fillStyle = worn;
g.fillRect(-0.6, -1.1, 1.6, 2.2);
