# The Tree

Stage 2 of the game (the look), the second scene: that country (С5 of the scenario) — the meadow and the Tree, alive,
the same Tree as on the canvas; the forest behind it, the Mountains with snow far off; its unfinished edges in mist.
The moment is chapter 5 (5.1–5.6) gathered into one picture: Niggle has come to his Tree, Parish (no stick, no limp
there) has begun the garden, the Guide waits on the path to the Mountains. People stand: a look, a pose, the face's
mood; no one moves, no camera moves.

- **Where things are.** The viewer stands on the meadow (camera `picture`, horizon 0.58 — much sky). The Tree
  (`tree`, a card) at 12 m, its trunk 3.6 m to the left, 9.6 m high, its crown cut a little by the frame's top. Its
  long low bough reaches right; at its tip hangs the first leaf (`tree#leaf`, 2.05 m up at across 0.6) with a dew
  glint (layer `dew`). Behind: the forest (`forest`, copies at 46–90 m), the far mist at its left (`far_mist`, the
  edge not yet there), the far hills (`hills`, 1.4 km), the Mountains (`mountains`, 6 km, peaks to 2.25 km, snow).
  The meadow (`meadow`, one plane 2.8 × 1.4 km) with flowers near and the path from the right foreground winding to
  the Mountains. The garden begun: the dug ground (`beds`, a hole waiting), three saplings on the grass (`saplings`),
  the first planted (`sapling`, straight), the bundle of boards "for the house" (`boards`). Long grass near
  (`grass`, copies).
- **Light.** A clear timeless morning: the sun from the right (`sun`, bearing 118, 32° up) — the Tree's shadow lies
  left on the grass; light air (haze 0.07). `glow` 0…1 — the light goes golden and rose, the snow on the Mountains
  burns (a look; the sky and the Mountains repaint in 4 steps). `mist` 0…1 — the mist at the Tree's roots and over
  the far edge (their layers' alpha, by animate).
- **Motion.** The crown in four layers and the low bough sway apart in the wind (`crown_l`, `crown_m`, `crown_r`,
  `crown_top`, `bough`), the first leaf more (`first`), the dew flickers; the grass and the planted sapling bend;
  clouds drift; the mists sway along.
- **People** (modules/cast, style `niggle`): Niggle under the bough in profile, his right hand up to the first leaf
  (`reach_up`, `niggle_reach: {r: "tree#leaf"}`), smiling; Parish by the dug ground, his spade stuck in the earth by
  his right foot, his hand on its grip (`stand_spade`, `parish_with: ["moustache", "spade"]` — no stick here),
  looking at the Tree, surprised ("Ишь"); the Guide on the path (`guide`, new in the cast: a grey-green shepherd's
  cloak, a broad hat, the staff with a crook; `hold_staff`), looking at Niggle.
- **Showcase**: the Tree (Niggle at his leaf, Parish at the Tree, the Guide at Niggle); neighbours (Niggle and Parish
  look at each other); the Mountains (Niggle looks away to them, the mist lifts, the snow burns); back.

## What is not right yet

- The mist reads partly as light: lit by the sun, the pale band at the roots and the far edge glow brighter than the
  grass, more a haze of light than unprimed canvas.
- The crown is soft overlapping rounds of wash with leaves on them — it reads as a tree, but its rounds are a little
  "bubbly", and the forest behind is the same rounds, so the Tree stands out from it by size more than by kind.
- The people are small (Niggle ~ 1/7 of the frame's height): the Tree is the subject; faces read only on Parish.
  Close views of them need the camera, which this stage has none of.
- Kimodo would not give Parish leaning on his spade with both hands on its top (three asks: hands on hips, bent
  double, arms out) — he stands with one hand low on the grip instead. The guide's and Niggle's poses came as asked.
- Known limits of the engine, not got round here: a motion from Kimodo is turned toward a wall in a scene; hands on
  the knees in a module's clip go out to the sides; cloth does not hang behind the back (the Guide's cloak, seen from
  the front, is fine); a sitting woman's skirt is a lump; particles `fire` are balls; no rope between two people.
