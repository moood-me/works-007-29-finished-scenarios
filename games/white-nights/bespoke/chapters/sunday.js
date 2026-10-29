// Sunday. “The Mezzanine” (scenario §5, Вс1–Вс2; on the branches C and U only — on A and U4 the play does not pass
// through it: `skip`). After mass at Grandmother's: “And is he young?” — “Not very, madam”; ⏸ Nastenka reads aloud; a
// knock — the Lodger: “Today is a year, to the day. I have come”. On C: ⚑ take her hand (М6), go out onto the stairs,
// or stay by the door; she decides — by what he said to her in the rain: “Go” (the Mezzanine), or she unpins the pin
// herself and goes (the Minute: the Stairs). On U: “Did you get my letter?” — ⚑ (✦) the letter laid on the table (the
// Window), or Glasha's “some gentleman… said he'd got the wrong door”, and her slow turn to him (the Pin). The finale
// comes straight on (`onward`).
// Reads: facts — letter, hem, story, confessed, sunday. Leaves: choices.sunday (C) | choices.table (U).
import { facts } from '../story.js';
import { hand_grandmother } from '../minigames/all.js';

export default {
  number: tr('Sunday'), title: tr('The Mezzanine'),
  skip: f => f.letter === 'A' || f.letter === 'U4', onward: true,
  titles: ['After Mass', 'A Knock', 'Two Men at the Edges', 'Her Choice'],
  choices: [
    { id: 'sunday', title: tr('The Lodger at the armchair'), options: [{ id: 'hand', label: tr('Take her hand') }, { id: 'out', label: tr('Go out onto the stairs') }, { id: 'stay', label: tr('Stay by the door') }] },
    { id: 'table', title: tr('“Did you get my letter?”'), weight: '⚑', options: [{ id: 'put', label: tr('Lay the letter on the table') }, { id: 'missed', label: tr('The moment passed') }] },
  ],
  steps: [
    // Вс1: after mass; “and is he young?”; ⏸ she reads aloud
    async g => {
      const f = facts(g.state);
      await g.scene('grandmother', { here: ['babushka', 'nastya', 'dreamer'], moods: { babushka: 'neutral', nastya: 'neutral', dreamer: 'afraid' } });
      g.title(tr('Sunday'));
      await g.plate(tr('After mass. Grandmother in her armchair, Nastenka on the low bench beside her; between them the pin glints. The Dreamer by the door, his hat in his hands.'));
      await g.say('babushka', 'And is he young? The last one was young — and look what came of it', { how: 'the blind woman looks straight at him' });
      await g.say('dreamer', 'Not very, madam');
      await g.say('fyokla', 'Eh?');
      if (f.hem) {
        await g.say('babushka', 'And who tore the hem? Fyokla, was it you?');
        await g.say('fyokla', 'Eh?');
      }
      if (f.story === 'venice') {
        await g.say('babushka', 'And where are you from, sir?');
        await g.say('dreamer', 'From Veni…');
        await g.plate(tr('He catches Nastenka’s eye.'));
        await g.say('dreamer', 'From the Sands, madam');
      } else if (f.story === 'plain') {
        await g.say('dreamer', 'I copy papers');
        g.mood('babushka', 'smile');
        await g.say('babushka', 'A quiet one', { how: 'pleased' });
      } else {
        await g.say('dreamer', 'A dreamer, madam, is a type — a creature, so to say, of the neuter gender…', { how: 'starting eloquently' });
        await g.plate(tr('Grandmother falls asleep at the second sentence.'));
      }
      g.mood('nastya', 'smile');
      await g.plate(tr('⏸ Nastenka reads aloud to Grandmother; the clock ticks; twelve seconds.'));
      if (f.letter === 'U') await g.plate(tr('His hand at his pocket: his fingers touch the edge of the envelope, and freeze.'));
      else await g.plate(tr('He looks at the pin.'));
    },
    // Вс2: a knock; the Lodger
    async g => {
      await g.scene('grandmother', { here: ['babushka', 'nastya', 'dreamer'], moods: { babushka: 'neutral', nastya: 'surprised', dreamer: 'afraid' } }, { cut: true });
      await g.plate(tr('A knock. The Dreamer is nearest the door; he opens it.'));
      await g.say('dreamer', 'That must be for me… that is, for you');
      await g.plate(tr('In the doorway, the Lodger, his hat at his chest. A glance at the Dreamer — short, from above — and he walks past him to the armchair.'));
      await g.say('lodger', 'Madam. I promised in a year. Today it is a year, to the day, since I left. I have come', { how: 'to Grandmother, officially, so that his voice does not shake; a pause before “I have come”' });
      await g.plate(tr('The Lodger by the armchair; Nastenka between them, pinned; the Dreamer by the open door. Two men at the edges, she in the middle.'));
    },
    // C: ⚑ his hand, the stairs or the door (М6); U: “Did you get my letter?” — ⚑ (✦) the letter on the table
    async g => {
      const f = facts(g.state);
      await g.scene('grandmother', { here: ['babushka', 'nastya', 'dreamer'], moods: { babushka: 'neutral', nastya: 'neutral', dreamer: 'sad' } }, { cut: true });
      if (f.letter === 'C') {
        const sunday = await g.choose('sunday', { 'dreamer#chest': [
          { id: 'hand', label: tr('Take her hand') },
          { id: 'out', label: tr('Go out onto the stairs') },
          { id: 'stay', label: tr('Stay by the door') },
        ] });
        if (sunday === 'hand') {
          const r = await g.play(hand_grandmother);
          if (r.abrupt) {
            g.mood('nastya', 'surprised');
            await g.plate(tr('He takes it abruptly; she starts — but does not take her hand away.'));
          } else await g.plate(tr('He crosses the room; his hand on hers, on her knee.'));
        } else if (sunday === 'out') {
          g.set('dreamer_with', []);
          await g.plate(tr('He puts his hat on the table by the wall and goes out onto the stairs; the door stays ajar.'));
          g.here('dreamer', false);
        } else await g.plate(tr('His hat in his hands; not a step.'));
        g.apply('sunday');
        return;
      }
      g.mood('nastya', 'afraid');
      await g.plate(tr('Nastenka stands up; the pin pulls taut.'));
      await g.say('nastya', 'Did you… get my letter?', { how: 'to the Lodger, hardly breathing' });
      const table = await g.choose('table', { 'dreamer#chest': [
        { id: 'put', label: tr('Lay the letter on the table') },
      ] }, { within: 3000, otherwise: 'missed' });
      if (table === 'put') {
        g.set('dreamer_with', ['letter']);
        await g.plate(tr('He goes to the table and lays the letter on it.'));
        g.set('dreamer_with', []);
        await g.say('dreamer', 'I didn’t take it');
        await g.plate(tr('Everyone looks at the envelope.'));
        await g.say('lodger', 'So it was you who came', { how: 'coldly' });
        if (f.story === 'venice') await g.say('nastya', 'And Venice too?', { how: 'in a whisper' });
        await g.plate(tr('The Lodger takes the letter, looks at her handwriting and, without opening it, puts it in his inside pocket.'));
        await g.say('lodger', 'Madam, allow Nastasya Ivanovna two words with me. On the stairs');
        await g.plate(tr('Nastenka unpins the pin.'));
        await g.say('babushka', 'Nastenka, are you here?', { how: 'her hands searching' });
        g.here('nastya', false);
        await g.plate(tr('She goes out with the Lodger, not a word to the Dreamer.'));
      } else {
        await g.say('lodger', 'A letter?.. Glasha said some gentleman came with a letter — and changed his mind. Said he’d got the wrong door', { how: 'looking, as he says it, at the one by the door' });
        await g.plate(tr('Nastenka slowly turns to the Dreamer (close up). She does not need to say anything.'));
      }
      g.apply('table');
    },
    // C: she decides — by what he said in the rain
    async g => {
      const f = facts(g.state);
      if (f.letter !== 'C') return;
      const out = f.sunday === 'out';
      await g.scene('grandmother', { here: ['babushka', 'nastya', ...(out ? [] : ['dreamer'])], moods: { babushka: 'neutral', nastya: 'neutral', dreamer: 'sad' }, keys: out ? {} : { dreamer_with: ['hat_low'] } }, { cut: true });
      await g.say('nastya', 'You have been six days in town', { how: 'to the Lodger, evenly, holding her head high' });
      await g.say('lodger', 'The post was confirmed on Saturday. The salary, eight hundred. I have the honour to ask…', { how: 'to Grandmother, as if there had been no question; as if from a paper; not looking at Nastenka' });
      await g.say('lodger', 'Glasha said a letter was brought for me. And carried back', { how: 'to her, for the first time, more quietly' });
      await g.say('nastya', 'There was a letter. I tore it up', { how: 'evenly: this is her pride, not revenge' });
      await g.plate(tr('While Grandmother searches with her hands for Fyokla:'));
      await g.say('nastya', 'And I came to you myself that time. I counted from that night', { how: 'to the Lodger, in a whisper; her year ended on Thursday, his today' });
      await g.say('babushka', 'Who has come? Is this one young too?', { how: 'she knew him by his voice from the first word; she asks so that he would not be here' });
      await g.plate(tr('She decides. His choice by the door does not order her: what decides is what he said to her in the rain, when she was free.'));
      if (f.confessed) {
        g.mood('nastya', 'angry');
        await g.say('nastya', 'Go', { how: 'to the Lodger, quietly and firmly' });
        await g.plate(tr('The Lodger bows to Grandmother, then to her — and puts on his hat while still in the room.'));
        if (f.sunday === 'hand') {
          await g.plate(tr('She refused him with the Dreamer’s hand in hers; when the door has closed, she frees her hand from his too:'));
          await g.say('nastya', 'You let go too. I can myself');
        } else if (out) {
          await g.plate(tr('A minute later she comes out to him on the stairs with his hat.'));
          await g.say('nastya', 'You forgot your hat');
          await g.plate(tr('A pause.'));
          g.mood('nastya', 'smile');
          await g.say('nastya', 'Will you have some tea?');
        } else await g.plate(tr('She refused him alone, looking at no one.'));
        return;
      }
      await g.plate(tr('She stands up; the pin pulls taut and rings. She unpins it herself — for the first time, with her own hand.'));
      await g.say('babushka', 'Nastenka, are you here? …Are you here?', { how: 'quickly, so as not to let her answer' });
      await g.plate(tr('Grandmother’s hands search the air and find the empty, still warm bench. Nastenka lays Grandmother’s hand on the armrest and does not answer.'));
      if (f.sunday === 'hand') {
        await g.plate(tr('She frees her hand from his, finger by finger:'));
        await g.say('nastya', 'Let go');
      } else if (out) {
        await g.plate(tr('On the stairs she stops one step above him:'));
        await g.say('nastya', 'You forgot your hat. On the table', { how: 'matter-of-fact: she can say nothing else' });
      } else await g.say('nastya', 'Read to Grandmother in the evening. She likes it', { how: 'at the door, not turning round' });
      g.here('nastya', false);
    },
  ],
};
