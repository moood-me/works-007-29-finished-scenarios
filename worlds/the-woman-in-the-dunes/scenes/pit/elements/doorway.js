// The lamp inside the house seen through the open doorway (on `house`, just before the front, x −0.45…0.45 over the
// doorway 1.86 m high): one layer, `lit` — the room warm with the lamp, brighter low and toward the back, the matting
// catching it — that comes up with `lamp_in` (animate). Painted once; nothing of it shows while the lamp is out.
e.layer("lit", { box: [-0.45, -1.86, 0.45, 0] }, (c) => {
  const room = c.createLinearGradient(0, -1.86, 0, 0);
  room.addColorStop(0, "#6a3f22");
  room.addColorStop(0.55, "#b8743a");
  room.addColorStop(1, "#e4a35a");
  c.fillStyle = room;
  c.fillRect(-0.45, -1.86, 0.9, 1.86);
  // the far corner where the lamp stands: a softer, brighter glow
  const lamp = c.createRadialGradient(0.15, -0.75, 0.02, 0.15, -0.75, 0.55);
  lamp.addColorStop(0, "rgba(255, 214, 150, 0.9)");
  lamp.addColorStop(1, "rgba(255, 214, 150, 0)");
  c.fillStyle = lamp;
  c.fillRect(-0.45, -1.86, 0.9, 1.86);
  // a post of the room's back wall and the hearth's dark rim, so it reads as a room and not a lamp
  c.fillStyle = "rgba(60, 34, 20, 0.7)";
  c.fillRect(-0.3, -1.86, 0.06, 1.5);
  c.fillRect(-0.45, -0.3, 0.6, 0.08);
});
