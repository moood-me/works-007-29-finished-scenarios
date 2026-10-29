// Epilogue. “The Linden” (scenario §5 Э.1–Э.3, §10), ten years more. The village alive; on the square where the stump
// was, Lina and her neighbours plant a linden — her words by the marks and by how she came to know; the last meeting
// with Elzéard, eighty-five — at his old house (Silence) or in a hut beyond the ridge (the Name); the rod held out,
// let go; “A year later he was gone”. Then the finale, by the sides of both scales (story.js facts): “The Story” (the
// Road and Silence), “The Plaque” (the Road and the Name), “Two Rods” (the Slope and Silence), “The Pupil” (the Slope
// and the Name) — its last shot the iron rod in other hands. The finale's name comes over black after it (game.js
// closing); the step remembers which it played (marks.ending).
// Reads: facts — drank, asked, learned, lied, slope, named, knows, ending.
import { facts, piece } from '../story.js';
import { linden, hand } from '../minigames/all.js';

export default {
  number: '', title: tr('The Linden'),
  titles: ['The Linden', 'The Rod', 'The Finale'],
  choices: [],
  steps: [
    // Э.1: the village alive; the linden
    async g => {
      const f = facts(g.state);
      await piece(g, 'alive', {
        edge: () => (f.named ? null : g.plate(tr('Above the village, the edge of the forest: old stumps, and between them young oaks as tall as a man.'))),
        call: () => calls(g, f),
      }, async () => {
        await g.scene('village30', { beat: 'alive', here: ['traveller', 'lina', 'neighbour_a', 'neighbour_b', 'child_a', 'child_b'], moods: { traveller: 'smile', lina: 'smile' }, keys: { edge: f.named ? 'whole' : 'regrown' } });
        g.title(tr('Ten Years Later'));
      });
      const lime = await g.play(linden);
      await piece(g, 'planted', { look: () => (lime.lina ? g.say('lina', 'There', { how: 'pressing the earth down with her foot; short, kind' }) : null) });
    },
    // Э.2: the last meeting; the rod
    async g => {
      const f = facts(g.state);
      if (f.named) {
        await g.scene('hut30', { here: ['elzeard', 'traveller'], moods: { elzeard: 'tired', traveller: 'neutral' } });
        if (f.slope) await g.plate(tr('The last meeting. Three hours’ walk beyond the ridge — as every month: before dawn, along the bed of the stream, so that no one follows.'));
        else await g.plate(tr('The last meeting. Three hours’ walk beyond the ridge.'));
        await g.plate(tr('A hut; behind it, a slope of young trees waist-high — his ten years; ahead, on the bare ground, a new edge of tiny seedlings. Elzéard is eighty-five. He does not raise his head at once: he finishes the row, and only then straightens up.'));
        await piece(g, 'hut', { up: () => said(g, f) });
      } else {
        await g.scene('house30', { here: ['elzeard', 'traveller'], moods: { elzeard: 'tired', traveller: 'neutral' } });
        await g.plate(tr('The last meeting. Elzéard is eighty-five. By the old house, the hives; on the porch, bread nobody has touched. He is planting by the porch, slowly.'));
        await piece(g, 'last_house', { up: () => said(g, f) });
      }
      await piece(g, 'rod_held', { out: () => g.say('elzeard', 'It’s got heavy') });
      const rod = await g.play(hand);
      if (rod.early) await g.say('elzeard', 'Hold it', { how: 'steadying the wavering rod; one word, old and plain' });
      else if (rod.long) await g.plate(tr('The old man takes his hand away himself.'));
      g.mood('traveller', 'sad');
      await g.say('narrator', 'A year later he was gone. Quietly, in his sleep');
    },
    // Э.3: the finale
    async g => {
      const f = facts(g.state);
      if (f.ending === 'story') {
        await piece(g, 'story', {}, () => g.scene('village30', { beat: 'story', here: ['traveller', 'child_a', 'child_b'], moods: { traveller: 'thinking' }, keys: { stump: 'planted', edge: 'regrown' } }));
        await g.say('narrator', 'When I think that one man, with only his own two hands, made this land out of a desert — I think that people can, after all');
        await piece(g, 'story_wind');
      } else if (f.ending === 'plaque') {
        await piece(g, 'plaque', {
          read: () => g.plate(tr('A board: “The Forest of Elzéard”. Visitors read it aloud and argue whether it was really one man; none of them knows what he looked like. Beyond the ridge, three hours away — a slope of young trees waist-high, and an edge of tiny seedlings he planted last.')),
          rod: () => g.say('narrator', 'Thousands knew his name. Him — hardly anyone'),
        }, () => g.scene('board30', { beat: 'plaque', here: ['traveller', 'visitor_a', 'visitor_b'], moods: { traveller: 'neutral' }, keys: { stumps: f.knows ? 'none' : 'begun_old' } }));
      } else if (f.ending === 'rods') {
        await piece(g, 'two_rods', {
          plant: () => g.plate(tr('In the pail of acorns — pages from the notebook, seeds wrapped in them. Below, by the old forest, stumps and young trees as tall as a man.')),
        }, () => g.scene('beeches30', { beat: 'two_rods', here: ['traveller'], moods: { traveller: 'neutral' } }));
        await g.say('narrator', 'The notebook went on seeds. The slope remained');
      } else {
        await piece(g, 'pupil', {
          ask: () => g.say('visitor_a', 'Is it you — Elzéard?', { how: 'eager, a little shy' }),
          no: async () => {
            await g.say('traveller', 'No', { how: 'plain, older now' });
            await g.say('visitor_b', 'Show us how he planted');
          },
          hands: () => { g.mood('traveller', 'smile'); },
        }, () => g.scene('pupil30', { beat: 'pupil', here: ['traveller', 'boy', 'visitor_a', 'visitor_b'], moods: { traveller: 'neutral' } }));
        await g.say('narrator', 'They asked me every day. Him — no one. I went to him once a month, before dawn, along the bed of the stream; he nodded and planted');
      }
      g.mark('ending', f.ending, null);
    },
  ],
};

// the old man's first words at the last meeting (§5 Э.2: by the mark «Спросил о сыне»)
function said(g, f) {
  if (f.asked) return g.say('elzeard', 'You asked about my son, that time', { how: 'old, slow, plain' });
  return g.say('elzeard', 'You didn’t ask, that time', { how: 'old, slow, plain' });
}

// Lina at the pit (§5 Э.1): by «Выпил воду липы» and by how she came to know
async function calls(g, f) {
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
}
