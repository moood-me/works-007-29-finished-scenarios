# The Square by the River

Stage 2 of the game (the look): М2, the square by the river on a Friday at midday in the rain (1.1, 2.2: the launch
in with the mail; П.4: the same square, the barracks' balcony) — the town outside the colonel's house, and the
people of the town as they are in the story: the colonel under his torn umbrella, the doctor in white with the
newspapers, Don Sabas under his whole umbrella, the postmaster at the wicket, the policeman on the balcony. No one
moves but a look; no camera moves.

- **Where things are.** The viewer stands on the square (camera `picture`, horizon 0.48). The square is a plane at 0
  (`square`: wet sandy earth, the carts' ruts to the landing stage, footprints into the post office, fallen almond
  leaves), its puddles a mirror plane of their own just over it (`puddles`). `relief.js`: the land drops at the
  embankment, 14.5 m ahead, to the river at −0.9 (`bank` is its stone face, the steps down by the landing stage). The
  river (`river`: a mirror plane 150 m across; its `current` layer drifts the current's lines and rafts of water
  hyacinth downriver) and the far bank 160 m off (`far_bank`: forest, two huts on stilts, a canoe).
- **The post office** on the left (`post_office`, facing 172: ochre wash over a red-brown band, a tiled hipped roof,
  the shut double door, a board of notices, a barred window; the wicket cut through at x 0.9…1.8, sill 0.95). On it:
  `wicket` (its frame, sill, shutters), `post_inside` (the room seen through it, 1.4 m in: pigeonholes, a calendar,
  the lamp — light `post_lamp`), `eave` (the zinc eave seen from below: a card laid face down) and `eave_posts`. The
  daylight in at the wicket is the point light `post_day` just inside it.
- **The barracks** on the right (`barracks`, facing 232: two storeys, the arched door shut, barred windows, the open
  door onto the balcony); `balcony` (a walk plane 3.1 m up — the policeman stands on it) and `balcony_rail`.
- **The river side**: the landing stage (`pier`, a walk plane, and `pier_side`, its piles), the mail launch moored at
  its end broadside to us (`launch`: one layer its animate rocks; smoke `launch_smoke` from `launch#funnel`), the
  almond trees (`almond`, copies; their tiers a wind layer).
- **Weather and light**: rain over the square and over the river (`rain`, `rain_river`, key `rain`), the grey midday
  (`day`, a far light from behind the viewer's left), haze 0.16.
- **People** (modules/cast, style `macondo`): the colonel (`stand_umbrella`: upright, his right hand holding the
  umbrella's handle at his waist; part `umbrella_torn`; a canopy is one dome, which the engine draws from both sides,
  so its underside shows from below), looking past us; the doctor (`stand_papers`, `newspapers`); Don Sabas
  (`stand_umbrella_left`, `umbrella_whole`, his watch chain), smiling at the colonel; the postmaster behind the wicket
  (`lean_counter`, `inside`); the policeman on the balcony (`stand_rifle`, `rifle`, a cap), looking down at the
  colonel. Keys `<id>_look`, `<id>_mood`, `<id>_with`.
- **Showcase**: nothing has come — the postmaster looks down, the colonel at the ground; he looks at Don Sabas, who
  laughs; back. The colonel looks only within reach of his head and waist: the wicket and the balcony are behind him.

## What is not right yet

- The colonel's torn cloth shows little from here (the tear is on its far side); the rain falls through both
  umbrellas onto the people's shoulders — there is no shelter from particles.
- The colonel's and Don Sabas's hands are where Kimodo put them for "holding an umbrella at chest height": the shaft
  runs from the hand to over the head, so it leans across the body more than a man would hold it.
- No drips from the eave and no rings of rain on the puddles (only the rain's splash).
- The doctor's newspapers are a small flat bundle along his forearm and hardly read at this distance.
- Known in the engine and not met here (no one sits, no fire, no rope, no cloth hung behind): a Kimodo motion put in a
  scene turning to a wall, hands in the lap sliding to the sides in a module's clip, cloth that does not hang behind,
  a sitting woman's skirt a lump, fire particles as balls, no rope between two people. The launch is moored with no
  rope for the same want.
