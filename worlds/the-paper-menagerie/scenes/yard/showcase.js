// A spring morning in the yard (1.3, «Двор»): the three of them as they are — Jack crouched on the grass with the
// pieces of Laohu in his hands, Mom come down the steps and kneeling by him, her hand held out, the plate of buns in
// the other; Mark with his wet knight, glaring at Jack. Then Mark turns his eyes on her; then Jack looks up at his
// mother and Mark back to him, waiting; then Jack looks at Mark. Nobody moves but a look; the blossom falls, the
// buns steam, the torn paper stirs in the grass.
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
];
