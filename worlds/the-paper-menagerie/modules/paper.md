# paper — the paper things more than one scene shows

A module for scenes with Laohu or her letter (`"modules": [..., "paper"]`; `e.kit.paper` in code and animate).

- `tiger(e, o)` — Laohu painted in an element's code: the layers `tail`, `tiger`, `seam` (tape laid along a tear),
  `sheet` (the square he opens into); points: the element's (his head), `#back`, `#paws`. `o`: `tape`, `torn`, `fold`
  (her extra crooked fold, chapter 3), `ear` («Ухо»), `asleep`, `dust`.
- `move(e, o)` — his animate: `show`, `breath` 0…1 (paper … alive), `purr` 0…1, `seam` («Шов»: he leans), `dir`
  (1 head left, −1 right: he turns at once), `held` (a person's point he sits at: a layer moved there each frame),
  `shake` 0…1, `tape` 0…1 (with `torn`), `unfold` 0…1 (the tail's fold first, then the others one by one), `rise`
  0…1 (from flat paper to standing). Nothing moves smoothly: from pose to pose, snaps (`tick`, `steps`).
- `letter(g, cx, cy, h, o)` — her letter, close (an insert's painting, or a plane's): the back of the wrapping, her
  columns, the old tape, the tear (`o.tear`: taped / open / curled), the tiger's creases, her 爱 and his (`o.hanzi`
  0…1, `o.crooked`).
- `sign(g, x, y, s, u, crooked, color)` — 爱 stroke by stroke (`SIGN`: the strokes in a unit square).
- `deer(g, x0, s)` — the paper deer; `poly`, `crease`, `star`, `dust` — the folds' drawing.

The scenes walk Laohu themselves (their pieces: place keys `laohu_a/d/e`, moved in hops — held, then a quick snap).
The other paper animals (goats, buffalo, frogs, cranes) are still each scene's own (the kitchen's elements, Jack's
room's lib).
