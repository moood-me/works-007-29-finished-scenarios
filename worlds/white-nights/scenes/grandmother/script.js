// Where the people of the house are (the keys <id>_spot): their place, their turn, what they do, the seat under them —
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

// The door: `door` (shut, ajar, open) swings it about its hinges over a second (door_turn: 90, 75, 5).
const TURN = { shut: 90, ajar: 75, open: 5 };
scene.set('door_turn', TURN[scene.state.door] ?? 90);
scene.on('change', 'door', (v) => scene.move('door_turn', TURN[v] ?? 90, { over: 1.1, ease: 'inOut' }));
// The time: the memory's light (the look `memory`, the low morning sun) for time `memory`, at once (a cut of the game).
scene.set('memory', scene.state.time === 'memory' ? 1 : 0);
scene.on('change', 'time', (v) => scene.set('memory', v === 'memory' ? 1 : 0));
