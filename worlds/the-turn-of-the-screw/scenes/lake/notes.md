# The Lake

Stage 2 of the game (the look): the lake at Bly (С4) seen from its far side, late October, an afternoon — the moment
of 3.5: the boat found drawn up in the reeds, Flora by it with a handful of bracken, Mrs Grose come round the water
after her, the governess — and across the water, by the bench where the governess sat sewing in July, Miss Jessel.
No motion of people, no camera moves.

- **Where things are.** The viewer stands on the far bank among the reeds (camera `picture`, horizon 0.52). The land
  is `relief.js` — this bank flat, down under the water from 5.5 m, up again to the near shore at 22–25.5 m, on up
  gently toward the house — painted by the draped plane `land` (this bank's tawny grass, russet bracken and fallen
  leaves; the mud at both edges; the near shore's grass, its path, leaves under the trees; the park and the autumn
  fields). `water` — a level plane at −0.35 m (a plane's `elevation` is over the scene's 0, not over the land under
  its middle), 5.2–25.2 m ahead, a mirror (`reflect`: 0.5, rough 0.25, ripple 0.12, no fade), a few leaves floating
  near this bank.
- **This bank.** `boat` — Flora's boat, the old flat-bottomed one, painted in three-quarter view on one card (bow to
  the left, its `#bow` point; its unnamed point the thwart); `reeds` (copies; each a bed of straw-coloured stalks,
  leaves and plumes — lib.js `reed` — bending in the wind), framing both sides and around the boat.
- **The near shore** across the water: `bench` (`#seat`), `far_reeds` standing in the water's edge, the `willow`
  leaning over the water (its fronds strings of narrow leaves, swaying), `birches` (yellow, thinning), `yews` (near
  black), and behind, the `trees` — copies of one russet oak, tinted. `near_oak` on this bank far right frames the
  top; `leaves` fall from it. Over the gap in the trees (bearing ~7°) Bly's old `tower` far off (`#top`), its stone
  coursed, catching the sun — kept clear of trees on purpose: what stands at that bearing within ~90 m is low.
- **People** (cast: modules/cast). Flora (−0.8, 3.6) by the boat, `hold_before`, the bracken in her hands
  (`flora_with: ["fern"]`), looking up at the governess (`smile`). Mrs Grose (0.3, 4.15), `hands_clasped` on her
  apron, looking at Flora (`surprised`: "the boat — she wasn't to!"). The governess (1.35, 3.5), right, her back
  three-quarters to us, `hand_at_waist`, staring across at Miss Jessel (`afraid`). Miss Jessel (−3.6, 25) by the
  bench, `stand_still`, looking at Flora (`sad`): the only dark upright thing on the tawny bank. Each sees another:
  the governess Jessel, Grose Flora, Flora the governess's face (scenario 3.5). `jessel_here` (the engine's
  `<id>_here`) takes her away.
- **What moves.** The people breathing, the reeds, the willow's fronds and the crowns in the air, the clouds drifting,
  leaves falling from the oak, the water's ripples in its mirror.
- **Light.** The sun low behind the viewer on the left (`sun`, from bearing 215, 22° up, pale gold): faces toward us
  lit, shadows long ahead to the right; the sky a high pale blue going whitish to the horizon; saturation 0.88 so the
  autumn does not shout. `bounce` 0.3, a light haze.

## What is not right yet

- The governess is seen from behind: a viewer here cannot see both her face and what she stares at (Miss Jessel
  must be within the frame across the water). Her face is the lawn's.
- Miss Jessel is small (about 60 px tall in a 900-px frame) — she is across the water; a game's close shot frames her.
- Kimodo gave the governess a hand at the waist, not at the chest as asked (`hand_at_waist` is what it is).
- Mrs Grose's apron (cast garment `housedress`) lies on the skirt by working out where the skirt hangs from the
  trunk's hips section and its flare — the cast does not get the skirt's own rings, so a skirt hung wider round the
  legs (another stance) may come through the apron.
- The trees are the lawn's leaf clumps in autumn colours; dense, a little bubbly.
