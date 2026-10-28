# The Kitchen at Home

Stage 2 of the game (the look, docs/new-games/okean-v-konce-dorogi/scenario.md §4 «Дом: кухня»; II-5, III-2–3): the
boy's own kitchen on an evening after Ursula Monkton has come, and four of the game's people in it, still — a breath,
the curtains in the air from the open top light, the grill's glow and the smoke of burning toast, the apple tree
outside. No motion of people, no camera moves, no showcase (nothing happens in it yet).

- **The view.** Camera `picture`, horizon 0.4, at a child's eye as in the farm kitchen (`camera_h` −0.55: the eye
  1.15 m over the floor). The room is 5.4 m wide (x −2.7…2.7), 2.4 m high, its back wall at 4.2 m.
- **Back wall** (`back_wall`, 0.15 m thick): a sixties paper of small flowers; the doorway to the hall on the left
  (x −2.45…−1.55, to 2.0 m: `door_jamb`, `door_head`), the window over the sink (x −0.5…1.0, 1.0–2.0 m: `reveal_l`,
  `reveal_r`, `lintel`, `sill`, `sill_things`, `casement`, `curtains` — two layers swaying in the wind; `opening` —
  its unseen hole the dusk comes in at), tiles behind the sink and the cooker, a wall cupboard, the starburst clock,
  a shelf with the radio over the fridge.
- **Through the doorway, the hall** (`hall_floor`, `hall_wall`): the foot of the stairs, Ursula's pink coat on its peg
  (scenario II-5: «розовое пальто она вешает на крючок у лестницы»; V-2 looks at the same peg), Dad's mackintosh, the
  telephone on its shelf (behind the jamb from the start: seen only as the view moves).
- **The kitchen**: the sink unit (`counter`, `counter_top`, `taps` with the kettle), the electric cooker (`cooker`,
  `hob`) and its eye-level `grill` with the toast going black (`grill_under` its underside; the element's glow a layer
  of added light, its point `grill#bars`; `toast_smoke`), the `fridge` (`fridge_side`) with a child's drawing on it;
  the table against the left wall laid for supper (`table`, `table_front`, `table_side`, `teapot`, a `chair`); the
  linoleum chequer `floor`, `left_wall`, `right_wall`, `ceiling`, the ceiling `lamp` (its bulb `lamp#bulb`).
- **Outside the window**: the dusk `sky`, the back `lawn`, the `garden_tree`, the `hedge` with the gate to the lane,
  far `trees` and roofs with one lit window.
- **People** (the world's cast, modules/cast.md). The boy in front of the doorway, his book open in his hands
  (`boy_with: ["book"]`, `reading`), looking up from it at Ursula; Ursula Monkton in the middle of the room, demure
  (`hands_clasped`), the sister holding her hand (`ursula_reach`/`sister_reach` — hand in hand) and pressed to her
  side (`shy_sway`); Dad by the cooker, arms folded (`arms_folded`), his face soft and empty.
- **Light.** Dusk at the window (`dusk` — through its pane, `window_light`), the ceiling lamp (`lamp_light`, key
  `lamp`), the grill's red glow (`grill_glow`, key `grill`), the hall's warm light behind the boy (`hall_light`).

## What is not right yet

- **A look to a person's right turns them to the wall.** Ursula (turn 250) and the sister (250) told to look at the
  boy, 25–50° to their right, stand with their backs to us — still so on engine 3 with its fix for looks at what is
  steeply below or near the body (`engine3-next`, 2026-10-28): the boy is level with them and 1.5–2 m off. So they
  have no `_look` (their heads as their motions hold them: Ursula's tilted toward the sister, the sister's bowed). Dad
  looks at Ursula (`dad_look`) and stands in profile to us — before the fix he too turned his back.
- Another take of Dad with folded arms (`arms crossed on the chest`, seed 2) came into the scene bent forward with the
  arms held out — the arms crossing over the chest did not survive the module's clip (as hands on the knees go to the
  sides); the take kept (`arms_folded`) holds.
- A cloth's edge, a skirt sitting, the particle fire, a rope between two people — none is used here.
