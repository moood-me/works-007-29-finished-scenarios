// The right wall (its face toward the room; x runs from the back of the room, −1.8, to the front, +1.8): the two-tone
// paint (lib's wall), the wide pale door to the corridor (x 0.35…1.25, shut) in its casing — its glass the
// corridor's light (door_glass) —, a steel kick plate, the handle; the room's plate by it.
e.lib.wall(g, -1.82, 1.82);
g.fillStyle = '#e8e6dc';
g.fillRect(0.28, -2.18, 1.04, 2.18);
g.fillStyle = '#d9cfb6';
g.fillRect(0.35, -2.1, 0.9, 2.1);
g.fillStyle = '#cfc4a9';
g.fillRect(0.35, -2.1, 0.9, 0.02);
g.fillStyle = '#b8b9b6';
g.fillRect(0.38, -0.32, 0.84, 0.28);
g.fillStyle = '#e4e2da';
g.fillRect(0.6, -1.55, 0.4, 0.8);
g.fillStyle = '#8c8e8c';
g.fillRect(1.1, -1.08, 0.1, 0.025);
g.fillRect(1.17, -1.1, 0.025, 0.07);
g.fillStyle = '#f2f2ec';
g.fillRect(0.0, -1.7, 0.16, 0.1);
g.fillStyle = '#3a4a5a';
g.fillRect(0.03, -1.67, 0.1, 0.035);
