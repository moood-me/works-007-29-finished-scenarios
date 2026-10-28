// What the ballroom's paintings share: its walls — an ivory dado with gilt-framed panels, tall panels of celadon silk
// between fluted ivory pilasters, a white cornice with a gilt bead and dentils — and the gilt of their mouldings.
// Metres, y down, from the foot of a wall 3.4 m high.
const TOP = 3.4;
const IVORY = '#ece4d0';
const SILK = '#b4c2a8';
const SILK_DARK = '#a5b499';
const GILT = '#c2a057';

// a fluted pilaster, its middle at x: a plinth on the dado, a shaft up to the cornice, a gilt capital
function pilaster(g, x) {
  g.fillStyle = '#f2ecdc';
  g.fillRect(x - 0.13, -TOP + 0.3, 0.26, TOP - 0.3);
  g.fillStyle = '#e2d8c0';
  for (const dx of [-0.07, 0, 0.07]) g.fillRect(x + dx - 0.012, -TOP + 0.62, 0.024, TOP - 1.72);
  g.fillStyle = GILT;
  g.fillRect(x - 0.16, -TOP + 0.3, 0.32, 0.06);
  g.fillRect(x - 0.14, -TOP + 0.36, 0.28, 0.22);
  g.fillStyle = '#d8bd78';
  for (const s of [-1, 1]) {
    g.beginPath();
    g.arc(x + s * 0.1, -TOP + 0.47, 0.05, 0, Math.PI * 2);
    g.fill();
  }
  g.fillStyle = '#e2d8c0';
  g.fillRect(x - 0.15, -1.0, 0.3, 0.06);
}

// a wall x0…x1 wide: the dado, the silk panels of `bays` ([[a, b], …], each from a to b across), the cornice
function wall(g, x0, x1, bays) {
  const w = x1 - x0;
  g.save();
  g.beginPath();
  g.rect(x0, -TOP - 0.02, w, TOP + 0.04);
  g.clip();
  g.fillStyle = IVORY;
  g.fillRect(x0, -TOP - 0.02, w, TOP + 0.04);
  // the silk panels: a gilt beading round each, a faint damask lozenge pattern
  for (const [a, b] of bays) {
    g.fillStyle = SILK;
    g.fillRect(a, -TOP + 0.62, b - a, TOP - 1.72);
    g.fillStyle = SILK_DARK;
    for (let x = a + 0.15; x < b - 0.05; x += 0.3) {
      for (let y = -TOP + 0.8; y < -1.2; y += 0.36) {
        g.beginPath();
        g.moveTo(x, y - 0.07);
        g.lineTo(x + 0.04, y);
        g.lineTo(x, y + 0.07);
        g.lineTo(x - 0.04, y);
        g.closePath();
        g.fill();
      }
    }
    g.strokeStyle = GILT;
    g.lineWidth = 0.025;
    g.strokeRect(a + 0.03, -TOP + 0.65, b - a - 0.06, TOP - 1.78);
  }
  // the dado: framed panels, the chair rail
  g.fillStyle = '#e3d9c1';
  g.fillRect(x0, -0.95, w, 0.95);
  g.strokeStyle = GILT;
  g.lineWidth = 0.018;
  for (let x = Math.floor(x0 / 0.8) * 0.8; x < x1; x += 0.8) g.strokeRect(x + 0.1, -0.8, 0.6, 0.58);
  g.fillStyle = '#d9cdb0';
  g.fillRect(x0, -1.0, w, 0.06);
  g.fillStyle = GILT;
  g.fillRect(x0, -0.95, w, 0.012);
  g.fillStyle = '#cfc2a2';
  g.fillRect(x0, -0.16, w, 0.17);
  // the cornice: white, dentils, a gilt bead
  g.fillStyle = '#f3eee2';
  g.fillRect(x0, -TOP - 0.02, w, 0.26);
  g.fillStyle = '#ddd3bd';
  for (let x = Math.floor(x0 / 0.1) * 0.1; x < x1; x += 0.1) g.fillRect(x, -TOP + 0.24, 0.06, 0.06);
  g.fillStyle = GILT;
  g.fillRect(x0, -TOP + 0.3, w, 0.025);
  g.restore();
}

// a heavy silk curtain falling from y0 to the floor, its inner edge drawn back toward `outer` at the tie
function drape(g, outer, inner, y0, tie) {
  g.fillStyle = '#a3823f';
  g.beginPath();
  g.moveTo(outer, y0);
  g.lineTo(inner, y0);
  g.quadraticCurveTo(inner, tie - 0.35, outer + (inner - outer) * 0.35, tie);
  g.quadraticCurveTo(inner + (outer - inner) * 0.1, tie + 0.45, inner, -0.02);
  g.lineTo(outer, -0.02);
  g.closePath();
  g.fill();
  g.strokeStyle = '#86682f';
  g.lineWidth = 0.025;
  for (let k = 1; k < 4; k++) {
    const x = outer + ((inner - outer) * k) / 5;
    g.beginPath();
    g.moveTo(x, y0 + 0.05);
    g.lineTo(outer + ((inner - outer) * k) / 9, tie);
    g.lineTo(x, -0.02);
    g.stroke();
  }
  g.fillStyle = '#e0c780';
  g.fillRect(Math.min(outer, outer + (inner - outer) * 0.4) - 0.01, tie - 0.03, Math.abs(inner - outer) * 0.4 + 0.02, 0.05);
}

// the sconces' candles: where each flame stands over a sconce's anchor (sconce paints the sticks, sconce_flames the flames)
const sconceCandles = [[-0.13, -0.2], [0, -0.27], [0.13, -0.2]];

return { TOP, GILT, pilaster, wall, drape, sconceCandles };
