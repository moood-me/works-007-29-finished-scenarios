# Brekhunov's Yard (engine 3)

The first scene of the world, the one that sets its look (stage 2 of the game «Master and Man»: an aesthetic review —
people stand, nothing is played). The prologue's place: the master's yard on a grey winter afternoon, the second day
after St Nicholas, the wind getting up — the sky heavy, a cold glare low over the fields, the snow blown off the plain
and running low over the yard. The mood in one word: **departure**, with the storm already in the air — the sleigh is
ready at the porch, the horse held by the bridle, and the wife in the door asks him to take Nikita.

Why this place: it holds the world's whole palette and its three people at once. White, grey-blue, ice-blue
(snow, sky, the far forest, the church), and the few warm spots of the story: the master's **red fox coat**, Nikita's
**red sash**, the **yellow window** of the shop. And the three stand as they stand in the story: the master **higher**,
on the top of his porch steps, his hands behind his back, his belly forward, his heavy reckoning look down on
Nikita; Nikita **lower**, at the foot of the steps by the horse's head, holding Mukhorty by
the bridle, turned toward the master but not looking him in the face; Praskovya **in the door, not on the porch**, her
hands folded at her breast, holding her shawl — asking for another, afraid for him.

## Space

Metres: across to the right, distance ahead; the eye 1.7 m up, the camera `picture`, the horizon 0.5. A close view so
the faces read, framed for 4:3 as well as 16:9 (4:3 shows the stage's x 0.125…0.875). The house takes the left of the
frame, its corner a little left of the middle; the people stand at almost one depth so they are one size (the master
on the landing, 0.85 m up, a little farther than Nikita); Nikita is nearer the eye than the master, so the master,
looking down at him, turns his face to us. The horse stands nearly side-on (a painted card reads best so: facing 160),
his head by Nikita, his whole near side seen, the sleigh behind him to the right — whole in 16:9, its back cut in 4:3.

| What | Where (across, distance) |
| --- | --- |
| the house front (log wall; the shop's lit window at across −3.55, the door −2.15…−1.25, the corner −0.4) | −5.0, 5.4 |
| the porch landing (0.85 m up, across −2.8…−0.6), its face, canopy over the door, steps down on the right | −1.7, 3.9…5.4 |
| Vasily Andreich, on the landing at the top of the steps | −0.85, 4.6 |
| Praskovya, in the open door | −1.7, 5.25 |
| Nikita, at the foot of the steps, by the horse's head | 0.55, 4.1 |
| Mukhorty (facing 160: head toward us at the left, the bit at about 0.85, 4.5), the sleigh behind him (`on` the horse, 2.5 m along him) | 2.2, 5.0 |
| the neighbour's hut with smoke, birches, the fence and gate | 5.6…25, 15…40 |
| the church, far, between the house's corner and Nikita | 4, 90 |

## Elements

sky (slate-blue, a cold glare low on the right; drifting clouds, faster low scud, a veil of snow blown along the
horizon), far_land, church, birch (copies), neighbour (+ chimney_smoke), yard (snow plane: tracks, prints, the
pressed hollow under Nikita's boots, hay under the horse's head), fence, house_front (weathered logs, each its own
shade, moss in the seams; the door 2.17 m high; icicles under the eaves), roof, window (glows; `window_lamp`),
porch_floor / porch / porch_side / canopy / steps / treads,
horse (a small strong peasant horse in his winter coat, a true horse's build — forearm, knee, cannon, fetlock; gaskin
and hock —, bay-brown with tan markings; in Russian harness: collar, shaft-bow, near shaft, saddle-pad and girth,
breeching, bridle, reins back to the sleigh; layers mane, tail, harness, head; points head, cheek, nose, bit, neck;
+ `breath`, `horse.animate.js`), sleigh (solid:
dark boards, a woven bast panel, thick iron-shod runners with snow on them, sunk in the snow; casts its shadow), the
three people (`modules/cast`, style `tolstoy`, each with a face of their own), their breath (`breath_<id>` particles,
bursts from their animate), drift_far / drift_near / wind_front (ground wind: drifting see-through wisps — drift_near
runs behind the team and Nikita, so the horse, the sleigh and his boots stand clear), drift_front (a near drift at the bottom
right), snowfall.

## Light

The engine's: a cold day turning to storm — ambient 0.74 cool (`#c2d1ec`), bounce 0.6, a low icy sun on the right
under the sky's glare (`sun`, 118°, 13°, `#e4edff`), side light on the people and the horse; the lamp in the window (`window_lamp`) and
a warm light in the passage behind Praskovya (`door_lamp`). Haze 0.46 blue-white: the far yard, the church and the
birches go soft in the blown snow. A cold tint (0.12), saturation 1, a firmer vignette, a little grain. The fox coat, the sash and the
window are the only warm colours.

## State

`snow` 0…1 — how thick it falls (0.9). People: Vasily `hands_behind`, `vasily_look` nikita, mood thinking (with his heavy lids: the reckoning
look); Praskovya `hands_breast`, `praskovya_look` vasily, mood sad; Nikita `stand`, turned 205 (nearly to us, a little toward the
master), `nikita_look` the porch's edge below the master (toward him, not into his face), `nikita_reach` `{l: {on:
horse, at: [-1.41, -0.08, 1.32]}}` — his left hand holding the horse by the bit (`horse#bit`); mood smile (meek).

## Showcase

`yard` (they stand, 8 s) → `glance` (the wife looks to Nikita and back to her husband; the master looks round at her,
then back at Nikita) → `snow` (thicker, then easing).
