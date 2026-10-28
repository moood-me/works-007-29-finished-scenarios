# The Street by the House

Stage 2 of the game (the look), its third scene — С2 of the scenario: the street before the Helmers' house, Christmas
Eve at dusk (the prologue: Nora home with her parcels, the porter with the tree), with the lane up to the children's
sledging hill (chapter 2, the 26th: `day`). The doll's house of the parlour and the ballroom seen from outside, shut:
the place, its light and its people standing. No motion of people but a pose, a look, a face; no camera moves.

- **Where things are.** Camera `picture`, horizon 0.55, the start 1.2 m in (`camera_z`). The Helmers' house
  (`house`) faces the viewer at 11.2 m, across −2.2…8.2: the doll's house's bottle-green with cream stucco and a gilt
  fillet; the front door in the middle (`house#door_front`: two steps, the fanlight, a wreath; the lantern on its
  bracket — light `door`), the dark ground-floor windows (the landlord's office), the Helmers' lit floor over it with
  the little balcony (`house#parlour` — the window with the tree), the Stenborgs' floor, the cornice. To the right
  the baker's house (`bakery`: the lit shop, the golden kringle `bakery#kringle`). To the left the lane runs back
  and to the left from the Helmers' corner (`lib.js`: `CORNER`, `ALONG`, `up`) — its right side `lane_right` (facing
  247), its left side `lane_left` (facing 67), the rows' houses in `lib.js` `ROWS` — up to the hill at its end
  (`relief.js`: 9 m over the 30 m past the last houses), the spruces on it (`hill_firs`, copies).
- **The ground** is one sheet over the land (`ground`, draped): the street's ruts before the house, the pavement swept
  to the cobbles, the lane's ruts, the drifts across the hill and the sledges' tracks down it, Nora's footprints.
- **People** (cast: modules/cast, the `doll` style; made for this scene: `nora_out`, `porter`, `anne_marie`, `ivar`,
  `bob`, `emmy`), every face turned to the viewer: Nora in the middle, her arms full of parcels (`armful`,
  `parcels`), smiling out (`nora_look` — a point by the camera); the porter by the door, the tree in his left hand
  (`porter_reach` to `fir#grip`, the tree at his side, a little behind his shoulder), looking down at the coin in his
  right palm (`coin`; `porter_look: "porter#hand_r"`); Anne-Marie at the lane's mouth, her hands clasped (`clasped`), her left hand holding
  Emmy's (the two hands reach for each other); Ivar with the sled's rope (`leash`; the rope is the sled's layer, its
  animate turns and stretches it to `ivar#hand_r`); Bob in the lane, a snowball held up (`snowball`), laughing at Ivar.
- **Light.** Dusk: the sky's deep blue, the three gas lamps (`gas_lamp`, copies; their lights `lamp_front`,
  `lamp_lane`, `lamp_hill` — points at the lanterns), the door's lantern, the baker's shop, the lit windows (their
  glows). `day` turns it to a snowy day: the windows, the lamps and the lantern out (their layers `lit`, glows, the
  look's `lights`).
- **Keys.** `day` (0 — Christmas Eve's dusk; 1 — a snowy day).
- **Showcase.** Dusk; Nora looks up over her shoulder at her own windows, thinking, and back, smiling; the porter
  looks up from the coin at her, surprised, laughs; the children look about; a snowy day comes and goes back to dusk.

## What is not right, and what the engine lacks

- Known for this world's scenes (not got round here): a motion from Kimodo may come turned to the wall in a scene;
  a hand on the knees in a module's clip goes to the sides; cloth does not hang behind the back; a sitting woman's
  skirt is a lump; the particle fire is balls; no rope between two people.
- The scenario's porter takes off his cap at the coin, and the children sledge on the hill and Nora pulls the sled:
  motion, not for this stage. Nora's muff (the macaroons come out of it) is not there — her hands are full.
- Anne-Marie's shawl hangs from the shoulders as a stiff cone (a garment's hang): a knitted shawl's soft drape and
  crossed ends are not a garment the shapes have.
- The hill is a plain slope of snow with tracks: no sledgers on it (people there would be a few pixels high).
