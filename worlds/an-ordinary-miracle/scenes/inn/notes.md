# The Inn «Emilia» — engine 3

The third scene of «An Ordinary Miracle» (Schwartz, 1954; the game's scenario:
docs/new-games/obyknovennoe-chudo/scenario.md, §4 place 3, «Трактир „Эмилия“»). Stage 2 of writing the game — the look:
the hall on a blizzard evening, the moment of II-2 («Эмилия»): Emilia has come in last out of the snow and stands
inside the open door; Emil behind his counter has frozen with the mug he is rubbing, looking at her; the Princess
(her coachman's cloak and hat thrown on the bench under the window) stands by the frosted window and watches the
young man; he sits drying on the low bench at the hearth, looking into the fire; the Hunter on his stool in the
middle holds his gun upright between his knees and glares at the young man, his dog at his feet growling at him.
A still picture (`picture`): people stand or sit and breathe (Emil's hands work the mug); the fire burns (particles
`fire`, `embers`, the coals' flicker), the counter's candle sways, the lanterns swing a little (the one by the door
more: the draught), the dog breathes and its head shivers with the growl, the snow drives past the window and the
door (`blizzard`), veils of snow drift across the sky. No script, no showcase, no caption.

## The look

The same storybook in gouache as the yard and the Master's room, but another house: an inn of the mountains —
whitewashed plaster between dark oak timbers, a fireplace of rounded river stones, a gallery with turned balusters,
folk reds, blues and golds in small things (the counter's painted panels with two white birds and tulips, the
blanket over the rail, the checked curtains, the plates). Warm light inside (the hearth, the lanterns, the candle),
cool blue light of the blizzard through the frosted window and the open door — warm and readable, faces lit.

## The frame

Horizon 0.42; the eye 1.7 m up; the hall runs to the back wall at 5.7 m. Left to right: the fireplace (−2.7) and the
young man on the bench before it (`medved`, sat on [−1.75, 3.95, 0.45]), the Princess by the window (`princess`,
−0.95, 5.0), the window (−0.1) with the bench and the cloak under it, the Hunter on his stool in the foreground
(`okhotnik`, sat on [0.55, 3.55, 0.45]) and his dog (`dog`, −0.15, 3.2), the counter (0.58…2.22, front at 4.5) with
Emil behind it (`emil`, 1.25, 5.0), the open door (3.15) with Emilia just inside it (`emilia`, 2.95, 5.1); above, the
gallery (2.45 m up) along the back wall, the stair to it at the right edge. Looks are cheated toward the viewer.

## The space (metres: across to the right, distance ahead; the eye at 0, 0, 1.7 m)

- The hall: `wall_back` (5.7 m ahead; the window and the door cut through it), `wall_side` (two copies at ±5),
  `floor`, `ceiling` (4.5 m up), `gallery` (its front beam and balusters, 2.45 m up, at 4.75), `gallery_under`,
  `stair` (along the right wall, facing into the hall).
- The hearth: `hearth` (front at 4.5), `hearth_side`, `firebox` (0.35 m behind: the coals, the kettle, the light
  `fire` — the scene's `hearth`), particles `fire`, `embers`.
- The window: `window` (frame, frost, curtains), its light `window`; `bench_window` with the cloak and the hat.
- The door: `door` (threshold snow, latch, rowan wreath), `door_leaf` (swung in against the right), its cold light
  `door_cold`; `lantern_door` (the scene's `door_lamp`).
- The counter: `counter_front`, `counter_top`, `counter_side`, `counter_things`, `counter_flame` (the scene's
  `candle`); `shelves` behind it with the plates, the bottles, the keg and Emil's fiddle on its peg.
- `lantern_hall` (the scene's `lantern`) over the middle; `bench` and `bench_top` by the hearth; `stool`; `dog`.
- Outside: the `sky` (a blizzard at dusk), `snowfield`, `firs` (copies), `blizzard` (particles beyond the back wall).

## For the next stages

The scenario's other looks of this hall (the blizzard by day with the Princess coming in as a coachman; the night
with one candle, the gallery, the apprentice's stub of candle, the executioner asleep on the stair) are keys yet to
be made; the second apron on the counter and the sign «Эмилия» rubbed out of the frost belong to them. The ids above
are meant to stay.
