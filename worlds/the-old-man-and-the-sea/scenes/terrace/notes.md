# The Terrace

Stage 2 of the game (the look): С2, the Terrace at sundown of the 84th day (П.3) — under its roof on piles over the
bay the young fishermen laugh at the old man, the old ones are polite; the old man sits at his table with a beer, the
boy stands by him; the boy's father leans on Martin's counter; Martin behind it. People sit and stand; no motion of
people, no camera moves. Camera `picture`, horizon 0.42.

- **Where things are.** The viewer stands at the back of the Terrace looking out over the water. `relief.js`: the
  deck is the ground (0) as far as its front edge (`lib.EDGE`, 9.7 m), then the land falls under the bay (water
  `lib.WATER`, −1.6). `deck` the plank floor (a plane); `frame` the front over the water — posts, the rail with a net
  hung on it, the eave beam and the thatch's ragged ends; `roof` the underside overhead (a card laid flat, tilt −90:
  thatch across the rafters, two beams the lamps hang from). On the left `bar_wall` (shelves of rum, tins, glasses;
  the newspaper page with a ballplayer, point `clipping`), Martin's `counter` (point `top`), `counter_end`,
  `counter_top`. Tables: `table_top` (plane copies) and `table` (their fronts and legs), `chair` and `cans` copies —
  the old man's (copy 0), the young fishermen's (1), the old fisherman's (2).
- **Far.** `far_shore` — the village's side of the bay 380 m off on the left (its windows glow with `dusk`);
  the open Gulf on the right; two skiffs at anchor rocking (`moored_a` with its mast, `moored_b`); `sea` a mirror plane.
- **Sky** (`sky`): sundown — the sun about to touch the sea ahead-right (light `sun` from [28, 3]; its disc's
  `e.light` draws the path of light on the water), gold round it, rose and violet above, low banks of cloud gilded
  underneath; the blue evening with the first stars, cross-faded by `dusk`.
- **Light.** The sun low behind the people (rims, long shadows), the three hurricane lamps under the roof
  (`lamp_a` over the counter, `lamp_b` over the old man's table, `lamp_c` over the young fishermen's: `lib.lamp`,
  the glass a layer swaying a little in the wind, lights `lamp_a`…`lamp_c`) light the faces; look `dusk` puts the sun
  out — the Terrace warm in its lamplight against the violet bay.
- **People** (modules/cast): Santiago seated at his table (`sit_table`, `_on` the seat, hands on the table by
  `_reach`), looking at the boy, a faint smile; Manolin standing by him (`stand_easy`), looking at him; the father
  leaning his right forearm on the counter (`lean_counter`, `_reach` r on its top), watching the boy; Martin behind
  the counter (`behind_counter`, hands on its top by `_reach`), looking at the old man; two young fishermen at the
  middle table laughing at the old man (`fisher_a`, `fisher_b`: `sit_laugh`, b begun later in the loop); an old
  fisherman alone at the small table by the rail (`elder`: `sit_table`), looking at the old man politely.
- **Showcase**: `sundown`; `the boy asks` — "I could go with you again…", "No. You're with a lucky boat…"; `the
  father` — the boy looks round at his father, the father looks away to the bay, the old man too; `evening` (dusk);
  `sundown again`.
- **Keys.** `dusk` (sundown → the blue evening: the light's look, the sky, the windows across the bay).

## Not right yet / what the engine and services lack

- The motions from Kimodo come out near but not exact: `behind_counter` was asked as "both palms on the table" and
  came with the hands at the hips (its first take bent double, hands at the chest) — the hands are on the counter by
  `_reach`; `lean_counter`'s forearm lies on the counter only roughly (seen close, the arm goes into the counter's
  front). `sit_laugh` leans back and rocks; the laugh itself is the face (`laugh`). The boy's lean on the table (a
  take "hands on the table edge") came as hands on the knees and was left out: he stands, arms down.
- The father's head shake in П.3 (a motion) and anyone moving are not in this stage. The old man's beer is on the
  table, not in his hand (no part for a tin in the hand yet).
- The known gaps of the engine are kept clear of rather than got round: no hands on the knees, no cloth behind a back
  (Martin's apron is in front), no seated skirt, no fire particles (the lamps are glows and lights), no rope between
  people.
- The open water at sundown: a mirror shows no sky (its `fade`), so the bay keeps its own paint, dark blue, with the
  sun's path on it; a reflection of the gold sky is not in the engine.
- The roof's thatch underside reads close to boards; a real underside of palm thatch would want more texture.
