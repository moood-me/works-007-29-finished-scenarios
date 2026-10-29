// Where Rivière and Madame Fabien are in the office (the keys riviere_spot and madame_spot): their place, their turn,
// what they do, the seat under them — laid out at once as the scene opens and whenever a spot changes. Who is here,
// where they look and their faces are the game's (<id>_here, _look, _mood), never set here.
//   riviere: room — just in from the door, in the middle of the room, turned toward her by the window or the door;
//            window — by the window's right side, turned to the room; desk — sitting at his desk, over the log
//   madame:  window — at the window's left side, her coat held round her, turned to the room; door — by the door,
//            buttoned up, ready to go; chair — on the visitor's chair, for the first time tonight
const { SPOTS } = scene.lib;
function place(id, spot) {
  const p = SPOTS[id][spot] ?? Object.values(SPOTS[id])[0];
  scene.set(`${id}_a`, p.at[0]);
  scene.set(`${id}_d`, p.at[1]);
  scene.set(`${id}_turn`, p.turn);
  scene.set(`${id}_do`, p.does);
  scene.set(`${id}_on`, p.on ?? null);
}
for (const id of Object.keys(SPOTS)) {
  place(id, scene.state[`${id}_spot`]);
  scene.on('change', `${id}_spot`, v => place(id, v));
}
// The office's pieces: the game sets `beat` (modules/beats; lib.film; notes.md «Pieces») — played after the people are
// laid out by their spots, so a piece's start is not laid over.
scene.kit.beats.play(scene, scene.lib.film(scene));
