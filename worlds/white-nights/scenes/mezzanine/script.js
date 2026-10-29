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

// The tea: the steam over each cup from `cups` and `cold` — a cup not there steams not; hers, gone cold, fades over
// some seconds.
function steam(fade) {
  const n = scene.state.cups ?? 2;
  scene.set('steam_his', n >= 1 ? 1 : 0);
  const hers = n >= 2 && !scene.state.cold ? 1 : 0;
  if (fade) scene.move('steam_hers', hers, { over: 6, ease: 'out' });
  else scene.set('steam_hers', hers);
}
steam(false);
scene.on('change', 'cups', () => steam(false));
scene.on('change', 'cold', () => steam(true));
