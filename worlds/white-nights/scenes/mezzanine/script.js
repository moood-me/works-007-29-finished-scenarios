// Where the two are in the mezzanine (the keys <id>_spot): their place, their turn, what they do, the seat under them —
// laid out at once as the scene opens and whenever a spot changes (lib.SPOTS says each). Who is here, where they look,
// what they hold and their faces are the game's (<id>_here, _look, _with, _mood), never set here.
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
  scene.on('change', `${id}_spot`, (v) => place(id, v));
}
