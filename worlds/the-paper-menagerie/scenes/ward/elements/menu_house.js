// The paper house folded from the hospital menu, on the bedside table («Уехал», 2.4): a little white house with a
// pitched roof, the menu's blue print showing on its walls in rows, a door folded in. Only with `menu_house`.
if (!e.state.menu_house) return;
const poly = (pts, fill) => {
  g.fillStyle = fill;
  g.beginPath();
  g.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) g.lineTo(pts[i][0], pts[i][1]);
  g.closePath();
  g.fill();
};
poly([[-0.06, 0], [-0.06, -0.06], [0.06, -0.06], [0.06, 0]], '#f4f2ea');
poly([[0.06, 0], [0.06, -0.06], [0.085, -0.07], [0.085, -0.008]], '#d9d6cc');
poly([[-0.07, -0.058], [0, -0.1], [0.07, -0.058]], '#e8e6dc');
poly([[0.07, -0.058], [0, -0.1], [0.025, -0.106], [0.092, -0.068]], '#cfccc2');
g.fillStyle = 'rgba(70,96,150,0.55)';
for (let y = -0.052; y < -0.006; y += 0.008) g.fillRect(-0.05, y, 0.06 + ((y * 1000) % 3) * 0.008, 0.002);
poly([[0.012, 0], [0.012, -0.03], [0.034, -0.03], [0.034, 0]], '#e2dfd5');
e.at(0, -0.06, 'house');
