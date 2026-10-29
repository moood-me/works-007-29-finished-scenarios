// The bureau's people where their spot keys put them (riviere_spot, robineau_spot, pilot_spot, telegraphist_spot):
// their place, their turn, what they do, the seat under them, a hand's reach (the telegraphist's on the key) — laid out at once as the scene opens and whenever a
// spot changes. Who is here, where they look and their faces are the game's (<id>_here, _look, _mood), never set here.
// And the hour's light from the clock: `dusk` (18:30–20:30) and `dawn` (5:30–8:00), the light's looks of those names.
const BENCH = 6.82; // the bench under the window: where one sits on it (its seat 0.47 m up)
const SPOTS = {
  riviere: {
    map: { at: [-0.35, 5.85], turn: 235, does: 'hands_behind' },
    desk: { at: [1.1, 3.95], turn: 160, does: 'hands_behind' },
    bench: { at: [0.45, BENCH], turn: 180, does: 'fly_seated', on: [0.45, BENCH, 0.47] },
  },
  robineau: {
    desk: { at: [2.75, 4.05], turn: 200, does: 'hold_waist' },
    writing: { at: [2.35, 3.95], turn: 180, does: 'desk_lean', on: [2.35, 3.95, 0.54], wear: { parts: ['moustache'] } },
    bench: { at: [1.05, BENCH], turn: 180, does: 'fly_seated', on: [1.05, BENCH, 0.47] },
  },
  pilot: {
    standing: { at: [1.0, 5.0], turn: 215, does: 'stand_easy' },
    bench: { at: [0.15, BENCH], turn: 180, does: 'fly_seated', on: [0.15, BENCH, 0.47] },
  },
  telegraphist: {
    table: { at: [2.15, 6.3], turn: 190, does: 'desk_lean', reach: { r: [1.95, 5.95, 0.83] } },
    bench: { at: [0.55, BENCH], turn: 180, does: 'fly_seated', on: [0.55, BENCH, 0.47] },
  },
};
function place(id, spot) {
  const p = SPOTS[id][spot] ?? Object.values(SPOTS[id])[0];
  scene.set(`${id}_a`, p.at[0]);
  scene.set(`${id}_d`, p.at[1]);
  scene.set(`${id}_turn`, p.turn);
  scene.set(`${id}_do`, p.does);
  scene.set(`${id}_on`, p.on ?? null);
  scene.set(`${id}_wear`, p.wear ?? null);
  scene.set(`${id}_reach`, p.reach ?? null);
}
for (const id of Object.keys(SPOTS)) {
  place(id, scene.state[`${id}_spot`]);
  scene.on('change', `${id}_spot`, v => place(id, v));
}
const hour = t => {
  const m = ((t % 1440) + 1440) % 1440;
  scene.set('dusk', m >= 1110 && m <= 1230 ? 1 : 0);
  scene.set('dawn', m >= 330 && m <= 480 ? 1 : 0);
};
hour(scene.state.time);
scene.on('change', 'time', v => hour(v));
