// The shepherd's house across the years — its moments (the key `moment`): the hour (`time`: the sky and the light's
// looks), the lamp and the hearth, what stands round the house (the sheep or the hives, the dog, the rod, the bread on
// the step, the door, the trodden path, the seedlings by the porch — or, in the epilogue on the Name, the hut beyond
// the ridge in its place) and who is here, where they stand and look, what they wear. Laid out at once whenever
// `moment` changes, and as the scene opens if the moment is not the one last laid out (`staged`) — so a scene
// restored after a game changed its details keeps them. A game sets `moment` first, then any detail (notes.md).
//   arrival      — П.3: dusk, the lamp lit, the sheep; Elzéard (55) at his door, the Traveller (20) come up (the
//                  stage-2 look; Lina placed, not here)
//   leaving      — 1.6: dawn, the Traveller (20) going, Elzéard (55) at the door
//   night        — 2.7: six years on, night, the moon, the lamp; the hives; Elzéard (61), the Traveller (26)
//   evening      — 3.4: fourteen years on, dusk, the lamp; Elzéard (75), the Traveller (40)
//   ranger       — 3.5 on the Name: the morning the young ranger comes; Elzéard (75), the Traveller (40)
//   empty        — 3.5 on the Name, later: the path trodden, the house empty, its hives gone, the door open; two
//                  visitors at the door; the Traveller (40)
//   last_silence — the epilogue on Silence: day, the hives, the bread on the step, seedlings by the porch; Elzéard
//                  (85), the Traveller (50)
//   hut          — the epilogue on the Name: the hut beyond the ridge, the growth behind it, the new seedlings before
//                  it; Elzéard (85) finishing a row, the Traveller (50)
const MOMENTS = {"arrival": {"time": "dusk", "lamp": 1, "hearth": 1, "sheep": true, "hives": false, "dog": true, "rod_ground": true, "bread_step": false, "door": "open", "trodden": false, "porch_saplings": false, "hut": false, "people": {"elzeard": {"at": [1.0, 5.6], "turn": 240, "does": "hands_behind", "look": "traveller"}, "traveller": {"at": [-0.6, 4.9], "turn": 110, "look": "elzeard"}, "lina": {"at": [-2.2, 5.5], "turn": 120, "look": "elzeard", "here": false}}}, "leaving": {"time": "dawn", "lamp": 0, "hearth": 0.5, "sheep": true, "hives": false, "dog": true, "rod_ground": true, "bread_step": false, "door": "open", "trodden": false, "porch_saplings": false, "hut": false, "people": {"elzeard": {"at": [1.7, 7.0], "turn": 215, "look": "traveller"}, "traveller": {"at": [-1.3, 5.2], "turn": 125, "look": "elzeard"}}}, "night": {"time": "night", "lamp": 1, "hearth": 1, "sheep": false, "hives": true, "dog": true, "rod_ground": false, "bread_step": false, "door": "open", "trodden": false, "porch_saplings": false, "hut": false, "people": {"elzeard": {"at": [1.5, 6.5], "turn": 235, "look": "traveller", "wear": "elzeard_61"}, "traveller": {"at": [-0.2, 5.6], "turn": 115, "look": "elzeard", "wear": "traveller_26"}}}, "evening": {"time": "dusk", "lamp": 1, "hearth": 1, "sheep": false, "hives": true, "dog": false, "rod_ground": false, "bread_step": false, "door": "open", "trodden": false, "porch_saplings": false, "hut": false, "people": {"elzeard": {"at": [1.5, 6.5], "turn": 235, "look": "traveller", "wear": "elzeard_75"}, "traveller": {"at": [-0.2, 5.6], "turn": 115, "look": "elzeard", "wear": "traveller_40"}}}, "ranger": {"time": "day", "lamp": 0, "hearth": 0.6, "sheep": false, "hives": true, "dog": false, "rod_ground": false, "bread_step": false, "door": "open", "trodden": false, "porch_saplings": false, "hut": false, "people": {"elzeard": {"at": [1.4, 6.9], "turn": 255, "look": "ranger", "wear": "elzeard_75"}, "ranger": {"at": [-0.4, 6.6], "turn": 100, "look": "elzeard"}, "traveller": {"at": [-1.9, 5.0], "turn": 135, "look": "ranger", "wear": "traveller_40"}}}, "empty": {"time": "day", "lamp": 0, "hearth": 0, "sheep": false, "hives": false, "dog": false, "rod_ground": false, "bread_step": false, "door": "open", "trodden": true, "porch_saplings": false, "hut": false, "people": {"visitor_a": {"at": [1.2, 7.1], "turn": 110, "look": "visitor_b"}, "visitor_b": {"at": [3.3, 7.0], "turn": 250, "look": "visitor_a", "mood": "thinking"}, "traveller": {"at": [-0.8, 5.0], "turn": 150, "look": [2.4, 8.2, 1.2], "wear": "traveller_40", "mood": "sad"}}}, "last_silence": {"time": "day", "lamp": 0, "hearth": 1, "sheep": false, "hives": true, "dog": false, "rod_ground": false, "bread_step": true, "door": "open", "trodden": false, "porch_saplings": true, "hut": false, "people": {"elzeard": {"at": [1.2, 6.5], "turn": 230, "look": "traveller", "wear": "elzeard_85"}, "traveller": {"at": [-0.4, 5.5], "turn": 120, "look": "elzeard", "wear": "traveller_50"}}}, "hut": {"time": "day", "lamp": 0, "hearth": 0, "sheep": false, "hives": false, "dog": false, "rod_ground": false, "bread_step": false, "door": "open", "trodden": false, "porch_saplings": false, "hut": true, "people": {"elzeard": {"at": [-0.9, 5.0], "turn": 115, "look": "traveller", "wear": "elzeard_85"}, "traveller": {"at": [1.6, 4.6], "turn": 245, "look": "elzeard", "wear": "traveller_50"}}}};
const PEOPLE = ["elzeard", "traveller", "lina", "ranger", "visitor_a", "visitor_b"];
function stage(moment) {
  const name = MOMENTS[moment] ? moment : 'arrival';
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
// the light follows the hour: its looks set at once when `time` changes (and as the scene opens)
const LOOKS = { dusk: [0, 0, 0], dawn: [1, 0, 0], day: [0, 1, 0], night: [0, 0, 1] };
function hour(t) {
  const [dawn, day, night] = LOOKS[t] ?? LOOKS.dusk;
  scene.set('dawn', dawn);
  scene.set('day', day);
  scene.set('night', night);
}
hour(scene.state.time);
scene.on('change', 'time', (v) => hour(v));
// the pieces (the game sets `beat`: modules/beats, lib.film) — each lays out its own start, never `moment`
scene.kit.beats.play(scene, scene.lib.film(scene));
