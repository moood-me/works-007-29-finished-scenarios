# The Forest Edge — notes

The world's third look scene (stage 2 of the game stages): the third chapter, fourteen years on (3.1–3.2) — a late
summer afternoon at the edge of the grown forest above the village, where the stream comes out of the wood; the
path comes up from the village below. Jan (40), the district's forester, has just recognised the Traveller (40); Lina
(37), who led the town's people up, stands a step off the water with her pail, looking at the Traveller. On the flat
stone where the path goes into the wood — bread left for Elzéard, untouched.

- Camera `picture`, horizon 0.55; the frame is as tall as its distance (a 53° lens). The Traveller 5.6 m, Jan 6.6 m,
  Lina 7.6 m; the stone 16.2 m. The village shows just over the valley's brow, right of Jan.
- The land is one draped plane (`land`) over `relief.js`; `lib.js` has the shape (`streamX`, `streamW`, the forest's
  edge `edgeA`, `slope`, `channel`, `ground`) — shared by the relief, `land`, `water` and
  `tools/forest-edge-copies.mjs`. Near, the meadow shelf is level; the forest climbs to the left and back (30 m by
  420 m off); to the right, beyond the brow (`browA`) just right of where Jan stands, the valley falls 26 m to its floor, where the village is
  (`village`, 235 m ahead, 120 m right: houses and fruit trees as parts, each standing at its own depth; `valley_trees` — clumps along its hedges); the far side
  rises half a kilometre on (`hills`, `mountains`).
- The forest: `oak_a`, `oak_b`, `oak_c` (grown oaks, `lib.oak`, their crowns a layer in the wind) along the edge and in
  rows behind it to 80 m; `wood_far` — stretches of eight, unmoving — from 84 m to 430 m up the hill. The stream runs
  along the edge's foot and into the wood at ~26 m; the water is a mirroring plane at `WATER` (−0.3 m), painted only
  where the stream is; in the wood `land` paints it on. All copies are laid out by `node tools/forest-edge-copies.mjs`
  (it rewrites their `copies` in scene.json; it keeps them clear of the stream and of where the people stand).
- Light: late afternoon, the sun low on the right, behind the viewer's shoulder (`sun`, from [125, 24]): the edge's
  face and the people lit warm, the trees' shadows thrown left into the wood. `smoke_1…3`: three village chimneys
  smoking, as much as `smoke` (0…1).
- `bread` (true/false): the loaf in its cloth on the stone (the scenario's branch «Lina knows»); false — the bare stone.
- People: the cast's `traveller_40`, `jan_40`, `lina_37` (`modules/cast`), standing; the Traveller and Jan look at each
  other, Lina at the Traveller; the Traveller smiles.
