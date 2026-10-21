# The Ferry at Z. (`shore`) — engine 3

The world's second scene (stage 2 of the game: the look). The «Берег в З.» of the scenario at night: Z.'s quay where
N. N. lives, the ferry's landing stage out into the Rhine, the ferryman waiting in his boat under the landing's lantern;
across the river, 450 m off, L. — its lit windows, the inn's garden with the students' paper lanterns (the Kommers of
the prologue), the hill over it with the ruin and the Gagins' white house, one window lit. The moon low on the right,
its path on the water behind the boat.

**The style** is the terrace's (`lib.js` is its copy): one of Gagin's études, coloured in the middle, its edges paper and
graphite (`edge`, `unfinish`, `hatch`; the ground also toward the frame's foot — `foot`, the foot 2.93 m off). At night
the paper is lit as everything is — a blue-grey sheet; the sky, which is not lit, goes over to `NIGHT_PAPER`, the same
tone. Night here is readable: ambient 0.7 of a cool blue, the moon's light from the front (rims), the lantern warm on
both faces.

| Element | Where | What |
| --- | --- | --- |
| `sky` | the sky | night blue, the moon's glow; layers `stars` (flicker), `clouds` (drift), `moon` (point `disc`: the moonlight's source), `paper` |
| `hills` | 2.6 km | the far ridges beyond L. |
| `hill` | 800 m, left | the hill over L.: vineyards, woods, the ruin on its crag, the Gagins' house (point `house`) |
| `town` | 450 m | L.: embankment, houses with lit windows, the church, the inn's garden with lanterns (point `garden`), the ferry's landing on that side (point `landing`); its glows flicker a little |
| `rhine` | plane, −0.8 m, 3…446 m | the river, a rough mirror with ripples |
| `quay`, `wall` | 2.3…3.5 m | Z.'s quay (`walk`) and its wall's coping at the frame's foot |
| `bench` | left edge, 3.3 m | N. N.'s bench by the water, its back to the river — mostly drawn |
| `jetty`, `piles` | 3.5…9.5 m, 0.2 m left | the landing stage (`walk`) and its piles (copies) |
| `lantern` | 4.3 m, the landing's right edge | post, arm, the lantern in layer `lamp` swinging a little (animate); its light `flame` = the scene's light `lamp` |
| `boat` | unseen anchor, 5.35 m, on the water, facing 160 | the ferryman's skiff: `hull` (near side), `hull_in` (far side within), `transom`, planes `boat_floor` (`walk`, oars on it) and `thwarts` |
| `nn` | on the landing, 5.2 m | N. N., hands behind his back, turned to us, smiling |
| `ferryman` | in the boat | sitting on the after thwart (`ferryman_on`: a point in the boat's frame; his turn is within the boat's), looking up at N. N. (at his hips: the head not thrown back); `pipe_smoke` rises from his pipe (`ferryman#pipe`) |

The cast gained `ferryman` (the parts `beard`, `pipe`) — `modules/cast.md`.

The land (`relief.js`) only keeps the river's bed under the water plane: the quay level to 3.5 m, the bed 3 m down,
L.'s bank 2.5 m up from 440 m. The near things (wall, bench, piles, lantern, boat) stand at their own elevations
(`onLand: false`); the far cards stand on the land.

Motion: the lantern's swing and its flicker, the town's lanterns' flicker, the stars, the clouds' drift, the river's
ripples, the pipe's smoke, the two breathing. No script, no showcase yet.
