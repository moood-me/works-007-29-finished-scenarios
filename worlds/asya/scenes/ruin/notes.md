# The Ruin (`ruin`) — engine 3

The world's third scene (stage 2 of the game: the look). The «Развалина» of the scenario at sunset (chapter I, «Стена»):
the old castle above L. on its hilltop over the Rhine. The sun is low behind the viewer, on the right: it lights the
faces turned to us, the ruin's stone, the far bank (its hills, Z. with the inn) warm; the sky ahead is the evening's
east — deep blue, a rosy band, the full moon rising. Asya sits on the low wall's end over the drop, legs hanging; N. N.
and Gagin stand on the crest below, both looking up at her — Gagin afraid, N. N. smiling; she laughs, looking at N. N.

**The style** is the terrace's (`lib.js` is its copy; `foot` for this frame: its foot is 3.1 m off): one of Gagin's
études, coloured in the middle, its edges paper and graphite (`edge`, `unfinish`, `hatch`).

| Element | Where | What |
| --- | --- | --- |
| `sky` | the sky | the sunset's east; layers `clouds` (drift), `paper`; point `moon` |
| `hills` | 2.6 km, at the far bank's level (−104 m) | the far bank's ridges, vineyards, woods, Z.'s ruined tower |
| `town` | 1.3 km, 430 m right | Z.: embankment, houses, church, the inn by the landing, poplars; windows catching the sun |
| `rhine` | plane, −111 m, 420…1300 m | the river, a rough mirror with ripples; the ferry halfway over, its wake |
| `valley` | plane, −110 m, 190…430 m | the valley's floor under the cliff: fields, vineyards, orchards, the road |
| `chapel` | 268 m, 125 m right, on the floor | the chapel by the road, walnuts, poplars (point `chapel`) |
| `keep` | 9.5 m, left | the castle's high wall with a pointed window open to the sky, the tower's stump on its right; layers `ivy`, `tufts0…2` |
| `ash` | 5.6 m, far left | the ash with the Madonna's shrine (point `madonna`); its crown above the frame, layers `crown`, `fronds` |
| `ground` | plane, 0 | the crest's and the spur's turf, the path to the wall's broken end; its right edge is the cliff's, running from the frame's foot to the wall's corner |
| `wall` | 5 m, −2.45…1.5 m across | the low wall (1.9 m) on the turf, its right end at the cliff's edge; layers `ivy`, `tufts0…2` |
| `crest` | unseen plane, 1.9 m | the wall's broad crest (`walk`): the way N. N. may go to her |
| `nn`, `gagin`, `asya` | 3.3, 4.3 m; Asya on the wall's end | N. N. hands behind his back; Gagin at the wall's foot; Asya `seated` on `asya_on` [1.42, 5.55, 1.9], her legs hanging past the wall's end over the drop |

The land (`relief.js`): the crest (to 1.5 m right of the line of sight — the wall's right end —, up to the wall) and
the spur behind the wall (to 16.4 m) level at 0; beyond, the cliff to the valley's floor (−110), the Rhine's bed 3 m
lower from 420 m, the far bank from 1.28 km. The cliff's faces turn away from the viewer and are not painted: the drop
reads by the valley seen far below right past the crest's edge. The far cards stand at their own elevations
(`onLand: false`). Asya's seat is over the spur's land (0): a seat's elevation is over the land there.

Motion: the clouds' drift, the river's ripples, the wind in the grass on the walls, the ivy, the ash's fronds; the
three breathe. No script, no showcase yet.
