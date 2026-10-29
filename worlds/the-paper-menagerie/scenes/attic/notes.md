# The Attic

Stage 4 of the game (all its places), the scenario's С4: the attic under the roof, where the shoe box with the animals
has stood since 1.6 — the place of 3.2 with «Зверинец» 0: «шорох с чердака: в пыльном свете обувная коробка
вздрагивает. Джек снимает её из люка». Jack (grown) comes up into the open hatch; nobody climbs the ladder (§4: «Джек
появляется у люка»). People stand and look; the box starts, dust hangs in the light, no motion of people, no camera
moves. In the style of the kitchen, the ward and the yard.

- **Where things are.** Camera `picture`, horizon 0.38, looking along the ridge to the gable at the far end. The floor
  (`floor`: wide pine boards, grey with dust) at 0, from 1.4 m to the gable at 6.6; the two slopes of the roof seen from
  below (`roof`: one card, two copies leaning in 51° from the knee walls at across ±2.6, 0.45 m high, to the ridge at
  2.53; rafters every 0.6 m, the ridge board, nails, cobwebs), the knee walls (`knee`, two copies), two collar beams
  (`collars`, 1.9 m), the `gable` with the little window (`window`, across −0.1…0.5, 1.5–2.0 m up: four dusty panes, a
  cobweb) and the spring afternoon `sky` beyond it. The brick `chimney` stack going up through the right slope.
- **The hatch.** In the floor at across 0.65…1.35, distance 3.0…3.8. The land (`relief.js`) is a well 1.15 m deep
  there: whoever stands in it stands on the hall's ladder below, chest and head above the floor. Key `hatch`: open —
  the hole, its sides going down (`shaft_far`, `shaft_right`, lighter toward the hall), the lid laid back flat on the
  boards (painted by the floor); shut — the lid in its frame. The hall's light comes up through it (light "below", key
  `hatch_light`). Point `floor#hatch`.
- **The things.** Old cartons along the left slope (`cartons` + `carton_tops`, copies; one with Christmas tinsel), a
  steamer trunk against the right (`trunk`, `trunk_top`), by the gable a lamp with no shade, a child's sled, a rolled
  rug (`junk`). The shoe box (`shoebox` + `shoebox_top`, at across 0.25, distance 3.6, in the window's light; key `box`:
  shut / gone; `stir` — it starts now and then, the lid lifting), dusty. Points `shoebox#box`, `shoebox#lid`,
  `window#pane`.
- **Light.** Daylight on a spring afternoon: the `sun` low beyond the gable comes in only through the little window
  (`through`), a beam across the dusty air (haze 0.12, shafts 1.8) onto the floor and the shoe box, dust `motes` in it;
  the window's daylight; a warm ambient (0.62) so that the boxes and Jack's face read.
- **People** (modules/cast): Jack grown (`jack_grown`; the script gives him his look without the suit bag as the scene
  opens) in the hatch (1.0 / 3.45, turn 240), looking at the box, surprised. `jack_here` false — not come up yet.

The showcase: the box starts in the light; Jack comes up into the hatch and looks at it; looks up at the window's
light; the box is gone, taken down.

## What is not right yet

- Taking the box down out of the hatch (3.2) is stage 5's: a reach for `shoebox#box` and a motion, the box then
  `gone` here and `opened` in the room (`jack-room`, moment `packed`).
- Seen from the viewer's place the well under the hatch shows Jack from about the waist up; its sides are painted
  lighter toward the bottom for the hall's light.
