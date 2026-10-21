# The Shepherd's House — notes

The world's look scene (stage 2 of the game stages): Elzéard's stone house alone on the bare plateau at dusk, its one
lamp lit, and the three main people standing as the story first brings them together — Elzéard at his door, the
Traveller (20) come up from the dead village with an empty flask, Lina (17) who showed him the way, a step behind.
(In the scenario Lina does not climb up in the prologue; here she stands with them so her look is seen.)

- Camera `picture`, horizon 0.58. The viewer stands on the path; the people are 5–6 m ahead, the house's door 8 m. Elzéard has
  stepped out before his wall (the stone, not the bright door, behind him); the Traveller and Lina face him side-on so
  their faces show (a person's `turn`: 0 away from the camera, 180 toward it; `_look` turns the head and chest on top).
- The house is built on the unseen anchor `house` (facing 165 — turned so its left gable shows): `house_front` (door
  at the anchor, window to its right), `house_side` (gable), `roof` (the front slope, a plane), `chimney` with
  `smoke` from `chimney#top`. `door_glow` and `window_glow` are the lit room behind the holes in the front; `lantern`
  swings on its bracket (animate). Their lights — `door_light`, `window_light`, `lantern_light` — are on by `lamp`.
- The sun sits on the far mountains (sky's `sun`, the light `sun`): a warm rim from ahead-left; the faces are read by
  the dusk's ambient (lavender) and the lantern.
- People: the world's cast (`modules/cast`): `elzeard` (`hands_behind`, looking at the Traveller), `traveller` and
  `lina` (`stand`, looking at Elzéard). The rod stands in the earth beside Elzéard (`rod`); the dog lies by the door
  breathing; sheep in the dry-stone pen; grass tufts sway in the wind.
- Land: one draped plane `plateau` (3 km deep), low far hills, mountains 4 km off, one dead tree far left.
