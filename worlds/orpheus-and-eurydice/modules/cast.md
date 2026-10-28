# cast — the people of «Orpheus and Eurydice»

A module for scenes with people (elements with `person`: `{"cast": "cast", "who": …}` — people_guide). In the scene's
`modules`. The parts' lengths are a man's metres times `F.fit.h`, their thicknesses times `F.k`.

## Style

`myth` — slender, long-limbed figures (from the engine's `shadow`), the head a little big (`head` 1.2) so a face reads
at night at the size people stand in a scene; plain colours with their shade (`paint: toned`), lit by the scene's own
light; no pen line — the world's places are clean flat shapes and the people are of the same hand; cloth in soft folds.
Faces (`faceOf`): almond eyes (warm whites, a dark iris, a dark upper lid), brows a shade darker than the hair, a nose of
the skin's colour (its form the light's), lips a shade rosier than the skin over a dark line; each expression of
`<id>_mood` as the engine names them. Each person's own cast of face: `eurydice` (one corner of the mouth a little
higher — about to tease), `orpheus` (brows heavier and straight), `orpheus_sing` (his face with the lips parted —
`orpheus_wear: {"face": "orpheus_sing"}` while he sings), `persephone` (level brows, the eyes a little lidded),
`hades` (heavy straight brows over heavy lids), `shade` (quiet, the lids low, the brows faint).

The world's one red is Eurydice's ribbon: nobody and nothing else wears red.

## Who

- `orpheus` — Orpheus, about thirty: lean, straight-backed; dark curling hair (`curly`) and a short dark beard (`beard`);
  a long loose tunic of faded blue to the knee (`tunic`), a dark leather belt (`belt`), dark trousers; barefoot. His
  lyre is the scene's own element (in his hands by `<id>_reach` to its points), not a part of him. His lantern on the
  meadow is: `lantern` (`<id>_with: ["lantern"]`) — a small square lantern of cream paper in a dark frame hanging
  from his left hand, swinging a little late; its point `flame` (the scene's light `"at": "orpheus#flame"`).
- `eurydice` — Eurydice, a little over twenty: slight; long dark-brown hair round her face and loose down her back (`straight`) with a red ribbon
  tied round it, its two long ends hanging down her hair (`ribbon`); a plain long dress of undyed linen (`shift`) girded with a thin cord of darker linen (`cord`);
  barefoot.
- `persephone` — Persephone, of no age: tall, straight, pale; black hair in a knot at the back of the head (`bun`) with a
  thin band of silver (`circlet`); a long gown of the deep green of pomegranate leaves (`gown`); barefoot.
- `hades` — Hades, of no age: big, heavy-shouldered; short dark hair going grey (`short`), a full beard (`full_beard`);
  a long heavy mantle of ash-grey wool (`mantle`) over dark trousers; dark sandals.
- `shade_man`, `shade_woman`, `shade_old` — the shades of the meadow: people as they were, every colour gone out of
  them, pale grey-blue (a tunic, a linen dress with long hair, a mantle with white hair); barefoot.

## Motions

The engine's `stand` and `walk`; and `seated` (sits at rest on a seat, a loop: the seat through `<id>_on`; on the edge
of a pier, the feet go down to the floor under it as far as the legs reach) — Kimodo's, taken from pavel/scarlet-sails.
