// Jack's room: its moments (the key `moment`) and what the menagerie's choice left (the key `menagerie`) — the room's
// light, what stands where, who is here and how — set at once as the scene opens and whenever either changes. Each
// moment is one of the scenario's (notes.md has the table); the game sets `moment` and `menagerie`, then, if it
// likes, any key of the room or of a person over them.
//   bedtime — the prologue's night (П.4): Jack sitting up on his bed with Laohu by him, Mom sitting by his pillow.
//   night   — chapter 1's last night (1.6): Jack on his bed over the empty shoe box, the animals on the shelf, Laohu
//             taped on the pillow; with `menagerie` set, as each choice leaves the room.
//   hatch   — the same night: the box shut on the stool under the open attic hatch in the hall, Jack under it.
//   ran     — 1.4 after «Убежать», at dusk: Jack at his window, the scraps on the sill; Dad at his shut door with the
//             plate of buns.
//   call    — 1.5 after «Убежать», in the evening: Mom at his open door; Jack by the window with the scraps.
//   packed  — chapter 3 (3.2), the house sold: the room emptied, cartons, day; Jack grown; by `menagerie` the box down
//             from the attic with the dusty animals and Laohu out of it, or Laohu alone on the bare shelf (and with
//             «весь дом» Dad in the doorway with a paper frog).
// `menagerie`: shelf — not chosen yet; attic (0), laohu (1), house (2) — the game's «Зверинец».
const cast = scene.kit.cast.characters;
const BED = 0.48;
function keys(moment, menagerie) {
  const m = menagerie;
  const k = {
    night: 0, day: 0, lamp: 0, hall: 0,
    packed: false, shelf: 'animals', zoo: false, scraps: false,
    box: 'none', box_a: -1.45, box_d: 3.0, box_e: 0, stir: false,
    hatch: 0, door: 270,
    goats_a: -0.55, goats_d: 4.12, goats_e: 0.88,
    laohu_out: true, laohu_a: -2.4, laohu_d: 3.88, laohu_e: 0.59,
    laohu_tape: true, laohu_fold: false, laohu_dust: false, laohu_asleep: false,
    dad_frog: false,
    jack_here: true, jack_wear: null, jack_with: null, jack_on: null, jack_do: 'stand', jack_mood: 'neutral',
    mom_here: false, mom_wear: { parts: [] }, mom_with: null, mom_on: null, mom_do: 'stand', mom_mood: 'neutral',
    dad_here: false, dad_wear: null, dad_with: null, dad_on: null, dad_do: 'stand', dad_mood: 'neutral',
  };
  const person = (id, a, d, turn, look) => Object.assign(k, { [`${id}_here`]: true, [`${id}_a`]: a, [`${id}_d`]: d, [`${id}_turn`]: turn, [`${id}_look`]: look });
  const seat = (id, a, d, turn, look) => {
    person(id, a, d, turn, look);
    k[`${id}_on`] = [a, d, BED];
    k[`${id}_do`] = 'sitting_on_bed';
  };
  if (moment === 'bedtime') {
    Object.assign(k, { night: 1, lamp: 1, laohu_tape: false, laohu_a: -2.4, laohu_d: 2.92, laohu_e: BED + 0.01 });
    seat('jack', -2.05, 3.05, 200, 'laohu');
    k.jack_mood = 'tired';
    seat('mom', -2.05, 3.62, 200, 'jack');
    k.mom_mood = 'smile';
  } else if (moment === 'hatch') {
    Object.assign(k, { night: 1, lamp: 1, hall: 1, door: 180, hatch: 1, box: 'shut', box_a: 1.5, box_d: 3.36, box_e: 0.45, shelf: 'empty' });
    if (m === 'laohu') Object.assign(k, { laohu_asleep: true });
    else Object.assign(k, { laohu_out: false, stir: true });
    person('jack', 1.08, 3.05, 200, 'ceiling_hall#hatch');
    k.jack_mood = 'sad';
  } else if (moment === 'ran') {
    Object.assign(k, { hall: 1, scraps: true, laohu_out: false });
    person('jack', -1.1, 3.62, 20, [5, 8, -0.6]);
    k.jack_mood = 'sad';
    person('dad', 1.05, 3.3, 235, 'door#door');
    Object.assign(k, { dad_do: 'offer_hand', dad_with: ['plate'], dad_mood: 'sad' });
  } else if (moment === 'call') {
    Object.assign(k, { night: 0.5, lamp: 1, hall: 1, door: 180, laohu_out: false });
    person('jack', -1.1, 3.55, 120, 'mom');
    Object.assign(k, { jack_do: 'holding_toy', jack_with: ['scraps'], jack_mood: 'sad' });
    person('mom', 0.9, 3.35, 250, 'jack');
  } else if (moment === 'packed') {
    Object.assign(k, { day: 1, packed: true, shelf: 'bare', door: 180, laohu_fold: true, jack_wear: { ...cast.jack_grown, parts: [] } });
    if (m === 'laohu' || m === 'house') {
      Object.assign(k, { laohu_a: -1.6, laohu_d: 4.12, laohu_e: 1.285 });
      person('jack', -0.75, 3.35, 250, 'laohu');
      if (m === 'house') {
        person('dad', 0.95, 3.3, 245, 'jack');
        Object.assign(k, { dad_wear: { ...cast.dad_grey, parts: [] }, dad_do: 'holding_toy', dad_frog: true });
      }
    } else {
      Object.assign(k, { hatch: 1, box: 'opened', box_a: -1.3, box_d: 3.2, laohu_a: -0.85, laohu_d: 3.1, laohu_e: 0, laohu_dust: true });
      person('jack', -0.55, 3.6, 220, 'laohu');
      k.jack_mood = 'surprised';
    }
  } else {
    // night (1.6)
    Object.assign(k, { night: 1, lamp: 1, box: 'empty' });
    seat('jack', -2.05, 3.25, 160, 'shoebox#box');
    k.jack_mood = 'sad';
    if (m === 'attic') Object.assign(k, { box: 'shut', stir: true, shelf: 'empty', laohu_out: false });
    else if (m === 'laohu') Object.assign(k, { box: 'shut', shelf: 'empty', laohu_asleep: true });
    else if (m === 'house') {
      Object.assign(k, { zoo: true, shelf: 'deer', goats_a: -2.45, goats_d: 2.85, goats_e: BED + 0.01 });
      k.jack_look = 'goats';
      k.jack_mood = 'smile';
    }
  }
  return k;
}
function stage() {
  const k = keys(scene.state.moment, scene.state.menagerie);
  for (const key in k) scene.set(key, k[key]);
}
stage();
scene.on('change', 'moment', () => stage());
scene.on('change', 'menagerie', () => stage());
