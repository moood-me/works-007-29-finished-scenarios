// The air over the meadow under the earth, in stage heights: no sky and no stars — a high vault lost in a pale lilac
// haze, deep violet overhead, lightening down to a soft pale band at the far edge of the meadow where the mist is;
// long faint veils of vapour drifting very slowly across it (a layer the engine moves).
const A = e.aspect, H = 0.42; // (H: the horizon on the stage, as the scene's "horizon" says)
const air = g.createLinearGradient(0, -0.35, 0, 1.25), at = y => (y + 0.35) / 1.6;
air.addColorStop(0, '#1b1934');
air.addColorStop(at(0.05), '#25234a');
air.addColorStop(at(H - 0.2), '#423f6e');
air.addColorStop(at(H - 0.05), '#6d6a98');
air.addColorStop(at(H), '#8581ab');
air.addColorStop(at(H + 0.08), '#5a577f');
air.addColorStop(1, '#34324f');
g.fillStyle = air;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
// veils of vapour high in the vault, pale lilac; each painted again past the box's ends so the drifting layer's ends
// meet
const x0 = -0.3, W = A + 0.6;
e.layer('veils', { box: [x0, -0.3, x0 + W, H - 0.04], drift: [0.0015, 0] }, g => {
  for (let i = 0; i < 12; i++) {
    const y = -0.25 + (H + 0.15) * e.anim.hash(i, 41) ** 0.8, len = 0.3 + 0.6 * e.anim.hash(i, 42), thick = 0.01 + 0.03 * e.anim.hash(i, 43);
    const x = x0 + W * e.anim.hash(i, 44);
    for (const k of [0, -W, W]) {
      if (x + k + len < x0 || x + k - len > x0 + W) continue;
      g.save();
      g.translate(x + k, y);
      g.scale(len, thick);
      const c = g.createRadialGradient(0, 0, 0, 0, 0, 1);
      c.addColorStop(0, 'rgba(170,164,214,0.32)');
      c.addColorStop(1, 'rgba(170,164,214,0)');
      g.fillStyle = c;
      g.fillRect(-1, -1, 2, 2);
      g.restore();
    }
  }
});
