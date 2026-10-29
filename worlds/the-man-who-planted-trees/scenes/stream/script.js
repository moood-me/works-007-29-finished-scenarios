// The stream across the years — its moments (the key `moment`): what the place is that year (`year`, the water, the
// mist, the hives) and who is here, where they stand and look, what they wear. Laid out at once whenever `moment`
// changes, and as the scene opens if the moment is not the one last laid out (`staged`) — so a scene restored after a
// game changed its details keeps them. A game sets `moment` first, then any detail (notes.md: the moments).
//   dry        — the prologue and the first chapter: the bed dry and white with stones, the slope bare; the Traveller
//                (20) alone by the bed
//   water      — 2.2–2.4: six years on, the water running for the first time, the mist; Lina (23) at the water, the
//                Traveller (26) before her, Elzéard (61) far up by his hives (the stage-2 look)
//   far_edge   — 2.6: the rows of dead maples and the beeches planted after at the slope's far edge, right of the path;
//                Elzéard and the Traveller before them
//   meadow     — the third chapter: the valley a meadow, the wood grown up the slope, the willows big; Lina (37) and
//                the Traveller (40) by the water
//   delegation — 3.2: Lina leading Jan (40), the chief and the ranger up along the stream
const MOMENTS = {"dry": {"year": 0, "stream": false, "mist": 0, "hives": false, "people": {"traveller": {"at": [0.4, 6.4], "turn": 250, "look": [-2.8, 8.5, -0.3], "wear": "traveller"}}}, "water": {"year": 6, "stream": true, "mist": 1, "hives": true, "people": {"elzeard": {"at": [2.9, 15.6], "turn": 195, "look": "traveller"}, "traveller": {"at": [2.6, 5.8], "turn": 240, "look": "lina"}, "lina": {"at": [-1.0, 7.6], "turn": 120, "look": "traveller", "mood": "smile"}}}, "far_edge": {"year": 6, "stream": true, "mist": 0.3, "hives": true, "people": {"elzeard": {"at": [3.2, 10.2], "turn": 250, "look": "traveller"}, "traveller": {"at": [1.4, 9.4], "turn": 115, "look": "elzeard"}}}, "meadow": {"year": 20, "stream": true, "mist": 0, "hives": false, "people": {"traveller": {"at": [2.6, 5.8], "turn": 240, "look": "lina", "wear": "traveller_40"}, "lina": {"at": [-1.0, 7.6], "turn": 120, "look": "traveller", "wear": "lina_37"}}}, "delegation": {"year": 20, "stream": true, "mist": 0, "hives": false, "people": {"lina": {"at": [-0.2, 12.2], "turn": 140, "look": "chief", "wear": "lina_37"}, "chief": {"at": [2.4, 9.6], "turn": 260, "look": "lina", "mood": "smile"}, "ranger": {"at": [3.6, 10.6], "turn": 250, "look": "lina"}, "jan": {"at": [1.2, 8.4], "turn": 280, "look": "lina"}}}};
const PEOPLE = ["elzeard", "traveller", "lina", "jan", "chief", "ranger"];
function stage(moment) {
  const name = MOMENTS[moment] ? moment : 'water';
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
// the pieces (the game sets `beat`: modules/beats, lib.film) — each lays out its own start, never `moment`
scene.kit.beats.play(scene, scene.lib.film(scene));
