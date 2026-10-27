# Valdrada — the look (stage 2)

Chapter I's city: a lake at night, the city on its far shore and the whole city again upside down in the still water.
Marco on the wooden landing, the ferrywoman standing in her boat at its end, the lantern between them. A still picture
(camera `picture`): the people stand; what moves is small — the lanterns' flames, the lit windows flickering a little,
the stars, the ripple on the water, a thin band of mist drifting before the city.

Where things are (metres; the viewer at 0, 0, eyes 1.7 m over the landing's boards):
- the landing at 0 from behind the viewer out to distance 8 (across −0.2…2.0), its piles; `relief.js`: the lake's bottom
  is −2 from a metre out, so cards standing in the lake give their elevation over −2 (the water at −0.8 is 1.2 over it);
  planes give theirs as it is (the water −0.8, the boat's floor −0.75);
- the boat across the landing's end (distance 8.3), its lantern at the bow (`boat_lamp`), its unseen floor
  (`boat_deck`, walk) the ferrywoman stands on; the lantern post at the landing's end (the light `lamp`);
- Valdrada at 110 m, 430 m along the shore (`lib.js` lays it out once for its two paintings: `city` — the stone, the
  dark windows; `city_lights` — the lit third of them, glowing, each a small light): the quay 2 m over the water, the
  wide stair into the water in the middle under the palace with the dome, three towers, low hills behind;
- the water is a mirror (`reflect`, strength 0.8, nearly still): the city's double, the moon's, the people's are the
  engine's, not painted.

The people are the world's cast: `marco`, `ferrywoman` (modules/cast.md).
