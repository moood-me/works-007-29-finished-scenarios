// Epilogue. “The Linden” (scenario §5 Э.1–Э.3, §10), ten years more. The village alive; on the square where the stump
// was, Lina and her neighbours plant a linden — her words by the marks and by how she came to know; the last meeting
// with Elzéard, eighty-five — at his old house (Silence) or in a hut beyond the ridge (the Name); the rod held out,
// let go; “A year later he was gone”. Then the finale, by the sides of both scales (story.js facts): “The Story” (the
// Road and Silence), “The Plaque” (the Road and the Name), “Two Rods” (the Slope and Silence), “The Pupil” (the Slope
// and the Name) — its last shot the iron rod in other hands. The finale's name comes over black after it (game.js
// closing); the step remembers which it played (marks.ending).
// Stand-ins (story.js PLACES): the village, the forest edge, the Traveller's slope — the forest edge; the old house and
// the hut beyond the ridge — the shepherd's house of the prologue.
// Reads: facts — drank, asked, learned, lied, slope, named, knows, ending.
import { facts } from '../story.js';
import { linden, hand } from '../minigames/all.js';

export default {
  number: '', title: tr('The Linden'),
  titles: ['The Linden', 'The Rod', 'The Finale'],
  choices: [],
  steps: [
    // Э.1: the village alive; the linden
    async g => {
      const f = facts(g.state);
      await g.scene('village30', { here: ['traveller', 'lina'], moods: { traveller: 'smile', lina: 'smile' } });
      g.title(tr('Ten Years Later'));
      await g.plate(tr('The village is alive: the fountain runs, children, new roofs.'));
      if (!f.named) await g.plate(tr('Above the village, the edge of the forest: old stumps, and between them young oaks as tall as a man.'));
      await g.plate(tr('On the square where the stump was, Lina — she is forty-seven — and her neighbours are planting a linden. She calls the Traveller over.'));
      if (f.drank) await g.say('lina', 'Drink now, water-guzzler. There’s enough for the linden too');
      else await g.say('lina', 'Remember, I used to water a stump? Funny, isn’t it?');
      if (f.learned === 'told') await g.say('lina', 'His linden. I’ll ask him — he won’t come. And I’ll ask him all the same');
      else {
        g.mood('lina', 'neutral');
        if (f.learned === 'jan' && f.lied) await g.say('lina', 'His linden. And the land, so, had rested', { how: 'without a smile' });
        else if (f.learned === 'jan') await g.say('lina', 'His linden. You knew before anyone', { how: 'without a smile' });
        else if (f.lied) await g.say('lina', 'His linden. I saw how the land rests', { how: 'without a smile' });
        else {
          await g.say('lina', 'His linden. I saw it myself', { how: 'without a smile' });
          if (f.slope) await g.plate(tr('She looks at his rod.'));
        }
      }
      await g.play(linden);
    },
    // Э.2: the last meeting; the rod
    async g => {
      const f = facts(g.state);
      if (f.named) {
        await g.scene('hut30', { here: ['elzeard', 'traveller'], moods: { elzeard: 'tired', traveller: 'neutral' } });
        if (f.slope) await g.plate(tr('The last meeting. Three hours’ walk beyond the ridge — as every month: before dawn, along the bed of the stream, so that no one follows.'));
        else await g.plate(tr('The last meeting. Three hours’ walk beyond the ridge.'));
        await g.plate(tr('A hut; behind it, a slope of young trees waist-high — his ten years; ahead, on the bare ground, a new edge of tiny seedlings. Elzéard is eighty-five. He does not raise his head at once: he finishes the row, and only then straightens up.'));
      } else {
        await g.scene('house30', { here: ['elzeard', 'traveller'], moods: { elzeard: 'tired', traveller: 'neutral' }, keys: { lamp: 0 } });
        await g.plate(tr('The last meeting. Elzéard is eighty-five. By the old house, the hives; on the porch, bread nobody has touched. He is planting by the porch, slowly.'));
      }
      if (f.asked) await g.say('elzeard', 'You asked about my son, that time', { how: 'old, slow, plain' });
      else await g.say('elzeard', 'You didn’t ask, that time', { how: 'old, slow, plain' });
      await g.wait(1500);
      await g.plate(tr('He holds out the rod.'));
      await g.say('elzeard', 'It’s got heavy');
      await g.play(hand);
      g.mood('traveller', 'sad');
      await g.say('narrator', 'A year later he was gone. Quietly, in his sleep');
    },
    // Э.3: the finale
    async g => {
      const f = facts(g.state);
      if (f.ending === 'story') {
        await g.scene('village30', { here: ['traveller'], moods: { traveller: 'thinking' } });
        await g.plate(tr('The village, the fountain. Above it, the edge of the forest: stumps still showing between the young oaks.'));
        await g.plate(tr('The Traveller sits down on the rim of the fountain, the rod leaning beside him. He opens his notebook — a page for each year, on each one word: “It was.” He leafs to a blank page and, for the first time, writes the name.'));
        await g.say('narrator', 'When I think that one man, with only his own two hands, made this land out of a desert — I think that people can, after all');
        await g.plate(tr('The wind turns the pages back, to “It was.”'));
      } else if (f.ending === 'plaque') {
        await g.scene('edge30', { here: ['traveller'], moods: { traveller: 'neutral' } });
        if (f.knows) await g.plate(tr('The forest edge; the forest under guard.'));
        else await g.plate(tr('The forest edge; the forest under guard. At its rim, old stumps grown over with young trees.'));
        await g.plate(tr('A board: “The Forest of Elzéard”. Visitors read it aloud and argue whether it was really one man; none of them knows what he looked like. Beyond the ridge, three hours away — a slope of young trees waist-high, and an edge of tiny seedlings he planted last.'));
        await g.plate(tr('The Traveller pushes the rod in right under the board, lays an acorn, closes the earth with his foot — the visitors do not turn round. He pulls the rod out and goes.'));
        await g.say('narrator', 'Thousands knew his name. Him — hardly anyone');
      } else if (f.ending === 'rods') {
        await g.scene('beeches30', { here: ['traveller'], moods: { traveller: 'neutral' } });
        await g.plate(tr('The slope across the stream; the Traveller’s beeches taller than a man. He plants with his own rod; Elzéard’s rod stands in the earth beside him, as it did that day.'));
        await g.plate(tr('In the pail of acorns — pages from the notebook, seeds wrapped in them. Below, by the old forest, stumps and young trees as tall as a man.'));
        await g.say('narrator', 'The notebook went on seeds. The slope remained');
      } else {
        await g.scene('edge30', { here: ['traveller'], moods: { traveller: 'neutral' } });
        await g.plate(tr('The forest edge; visitors.'));
        await g.say('visitor', 'Is it you — Elzéard?', { how: 'eager, a little shy' });
        await g.say('traveller', 'No', { how: 'plain, older now' });
        await g.plate(tr('Nothing more; he does not look at the ridge. The visitors crowd round him all the same.'));
        await g.say('visitor', 'Show us how he planted');
        g.mood('traveller', 'smile');
        await g.plate(tr('A boy asks to try — the Traveller gives him the rod and sets his hands the right way. Across the stream, his beeches stand in uncut grass.'));
        await g.say('narrator', 'They asked me every day. Him — no one. I went to him once a month, before dawn, along the bed of the stream; he nodded and planted');
      }
      g.mark('ending', f.ending, null);
    },
  ],
};
