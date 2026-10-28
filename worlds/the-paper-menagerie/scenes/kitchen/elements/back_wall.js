// The back wall (facing the room, metres from its foot at the middle): the wallpaper, cut for the window over the
// sink (x −0.95…0.35, from 1.0 m to 2.1 m up); the tiled backsplash behind the counter and the stove.
g.save();
g.beginPath();
g.rect(-2.92, -2.64, 5.84, 2.68);
g.rect(-0.95, -2.1, 1.3, 1.1);
g.clip('evenodd');
e.lib.wallpaper(g, -2.92, 2.92);
e.lib.tiles(g, -1.8, 1.8, -1.5, -0.9);
g.restore();
