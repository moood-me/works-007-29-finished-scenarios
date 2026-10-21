# Brekhunov's Yard (engine 3)

The first scene of the world, the one that sets its look (stage 2 of the game «Master and Man»: an aesthetic review —
people stand, nothing is played). The prologue's place: the master's yard on a grey winter afternoon, the second day
after St Nicholas, a light snow falling and the ground wind running low over the snow. The mood in one word:
**departure** — the sleigh is ready at the porch, the horse tied at the post, and the wife in the door asks him to
take Nikita.

Why this place: it holds the world's whole palette and its three people at once. White, grey-blue, ice-blue
(snow, sky, the far forest, the church), and the few warm spots of the story: the master's **red fox coat**, Nikita's
**red sash**, the **yellow window** of the shop. And the three stand as they stand in the story: the master **higher**,
on his porch, hands on his hips, looking down over his yard (his face three-quarters to us — looking at Nikita it
would be a profile turned away; he looks at him in the showcase's `glance`); Nikita **lower**, at the horse's head, his hand on its
cheek, looking at the horse, not at the master; Praskovya **in the door, not on the porch**, her hands folded at her
breast, looking at her husband.

## Space

Metres: across to the right, distance ahead; the eye 1.7 m up, the camera `picture`, the horizon 0.43. A close view
(the porch 3.3 m off) so the faces read: the house front fills the left two thirds, the yard opens on the right.

| What | Where (across, distance) |
| --- | --- |
| the house front (log wall, lit window at across 0) | −4.1, 4.8 |
| the porch landing (0.85 m up), its face, canopy, steps on the right | −1.55, 3.3…4.05 |
| Vasily Andreich, on the landing, nearest | −0.8, 3.68 |
| Praskovya, by the open door | −1.85, 4.58 |
| Nikita, at the horse's head, hand on its cheek | 1.2, 4.9 |
| Mukhorty, head to the left; the sleigh behind him (`on` the horse) | 2.73, 5.3 |
| the neighbour's hut with smoke, birches, the fence and gate | 10…20, 15…33 |
| the church | 40, 85 |

## Elements

sky (grey-blue, drifting clouds), far_land, church, birch (copies, wind), neighbour (+ chimney_smoke), yard (snow plane:
tracks, prints), fence, house_front, roof, window (glows; `window_lamp`), porch_floor / porch / porch_side / canopy /
steps / treads, horse (+ `breath`, `horse.animate.js`), sleigh, the three people (`modules/cast`, style `tolstoy`,
face `tolstoy`: larger eyes, frost-red cheeks; Vasily's fox coat has a fur roll collar, fur front band, fur cuffs and a
lighter fur hem; Nikita's beard has frost), their breath (`breath_<id>` particles, bursts from their animate),
drift_far / drift_near / wind_front (ground wind: drifting see-through wisps), drift_front (a near drift), snowfall.

## Light

The engine's: a grey day — ambient 0.82 cool (`#dbe2ec`), bounce 0.6 (snow gives light back), a weak warm sun low
(`sun`, 205°, 18°) so the faces turned to the viewer are lit and the shadows fall back-right; the
lamp in the window (`window_lamp`) and a warm light in the passage behind Praskovya (`door_lamp`). Haze 0.2 pale
blue-grey: the snowy air takes the church and the forest. Everything is painted in daylight colours.

## State

`snow` 0…1 — how thick it falls (0.7). People: `vasily_look` `[0.6, 1.2, 1.1]` (out over the yard), `vasily_reach` his right hand at his bosom, moods: Vasily smile, Praskovya sad, Nikita smile, `praskovya_look` vasily, `nikita_look`
`horse#head`, `nikita_reach` `{r: horse#cheek}` — his hand on the horse's cheek.

## Showcase

`yard` (they stand, 8 s) → `glance` (the master looks back at his wife, then at Nikita, then over the yard again) → `snow` (thicker, then
easing).
