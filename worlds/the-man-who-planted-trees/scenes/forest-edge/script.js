// The forest's edge across the years — its moments (the key `moment`): what the place is that year (`year`, the
// stream, the light), what stands there (the hives or their stones, the felled edge, the bread, the Traveller's beeches,
// the board, a rod, a pail) and who is here, where they stand and look, what they wear and hold. Laid out at once
// whenever `moment` changes, and as the scene opens if the moment is not the one last laid out (`staged`) — so a scene
// restored after a game changed its details keeps them. A game sets `moment` first, then any detail of its branch
// (notes.md: the moments, and what a branch changes).
//   planting   — 1.1–1.4: an early morning, the slope bare, the stream dry, the sheep and the dog; Elzéard (55) with
//                his rod, the Traveller (20), a pail of acorns
//   grove      — 2.5: six years on, the young oaks above the head, the water back; Elzéard (61) by his hives across
//                the stream, the Traveller (26) on the near bank; Lina (23) placed at the edge, not here (Lina knows)
//   edge       — 3.1: fourteen years on, the grown forest; the Traveller (40) and Lina (37) with her pail; the bread on
//                the stone and the hives' empty stones (Lina knows); the man with the axe placed, not here
//   delegation — 3.2–3.3: the same, and Jan (40), the chief and the ranger come up with Lina (the stage-2 look)
//   stumps     — 3.5 on Silence: the lower edge felled, fresh stumps; Jan among them, Elzéard (75) coming down
//                between them with his rod, the Traveller and Lina on the near bank
//   board      — the final «The Board» (Road + Name): the protected wood, the board, two visitors at it, the
//                Traveller (50) with Elzéard's rod; his row of 24 beeches by the path
//   pupil      — the final «The Pupil» (Slope + Name): the board, his beeches on the meadow; the boy with the rod, the
//                Traveller (50), two visitors
//   two_rods   — the final «Two Rods» (Slope + Silence): his beeches above the head, the lower edge's old stumps and
//                young oaks; Elzéard's rod in the ground, the Traveller (50) with his own, the pail of seeds in notebook
//                leaves
const MOMENTS = {"planting": {"year": 0, "stream": false, "mist": 0.4, "morning": 1, "smoke": 0.5, "sheep": true, "dog": true, "hives": "none", "stumps": "none", "bread": false, "stump_bread": false, "own_oak": false, "beeches": "none", "beech_row": 0, "board": false, "rod_ground": false, "rod_a": -0.2, "rod_d": 11.8, "pail": "acorns", "pail_a": -1.3, "pail_d": 11.0, "people": {"elzeard": {"at": [-0.7, 11.2], "turn": 120, "look": "traveller", "wear": "elzeard", "with": ["rod"]}, "traveller": {"at": [1.3, 10.6], "turn": 240, "look": "elzeard", "wear": "traveller"}}}, "grove": {"year": 6, "stream": true, "mist": 0, "morning": 0, "smoke": 0, "sheep": false, "dog": false, "hives": "hives", "stumps": "none", "bread": false, "stump_bread": false, "own_oak": false, "beeches": "none", "beech_row": 0, "board": false, "rod_ground": false, "pail": "none", "people": {"elzeard": {"at": [-5.3, 11.4], "turn": 120, "look": "traveller", "wear": "elzeard_61"}, "traveller": {"at": [-1.0, 9.6], "turn": 245, "look": "elzeard", "wear": "traveller_26"}, "lina": {"at": [0.5, 13.2], "turn": 215, "look": "elzeard", "wear": "lina_23", "here": false}}}, "edge": {"year": 20, "stream": true, "mist": 0, "morning": 0, "smoke": 1, "sheep": false, "dog": false, "hives": "stands", "stumps": "none", "bread": true, "stump_bread": false, "own_oak": false, "beeches": "none", "beech_row": 13, "board": false, "rod_ground": false, "pail": "none", "people": {"traveller": {"at": [0.2, 6.2], "turn": 250, "look": "lina", "mood": "smile"}, "lina": {"at": [-1.2, 7.4], "turn": 140, "look": "traveller"}, "axeman": {"at": [-4.4, 12.6], "turn": 110, "look": "lina", "here": false}}}, "delegation": {"year": 20, "stream": true, "mist": 0, "morning": 0, "smoke": 1, "sheep": false, "dog": false, "hives": "stands", "stumps": "none", "bread": true, "stump_bread": false, "own_oak": false, "beeches": "none", "beech_row": 13, "board": false, "rod_ground": false, "pail": "none", "people": {"traveller": {"at": [0.2, 6.2], "turn": 110, "look": [2.3, 6.4, 1.62], "mood": "smile"}, "jan": {"at": [2.3, 6.4], "turn": 252, "look": [0.2, 6.2, 1.58]}, "lina": {"at": [-1.2, 7.4], "turn": 140, "look": [0.2, 6.2, 1.58]}, "chief": {"at": [3.4, 8.4], "turn": 215, "look": [-6, 22, 7], "mood": "smile"}, "ranger": {"at": [3.6, 10.0], "turn": 210, "look": [-6, 22, 7]}}}, "stumps": {"year": 20, "stream": true, "mist": 0, "morning": 0, "smoke": 1, "sheep": false, "dog": false, "hives": "stands", "stumps": "lower", "bread": false, "stump_bread": false, "own_oak": false, "beeches": "none", "beech_row": 14, "board": false, "rod_ground": false, "pail": "none", "people": {"jan": {"at": [-5.6, 12.4], "turn": 150, "look": [-7.09, 16.59, 0.42], "mood": "sad"}, "elzeard": {"at": [-6.6, 17.8], "turn": 160, "look": "traveller"}, "traveller": {"at": [-1.6, 9.0], "turn": 225, "look": "jan"}, "lina": {"at": [-0.1, 7.6], "turn": 205, "look": "elzeard"}}}, "board": {"year": 30, "stream": true, "mist": 0, "morning": 0, "smoke": 1, "sheep": false, "dog": false, "hives": "none", "stumps": "none", "bread": false, "stump_bread": false, "own_oak": false, "beeches": "row", "beech_row": 24, "board": true, "rod_ground": false, "pail": "none", "people": {"traveller": {"at": [1.2, 8.2], "turn": 165, "look": "board#plate", "wear": "traveller_50", "with": ["rod"]}, "visitor_a": {"at": [-1.5, 12.6], "turn": 75, "look": "visitor_b"}, "visitor_b": {"at": [0.5, 12.3], "turn": 265, "look": "board#plate", "mood": "thinking"}}}, "pupil": {"year": 30, "stream": true, "mist": 0, "morning": 0, "smoke": 1, "sheep": false, "dog": false, "hives": "none", "stumps": "none", "bread": false, "stump_bread": false, "own_oak": false, "beeches": "slope", "beech_row": 0, "board": true, "rod_ground": false, "pail": "none", "people": {"traveller": {"at": [0.6, 8.0], "turn": 200, "look": "boy", "wear": "traveller_50"}, "boy": {"at": [1.6, 7.2], "turn": 245, "look": "traveller", "with": ["rod"], "mood": "smile"}, "visitor_a": {"at": [-0.7, 9.2], "turn": 160, "look": "traveller"}, "visitor_b": {"at": [2.6, 8.6], "turn": 215, "look": "boy"}}}, "two_rods": {"year": 30, "stream": true, "mist": 0, "morning": 0, "smoke": 1, "sheep": false, "dog": false, "hives": "none", "stumps": "lower_old", "bread": false, "stump_bread": false, "own_oak": false, "beeches": "slope", "beech_row": 0, "board": false, "rod_ground": true, "rod_a": 2.3, "rod_d": 11.8, "pail": "leaves", "pail_a": 1.7, "pail_d": 10.9, "people": {"traveller": {"at": [1.2, 10.4], "turn": 200, "look": "rod#top", "wear": "traveller_50", "with": ["rod"]}}}};
const PEOPLE = ["elzeard", "traveller", "lina", "jan", "chief", "ranger", "axeman", "visitor_a", "visitor_b", "boy"];
function stage(moment) {
  const name = MOMENTS[moment] ? moment : 'delegation';
  const m = MOMENTS[name];
  for (const k of Object.keys(m)) if (k !== 'people') scene.set(k, m[k]);
  for (const id of PEOPLE) {
    const p = m.people[id];
    scene.set(`${id}_here`, !!p && p.here !== false);
    if (!p) continue;
    scene.set(`${id}_a`, p.at[0]);
    scene.set(`${id}_d`, p.at[1]);
    scene.set(`${id}_turn`, p.turn);
    scene.set(`${id}_do`, p.does ?? 'stand');
    scene.set(`${id}_look`, p.look ?? null);
    scene.set(`${id}_mood`, p.mood ?? 'neutral');
    scene.set(`${id}_with`, p.with ?? null);
    scene.set(`${id}_wear`, p.wear ? scene.kit.cast.characters[p.wear] : null);
  }
  scene.set('staged', name);
}
if (scene.state.staged !== scene.state.moment) stage(scene.state.moment);
scene.on('change', 'moment', (v) => stage(v));
// where the next beech of the Road's row goes (the unseen `beech_next`): the place after the last, by `beech_row`
function next() {
  const [a, d] = scene.lib.rowPlace(Math.max(0, Math.round(scene.state.beech_row || 0)));
  scene.set('beech_next_a', a);
  scene.set('beech_next_d', d);
}
next();
scene.on('change', 'beech_row', next);
