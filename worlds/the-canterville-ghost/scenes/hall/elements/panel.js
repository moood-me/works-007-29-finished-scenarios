// The hidden panel on the landing (0.8 m by 1.87 m, hinged at its left; painted from the hinge, x 0…0.8): a leaf of
// the wall's own oak, its panels and its rail where the wall's are, so that shut it is the wall; a dark hair's line
// round it. Its turn is the key `panel` (180 shut … 255 open toward the landing).
const L = e.lib;
g.fillStyle = L.OAK;
g.fillRect(0, -1.87, 0.8, 1.87);
g.strokeStyle = L.OAK_DARK;
g.lineWidth = 0.045;
g.strokeRect(0.1, -1.22, 0.6, 1.14);
g.strokeRect(0.1, -1.8, 0.6, 0.46);
g.fillStyle = L.OAK_LIGHT;
g.fillRect(0, -1.31, 0.8, 0.06);
g.strokeStyle = '#1e140d';
g.lineWidth = 0.012;
g.strokeRect(0.006, -1.864, 0.788, 1.86);
