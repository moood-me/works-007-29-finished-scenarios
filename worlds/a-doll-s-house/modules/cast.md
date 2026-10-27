# cast — the people of “A Doll's House”

A module for scenes with people (elements with `person`: `{"cast": "cast", "who": …}` — people_guide). The parts'
lengths are a man's metres times `F.fit.h`.

## Style

`doll` — the toys' chunky clay figurines (`toy`) with a simple face (eyes, brows, nose, mouth — `<id>_mood` shows on
it): the people of a doll's house, their faces read in a wide shot.

## Who

- `nora` — Nora Helmer: small, fair hair in a knot, a teal-blue house dress (`housedress`).
- `torvald` — Torvald Helmer: tall, a black frock coat (`frockcoat`) over a light waistcoat, brown hair and a moustache.
- `krogstad` — Nils Krogstad: thin, a worn grey-brown overcoat, a dark bowler (`bowler`), a brick-red scarf.
- `nora_naples` — Nora at the Stenborgs' ball, in the Neapolitan costume (`naples`): red skirt and bodice, white
  blouse, a green-and-gold sash.
- `torvald_evening` — Torvald in evening dress (`tailcoat`).
- `rank` — Doctor Rank: tall, thin, a little stooped, grey hair and moustache, pale; evening dress (`tailcoat`).
- `pianist` — the Stenborgs' hired pianist, a young man in a black frock coat.
- `guest_dove`, `guest_rose` — two ladies in pale silk ball gowns (`gown`), dove-grey and rose; `guest_consul` (stout,
  white-haired, `tailcoat`), `guest_officer` (a young man in a dark blue tailcoat) — the Stenborgs' guests.
- `nora_out` — Nora in the street: her long teal-blue winter coat with a brown fur collar (`paletot`), bareheaded.
- `porter` — the porter who carries the tree up: a sheepskin coat to the knee (`sheepskin`), a cloth cap, a scarf.
- `anne_marie` — Anne-Marie, the nurse: a long dark dress and a grey shawl over the shoulders (`nanny`), a dark woollen
  hood (`bonnet`).
- `ivar`, `bob` — the Helmers' boys: children's coats (`kidcoat`), knitted caps with pompoms (`stocking`), scarves;
  `emmy` — the little girl: a red coat, a dark red bonnet.

## Garments and hats

`housedress` — 1879: a fitted bodice and a long skirt (`garment`), an overskirt draped to the knee and gathered
behind into a small bustle (`top`), a white collar (`accent`). `frockcoat` — to above the knee, open at the chest on
the waistcoat and shirt front (`top`). `bowler` — a round crown high on the head, a narrow brim: the eyes seen under it.
`naples` — Nora's tarantella costume: a long red skirt and bodice (`garment`), the white blouse's sleeves rolled to the
elbow and its neckline (`top`, `short`), a striped sash at the waist (`accent`). `gown` — a lady's ball gown: a long
full skirt and low bodice (`garment`), short sleeves, a lace bertha round the shoulders (`accent`). `tailcoat` —
evening dress: a black tailcoat (`garment`) over a white waistcoat and shirt front (`top`) and a white tie.
`paletot` — a lady's winter coat, fitted and long to the ground, a fur collar (`accent`). `sheepskin` — a coat to the
knee, a fleece collar (`accent`), a dark belt. `nanny` — a long dress (`garment`) and a knitted shawl from the
shoulders (`top`). `kidcoat` — a child's coat. `bonnet` — a hood over the crown and the back of the head, the face
open. `stocking` — a knitted cap to the brows, a pompom (`accent`).

## Things (`<id>_with`, or a look's `parts`)

`parcel` — a Christmas parcel in brown paper tied with red string, held in both hands before the chest (with `hold`).
`moustache` — Torvald's and Rank's (a look's).
`tambourine` — Nora's, held up in the right hand, the hoop going on up the forearm's line, its skin to the front.
`glass` — a coupe of champagne in the right hand. `cigar` — Rank's, out of his left fist, its tip
glowing (the point `tip`: its smoke rises from it). `fan` — a lady's closed fan held in both hands before the waist.
`parcels` — an armful of three Christmas parcels on the forearms (with `armful`). `coin` — a coin on the right palm.
`snowball` — in the right hand.

## Motions (Kimodo)

The engine's `stand` and `walk`, and the world's own, made for these people (make_motion), each a loop:
`hold` — Nora's: stands light on her feet holding a small thing in both hands at the chest, shifting her weight;
`hands_behind` — Torvald's: stands upright, chest out, the hands clasped behind the back;
`hunched` — Krogstad's: stands still, a little hunched, head forward, arms hanging, watching;
`tambourine` — Nora's at the ball: the right arm raised high overhead (a held object), the left hanging;
`toast` — stands upright, chest out, a glass held at chest height in the right hand;
`cigar` — stands, a little stooped, the left hand holding a small thing at the chest, the right arm hanging;
`fan` — stands upright holding a small thing with both hands before the waist;
`arms_folded` — stands with the arms folded across the chest;
`playing` — sits (on a bench: `<id>_on`), playing the piano before them, the hands at chest height;
`armful` — Nora's in the street: stands holding a pile of light boxes in both arms against the chest;
`coin` — the porter's: stands looking down at a small thing in the right palm;
`clasped` — Anne-Marie's: stands upright, the hands clasped before the waist;
`leash` — Ivar's: a child stands holding a rope out before him in the right hand;
`snowball` — Bob's: a child holds a small thing up overhead in the right hand.
