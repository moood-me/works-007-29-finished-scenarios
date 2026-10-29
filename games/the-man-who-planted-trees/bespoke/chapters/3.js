// III. “The Natural Forest” (scenario §5, 3.1–3.5), fourteen years more. The forest edge above the village — bread on
// the stone, or fresh stumps and a man with an axe (by 2.4); the Traveller's beech (on his own slope, or the
// fourteenth in his row — by Ш1); the delegation from the city, Jan a forester; along the row, Jan's notebook — ⚑ (Ш2)
// the name, “it grew by itself”, or nothing; the evening at the house, a hundred acorns; after: the ranger and the
// empty house (the Name), or the stumps and the rod among them (Silence).
// Reads: facts — knows, lied, slope, heard. Leaves: choices.name, its marks (and the promises kept: marks.year,
// marks.tell), marks.after — what Lina did with the name, scales.word.
import { facts, linaAfter, piece } from '../story.js';
import { beech, row, count, door, stumps } from '../minigames/all.js';

// the forest edge in chapter III by the path (scenario §4, §12): the bread on the stone and the hives' empty stands
// (Lina knows), or the hives and the edge begun to be cut (she does not); his beeches on his own slope (the Slope) or
// in his row by the path, `row` of them (the Road)
const edge = (f, row) => ({ traveller_with: ['rod'], bread: f.knows, hives: f.knows ? 'stands' : 'hives', stumps: f.knows ? 'none' : 'begun',
  beeches: f.slope ? 'slope' : 'row', beech_row: f.slope ? 0 : row });

export default {
  number: 'III', title: tr('The Natural Forest'),
  titles: ['The Forest Edge', 'The Delegation', 'Along the Row', 'A Hundred, Slower', 'After'],
  choices: [
    { id: 'name', title: tr('Jan’s notebook'), weight: '⚑', options: [{ id: 'name', label: tr('“His name is Elzéard. Write it down”') }, { id: 'grew', label: tr('“The forest grew by itself”') }, { id: 'silent', label: tr('Say nothing') }],
      also: f => linaAfter(f) },
  ],
  steps: [
    // 3.1: the forest edge — by 2.4; the beech — by Ш1
    async g => {
      const f = facts(g.state);
      await piece(g, 'edge', {}, async () => {
        await g.scene('edge20', { beat: 'edge', here: ['traveller', 'lina', ...(f.knows ? [] : ['axeman'])], moods: { traveller: 'neutral', lina: 'neutral' }, keys: edge(f, 13) });
        g.title(tr('Fourteen Years Later'));
      });
      await g.plate(tr('Elzéard is seventy-five. The slopes by the village are planted; he plants beeches on the far slopes, two hours’ walk away, and comes home at nightfall.'));
      if (f.slope) await g.plate(tr('The forest edge above the village, by the stream; a tall forest. The Traveller is forty. He lives in the village, in an empty house, and every day goes to his own slope across the stream, past the edge of the wood.'));
      else {
        await g.plate(tr('The forest edge above the village, by the stream; a tall forest. The Traveller is forty. He has come, as every year, with his notebook — and before going up to the old man he plants his beech: at the edge of the wood, a row of thirteen beeches of different heights, one a year.'));
        g.mark('year', 'kept', tr('Thirteen beeches in a row, one a year: “I’ll come back in a year” — kept.'));
      }
      if (f.knows) {
        await g.plate(tr('On the stone at the edge of the wood, bread in a cloth; under it, yesterday’s — untouched. At the edge of the oak wood, empty stone stands: he has carried the hives off to the house. The village people come here not to cut, but to leave things.'));
        await g.say('lina', 'He doesn’t take it. The mice eat it', { how: 'by the stream with her pail, wry' });
        await g.wait(1200);
        g.mood('lina', 'sad');
        await g.say('lina', 'We went to thank him — he gets up and walks off');
        g.mark('tell', 'kept', tr('Lina told everyone. — The bread lies untouched; he walked away from those who came to thank him.'));
      } else {
        await piece(g, 'axe', {
          path: () => { g.mood('lina', 'angry'); return g.say('lina', 'The water comes from there. Cut at your own place'); },
          nobody: () => g.say('axeman', 'Nothing to cut at mine. The forest’s nobody’s. It grew by itself'),
          loud: () => { g.mood('traveller', 'angry'); return g.say('traveller', 'Not nobody’s!', { how: 'louder than he has ever spoken' }); },
          whose: async () => {
            await g.say('axeman', 'Whose, then?');
            g.mood('traveller', 'sad');
          },
          go: () => g.say('axeman', 'There you are'),
        });
        if (f.slope) {
          await g.plate(tr('So it goes with every new roof in the village: the Traveller answers the same every time — and every time, at “whose?”, he says nothing.'));
          await g.say('lina', 'I went to see your shepherd. Door open, nobody home. I sat there till dark', { how: 'once the man has gone; not looking at him' });
          await g.plate(tr('She takes her pail and goes down. He plants on the far slopes and comes home at nightfall.'));
        }
      }
      await piece(g, 'beech');
      const planted = await g.play(beech);
      if (planted.crooked && f.slope) await g.say('traveller', 'It’ll grow anyway', { how: 'to himself, leaving the crooked sapling as it is' });
      else if (planted.crooked) await g.plate(tr('The beech stands crooked. He straightens it again, so that the row stays straight.'));
      // (on the Road the year's tree now stands in his row)
      if (!f.slope) { g.set('beech_row', 14); g.set('new_beech', 'none'); }
    },
    // 3.2: the delegation
    async g => {
      const f = facts(g.state);
      await piece(g, 'delegation', {
        jan_place: async () => {
          await g.say('jan', 'The district gave me this edge in spring. On the maps it’s waste land');
          await g.plate(tr('He looks down at the village, then up at the forest: he spent one night here, in the dark, and never looked up.'));
        },
        chief: () => g.say('chief', 'A natural forest! A miracle of nature. We’ll declare it protected. It’s no plantation, you know — plantations come under the firewood department with us'),
        alive: () => { g.mood('jan', 'smile'); return g.say('jan', 'Alive. And I didn’t put you on the list', { how: 'dry' }); },
        hug: () => { g.mood('traveller', 'smile'); },
        up: () => { g.mood('jan', 'neutral'); return g.say('jan', 'You went up here that time', { how: 'nodding at the forest; not a question' }); },
      }, () => g.scene('edge20', { beat: 'delegation', here: ['traveller', 'jan', 'lina', 'chief', 'ranger'], moods: { traveller: 'neutral', jan: 'neutral', lina: 'neutral', chief: 'smile' }, keys: { moment: 'delegation', ...edge(f, 14) } }));
      if (f.knows) {
        await g.plate(tr('Lina says nothing; she looks at the Traveller. To the city people — nothing.'));
      } else {
        await g.say('lina', 'Grew by itself. The water came back — and it grew', { how: 'to the Chief, flat; to the city people, nothing' });
        g.mood('lina', 'angry');
        if (f.lied) await g.say('lina', 'The land rested, didn’t it?', { how: 'under her breath, to the Traveller' });
        else if (f.slope) await g.say('lina', 'By itself. Like your beeches across the stream', { how: 'under her breath, to the Traveller, a needle' });
        else await g.plate(tr('Then she looks at the Traveller, without a word.'));
      }
    },
    // 3.3: along the row; Jan's notebook; ⚑ (Ш2) the name
    async g => {
      const f = facts(g.state);
      await g.scene('edge20', { here: ['traveller', 'jan', 'lina', 'chief', 'ranger'], moods: { traveller: 'thinking', jan: 'thinking', lina: 'neutral' }, keys: { moment: 'delegation', ...edge(f, 14) } }, { cut: true });
      await g.say('jan', 'Show me');
      await g.play(row);
      await piece(g, 'the_row', {
        bark: async () => {
          await g.say('jan', 'Straight as a regiment. Things don’t grow like that by themselves');
          await g.say('jan', 'These are over twenty. Not you');
          if (f.slope) await g.say('jan', 'The beeches across the stream are yours, I saw');
          else await g.say('jan', 'The beeches by the edge — one a year. Yours');
          await g.say('jan', 'Who?');
        },
        page: () => g.say('jan', 'I write what I see'),
      });
      await g.plate(tr('He opens his notebook — the same one, the regiment’s: pages of names, then a blank one. A pencil.'));
      g.mark('write', 'given', null);
      await g.say('chief', 'Jan! We go down in an hour', { how: 'calling from down the path' });
      const name = await g.choose('name', { 'traveller#chest': [
        { id: 'name', label: tr('“His name is Elzéard. Write it down”') },
        { id: 'grew', label: tr('“The forest grew by itself”') },
        { id: 'silent', label: tr('Say nothing') },
      ] });
      if (name === 'name') {
        await g.say('traveller', 'His name is Elzéard. Write it down');
        await piece(g, 'named', {
          good: () => { g.mood('jan', 'smile'); return g.say('jan', 'Elzéard. Good. At least one living one', { how: 'slowly, as he writes; a dry joke with something under it' }); },
          read: () => g.say('jan', 'Planted by a man. Elzéard, a shepherd', { how: 'reading aloud from his notebook, plainly' }),
          chief: () => g.say('chief', 'One man? A shepherd? That’s even better than a miracle — for the papers! The Forest of Elzéard — protected'),
          lina: async () => {
            if (f.knows) {
              g.mood('lina', 'tired');
              await g.say('lina', 'Well, there. Now everyone will come', { how: 'not angrily — tired' });
            } else if (f.lied) {
              g.mood('lina', 'sad');
              await g.say('lina', 'The land rested', { how: 'to the Traveller, quoting his lie back at him, flat' });
            } else {
              g.mood('lina', 'sad');
              await g.say('lina', 'You knew. All these years', { how: 'to the Traveller, low' });
            }
          },
        });
      } else {
        if (name === 'grew') await g.say('traveller', 'The forest grew by itself', { how: 'looking at the rows, not at Jan' });
        g.set('silent', name === 'silent');
        await piece(g, 'unnamed', {
          jan: async () => {
            if (name === 'grew') {
              await g.say('jan', 'By itself, then');
              await g.plate(tr('He writes — and shows the page: “Planted in rows. By whom — unknown.” He goes to the Chief without looking back.'));
            } else {
              await g.say('jan', 'I see');
              await g.plate(tr('He writes the same: “Planted in rows. By whom — unknown.” He grips the Traveller’s shoulder and goes to the Chief.'));
            }
          },
          read: () => g.say('chief', 'A plantation? And I thought it was a miracle. Well, a plantation with no owner comes under firewood. The lower edge to the district for charcoal; the rest is far off, let it stand'),
          lina: () => { g.mood('lina', 'angry'); return g.say('lina', 'Don’t touch the bottom. The water comes from there'); },
          whose: () => g.say('chief', 'And whose is it, the forest?', { how: 'good-naturedly' }),
          answer: async () => {
            if (f.knows) {
              await g.plate(tr('Lina says nothing. She looks at the Traveller — he says nothing too.'));
              await g.say('lina', 'Nothing for them', { how: 'quietly, to him' });
            } else {
              await g.say('lina', 'Nobody’s. It grew by itself');
              g.mood('lina', 'surprised');
              await g.plate(tr('And she hears what she has said.'));
            }
          },
          down: () => g.say('chief', 'There you are. Nobody’s — to the district'),
        });
        await g.plate(tr('Jan closes his notebook.'));
      }
      g.apply('name');
      g.mark('after', name === 'name' ? (f.knows ? 'come' : f.lied ? 'rested' : 'knew') : 'path', linaAfter(facts(g.state)));
    },
    // 3.4: the evening in the house; a hundred acorns, slower
    async g => {
      const f = facts(g.state);
      await piece(g, 'hundred_slow', {}, () => g.scene('inside20', { beat: 'hundred_slow', here: ['elzeard', 'traveller'], moods: { elzeard: 'tired', traveller: 'thinking' }, keys: { bread_step: f.knows } }));
      if (!f.slope) {
        await g.say('traveller', 'How was the year?');
        await g.say('elzeard', 'It was');
        await piece(g, 'year_word');
      }
      await g.say('traveller', 'People came from the city');
      await g.say('elzeard', 'Saw them from up top. Coming');
      await piece(g, 'count_slow');
      if (f.named) {
        await g.say('traveller', 'I told them your name');
        await g.play(count);
        await piece(g, 'slow_name', {
          good: async () => { await g.say('elzeard', 'A hundred'); await g.say('elzeard', 'Good'); },
          window: () => { g.mood('elzeard', 'thinking'); return g.say('elzeard', 'Beyond the ridge the slope is bare'); },
        });
      } else {
        await g.play(count);
        await g.say('elzeard', 'A hundred');
        if (f.grew) await g.say('traveller', 'I said it grew by itself');
        else await g.say('traveller', 'I said nothing');
        await piece(g, 'slow_silence', {
          sam: () => g.say('elzeard', 'By itself'),
          laugh: () => { g.mood('elzeard', 'laugh'); },
          told: () => { g.mood('elzeard', 'neutral'); return g.say('traveller', 'Jan wrote “planted”. They’ll give the bottom away for charcoal'); },
          plant: () => g.say('elzeard', 'I’ll plant'),
        });
      }
    },
    // 3.5: after — the ranger and the empty house (the Name), or the stumps (Silence)
    async g => {
      const f = facts(g.state);
      if (f.named) {
        await piece(g, 'ranger', {
          speak: () => g.say('ranger', 'Old man, fires in the Forest of Elzéard are forbidden. This is a reserve', { how: 'sternly, by the book' }),
          nod: () => g.plate(tr('He does not know who is in front of him.')),
          laugh: () => { g.mood('elzeard', 'laugh'); },
        }, () => g.scene('house20', { beat: 'ranger', here: ['elzeard', 'traveller', 'ranger'], moods: { elzeard: 'neutral', traveller: 'neutral' }, keys: { moment: 'ranger' } }));
        await g.scene('house20', { here: ['traveller', 'visitor_a', 'visitor_b'], moods: { traveller: 'sad' }, keys: { moment: 'empty' } });
        if (f.slope) await g.plate(tr('A month later.'));
        else await g.plate(tr('A year later, on his next visit.'));
        await piece(g, 'empty_house', { ask: () => g.say('visitor_a', 'Where’s the old man around here?') });
        await g.play(door);
        g.set('door', 'propped');
        if (f.slope) await g.say('narrator', 'He went beyond the ridge. He was seventy-five');
        else await g.say('narrator', 'He went beyond the ridge. He was seventy-six');
      } else {
        await g.scene('stumps20', { here: ['traveller', 'jan', 'elzeard', 'lina'], moods: { traveller: 'sad', jan: 'sad', lina: 'neutral' }, keys: { traveller_with: ['rod'], beeches: f.slope ? 'slope' : 'row', beech_row: f.slope ? 0 : 14 } });
        if (f.slope) await g.plate(tr('A month later.'));
        else await g.plate(tr('A year later.'));
        await piece(g, 'stumps', {
          palm: async () => {
            await g.say('jan', 'I asked down below — by whom. They say: by itself', { how: 'to the Traveller, without raising his eyes' });
            if (f.grew) await g.say('jan', 'Like you');
            await g.say('jan', 'I didn’t go up');
          },
          rod: () => g.play(stumps),
          lina: async () => {
            if (f.knows) {
              g.set('stump_bread', true);
              await g.plate(tr('Lina by the stumps with her pail. She lays on a stump the bread she was carrying to the stone.'));
              g.mood('lina', 'laugh');
              await g.say('lina', 'Funny, isn’t it?', { how: 'laughing first, briefly' });
            } else {
              await g.plate(tr('Lina by the stumps with her pail. She watches the old man’s rod go into the earth — step after step, like the rows behind her back. She puts down the pail. Then she pours it into the fresh hole, as onto the stump. She does not look at the Traveller.'));
              if (f.lied) await g.say('lina', 'Rested, then', { how: 'not looking at him' });
              g.mark('saw', 'saw', tr('From that day Lina knew.'));
            }
          },
        });
      }
    },
  ],
};
