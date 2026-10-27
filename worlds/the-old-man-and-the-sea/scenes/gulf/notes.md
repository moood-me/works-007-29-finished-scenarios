# The Gulf

Stage 2 of the game (the look): С4/С5, the skiff far out on the Gulf Stream with the fish on the line (chapters 1–2) —
noon, the night with the glow of Havana, and the third morning with the fish up alongside (2.7). The old man sits and
holds the line; no motion of people, no camera moves. Camera `picture`, horizon 0.55.

- **Where things are.** `lib.js`: the water at `WATER` (0.3 m — over the viewer's footing, which `relief.js` drops at
  once to the deep, so the eye is 1.4 m over the sea), and the skiff as numbers — `beam`, `sheer`, `keel` along its
  length and `section(t)`, a closed ring of the hull's section (outside, over the far gunwale, the inside, back over
  the near gunwale); `girth` — where on the ring its parts begin, for the painting. `sea` one mirror plane (the deep
  blue-violet near, paling toward the horizon; plankton specks, rows of yellow Sargasso weed, the swell's streaks).
- **The skiff** — an unseen anchor `boat` (5.4 m out, turned to 200°, its `tilt` the key `roll`: the scene's script
  rolls it a degree or two, slowly, never twice the same) carrying: `hull` — a form lofted over 17 sections
  (`e.kit.loft`, closed round: the painting is the hull unrolled — white, the blue strake, the dark weedy bottom;
  inside bare planking with its frames); `transom`; `thwart` (the stern seat); `floor` (unseen, `walk`: the floorboards
  his feet are on); `mast` (the sail furled on it, as on the beach); `line`.
- **The line** (`line`): a layer laid each frame from `santiago#hands` to where it goes into the water
  (`{"on": "boat", "at": [0.35, -2.06, 0]}`), and to `fish#mouth` as the fish comes up; a ring in the water where it
  enters. (e.point gives the same array each call: copy a point before asking the next.)
- **The fish** (`fish`): a card off the skiff's near side, longer than the skiff, the head and sword past the bow —
  his back, the folded dorsal and the top of the tail out of the water, the flank just under it darkened by the
  water and fading out into the sea's own paint a few hands down; `fish` 0…1 brings him up (his layer out of the
  blue and up a little) — 0, he is deep and unseen.
- **Sky** (`sky`): midday — the deep blue high sky, the white haze over the sea, small trade-wind cumuli along the
  horizon and fair-weather puffs higher, drifting; a man-of-war bird circling; the night (`night`): stars and the glow
  of Havana low on the right, cross-faded in the animate.
- **Light.** The sun high behind the viewer's left (`sun`, [-150, 52]); at night the moon behind the right (`moon`,
  `on`: `night`) lights his face blue; `glow_water` — the water's phosphorescence along the hull and round the
  stern, flickering, seen only at night.
- **People** (modules/cast): Santiago on the stern thwart (`santiago_on` in the boat's frame), `hold_line` (seated,
  holding a rope before him), his hands on the line by `_reach`, looking where it goes into the water.
- **Showcase**: `noon`; `to the fish` — "Fish, I love you and respect you very much…"; `night` — "I wish I had the
  boy."; `the third morning` — the fish comes up, "He is two feet longer than the skiff."; `the deep`.
- **Keys.** `night` (noon → the night), `fish` (the fish up alongside), `roll` (the script's).

## Not right yet / what the engine and services lack

- The line goes straight from his hands into the water. In the book it runs over his shoulders and across his back;
  a sack over the shoulders is cloth behind a back (it doesn't hang — a known gap), and the line round a body would
  be a part of the cast following his joints — not made at this stage.
- `hold_line` came from Kimodo as asked ("sitting on a bench, holding a rope with both hands in front of them"); its
  two takes asked as "a tired old person…" came bent double with the hands on the knees and were left out. The hands
  are on the line by `_reach`, so the motion gives the body and the breath.
- Water is a mirror over painted paint: nothing under it is seen through it. The fish's flank under the surface is
  painted as the water darkens it and fades into the sea's paint; his coming up is his layer brought out of that blue —
  not a fish seen rising through depth. A real view into the water (refraction, depth) is not in the engine.
- The mirror shows no sky: the open sea keeps its own paint (the horizon's pale band is painted).
- The skiff rolls by its anchor's `tilt`; it does not heave or pitch.
