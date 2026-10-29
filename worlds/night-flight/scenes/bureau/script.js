// The bureau's people where their spot keys put them (riviere_spot, robineau_spot, pilot_spot, telegraphist_spot,
// madame_spot — lib.SPOTS): their place, their turn, what they do, the seat under them, a hand's reach (the
// telegraphist's on the key) — laid out at once as the scene opens and whenever a spot changes. Who is here, where they
// look and their faces are the game's (<id>_here, _look, _mood), never set here. A piece starts from the same places
// and moves people from them.
const { SPOTS } = scene.lib;
function place(id, spot) {
  const p = SPOTS[id][spot] ?? Object.values(SPOTS[id])[0];
  scene.set(`${id}_a`, p.at[0]);
  scene.set(`${id}_d`, p.at[1]);
  scene.set(`${id}_turn`, p.turn);
  scene.set(`${id}_do`, p.does);
  scene.set(`${id}_on`, p.on ?? null);
  if (id === 'robineau' || id === 'pilot') scene.set(`${id}_wear`, p.wear ?? null);
  scene.set(`${id}_reach`, p.reach ?? null);
}
for (const id of Object.keys(SPOTS)) {
  place(id, scene.state[`${id}_spot`]);
  scene.on('change', `${id}_spot`, v => place(id, v));
}
// The flag led over the map (М1): Rivière's right hand on it while it is in his hand (`flag_hand`), off it after.
scene.on('change', 'flag_hand', v => scene.set('riviere_reach', v && v !== 'none' ? { r: 'map#led' } : null));
// The hour's light from the clock: `dusk` (18:30–20:30) and `dawn` (5:30–8:00), the light's looks of those names.
const hour = t => {
  const m = ((t % 1440) + 1440) % 1440;
  scene.set('dusk', m >= 1110 && m <= 1230 ? 1 : 0);
  scene.set('dawn', m >= 330 && m <= 480 ? 1 : 0);
};
hour(scene.state.time);
scene.on('change', 'time', v => hour(v));
// The bureau's pieces: the game sets `beat` (modules/beats; lib.film; notes.md «Pieces») — played after the people are
// laid out by their spots, so a piece's start is not laid over.
scene.kit.beats.play(scene, scene.lib.film(scene));
