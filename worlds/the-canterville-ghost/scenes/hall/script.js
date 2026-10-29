// The hall's moments (the key `moment`): who is here, where they stand and how, what they hold and wear, the light
// (night by the candles, or day through the open front door), the clock, the panel, the doors, the carriage at the
// porch. Laid out at once whenever `moment` changes, and as the scene opens if the moment is not the one last laid out
// (`staged`) — so a scene restored after a game has changed its details keeps them. A game sets `moment` first, then
// any detail (pond_lantern, a person moved).
//   calling   — 4.2, the evening Virginia is missing: Mrs Otis at the stair's foot calling up it, in her shawl
//   waiting   — 4.2, later: Mrs Otis sitting in the armchair at the stair's foot in her shawl, not getting up
//               (`pond_lantern` 1: Washington's lantern by the pond in the window — the branch where she laughed)
//   midnight  — 4.6: the clock has struck twelve and stopped; the panel on the landing stands open, Virginia on the
//               landing in her riding habit with the little casket; Mr Otis (a candle held up) and Washington on the
//               stair, Mrs Otis at its foot, Cecil by the door, the twins before them — all looking up at her
//   departure — the morning of leaving (final «Пятно»): the front door open, the carriage at the porch, the family
//               gathering in the hall, Mrs Umney seeing them off; Virginia in her white frock
//   wedding   — years later (final «Свеча у стены»): the Duchess and Mr Otis by the open door, the Duke in it, the
//               carriage waiting
const MOMENTS = {"calling": {"day": 0, "candles": 1, "hour": 19.5, "clock_going": true, "panel": 180, "door_l": 180, "door_r": 180, "carriage": false, "pond_lantern": 0, "otis_candle": 0, "lantern_held": 0, "people": {"mrs_otis": {"at": [1.35, 6.0], "turn": 220, "does": "stand", "look": [-3.0, 7.2, 3.7], "mood": "afraid", "with": ["shawl"]}}}, "waiting": {"day": 0, "candles": 1, "hour": 21.25, "clock_going": true, "panel": 180, "door_l": 180, "door_r": 180, "carriage": false, "pond_lantern": 0, "otis_candle": 0, "lantern_held": 0, "people": {"mrs_otis": {"at": [0.7, 5.9], "on": [0.7, 5.9, 0.45], "turn": 180, "does": "brood", "mood": "sad", "with": ["shawl"]}}}, "midnight": {"day": 0, "candles": 1, "hour": 0, "clock_going": false, "panel": 250, "door_l": 180, "door_r": 180, "carriage": false, "pond_lantern": 0, "otis_candle": 1, "lantern_held": 0, "people": {"virginia": {"at": [-3.0, 7.2], "turn": 150, "does": "clasped", "look": "otis", "mood": "tired", "with": ["casket"]}, "otis": {"at": [-1.85, 7.2], "turn": 205, "does": "hold_candle", "look": "virginia", "mood": "surprised", "with": ["candle_l"]}, "washington": {"at": [-0.95, 7.2], "turn": 210, "does": "stand", "look": "virginia", "mood": "surprised"}, "mrs_otis": {"at": [1.2, 6.95], "turn": 220, "does": "clasped", "look": "virginia", "mood": "afraid", "with": ["shawl"]}, "cecil": {"at": [3.25, 7.45], "turn": 225, "does": "stand", "look": "virginia", "mood": "surprised"}, "twin_star": {"at": [1.95, 6.45], "turn": 225, "does": "stand", "look": "virginia", "mood": "surprised"}, "twin_stripes": {"at": [2.55, 6.95], "turn": 230, "does": "stand", "look": "virginia", "mood": "surprised"}}}, "departure": {"day": 1, "candles": 0, "hour": 9.0, "clock_going": true, "panel": 180, "door_l": 250, "door_r": 110, "carriage": true, "pond_lantern": 0, "otis_candle": 0, "lantern_held": 0, "people": {"virginia": {"at": [0.8, 5.8], "turn": 160, "does": "stand", "look": "otis", "mood": "sad", "wear": "virginia"}, "otis": {"at": [1.7, 6.3], "turn": 205, "does": "stand", "look": "virginia", "mood": "neutral"}, "mrs_otis": {"at": [2.55, 7.0], "turn": 190, "does": "stand", "look": "virginia", "mood": "neutral"}, "washington": {"at": [3.55, 6.75], "turn": 205, "does": "stand", "look": "twin_star", "mood": "smile"}, "twin_star": {"at": [2.65, 7.85], "turn": 200, "does": "stand", "look": "twin_stripes", "mood": "laugh"}, "twin_stripes": {"at": [3.2, 7.75], "turn": 170, "does": "stand", "look": "twin_star", "mood": "smile"}, "mrs_umney": {"at": [-1.0, 5.6], "turn": 160, "does": "clasped", "look": "virginia", "mood": "sad"}}}, "wedding": {"day": 1, "candles": 0, "hour": 11.0, "clock_going": true, "panel": 180, "door_l": 250, "door_r": 110, "carriage": true, "pond_lantern": 0, "otis_candle": 0, "lantern_held": 0, "people": {"virginia": {"at": [2.3, 6.9], "turn": 215, "does": "stand", "look": "otis", "mood": "neutral", "wear": "virginia_duchess"}, "otis": {"at": [1.25, 6.3], "turn": 135, "does": "stand", "look": "virginia", "mood": "sad"}, "cecil": {"at": [3.05, 8.1], "turn": 200, "does": "stand", "look": "otis", "mood": "neutral", "wear": "cecil_duke"}}}};
const PEOPLE = ["virginia", "otis", "mrs_otis", "washington", "twin_star", "twin_stripes", "cecil", "mrs_umney"];
function stage(moment) {
  const name = MOMENTS[moment] ? moment : 'midnight';
  const m = MOMENTS[name];
  for (const k of Object.keys(m)) if (k !== 'people') scene.set(k, m[k]);
  for (const id of PEOPLE) {
    const p = m.people[id];
    scene.set(`${id}_here`, !!p);
    if (!p) continue;
    scene.set(`${id}_a`, p.at[0]);
    scene.set(`${id}_d`, p.at[1]);
    scene.set(`${id}_turn`, p.turn);
    scene.set(`${id}_do`, p.does);
    scene.set(`${id}_look`, p.look ?? null);
    scene.set(`${id}_mood`, p.mood ?? 'neutral');
    scene.set(`${id}_with`, p.with ?? null);
    scene.set(`${id}_on`, p.on ?? null);
    scene.set(`${id}_wear`, p.wear ? scene.kit.cast.characters[p.wear] : null);
  }
  scene.set('staged', name);
}
if (scene.state.staged !== scene.state.moment) stage(scene.state.moment);
scene.on('change', 'moment', v => stage(v));
