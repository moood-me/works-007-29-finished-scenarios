# The Stream — notes

The world's second look scene (stage 2 of the game stages): the second chapter, six years on — the morning the
Traveller comes back up from the war and finds water running in the dry bed below Elzéard's slope (2.2–2.5). The
viewer stands on the valley floor below the slope, the stream coming in from the lower left and curving up into the
young oaks; Lina (23) with her pail at the water's edge, the Traveller (26) in his greatcoat before her, Elzéard (61)
farther up by his hives at the wood's edge, the rod in his hand.

- Camera `picture`, horizon 0.55; the frame is as tall as its distance (a 53° lens), so a person 7 m off is a fifth of
  it. Lina 7.6 m (a step off the water), the Traveller 5.8 m, Elzéard 15.6 m; the stream's line ends at him.
- The land is one draped plane (`land`) over `relief.js`; the stream's line, the slope and the channel are in
  `lib.js` (`streamX`, `streamW`, `slope`, `channel`, `ground`) — shared by the relief, `land`, `water` and
  `tools/stream-copies.mjs`. The water is a mirroring plane at `WATER` (−0.32 m) in the channel, painted only where
  the stream is; past ~33 m the bed rises out of it up the slope and `land` paints the stream on among the oaks.
- The wood: `oak_a`, `oak_b`, `oak_c` (young oaks, their crowns a layer in the wind — `lib.oak`) in rows from the
  wood's edge (19.5 m before the hives) to 80 m; `wood_far` — stretches of five, unmoving — to 260 m, where the ridge
  is. All of it, the willows, stones, grass and the hives, are copies laid out by `node tools/stream-copies.mjs`
  (it rewrites their `copies` in scene.json; it keeps them clear of the stream and of where the people stand).
- Light: early morning, the sun low behind the viewer's left shoulder (`sun`, from [225, 14]) — faces turned to the
  viewer are lit; the haze greys the wood up the slope. `mist`: two drifting bands low over the valley and the foot
  of the slope, as thick as the state's `mist` (0…1).
- People: the cast's `elzeard_61`, `traveller_26`, `lina_23` (`modules/cast`), standing; Lina and the Traveller look at
  each other, Elzéard at the Traveller; Lina smiles.
