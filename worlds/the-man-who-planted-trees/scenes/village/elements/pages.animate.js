// the name written as far as `notebook_name` says (only on the clean page); the wind's leaf flipping over three times
// as `notebook_turn` goes 0 → 1 (none at rest)
const blank = (e.state.notebook_page ?? "was") === "blank";
const k = Math.min(1, Math.max(0, e.state.notebook_name ?? 0));
const n = 12; // the name's layers (pages.js)
for (let i = 0; i < n; i++) e.layer(`l${i}`).alpha = blank ? Math.min(1, Math.max(0, k * n - i)) : 0;
const t = Math.min(1, Math.max(0, e.state.notebook_turn ?? 0));
const leaf = e.layer("leaf");
if (t <= 0 || t >= 1) {
  leaf.alpha = 0;
} else {
  const f = (t * 3) % 1, c = Math.cos(Math.PI * f);
  leaf.alpha = 1;
  leaf.scaleX = c;
  leaf.brightness = c < 0 ? 0.85 : 1;
}
