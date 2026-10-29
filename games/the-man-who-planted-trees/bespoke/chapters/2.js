// II. “Water” (scenario §5, 2.1–2.7), six years on. Dawn after the regiment: Jan goes down to count trees; a grey haze
// over the plateau — leaves; water running in the dry bed, Lina at it; their palms in the first water; ⚑ (the half
// hinge) where the water comes from — “It’s him”, “The land has rested”, or nothing; the oaks taller than a man, the
// hives, Elzéard; the year of the maples; at night a hundred acorns, the letter from the city — ⚑ (Ш1) stay or go.
// Stand-ins (story.js PLACES): the far edge of the slope — the stream; the house at night — the shepherd's house of the prologue.
// Reads: marks of the prologue and chapter I (facts: drank, heard, promised, own). Leaves: choices.lina,
// choices.stay, their marks (and the promises: marks.tell — Lina's, marks.year — his), scales.
import { facts } from '../story.js';
import { stream, trunks, count } from '../minigames/all.js';

export default {
  number: 'II', title: tr('Water'),
  titles: ['By the Door Again', 'The Stream', 'Palms in the Water', 'Where the Water Comes From', 'The Oaks', 'The Maples', 'A Hundred, Again'],
  choices: [
    { id: 'lina', title: tr('Where the water comes from'), options: [{ id: 'told', label: tr('“It’s him. Come, I’ll show you”') }, { id: 'rested', label: tr('“The land has rested”') }, { id: 'silent', label: tr('Say nothing') }] },
    { id: 'stay', title: tr('Stay or go'), weight: '⚑', options: [{ id: 'stay', label: tr('“May I stay?”') }, { id: 'go', label: tr('“I’ll go. I’ll come back in a year”') }] },
  ],
  steps: [
    // 2.1: dawn, an empty house; Jan goes down
    async g => {
      await g.scene('village6', { here: ['traveller', 'jan'], moods: { traveller: 'tired', jan: 'neutral' }, keys: { dawn: 1 } });
      g.title(tr('Six Years Later'));
      await g.plate(tr('Dawn, an empty house at the edge of the village. The Traveller slept on the floor, right by the door; Jan, in the corner.'));
      await g.say('jan', 'By the door again', { how: 'tying up his kitbag, dry, not looking up' });
      await g.plate(tr('On the threshold Jan pats the regiment’s notebook in his pocket.'));
      await g.say('jan', 'Five years I wrote down the dead. Now I’ll go and count trees. At least they stand');
      await g.say('traveller', 'I’m going up there. It was quiet there');
      await g.say('jan', 'Don’t write the quiet down — it’ll be lost');
      g.here('jan', false);
      await g.plate(tr('Jan goes off down the road. The Traveller has not told him about the oaks: he does not know himself whether they are still there.'));
    },
    // 2.2: the empty village; the haze — leaves; water; Lina
    async g => {
      const f = facts(g.state);
      await g.scene('village6', { here: ['traveller'], moods: { traveller: 'tired' }, keys: { dawn: 0.4 } }, { cut: true });
      await g.plate(tr('The village is empty; a fresh grave mound. Over the plateau a grey haze, like mist: it is leaves.'));
      await g.scene('stream6', { here: ['traveller'], moods: { traveller: 'tired', lina: 'surprised' }, keys: { mist: 1 } });
      g.mood('traveller', 'surprised');
      await g.plate(tr('A sound: water. In the dry bed a stream is running. Lina by the water — she is twenty-three.'));
      g.here('lina', true);
      if (f.drank) await g.say('lina', 'Ah, the water-guzzler', { how: 'recognizing him, teasing' });
      else await g.say('lina', 'You’re the one who watched me water the stump', { how: 'recognizing him' });
      if (f.heard) {
        g.mood('lina', 'smile');
        await g.say('lina', 'You said — oaks');
        await g.plate(tr('She laughs — not quite sure of herself now.'));
      }
    },
    // 2.3: palms in the water
    async g => {
      await g.scene('stream6', { here: ['traveller', 'lina'], moods: { traveller: 'thinking', lina: 'smile' }, keys: { mist: 0.8 } }, { cut: true });
      await g.play(stream);
      g.mood('lina', 'sad');
      await g.say('lina', 'First time in my life. Father didn’t live to see it', { how: 'quietly, her hand still in the water' });
    },
    // 2.4: the letter; ⚑ where the water comes from (the half hinge)
    async g => {
      const f = facts(g.state);
      await g.scene('stream6', { here: ['traveller', 'lina'], moods: { traveller: 'thinking', lina: 'neutral' }, keys: { mist: 0.6 } }, { cut: true });
      await g.say('lina', 'I’m writing to my aunts: the water’s back, come home. The postman goes at dawn tomorrow');
      await g.wait(1200);
      await g.say('lina', 'Father used to say: what grew by itself is nobody’s, and what’s nobody’s — cut it', { how: 'saying her father’s words, which she hates' });
      g.mood('lina', 'thinking');
      await g.plate(tr('She looks up at the slope.'));
      await g.say('lina', 'Where’s the water from? You came down from there that time');
      if (f.heard) await g.say('lina', 'Are those your oaks? Tell the truth', { how: 'straight to his face' });
      const lina = await g.choose('lina', { 'traveller#chest': [
        { id: 'told', label: tr('“It’s him. Come, I’ll show you”') },
        { id: 'rested', label: tr('“The land has rested”') },
        { id: 'silent', label: tr('Say nothing') },
      ] });
      if (lina === 'told') {
        await g.say('traveller', 'It’s him. Come on, I’ll show you');
        g.mood('lina', 'surprised');
        await g.plate(tr('Lina stuffs the letter into her pocket.'));
        await g.say('lina', 'Come on');
        await g.plate(tr('She goes up with him.'));
      } else if (lina === 'rested') {
        await g.say('traveller', 'The land has rested');
        await g.say('lina', 'Rested. Well, all right');
        if (f.heard) await g.say('lina', 'So not oaks. A shepherd’s a shepherd');
        await g.plate(tr('She does not look at the slope again; she writes.'));
      } else {
        await g.say('lina', 'Don’t want to — don’t tell me');
        await g.plate(tr('She writes: “the water is back” — and once more looks up at the slope.'));
      }
      g.apply('lina');
    },
    // 2.5: the oaks; the hives; Elzéard
    async g => {
      const f = facts(g.state);
      await g.scene('slope6', { here: ['traveller', ...(f.knows ? ['lina'] : [])], moods: { traveller: 'smile', elzeard: 'neutral', lina: 'surprised' }, keys: { mist: 0.3 } });
      await g.plate(tr('The slope above the village, half an hour up the stream. Oaks taller than a man, leaves, birds — the first place where nothing needs doing.'));
      await g.play(trunks);
      g.here('elzeard', true);
      await g.plate(tr('At the edge of the oak wood, hives; by the hives, Elzéard — sixty-one.'));
      await g.say('elzeard', 'The sheep ate them. Now bees');
      if (f.promised) {
        await g.say('elzeard', 'You said — I’ll be back');
        await g.plate(tr('A nod.'));
        g.mark('back', 'kept', tr('Your “I’ll be back” — kept.'));
      } else {
        await g.say('elzeard', 'Ah. You');
        await g.plate(tr('As if he had left yesterday.'));
      }
      if (f.own) {
        await g.plate(tr('Elzéard leads him to a tree by the stone.'));
        await g.say('elzeard', 'Yours');
        await g.plate(tr('A little crooked. Alive.'));
      } else {
        await g.say('traveller', 'Where are the ones from that day?');
        await g.say('elzeard', 'They’re all the same');
      }
      if (f.knows) {
        await g.plate(tr('Lina stands at the edge of the wood. Elzéard looks at her, nods, and goes on working. Lina walks among the trunks and lays her palm on an oak.'));
        g.mood('lina', 'smile');
        await g.say('lina', 'I’ll tell everyone', { how: 'quietly, her palm on the bark' });
        g.mark('tell', 'given', null);
        g.here('lina', false);
        await g.plate(tr('She goes down almost at a run.'));
        g.mood('elzeard', 'sad');
        await g.say('elzeard', 'Shouldn’t have', { how: 'one word, to the Traveller, low' });
      }
    },
    // 2.6: the far edge — the maples, the beeches
    async g => {
      await g.scene('far6', { here: ['elzeard', 'traveller'], moods: { elzeard: 'neutral', traveller: 'thinking' } });
      await g.plate(tr('The far edge of the slope: rows of dry sticks.'));
      await g.say('elzeard', 'Maples. A year. All of them');
      await g.plate(tr('Beside them, rows of tiny beeches.'));
      await g.say('elzeard', 'Beeches now');
      await g.say('narrator', 'The water no one alive remembered was running off his slope');
    },
    // 2.7: night, a hundred acorns; the letter from the city; ⚑ (Ш1) stay or go
    async g => {
      await g.scene('house6', { here: ['elzeard', 'traveller'], moods: { elzeard: 'neutral', traveller: 'thinking' }, keys: { lamp: 1 } });
      await g.plate(tr('Night, the house, the lamp. A hundred acorns, as then; Elzéard counts.'));
      await g.play(count);
      await g.say('elzeard', 'A hundred');
      await g.plate(tr('On the table, the Traveller’s notebook and a letter from the city: “We expect you by autumn. Write about what you have seen.” In the window, under the moon — the empty slope across the stream.'));
      const stay = await g.choose('stay', { 'traveller#chest': [
        { id: 'stay', label: tr('“May I stay?”') },
        { id: 'go', label: tr('“I’ll go. I’ll come back in a year”') },
      ] });
      if (stay === 'stay') {
        await g.say('traveller', 'May I stay?');
        await g.plate(tr('Elzéard lowers the acorns into the pail.'));
        await g.say('elzeard', 'The slope across the stream is empty');
        g.mood('traveller', 'laugh');
        await g.say('traveller', 'Out of my mind', { how: 'a short laugh, at himself' });
        await g.plate(tr('He closes the notebook.'));
      } else {
        await g.say('traveller', 'I’ll go. I’ll come back in a year');
        await g.plate(tr('Elzéard lowers the acorns into the pail.'));
        await g.say('elzeard', 'In a year the acorns will be the same');
        await g.plate(tr('The Traveller opens the notebook and writes by the lamp.'));
        await g.say('narrator', 'In the war I did not remember home. I remembered this slope');
      }
      g.apply('stay');
    },
  ],
};
