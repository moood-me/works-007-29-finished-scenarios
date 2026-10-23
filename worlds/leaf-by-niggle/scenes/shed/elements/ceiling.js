// The shed's roof seen from under it (laid flat from the back wall toward us, x across, y from the back −0 … −4.6 at
// the front): boards running across and three dark beams from wall to wall; the lantern hangs from the middle one.
e.lib.planks(g, e, -3.25, -4.6, 3.25, 0.05, false, ['#6f604f', '#685947', '#766654']);
g.fillStyle = '#4a3c2f';
for (const y of [-1.2, -2.4, -3.6]) g.fillRect(-3.25, y - 0.09, 6.5, 0.18);
