# The Stenborgs' Ballroom

Stage 2 of the game (the look), its second scene — С3 of the scenario: the Stenborgs' ballroom a floor over the
Helmers' flat, the night of the fancy-dress ball, before the tarantella. The same doll's house as the parlour, its top
storey: the place, its light and its people standing. No motion of people but a pose, a look, a face; no camera moves.

- **Where things are.** Camera `picture`, horizon 0.55, the start 0.6 m in (`camera_z`), as the parlour's. The
  cabinet's front (`front`, at 5.2) frames the opening, 7 m by 3.4 m (wider and higher than the parlour's: the grand
  room of the house), the cornice of the top storey with a gilt garland over it; its base before it is `ledge`. The
  room runs back to the back wall at 11.0 (floor 0, ceiling 3.4, walls at across ±3.5; the ceiling a card laid face
  down, `tilt` −90). The walls are `lib.js`'s: ivory dado, celadon silk panels between fluted pilasters, gilt.
- **The back wall**: two tall windows (across ±1.65…±2.75, 0.55–2.85 m; `window`, two copies, the casements), old-gold
  curtains; between them the pier glass — its glass the plane `mirror` (`reflect`, upright) before the wall, which
  paints its frame and the console under it. **Left wall** (`left_wall`, +x running back): the portrait over the
  grand piano (`piano`, side-on, lid up, keyboard toward the room, `piano#keys`; the bench beyond it). **Right wall**
  (+x running to the front): the doorway to the landing (`right_wall#door`) — beyond it the landing: its side wall `landing`
  (the stairs down), its end wall `landing_end` (a wall lamp, light `landing`, a coat stand — what the doorway shows
  from the front) and `landing_floor`. Gilt chairs along the side walls (`chair`, copies, flipped on the right),
  potted palms (`palm`, copies) in the back right corner and the front left. The parquet (`floor`) is polished: it
  mirrors the room a little.
- **Outside the windows** the land drops 6.6 m to the street (`relief.js`): the houses across at 22 m — their upper
  floors and roofs, their windows lit (`house_windows`) — the night sky (`sky`), snow falling (`snowfall`, only out
  there).
- **People** (cast: modules/cast, the `doll` style; characters made for this scene: `nora_naples`,
  `torvald_evening`, `rank`, `pianist`, `guest_*`), every face turned to the open front: Nora downstage just right of
  the middle, in the Neapolitan costume, the tambourine raised (`tambourine`), smiling out (her motion tips her head
  back to the raised hand: `nora_look` sets it on the viewer); Torvald upstage left in
  evening dress, a coupe of champagne at his chest (`toast`), smiling at her; Doctor Rank right, in evening dress, the
  cigar at his chest (`cigar`, its smoke `cigar_smoke` from `rank#tip`), looking at her, sad; the pianist at the
  piano, seated (`pianist_on` — the bench), playing (`playing`); guests by the walls looking at Nora — two ladies with
  closed fans (`fan`), the consul with his arms folded (`arms_folded`), an officer with a glass (`toast`, begun
  later: the loops are not in step).
- **Light.** The chandelier (`chandelier#glow`, light `chandelier`) and six sconces (`sconce`, `sconce_flames`: copies,
  each flame's glow lighting the wall round it), the landing's lamp, and `room`: the lamp of the room the doll's house
  stands in, before it and above, unseen, its light on the faces through the open front. Night outside: the room's
  `inside` share is small.
- **Keys.** `candles` — the chandelier's and the sconces' candles (flames, the crystal's glints, their light).
- **Showcase.** The ball; Nora glances at Torvald; the smile goes for a moment (`nora_mood` afraid) and comes back;
  Rank looks down at his cigar and back at her; a draught sinks the candles a little.

## What is not right, and what the engine lacks

- Known for this world's scenes (not got round here): a motion from Kimodo may come turned to the wall in a scene;
  a hand on the knees in a module's clip goes to the sides; cloth does not hang behind the back; a sitting woman's
  skirt is a lump (so no lady sits on the gilt chairs); the particle fire is balls; no rope between two people.

- Torvald at the ball wears a black domino over his evening dress (the play): a cloak hanging behind the back — the
  engine does not hang cloth behind the back, so he is in plain evening dress.
- Nora's left hand was asked on her hip; Kimodo gives it hanging at her side. Rank's cigar was asked in his right
  hand, the left in his pocket; Kimodo raised the left one — the cigar is in that. The tambourine's ribbons are not there
  (no loose cloth on a held part).
- The pianist's hands play in the air before the keys of a flat, side-on piano card: they come to its keyboard only
  roughly (no contact between a person and a painted thing).
