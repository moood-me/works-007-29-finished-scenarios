// The risers of the porch's steps, facing the yard on the right: the lowest one here (0…0.17 m), the next two as parts
// behind it, each 0.3 m further left (behind the card's face), each a step higher.
const L = e.lib, TONES = ["#8e7f68", "#857660", "#988871"];
L.boards(g, 151, -0.8, -0.17, 1.6, 0.17, 0.085, TONES);
e.part(0, 0.3, (g) => L.boards(g, 153, -0.8, -0.33, 1.6, 0.16, 0.08, TONES), [-0.8, -0.34, 0.8, 0]);
e.part(0, 0.6, (g) => L.boards(g, 155, -0.8, -0.5, 1.6, 0.17, 0.085, TONES), [-0.8, -0.51, 0.8, 0]);
