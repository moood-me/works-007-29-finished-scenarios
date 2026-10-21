# Brekhunov's Yard (engine 3)

The first scene of the world, the one that sets its look (stage 2 of the game «Master and Man»: an aesthetic review —
people stand, nothing is played). The prologue's place: the master's yard on a grey winter afternoon, the second day
after St Nicholas, a light snow falling, the wind getting up and the ground wind running low over the drifts. The mood in one word:
**departure** — the sleigh is ready at the porch, the horse tied at the post, and the wife in the door asks him to
take Nikita.

Why this place: it holds the world's whole palette and its three people at once. White, grey-blue, ice-blue
(snow, sky, the far forest, the church), and the few warm spots of the story: the master's **red fox coat**, Nikita's
**red sash**, the **yellow window** of the shop. And the three stand as they stand in the story: the master **higher**,
on his porch, hands on his hips, looking down over his yard (his face three-quarters to us — looking at Nikita it
would be a profile turned away; he looks at him in the showcase's `glance`); Nikita **lower**, beside the horse's head, his hand on its
cheek, looking at the horse, not at the master; Praskovya **in the door, not on the porch**, holding her shawl's ends
under her chin, looking at her husband.

## Space

Metres: across to the right, distance ahead; the eye 1.7 m up, the camera `picture`, the horizon 0.49. A close view
so the faces read, framed for 4:3 as well as 16:9: the porch and its two people in the left half, Nikita at the middle,
the horse with the whole sleigh behind him within x 0.125…0.875 of the stage.

| What | Where (across, distance) |
| --- | --- |
| the house front (log wall, lit window at across −0.4) | −4.5, 4.8 |
| the porch landing (0.85 m up), its face, canopy, steps on the right | −1.95, 3.3…4.05 |
| Vasily Andreich, on the landing, nearest | −1.2, 3.68 |
| Praskovya, in the open door | −2.25, 4.58 |
| Nikita, at the horse's head on its near side, facing as the horse does (3/4 to us) | 1.27, 4.7 |
| Mukhorty (facing 140: head toward us at the left), the sleigh behind him (`on` the horse) | 1.69, 5.6 |
| the neighbour's hut with smoke, birches, the fence and gate | 9.6…19.6, 15…33 |
| the church | 39.6, 85 |

The paintings were laid out with the eye 0.4 m further left: where a painting's comment gives across (the yard's
marks, the house's door), take 0.4 from it for the scene's.

## Elements

sky (cold grey-blue, drifting clouds), far_land, church, birch (copies, crowns bent by the wind), neighbour
(+ chimney_smoke), yard (snow plane: tracks, prints, the pressed hollow under Nikita's boots), fence, house_front (the
door 2.17 m high), roof, window (glows; `window_lamp`), porch_floor / porch / porch_side / canopy / steps / treads,
horse (+ `breath`, `horse.animate.js`), sleigh, the three people (`modules/cast`, style `tolstoy`, face `tolstoy`: the
head a little large, eyes with whites, frost-red cheeks, bare hands; Vasily's fox coat has a fur roll collar, fur cuffs and
a lighter fur hem; Nikita's beard has frost, his felt boots dark grey), their breath (`breath_<id>`
particles, bursts from their animate), drift_far / drift_near / wind_front (ground wind: drifting see-through wisps —
drift_near runs behind Nikita, under the horse, so his boots stand clear), drift_front (a near drift at the bottom
right, under the horse), snowfall.

## Light

The engine's: a grey day turning to wind — ambient 0.84 cool (`#c9d6ea`), bounce 0.62, a weak cold sun low (`sun`,
205°, 18°, `#eef2fa`) so the faces turned to the viewer are lit and the shadows fall back-right; the lamp in the window
(`window_lamp`) and a warm light in the passage behind Praskovya (`door_lamp`). Haze 0.3 blue-grey, a cold tint,
saturation 0.95. The logs, the horse and the straw are painted grey-brown: the fox coat, the sash and the window are
the only warm colours.

## State

`snow` 0…1 — how thick it falls (0.8). People: Vasily `hands_hips` (his hands on his hips, three-quarters to us),
`vasily_look` `[0.2, 1.2, 1.1]` (down over the yard), mood smile; Praskovya `stand`, her hands at her chin holding the
shawl's ends (`praskovya_reach` — two points under her chin), `praskovya_look` vasily, mood sad; Nikita `stand`, turned
as the horse is (230: three-quarters to us), `nikita_look` `horse#nose`, `nikita_reach` `{r: {on: horse, at:
[-1.2, -0.06, 1.5]}}` — his right hand on the horse's cheek, on its near side, the elbow bent; `script.js` moves it a little down the cheek and back every 2.6 s (he strokes the horse), mood smile.

## Showcase

`yard` (they stand, 8 s) → `glance` (the master looks back at his wife, then at Nikita, then over the yard again) → `snow` (thicker, then
easing).
