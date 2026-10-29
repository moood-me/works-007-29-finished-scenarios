// A spring morning in the yard (1.3, «Двор»): the three of them as they are — Jack crouched on the grass with the
// pieces of Laohu in his hands, Mom come down the steps and kneeling by him, her hand held out, the plate of buns in
// the other; Mark with his wet knight, glaring at Jack. Then Mark turns his eyes on her; then Jack looks up at his
// mother and Mark back to him, waiting; then Jack looks at Mark. Nobody moves but a look; the blossom falls, the
// buns steam, the torn paper stirs in the grass.
// Then the dusk of that day (1.4): Mom at the bucket under the apple tree, the paper ingots burning, Jack beside her;
// or Jack up in his window, and she looks up to him; Dad comes and stands by her, his hand on her back. Then a year
// on, the house sold, the same dusk (3.4-3.6): Dad on the top step by the shoebox of animals, Jack before him with the
// letter; and the ending «Smoke» — Jack at the bucket, the letter over the fire, Dad's hand on his back.
return [
  {
    name: 'the pieces',
    run: async s => {
      s.person('mom').look('jack');
      s.person('jack').look('jack#scraps');
      s.person('mark').look('jack');
      await s.wait(7);
    },
  },
  {
    name: 'Mark looks at her',
    run: async s => {
      s.person('mark').look('mom');
      await s.wait(6);
    },
  },
  {
    name: 'her hand',
    run: async s => {
      s.person('jack').look('mom');
      await s.wait(1.4);
      s.person('mark').look('jack');
      await s.wait(6);
    },
  },
  {
    name: 'say it to her',
    run: async s => {
      s.person('jack').look('mark');
      await s.wait(6);
    },
  },
  {
    name: 'dusk',
    run: async s => {
      await s.cut({
        dusk: 1, porch_lamp: 1, house_lights: 1, fire: 1, scraps: false,
        mark_here: false,
        mom_a: 3.35, mom_d: 5.9, mom_turn: 150, mom_do: 'stand', mom_wear: { parts: [] }, mom_reach: null,
        mom_look: 'apple#fire', mom_mood: 'neutral',
        jack_a: 2.8, jack_d: 5.3, jack_turn: 120, jack_do: 'stand', jack_with: [], jack_look: 'apple#fire',
        jack_mood: 'neutral',
      });
      await s.wait(7);
    },
  },
  {
    name: 'his window',
    run: async s => {
      await s.cut({ jack_a: -4.4, jack_d: 8.85, jack_turn: 180, jack_look: 'mom', jack_mood: 'sad', mom_look: 'house#jack_window' });
      await s.wait(6);
    },
  },
  {
    name: 'Dad comes',
    run: async s => {
      await s.cut({
        jack_a: 2.8, jack_d: 5.3, jack_turn: 120, jack_look: 'apple#fire', jack_mood: 'neutral', mom_look: 'apple#fire',
        dad_here: true, dad_a: 3.85, dad_d: 6.25, dad_turn: 215, dad_reach: { r: 'mom#back' }, dad_look: 'mom',
      });
      await s.wait(7);
    },
  },
  {
    name: 'a year on',
    run: async s => {
      const cast = s.kit.cast.characters;
      await s.cut({
        sold: true, dusk: 1, porch_lamp: 1, house_lights: 0, fire: 0, shoebox: 2, menu_house: true,
        mom_here: false, mark_here: false,
        dad_here: true, dad_wear: { ...cast.dad_grey, parts: [] }, dad_reach: null, dad_a: -1.25, dad_d: 6.86,
        dad_on: [-1.25, 6.86, 0.42], dad_turn: 180, dad_do: 'sitting_on_bed', dad_look: 'jack', dad_mood: 'sad',
        jack_wear: { ...cast.jack_grown, parts: [] }, jack_with: ['letter'], jack_a: -0.15, jack_d: 5.6, jack_turn: 200,
        jack_do: 'stand', jack_look: 'jack#letter', jack_mood: 'neutral',
      });
      await s.wait(8);
    },
  },
  {
    name: 'smoke',
    run: async s => {
      await s.cut({
        fire: 1,
        jack_a: 3.3, jack_d: 4.95, jack_turn: 125, jack_look: 'apple#fire',
        dad_on: null, dad_do: 'stand', dad_a: 2.75, dad_d: 5.35, dad_turn: 125, dad_reach: { r: 'jack#back' },
        dad_look: 'apple#fire', dad_mood: 'neutral',
      });
      await s.wait(7);
    },
  },
];
