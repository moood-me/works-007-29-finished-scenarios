// What the threads of Ersilia share: one thread painted in its own upright sheet (tools/ersilia-threads.js turns the
// sheet so it runs from one end to the other) — from (0, −h1) to (length, −h2), sagging a little in the middle
return {
  thread(g, length, h1, h2, color) {
    const sag = 0.02 + 0.012 * length;
    g.strokeStyle = color;
    g.lineWidth = 0.026;
    g.lineCap = 'round';
    g.beginPath();
    g.moveTo(0, -h1);
    g.quadraticCurveTo(length / 2, -(h1 + h2) / 2 + 2 * sag, length, -h2);
    g.stroke();
  },
};
