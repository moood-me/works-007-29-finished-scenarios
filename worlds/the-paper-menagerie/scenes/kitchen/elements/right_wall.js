// The right wall (its face toward the room; x runs from the front of the room, −1.7, to the back, +1.7): the wallpaper,
// cut for the open door to the hall (x −0.95…−0.05, 2.05 m high), its white casing, a coat hook beside it.
g.save();
g.beginPath();
g.rect(-1.77, -2.64, 3.54, 2.68);
g.rect(-0.95, -2.05, 0.9, 2.07);
g.clip('evenodd');
e.lib.wallpaper(g, e, -1.77, 1.77);
g.restore();
g.fillStyle = '#efe9dd';
g.fillRect(-1.03, -2.13, 0.08, 2.13);
g.fillRect(-0.05, -2.13, 0.08, 2.13);
g.fillRect(-1.03, -2.13, 1.06, 0.08);
// the door itself, open back against the hall's wall beyond: only its edge seen in the doorway
g.fillStyle = '#d9cdb6';
g.fillRect(-0.12, -2.03, 0.06, 2.03);
// a hook with Dad's cap
g.fillStyle = '#6a5543';
g.fillRect(0.35, -1.7, 0.03, 0.06);
g.fillStyle = '#4c5466';
g.beginPath();
g.ellipse(0.37, -1.6, 0.11, 0.06, 0, 0, Math.PI * 2);
g.fill();
e.at(-0.5, -1.5, 'door');
