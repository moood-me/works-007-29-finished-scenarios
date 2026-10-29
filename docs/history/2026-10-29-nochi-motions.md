# 2026-10-29 — «Белые ночи»: motions (a half-stage)

Branch `r3/nights-motions`, world `worlds/white-nights`. Stopped by Pavel's decision (the game at a half-stage) before
any new motion was made.

## Done

18 motions put into `modules/cast.data.json` (besides `seated`, `read`): motions already made in this studio for other
worlds, each looked at (`look_at_motion`, front and side) or judged before by the «Ночной полёт» motions note —
`sit_down`, `stand_up`, `laugh`, `cry`, `hat_on`, `hat_off`, `palm_out`, `put_down`, `bow_deep`, `handshake`, `run`,
`drop_pieces`, `tear_letter` (nearest), `hold_out`, `doze`, `sew`, `hang_up`, `hand_heart`. What each is:
`modules/cast.md`, «Stage 5's motions».

## Still missing

The stage-5 contract's motions (`docs/new-games/belye-nochi/game.md`, «Motions»): `cry_railing`, `bow_house`,
`laugh_broom`, `walk_cane`, `walk_raised`, `stagger`, `arm_in_arm`, `pace`, `sit_edge`, `sit_tucked`, `gesture_talk`,
`pin_sleeve`, `head_shoulder`, `embrace_shoulders`, `give_letter`, `hug_kiss`, `pull_free`, `palm_cheek`, `bell_pull`,
`knock`, `unpin`, `search_hands`, `sweep_high`, `open_window`, `lean_window`, and a better `tear_letter`.

## What went wrong

- The motion GPU did not wake: the first ask (`lean_rail`, queued 15:33 UTC) failed at 15:58 with `wake` after 25
  minutes; the asks behind it were still queued when work stopped. They stay asked in the studio (`list_motions`):
  when the GPU wakes they get made, and the next author looks at them and puts the good ones under the contract's
  names (`cry_rail` → `cry_railing`, `bow_small` → `bow_house`, `stride_cane` → `walk_raised`, `walk_drunk` →
  `stagger`, `walk_arm` + `walk_on_arm` → `arm_in_arm`, `sit_lean` → `head_shoulder`, `pin` → `pin_sleeve`,
  `arm_round` → `embrace_shoulders`, `letter_out` → `give_letter`, `ring_bell` → `bell_pull`, `unpin_seated` →
  `unpin`, `grope` → `search_hands`, `lean_sill` → `lean_window`, `tear_drop` → `tear_letter`).
- The studio's `search_descriptions` answers nothing (`source: null`, total 0); the BONES-SEED descriptions were
  searched locally instead (a fresh download of `timelines.jsonl`). It has brooms, a cane walk, a hand behind the ear,
  the cold; no railings, hugs, knitting, arm in arm, a bell cord.

## Asked (tag, prompt(s), seconds, key)

| tag | prompt(s) | s | key |
| --- | --- | --- | --- |
| `lean_rail` | A person stands leaning forward with both forearms resting on a railing at waist height in front of them, looking down at the water (x2, a loop) | 3+3 | `150fc448821f` |
| `cry_rail` | A sad person leans forward on a railing at waist height, both forearms resting on it, the head bowed, crying, the shoulders shaking (x2, a loop) | 3+3 | `b349986bda6f` |
| `cry_face` | A sad person stands crying, covering the face with both hands, the shoulders shaking (x2, a loop) | 2.5+2.5 | `e7bcf0f6da91` |
| `hands_behind` | A person stands straight, holding both hands clasped behind the back (x2, a loop) | 3+3 | `30ee1c7345b1` |
| `bow_small` | A person stands straight, then bows forward politely from the waist with the hands at the sides, and straightens up again | 3 | `3e27e58fbf78` |
| `sweep` | A person standing holding a broom sweeps the ground in front of them with both hands at a steady pace (x2, a loop) | 3+3 | `907bbb58a8aa` |
| `walk_cane` | A person walks forward at a steady pace using a cane in the right hand, tapping it on the ground (x2, a loop) | 2.5+2.5 | `6c2c3fd261e4` |
| `stride_cane` | A person walks forward quickly, holding a stick raised in the right hand at shoulder height in front of them (x2, a loop) | 2+2 | `fec983f7f68e` |
| `hurry` | A person walks forward quickly, almost running, the arms swinging (x2, a loop) | 2+2 | `a50c8cf2012b` |
| `walk_drunk` | A drunk person walks forward unsteadily, swaying from side to side (x2, a loop) | 2.5+2.5 | `0f1dd30dc767` |
| `walk_arm` | A person walks forward slowly with the right arm bent at the elbow, the forearm held across the waist in front of them (x2, a loop) | 2.5+2.5 | `7a6168d298d0` |
| `walk_on_arm` | A person walks forward slowly, the left hand resting on the forearm of someone walking close beside them on their left (x2, a loop) | 2.5+2.5 | `7bf1d8be3fca` |
| `offer_arm` | A person standing bends the right arm at the elbow and holds it out a little to the right side, offering it to someone beside them | 3 | `1788c9940c6e` |
| `startle` | A scared person standing suddenly flinches and pulls back, then turns away to the right | 2 | `4181414ff628` |
| `sit_edge` | A seated person sits upright on the very edge of a bench, both hands resting on the knees (x2, a loop) | 3+3 | `6b0d78a86e93` |
| `sit_tucked` | A seated person sits on a bench with the right leg tucked up under them, turned a little to the left, the hands in the lap (x2, a loop) | 3+3 | `a218e5a159f9` |
| `sit_lean` | A seated person leans sideways to their left, resting the head on the shoulder of someone sitting beside them, the hands in the lap (x2, a loop) | 3+3 | `ab4a67801d43` |
| `pin` | A seated person takes a small object from their collar with the right hand / A seated person pins a piece of cloth to the sleeve of someone sitting beside them on their right with both hands | 1.5+3 | `20369eb57cf8` |
| `fidget_lap` | A seated person twists a piece of cloth in the lap with both hands, looking down at it (x2, a loop) | 2.5+2.5 | `74f960f48084` |
| `letter_out` | A person takes a small, light object out of the upper chest pocket with the right hand / A person holds out a small, light object with the right hand to someone in front of them | 1.5+2 | `659abc7263d9` |
| `hand_on_pocket` | A person stands with the right hand pressed flat on the left side of the chest, the head bowed (x2, a loop) | 2.5+2.5 | `d64afd3aee79` |
| `read_letter` | A standing person holds a letter in both hands at chest height, reading it (x2, a loop) | 3+3 | `7259ff3ea917` |
| `walk_wind` | A person walks forward against a strong wind, holding a small, light object close to the chest with both hands (x2, a loop) | 2.5+2.5 | `7bf1ad043d11` |
| `hug` | A person steps forward and hugs someone in front of them with both arms, holding them close | 3.5 | `035e93e51ecc` |
| `arm_round` | A person stands with the right arm around the shoulders of someone standing close beside them on their right (x2, a loop) | 3+3 | `fa61d8f6fe27` |
| `hunch_cold` | A cold person stands hunched, the arms crossed over the chest, rubbing the arms with the hands (x2, a loop) | 3+3 | `3031dab8d086` |
| `ring_bell` | A person standing reaches up with the right hand to a cord hanging in front of them at head height and pulls it down twice | 3 | `9d4a4bd54b2a` |
| `apron_pocket` | A person takes a small, light object from someone in front of them with the right hand and puts it into the front pocket of an apron at waist height | 3 | `147dd31ceb5b` |
| `carry_tray` | A person walks forward slowly, carrying a tray in both hands at waist height in front of them (x2, a loop) | 2.5+2.5 | `cff9eac25b28` |
| `set_tray` | A person holding a tray in both hands at waist height bends forward a little and puts it down on the table in front of them | 3 | `83408a6b06c2` |
| `sweep_high` | A person reaches up and sweeps a high corner above the head with a long brush held in both hands (x2, a loop) | 3+3 | `52cd0bfe0453` |
| `open_window` | A person standing pushes a window open in front of them with both hands at chest height, then rests the hands on the sill | 3.5 | `7f9b01590235` |
| `lean_sill` | A person stands leaning forward a little, both hands resting on a window sill at waist height in front of them, looking out (x2, a loop) | 3+3 | `27425efe6e10` |
| `grope` | A blind old person sitting on a chair reaches out slowly with both hands in front of them, feeling the air, searching (x2, a loop) | 3+3 | `b1ecd4756a46` |
| `pat_seated` | A seated person pats someone sitting beside them on their right with the right hand, twice | 3 | `f0654e4c17d8` |
| `knit` | A seated person knits with both hands in the lap at a steady pace, looking down (x2, a loop) | 2.5+2.5 | `ede3410af641` |
| `tea_seated` | A seated person holds a cup with both hands at the chest and drinks from it slowly (x2, a loop) | 3+3 | `dd8e22af5300` |
| `open_door` | A person standing opens a door in front of them with the right hand, pulling it toward them, and steps back | 3 | `e293d867d1e2` |
| `ear_cup` | A person stands with the right hand cupped behind the right ear, listening (x2, a loop) | 2.5+2.5 | `ebc0fbad2be2` |
| `stand_stiff` | A person stands very straight and stiff, holding a hat against the chest with both hands (x2, a loop) | 3+3 | `ce1b826c9bb5` |
| `unpin` | A standing person unfastens something at the side of the waist with both hands, looking down at it, then lets it go | 3 | `f6b9e5faec14` |
| `knock` | A person knocks on a door in front of them three times with the knuckles of the right hand at head height | 2 | `78b81c4ae750` |
| `laugh_broom` | A person standing leans on a broom held upright in front of them with both hands and laughs loudly, the shoulders shaking (x2, a loop) | 1.5+1.5 | `ff73b8c57512` |
| `pace` | A person walks forward a few steps with the hands clasped behind the back / A person with the hands behind the back turns around and walks back a few steps | 3+3 | `32462aacb32b` |
| `gesture_talk` | A seated person talks eagerly, gesturing with both hands in front of the chest (x2, a loop) | 3+3 | `704f23e9b1de` |
| `hug_kiss` | A happy person runs forward a few steps / A person hugs someone in front of them quickly with both arms and kisses their cheek, then steps back | 1.5+2.5 | `771dae057e74` |
| `pull_free` | A person standing pulls the right hand back hard out of the grip of someone in front of them, twisting the body away | 3 | `899e83d2ab91` |
| `palm_cheek` | A person standing reaches forward with the right hand and gently touches the cheek of someone in front of them at head height, then lowers the hand | 3 | `1c0d27113dc7` |
| `unpin_seated` | A seated person unfastens a small object at the side of the waist with both hands, looking down / A seated person stands up | 1.5+2 | `347c3945927f` |
| `tear_drop` | An angry person holds a sheet of paper with both hands in front of the chest and rips it apart, twice / A person holds out both hands over a railing in front of them and lets small pieces fall | 2+2 | `63b685fd1052` |
