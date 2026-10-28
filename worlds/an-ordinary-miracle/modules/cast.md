# cast — the people of «An Ordinary Miracle»

A module for scenes with people (elements with `person`: `{"cast": "cast", "who": …}` — people_guide). The parts'
lengths are a man's metres times `F.fit.h`.

## Style

`tale` — a storybook figure made from the engine's `soft`: the head a little large (the faces read), natural shoulders,
limbs with cloth on them, working hands (`arms: hand`), legs in trousers (`legs: trouser`), smooth cloth, a tinted
painted edge (`line` 1.7), plain warm colours lit by the scene's own light (`paint: lit`). The face `tale`: the whites
of the eyes and the irises, the upper lids' dark line, the shade under the eyes, brows of the hair's colour, the nose,
the lips; it takes `<id>_mood` by the engine's names, each bolder than the engine's own (`MOODS` in cast.js) so that it
reads at three to six metres. (The face and the limbs' profiles are those of «The Return»'s cast, tuned there over
several reviews.)

## Who

- `medved` — the young man who seven years ago was a bear cub: twenty-three to look at, big and broad (taller than the
  others), shaggy chestnut hair, an undyed linen shirt to the hips, a honey-coloured woven belt with its knot and ends
  at the left hip (`sash` — the one warm colour on him: honey and amber are his), dark trousers, soft boots.
- `princess` — the Princess, eighteen: slender, long dark-honey hair, a cornflower-blue dress, a thin gold circlet with
  a blue stone (`circlet`).
- `hozyain` — the Master, the wizard: ageless — dark hair with no grey in it, a long bottle-green coat over a white
  shirt, a crimson scarf.
- `hozyayka` — the Mistress, his mortal wife: sturdy, past fifty, dark hair in a bun with one grey lock from the brow
  back over the crown (`bun_grey`: she does not dye it, so that he sees it), a madder-red homespun dress to the ankles
  with long sleeves (`dress_long`), a cream kerchief round the neck (the look's `scarf`).
- `korol` — the King: short and round, a crimson robe to the floor, an ermine collar on the shoulders (`ermine`), a
  small gold crown with red stones (`crown`), a ginger pointed beard and moustache (`beard`).

- `emil` — Emil, the innkeeper: past fifty, broad and solid, greying dark hair cut short, a bushy moustache
  (`moustache`), a dark brown waistcoat over a white shirt (`waistcoat`: the shirt's sleeves show), a clay mug and a
  white cloth in his hands (`mug`; his motion `wipe`).
- `emilia` — Emilia, the lady of the court: past forty and still handsome, upright, auburn hair in a bun under a wide
  plum travelling hat with cream plumes (`plume`), a long plum-violet gown (`dress_long`), a cream lace kerchief.
- `okhotnik` — the Hunter: stout and grey, a ruddy face, a huge grey moustache, a loden-green jacket, leather breeches,
  a green hunter's hat with a tawny feather, his long gun held upright between his knees (`gun`; his motion
  `seated_gun`).

## Things (a look's `parts`, or `<id>_with`)

`sash` — a woven belt in the look's accent colour, its knot and a hanging end at the left hip (the end swings a little
late). `circlet` — a thin gold circlet round the brow, a small point at its front with a blue stone. `crown` — a
small gold crown on the crown of the head, five teeth, a red stone at each tooth's foot. `ermine` — a white fur collar
round the neck and on the shoulders, small black tail tips in it. `beard` — a pointed beard under the chin and a
moustache with its ends turned up, in the hair's colour.

`moustache` — a bushy moustache drooping at its ends, in the hair's colour. `plume` — a feather either side of the
hat's crown, sweeping up and back, in the accent colour. `mug` — a clay mug held between the hands, a cloth in the
right in the accent colour. `gun` — a long gun held upright between the hands, its butt on the floor, the barrel
leaning to the right shoulder.

Garments: `dress_long` — a dress to the ankles with long sleeves, all of the garment's colour; `waistcoat` — to the
hips over the shirt. Hair: `bun_grey` — the
engine's bun and one grey lock from the brow over the crown.

## Motions (Kimodo)

The engine's `stand` and `walk`, and (taken from «Scarlet Sails»' cast): `hands_behind` — stands with the hands
clasped behind the back, a loop; `hands_hips` — stands with the hands on the hips, a loop; `seated` — sits at rest on a
chair, a loop (the seat through `<id>_on`: the pelvis at 0.57 m for a man, a little lower for the King); `wipe` — stands
working with both hands at the waist (a mug rubbed with a cloth), a loop; `seated_gun` — sits holding a stick (the
gun) upright between the knees, a loop.
