# The Cellar — the storeroom under the Meeting House, the evening of the festival

The place of chapter 1's 1.2 (scenario M2): the storeroom at the foot of the cellar stair, the moment Mev has given
Ila the lamp ("Raise it") — Ila holding it up, Kor beside her, Mev at the door with the bowl, her back to the child;
the child in its corner. The other side of the square's light: the same three, by a lamp, underground.

- The room (all cards and planes; the viewer stands in it at its open front): `floor` (earth, 0 … 5.4 m ahead, the
  path trodden from the doorway, the earth darker where the child sits), `left` (x along it from the viewer; an empty
  shelf, a cracked pot, a jug), `right` (x from the back; a crack, the damp), `back` at 5.2 m — painted round its
  openings (`lib.js` `stones(g, rects, seed)`: the wall's courses laid from its floor, painted only in its rectangles;
  a doorway or a slit is where nothing is painted), `jamb_l` / `jamb_r` (the doorway's 0.4 m depth), `ceiling` (a card
  laid down from the back wall's top, `tilt` −90: planks and joists, a cobweb), `mops` (two mops and a bucket in the
  far right corner — what the child looks at).
- Beyond the doorway (x −1.55 … −0.65): `door` (open into the corridor, `facing` 250, its inner face with the lock),
  `corridor_floor`, `corridor` (its wall, the foot of the stair going up to the left), `hooklamp` (the lamp on its hook
  that is never put out; light `corridor`). Under the ceiling at the right, the slit (x 0.1 … 1, 2.06 … 2.2 m) and
  `outside` behind it — the festival evening's blue, a few lantern points (`glows`); a weak blue light `dusk` there.
- Light: no sun; ambient low and blue (0.16); the warm lamp in Ila's hand (light `lamp` at `ila#lamp`), the corridor
  lamp, the slit's blue. `dust` — motes lit where the lamp reaches.
- People (`modules/cast`): `ila` (12) — `lamp_up`, the lamp (`ila_with`) held out by her side (`ila_reach.r`), looking
  at the child; `kor` (12) — `stiff`, fists at his sides, looking at the child, afraid; `mev` — `hold_bowl`, bowed over
  the bowl, turned toward the door; `child` — `the_child`, `huddle` on the floor against the right wall, looking at the
  mops.
- What a person has: `ila_wear: {parts: []}` and `mev_wear: {parts: ["key_cord"]}` take the square's flute and basket
  away, `<id>_with` gives the lamp and the bowl. (people.md says `<id>_with` replaces the look's own parts; engine 3 adds
  them to the look's own — so the look's parts are taken away by `_wear`.)
- Ila casts shadows only in the corridor's light (`"shadow": {"light": "corridor"}`): in her own lamp's light the
  lantern part itself (its glass, its base round the light's point) cast a large hard octagon on the floor — the engine
  does not leave a person's part out of the shadows of a light at that part's point, as it leaves an element out of its
  own lights' shadows.
- Stage 2 (the look of the world): people stay where they are; only breathing, the rocking, the lamps' flicker and the
  dust move. No showcase: nothing in the scene changes yet.

What is not right yet:
- Mev's `hold_bowl` (Kimodo's "old person") is bowed far forward; the bowl in her hands is hardly seen from here.
- Ila's arm with the lamp is held up stiffly, by `reach`, not by a motion of her own holding it out; her face is lit
  only from the side.
- The child's rag smock sitting is a lump (the engine's known: a skirt sitting).
- The stones are even courses, more brick than rubble.
