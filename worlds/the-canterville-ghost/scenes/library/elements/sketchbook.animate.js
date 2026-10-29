// the line drawn as far as `portrait` says, the pencil at its end; the rest of the face as it is finished
const L = e.lib.PORTRAIT, P = L.path(e.state.askew), n = P.length - 1;
const k = Math.min(1, Math.max(0, e.state.portrait ?? 0));
for (let i = 0; i < n; i++) e.layer(`seg${i}`).alpha = Math.min(1, Math.max(0, k * n - i));
e.layer('rest').alpha = Math.min(1, Math.max(0, (k - 0.85) / 0.15));
const at = L.along(P, k), pen = e.layer('pencil');
pen.x = at[0];
pen.y = at[1];
pen.alpha = k < 1 ? 1 : 0;
