// Inside the shepherd's house across the years — its moments (the key `moment`): the hour (`time`: what the window
// shows and the light's look), the lamp and the hearth, what is on the table (the soup, the acorns, the notebook and
// the city's letter), the sack, the dog by the door, and who is here, where they sit or stand, what they do, what they
// wear (indoors: no hat, nothing carried — the cast's look of that year with its hat off and its rod, bag and flask
// left at the door). Laid out at once whenever `moment` changes, and as the scene opens if the moment is not the one
// last laid out (`staged`) — so a scene restored after a game changed its details keeps them. A game sets `moment`
// first, then any detail; the pieces (`beat`) lay out their own beginnings over it (lib.js, notes.md).
//   arrival — П.4–П.5: dusk going to night, the lamp, the soup; Elzéard (55) and the Traveller (20) at the table
//             eating, the sack of acorns on the floor by his stool, the dog by the door
//   button  — 1.5: evening; Elzéard (55) shaving at the window, the Traveller (20) at the table
//   night   — 2.7: six years on, night, the moon over the empty slope in the window; the hundred acorns being counted,
//             the Traveller's notebook open and the city's letter on the table; Elzéard (61), the Traveller (26)
//   evening — 3.4: fourteen years on, dusk; the old man counting slowly; Elzéard (75), the Traveller (40); no dog
const E = [0.15, 4.05], T = [-1.25, 3.35], SEAT = 0.46;
const MOMENTS = {
  arrival: { time: 'dusk', lamp: 1, hearth: 1, soup: true, acorns: 'none', tens: 0, sack: true, notebook: 'none', letter: false, dog: true,
    people: { elzeard: { seat: E, turn: 180, does: 'eat_soup', look: 'table_things#bowl', wear: 'elzeard' },
      traveller: { seat: T, turn: 115, does: 'eat_soup', look: 'elzeard', wear: 'traveller' } } },
  button: { time: 'dusk', lamp: 1, hearth: 0.6, soup: false, acorns: 'pail', tens: 0, sack: false, notebook: 'none', letter: false, dog: true,
    people: { elzeard: { at: [0.5, 5.05], turn: 90, does: 'shave', look: 'shutter#mirror', wear: 'elzeard' },
      traveller: { seat: T, turn: 115, does: 'sit_table', look: 'elzeard', wear: 'traveller' } } },
  night: { time: 'night', lamp: 1, hearth: 0.4, soup: false, acorns: 'counting', tens: 9, sack: false, notebook: 'open', letter: true, dog: true,
    people: { elzeard: { seat: E, turn: 180, does: 'count_table', look: 'table_things#heap', wear: 'elzeard_61' },
      traveller: { seat: T, turn: 115, does: 'sit_table', look: 'table_things#heap', wear: 'traveller_26' } } },
  evening: { time: 'dusk', lamp: 1, hearth: 0.6, soup: false, acorns: 'counting', tens: 9, sack: false, notebook: 'shut', letter: false, dog: false,
    people: { elzeard: { seat: E, turn: 180, does: 'count_slow', look: 'table_things#heap', wear: 'elzeard_75' },
      traveller: { seat: T, turn: 115, does: 'sit_table', look: 'elzeard', wear: 'traveller_40' } } },
};
const PEOPLE = ['elzeard', 'traveller'];
const CARRIED = ['rod', 'satchel', 'flask'];
// a look of the cast as worn indoors: the hat off, what is carried outdoors left at the door
function indoors(name) {
  const look = scene.kit.cast.characters[name];
  return { ...look, hat: 'none', parts: (look.parts ?? []).filter(p => !CARRIED.includes(p)) };
}
function stage(moment) {
  const name = MOMENTS[moment] ? moment : 'arrival';
  const m = MOMENTS[name];
  for (const k of Object.keys(m)) if (k !== 'people') scene.set(k, m[k]);
  for (const k of ['counted', 'cracked_out', 'close', 'pail_push']) scene.set(k, 0);
  for (const id of PEOPLE) {
    const p = m.people[id];
    scene.set(`${id}_here`, !!p);
    if (!p) continue;
    const at = p.seat ?? p.at;
    scene.set(`${id}_a`, at[0]);
    scene.set(`${id}_d`, at[1]);
    scene.set(`${id}_on`, p.seat ? [at[0], at[1], SEAT] : null);
    scene.set(`${id}_turn`, p.turn);
    scene.set(`${id}_do`, p.does);
    scene.set(`${id}_look`, p.look ?? null);
    scene.set(`${id}_reach`, null);
    scene.set(`${id}_mood`, p.mood ?? 'neutral');
    scene.set(`${id}_with`, null);
    scene.set(`${id}_wear`, indoors(p.wear));
  }
  scene.set('staged', name);
}
if (scene.state.staged !== scene.state.moment) stage(scene.state.moment);
scene.on('change', 'moment', v => stage(v));
// the light follows the hour: the night's look at once when `time` changes (and as the scene opens)
const hour = t => scene.set('night', t === 'night' ? 1 : 0);
hour(scene.state.time);
scene.on('change', 'time', v => hour(v));
// the pieces (the game sets `beat`: modules/beats, lib.film)
scene.kit.beats.play(scene, scene.lib.film(scene));
