# Brekhunov's Yard (engine 3)

The first scene of the world, the one that sets its look (stage 2 of the game «Master and Man»: an aesthetic review —
people stand, nothing is played). The prologue's place: the master's yard on a grey winter afternoon, the second day
after St Nicholas, the wind getting up — the sky heavy, a cold glare low over the fields, the snow blown off the plain
and running low over the yard. The mood in one word: **departure**, with the storm already in the air — the sleigh is
ready at the porch, the horse held by the bridle, and the wife in the door asks him to take Nikita.

Why this place: it holds the world's whole palette and its three people at once. White, grey-blue, ice-blue
(snow, sky, the far forest, the church), and the few warm spots of the story: the master's **red fox coat**, Nikita's
**red sash**, the **yellow window** of the shop. And the three stand as they stand in the story: the master **higher**,
on the top of his porch steps, a hand at the bosom of his coat (where the money is), the other behind his back, his
heavy reckoning look down on Nikita; Nikita **lower**, at the foot of the steps by the horse's head, holding Mukhorty by
the bridle, turned toward the master but not looking him in the face; Praskovya **in the door, not on the porch**, a
hand clutching her shawl at her breast, the other put out a little toward her husband — asking for another, afraid for
him.

## Space

Metres: across to the right, distance ahead; the eye 1.7 m up, the camera `picture`, the horizon 0.5. A close view so
the faces read, framed for 4:3 as well as 16:9 (4:3 shows the stage's x 0.125…0.875). The house takes the left of the
frame, its corner a little left of the middle; the people stand at almost one depth so they are one size (the master
on the landing, 0.85 m up, a little farther than Nikita); Nikita is nearer the eye than the master, so the master,
looking down at him, turns his face to us. The horse stands clear of Nikita, his whole near side seen, the sleigh
going away behind him to the right, whole in 4:3.

| What | Where (across, distance) |
| --- | --- |
| the house front (log wall; the shop's lit window at across −3.55, the door −2.15…−1.25, the corner −0.4) | −5.0, 5.4 |
| the porch landing (0.85 m up, across −2.8…−0.6), its face, canopy over the door, steps down on the right | −1.7, 3.9…5.4 |
| Vasily Andreich, on the landing at the top of the steps | −0.85, 4.6 |
| Praskovya, in the open door | −1.7, 5.25 |
| Nikita, at the foot of the steps, by the horse's head | 0.6, 4.0 |
| Mukhorty (facing 137: head toward us at the left, the muzzle at 0.97, 4.17), the sleigh behind him (`on` the horse) | 2.04, 5.17 |
| the neighbour's hut with smoke, birches, the fence and gate | 5.6…25, 15…40 |
| the church, far, between the house's corner and Nikita | 4, 90 |

## Elements

sky (slate-blue, a cold glare low on the right; drifting clouds, faster low scud, a veil of snow blown along the
horizon), far_land, church, birch (copies), neighbour (+ chimney_smoke), yard (snow plane: tracks, prints, the
pressed hollow under Nikita's boots, hay under the horse's head), fence, house_front (weathered logs, each its own
shade, moss in the seams; the door 2.17 m high; icicles under the eaves), roof, window (glows; `window_lamp`),
porch_floor / porch (a horse collar on its post, a snow shovel against it) / porch_side / canopy / steps / treads,
horse (stocky: a deep barrel, a thick neck, stout feathered legs; + `breath`, `horse.animate.js`), sleigh (solid:
dark boards, a woven bast panel, thick iron-shod runners with snow on them, sunk in the snow; casts its shadow), the
three people (`modules/cast`, style `tolstoy`, each with a face of their own), their breath (`breath_<id>` particles,
bursts from their animate), drift_far / drift_near / wind_front (ground wind: drifting see-through wisps — drift_near
runs among the horse's legs and behind Nikita, so his boots stand clear), drift_front (a near drift at the bottom
right), snowfall.

## Light

The engine's: a cold day turning to storm — ambient 0.82 cool (`#c2d1ec`), bounce 0.6, a weak icy sun low behind the
eye (`sun`, 175°, 14°, `#e4edff`) so the faces turned to the viewer are lit; the lamp in the window (`window_lamp`) and
a warm light in the passage behind Praskovya (`door_lamp`). Haze 0.46 blue-white: the far yard, the church and the
birches go soft in the blown snow. A cold tint, saturation 0.92, a firmer vignette. The fox coat, the sash and the
window are the only warm colours.

## State

`snow` 0…1 — how thick it falls (0.9). People: Vasily `hands_behind`, his right hand brought to the bosom of his coat
(`vasily_reach` — a point before his chest), `vasily_look` nikita, mood thinking (with his heavy lids: the reckoning
look); Praskovya `stand`, `praskovya_reach` — her right hand at her breast holding the shawl, her left put out toward
her husband —, `praskovya_look` vasily, mood sad; Nikita `stand`, turned 215 (three-quarters to us, toward the master),
`nikita_look` a point toward the porch's near corner (toward the master, not into his face), `nikita_reach` `{l: {on:
horse, at: [-1.36, -0.06, 1.36]}}` — his left hand on the bridle by the horse's muzzle; mood smile (meek).

## Showcase

`yard` (they stand, 8 s) → `glance` (the wife looks to Nikita and back to her husband; the master looks round at her,
then back at Nikita) → `snow` (thicker, then easing).
