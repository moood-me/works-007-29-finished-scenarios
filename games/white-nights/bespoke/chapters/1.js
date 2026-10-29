// The first night. “The Railing” (scenario §5, 1.1–1.4; Wednesday). A girl crying at the railing under the lamp; ⚑ go
// up to her or pass; a gentleman in a tailcoat after her — ⚑ the stick or the arm (М1); along the water: “I have never
// talked to a woman” — “That shows”; ⏸; her corner and her condition — ⚑ “I promise”, a joke, or a bow in silence.
// Reads: facts — bowed. Leaves: choices.approach, choices.defend, choices.promise.
import { facts } from '../story.js';
import { stick, arm } from '../minigames/all.js';

export default {
  number: tr('The First Night'), title: tr('The Railing'),
  titles: ['The Railing', 'The Gentleman', 'Along the Water', 'Her Corner'],
  choices: [
    { id: 'approach', title: tr('The girl at the railing'), options: [{ id: 'approach', label: tr('Go up to her') }, { id: 'pass', label: tr('Pass by and look back') }] },
    { id: 'defend', title: tr('The gentleman in the tailcoat'), options: [{ id: 'stick', label: tr('Go at him with the stick') }, { id: 'arm', label: tr('Catch her up and offer your arm') }] },
    { id: 'promise', title: tr('“Don’t fall in love with me”'), options: [{ id: 'promise', label: tr('“I promise”') }, { id: 'joke', label: tr('“How can one promise such a thing?”') }, { id: 'silent', label: tr('Say nothing and bow') }] },
  ],
  steps: [
    // 1.1: past nine; she cries at the railing; ⚑ go up or pass
    async g => {
      await g.scene('night', { here: ['dreamer', 'nastya'], moods: { dreamer: 'neutral', nastya: 'sad' }, keys: { dreamer_with: ['cane'], dreamer_reach: null } });
      g.title(tr('The First Night'));
      await g.plate(tr('Past nine. At the railing under the lamp a girl is crying without a sound — only her shoulders show it. Between them, the whole width of the street.'));
      const approach = await g.choose('approach', { 'dreamer#chest': [
        { id: 'approach', label: tr('Go up to her') },
        { id: 'pass', label: tr('Pass by and look back') },
      ] });
      if (approach === 'approach') {
        await g.plate(tr('He stops two steps from her and opens his mouth. She starts and walks quickly away along the railing.'));
        await g.say('dreamer', 'I… nothing', { how: 'to her back, lost' });
      } else await g.plate(tr('At the corner he looks back: she is already walking along the embankment.'));
      g.apply('approach');
    },
    // 1.2: the gentleman in the tailcoat; ⚑ the stick or the arm (М1)
    async g => {
      await g.scene('night', { here: ['dreamer', 'nastya'], moods: { dreamer: 'afraid', nastya: 'afraid' }, keys: { dreamer_with: ['cane'], dreamer_reach: null } }, { cut: true });
      await g.plate(tr('A gentleman in a tailcoat comes out of a side street, tipsy; he follows her and quickens his step. She is almost running.'));
      const defend = await g.choose('defend', { 'dreamer#chest': [
        { id: 'stick', label: tr('Go at him with the stick') },
        { id: 'arm', label: tr('Catch her up and offer your arm') },
      ] });
      if (defend === 'stick') {
        const r = await g.play(stick);
        if (r.clatter) {
          await g.plate(tr('The stick clatters on the cobbles; the gentleman runs from the noise alone.'));
          g.mood('nastya', 'laugh');
          await g.plate(tr('She laughs through her tears.'));
        } else {
          await g.say('gentleman', 'Pardon… I, as it were…', { how: 'seeing the stick, suddenly polite, backing away' });
          await g.plate(tr('He turns off. No fight: he is a coward — you can tell by his walk.'));
        }
      } else {
        const r = await g.play(arm);
        if (r.herself) {
          await g.say('nastya', 'Come now, give it here', { how: 'taking his arm herself, through tears' });
          await g.plate(tr('She takes his arm herself.'));
        }
        await g.plate(tr('The gentleman sees a couple and falls behind.'));
      }
      g.apply('defend');
    },
    // 1.3: along the water; “I have never talked to a woman”; ⏸
    async g => {
      const f = facts(g.state);
      await g.scene('night', { here: ['dreamer', 'nastya'], moods: { dreamer: 'neutral', nastya: 'sad' }, keys: f.stick ? { dreamer_with: ['cane'], dreamer_reach: null } : {} }, { cut: true });
      await g.plate(tr('They walk along the water.'));
      await g.say('nastya', 'You are trembling');
      g.mood('dreamer', 'sad');
      await g.say('dreamer', 'I have never talked to a woman. Not once', { how: 'ashamed and a little proud; fast, the way one jumps into water' });
      g.mood('nastya', 'smile');
      await g.say('nastya', 'That shows', { how: 'laughing, without pity, and at once softer' });
      if (f.approached) {
        await g.say('nastya', 'You came up to me too, didn’t you? I thought you were like that one');
        await g.plate(tr('He is ashamed; she finds it funny.'));
      } else await g.say('nastya', 'Where did you spring from? You weren’t there');
      await g.plate(tr('Past the yellow house.'));
      if (f.bowed) {
        await g.plate(tr('Without thinking, he nods to the house.'));
        await g.say('nastya', 'Who are you nodding to?');
        await g.say('dreamer', 'To the house. We are acquainted');
        g.mood('nastya', 'laugh');
        await g.plate(tr('She laughs out loud for the first time that evening.'));
      }
      g.mood('nastya', 'neutral');
      g.mood('dreamer', 'neutral');
      await g.plate(tr('⏸ Fifteen or twenty seconds they walk without a word under the white sky. The water, their steps, a far bell that does not count the hour.'));
    },
    // 1.4: her corner; “don't fall in love with me”; ⚑ the promise
    async g => {
      const f = facts(g.state);
      await g.scene('night', { here: ['dreamer', 'nastya'], moods: { dreamer: 'neutral', nastya: 'thinking' }, keys: f.stick ? { dreamer_with: ['cane'], dreamer_reach: null } : {} }, { cut: true });
      await g.plate(tr('Her corner. She lets go of his arm.'));
      await g.say('nastya', 'Come tomorrow. Here, at ten. Only on one condition — don’t fall in love with me. That is not allowed, I assure you', { how: 'seriously, like the rule of a game; under it the fear that it will end badly again' });
      const promise = await g.choose('promise', { 'dreamer#chest': [
        { id: 'promise', label: tr('“I promise”') },
        { id: 'joke', label: tr('“How can one promise such a thing?”') },
        { id: 'silent', label: tr('Say nothing and bow') },
      ] });
      if (promise === 'promise') {
        await g.say('dreamer', 'I promise');
        g.mood('nastya', 'smile');
        await g.plate(tr('She gives him her hand, the way a man does.'));
      } else if (promise === 'joke') {
        await g.say('dreamer', 'How can one promise such a thing?', { how: 'joking, shyly' });
        g.mood('nastya', 'thinking');
        await g.say('nastya', 'Then don’t come… No, come', { how: 'narrowing her eyes; then quickly' });
      } else {
        await g.plate(tr('He says nothing and bows.'));
        g.mood('nastya', 'smile');
        await g.say('nastya', 'There, that’s good');
        await g.plate(tr('She took his silence for a yes.'));
      }
      g.apply('promise');
    },
  ],
};
