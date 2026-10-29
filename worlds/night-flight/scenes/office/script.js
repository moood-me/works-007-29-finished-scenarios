// Where Rivière and Madame Fabien are in the office (the keys riviere_spot and madame_spot): their place, their turn,
// what they do, the seat under them — laid out at once as the scene opens and whenever a spot changes. Who is here,
// where they look and their faces are the game's (<id>_here, _look, _mood), never set here.
//   riviere: room — just in from the door, in the middle of the room, turned toward her by the window or the door;
//            window — by the window's right side, turned to the room; desk — sitting at his desk, over the log
//   madame:  window — at the window's left side, her coat held round her, turned to the room; door — by the door,
//            buttoned up, ready to go; chair — on the visitor's chair, for the first time tonight
const SPOTS = {
  riviere: {
    room: { at: [0.75, 4.4], turn: 235, does: 'hands_behind' },
    window: { at: [1.75, 4.85], turn: 225, does: 'hands_behind' },
    desk: { at: [1.3, 3.62], turn: 180, does: 'desk_lean', on: [1.3, 3.62, 0.54] },
  },
  madame: {
    window: { at: [-0.75, 4.75], turn: 135, does: 'coat_clutch' },
    door: { at: [-1.9, 4.2], turn: 120, does: 'stand' },
    chair: { at: [-1.3, 2.8], turn: 120, does: 'fly_seated', on: [-1.3, 2.8, 0.46] },
  },
};
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
