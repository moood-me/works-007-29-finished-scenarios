// Nikita soothes the horse while they wait: his left hand lies on Mukhorty's cheek (a little before the horse's card,
// on its near side) and now and then strokes a little down it toward the nose and back.
const CHEEK = { on: "horse", at: [-1.2, -0.08, 1.5] };
const LOWER = { on: "horse", at: [-1.3, -0.08, 1.38] };
let down = false;
scene.every(2.6, () => {
  down = !down;
  scene.person("nikita").reach({ l: down ? LOWER : CHEEK });
});
