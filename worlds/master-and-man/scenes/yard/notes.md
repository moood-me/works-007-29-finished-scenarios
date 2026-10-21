# Brekhunov's Yard (engine 3)

The first scene of the world, the one that sets its look (stage 2 of the game «Master and Man»: an aesthetic review —
people stand, nothing is played). The prologue's place: the master's yard on a grey winter afternoon, the second day
after St Nicholas, a light snow falling and the ground wind running low over the snow. The mood in one word:
**departure** — the sleigh is ready at the porch, the horse tied at the post, and the wife in the door asks him to
take Nikita.

Why this place: it holds the world's whole palette and its three people at once. White, grey-blue, ice-blue
(snow, sky, the far forest, the church), and the few warm spots of the story: the master's **red fox coat**, Nikita's
**red sash**, the **yellow window** of the shop. And the three stand as they stand in the story: the master **higher**,
on his porch, hands on his hips, looking down at his workman; Nikita **lower**, at the horse's head, his hand on its
cheek, looking at the horse, not at the master; Praskovya **in the door, not on the porch**, her hands folded at her
breast, looking at her husband.

## Space

Metres: across to the right, distance ahead; the eye 1.7 m up, the camera `picture` (one composed view that breathes
and leans), the horizon 0.46. The ground is flat (no relief).

| What | Where (across, distance) | On screen (16:9) |
| --- | --- | --- |
| Praskovya, in the door | −4.4, 7.22, on the landing (0.85 m) | x ≈ 0.16 |
| Vasily Andreich, on the porch | −3.05, 6.1, on the landing | x ≈ 0.22 |
| the lit window | −2.1, 7.37, 1.5…2.5 m up | x ≈ 0.34 |
| the sleigh at the porch's steps | −2.9…−0.3, 7.25 | x 0.28…0.48 |
| Mukhorty, head to the right | −0.3 (shaft's end)…3.4, 7.2 | x 0.55…0.77 |
| Nikita at the horse's head | 3.85, 7.3 | x ≈ 0.80 |
| the post, the rein tied to it | 4.5, 7.6 | x ≈ 0.83 |
| the fence with the gate (gate at 9…12.4) | −3…28, 15 | across the view |
| the church | 26, 80 | x ≈ 0.68, up to y 0.17 |

What matters stays within x 0.125…0.875 (a 4:3 screen sees it all); the gate and the sleigh's back run on past.

## Elements

| Element | What |
| --- | --- |
| `sky` | low grey-blue snow sky, paler toward the land, a pale band low on the left (the sun behind clouds); a layer of soft clouds drifting left (wraps) |
| `far_land` | 300 m off: the white fields, the dark forest line, the village's last huts (hazed pale) |
| `church` | 80 m off: white church, green onion dome, bell tower with a tent spire, snow on every ledge, small gilt crosses |
| `birch` | two copies of a bare birch beyond the fence; its twig crown is a layer bent by the wind |
| `yard` | the snow, a plane to the horizon: the yard's runner tracks from the gate to the sleigh, hoofprints, trodden grey round the steps, the post and Nikita, footprints, hay; the wind's ridges; the road beyond the gate |
| `fence` | grey plank fence, snow cap, drifts at its foot; the gate with its own little roof |
| `house_front`, `house_side`, `roof` | the log house on a boarded base (its floor 0.85 m up): the door open on a dim warm passage, the carved white window frame, the log ends of the corner, the carved eaves board; the side wall with its gable and the roof's snowy edge; the front slope of the roof — a plane, deep snow |
| `window` | the shop's lit panes (a lamp inside): glows, its light `window_lamp` falls into the yard and on the master |
| `porch_floor`, `porch`, `steps` | the landing (a plane people stand on), its face with carved posts, railing and gable canopy; the three steps down to the right |
| `sleigh` | the master's sleigh: runners, woven bast body, high back, straw, a grey striped rug |
| `horse` | Mukhorty in harness, side view: bay-brown with tan markings, frost on the back; collar and painted bow (`harness` layer, over the mane), the near shaft, saddle-pad, bridle, the rein to the post. Layers `mane`, `tail` — wind; `head` — nods about the throat (`horse.animate.js`). Points: `horse#head`, `horse#cheek`, `horse#nose`, `horse#neck` |
| `post` | the hitching post, its ring `post#ring` |
| `vasily`, `praskovya`, `nikita` | the world's cast (`modules/cast`, style `tolstoy`) |
| `drift_far`, `drift_near` | the ground wind: thin wisps of blown snow drifting left low over the yard (see-through layers that wrap) |
| `drift_front` | a drift in the near left corner with dry wormwood stalks shivering in the wind |
| `snowfall` | the snow falling (`snow` its amount) |
| `breath` | the horse's breath: a puff of steam from `horse#nose` every ~3 s (`breath.animate.js` bursts it) |

## Light

The engine's: a grey day — ambient 0.82 cool (`#dbe2ec`), bounce 0.6 (snow gives light back), a weak warm sun from
behind-left low (`sun`, 225°, 16°) so the faces turned to the viewer are lit and the shadows fall back-right; the
lamp in the window (`window_lamp`) and a warm light in the passage behind Praskovya (`door_lamp`). Haze 0.2 pale
blue-grey: the snowy air takes the church and the forest. Everything is painted in daylight colours.

## State

`snow` 0…1 — how thick it falls (0.55). People: `vasily_look` nikita, `praskovya_look` vasily, `nikita_look`
`horse#head`, `nikita_reach` `{r: horse#cheek}` — his hand on the horse's cheek.

## Showcase

`yard` (they stand, 8 s) → `glance` (the master looks back at his wife and again at Nikita) → `snow` (thicker, then
easing).
