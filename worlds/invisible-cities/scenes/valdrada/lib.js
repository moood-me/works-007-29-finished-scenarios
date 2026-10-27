// The city of Valdrada across the lake, laid out once for the two paintings that show it — its stone (`city`) and
// its lit windows (`city_lights`), which must agree window for window. Metres along the waterfront (x, right +) and up
// from the water (y, down +, as the paintings have it): a row of houses with arcades on the quay (2 m over the water),
// a palace with a dome over the wide stair going down into the water in the middle, three towers.
const H = (n, s) => anim.hash(n, s);
const QUAY = -2;
const houses = [];
const windows = [];
const add = (x, w, h, i, kind) => {
  const tone = ['#b8ad99', '#aaa08f', '#b5a493', '#a3a5a2', '#bcae97'][Math.floor(H(i, 4) * 5)];
  houses.push({ x, w, h, kind, tone, roof: kind === 'house' ? (H(i, 3) < 0.22 ? 'dome' : H(i, 3) < 0.55 ? 'gable' : 'flat') : kind });
  const floors = Math.max(1, Math.floor((h - 4.5) / 3.2));
  const cols = Math.max(1, Math.floor(w / 2.4));
  const step = w / cols;
  for (let r = 0; r < floors; r++) {
    for (let c = 0; c < cols; c++) {
      const k = i * 1000 + r * 37 + c;
      windows.push({ x: x + (c + 0.5) * step - 0.45, y: QUAY - 4.6 - r * 3.2, w: 0.9, h: 1.6, lit: H(k, 7) < 0.34 });
    }
  }
};
let x = -205;
let i = 0;
while (x < 205) {
  if (x >= -16 && x < 16) {
    add(-16, 32, 17, 999, 'palace');
    x = 16;
    continue;
  }
  const w = Math.min(8 + H(i, 1) * 8, (x < -16 ? -16 : 205) - x);
  const h = 9 + H(i, 2) * 8 + (Math.abs(x) < 60 ? 3 : 0);
  add(x, w, h, i, 'house');
  x += w;
  i++;
}
const towers = [[-96, 5, 34], [58, 4.5, 30], [148, 5, 37]];
return { QUAY, houses, windows, towers };
