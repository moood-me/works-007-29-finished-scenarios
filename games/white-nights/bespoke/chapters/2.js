// The second night. “The Pin” (scenario §5, 2.1–2.6; Thursday). He waits at the railing from nine; ⚑ his story — as it
// is, a “type”, or made up; the pin — her hem pinned to his sleeve (М2: touch nothing); her story — the Lodger, the
// bundle, “in a year” (the memory: Grandmother's house a year ago); ⚑ what he says of the Lodger; ⚑ (Ш1 ✦) “Nastenka…
// I already have” — a chance of three seconds as she says “like all the rest”; the letter given him; ⏸ alone.
// Reads: facts — stick, promise, bowed. Leaves: choices.story, choices.judge, choices.already; marks.hem (М2 missed),
// marks.agreed (her answer to his first confession said).
import { facts, agreement } from '../story.js';
import { pin } from '../minigames/all.js';

export default {
  number: tr('The Second Night'), title: tr('The Pin'),
  titles: ['At Nine', 'His Story', 'The Pin', 'Her Story', 'A Friend', 'The Letter'],
  choices: [
    { id: 'story', title: tr('“Tell me your story”'), options: [{ id: 'plain', label: tr('Say it as it is: “I have no story”') }, { id: 'type', label: tr('Tell of yourself as a “type”') }, { id: 'venice', label: tr('Make up a story') }] },
    { id: 'judge', title: tr('“And he has not come”'), options: [{ id: 'reason', label: tr('“Then he has a reason”') }, { id: 'unworthy', label: tr('“Perhaps he is not worth you”') }, { id: 'silent', label: tr('Say nothing, look at the water') }] },
    { id: 'already', title: tr('“How good that you didn’t fall in love”'), weight: '⚑', options: [{ id: 'tap', label: tr('“Nastenka… I already have”') }, { id: 'missed', label: tr('The moment passed') }] },
  ],
  steps: [
    // 2.1: from nine at the railing; she comes
    async g => {
      const f = facts(g.state);
      await g.scene('night', { here: ['dreamer'], moods: { dreamer: 'thinking', nastya: 'smile' } });
      g.title(tr('The Second Night'));
      await g.plate(tr('He has been at the railing since nine, walking up and down.'));
      await g.think('dreamer', 'A whole hour, and I keep repeating what I will say');
      g.here('nastya', true);
      await g.plate(tr('She comes round the corner.'));
      if (f.stick) {
        await g.say('nastya', 'And where is your cudgel?');
        await g.plate(tr('He is without his stick and hides his empty hands behind his back.'));
      } else await g.plate(tr('She takes his arm at once.'));
      if (f.promise === 'promise') await g.say('nastya', 'Not in love yet?', { how: 'as if asking about the weather' });
      else if (f.promise === 'joke') await g.plate(tr('She looks at him a long time, testing.'));
      else await g.say('nastya', 'We did agree, didn’t we');
    },
    // 2.2: the bench; ⚑ his story
    async g => {
      const f = facts(g.state);
      await g.scene('night', { here: ['dreamer', 'nastya'], moods: { dreamer: 'neutral', nastya: 'smile' } }, { cut: true });
      await g.say('nastya', 'Tell me your story');
      await g.plate(tr('The bench by the railing. She sits with one foot tucked under her; he on the very edge.'));
      const story = await g.choose('story', { 'dreamer#chest': [
        { id: 'plain', label: tr('Say it as it is: “I have no story”') },
        { id: 'type', label: tr('Tell of yourself as a “type”') },
        { id: 'venice', label: tr('Make up a story') },
      ] });
      if (story === 'plain') {
        await g.say('dreamer', 'I copy papers. I walk about the town. I say good evening to the houses');
        if (f.bowed) await g.say('nastya', 'I know, I saw');
        g.mood('nastya', 'sad');
        await g.say('nastya', 'Poor you', { how: 'gently, laying her palm on his sleeve' });
        g.mood('dreamer', 'sad');
        await g.plate(tr('She lays her palm on his sleeve. He cannot bear pity, and moves away.'));
      } else if (story === 'type') {
        await g.say('dreamer', 'I, you know, am a type. A dreamer — a creature of the neuter gender. He settles in some corner, like a snail in its shell, and there he lives — not in life, but in what he imagines. And he is happy, Nastenka, terribly happy', { how: 'eloquent and bookish, with gestures, of himself in the third person, carried away' });
        g.mood('nastya', 'laugh');
        await g.say('nastya', 'You talk like a book!', { how: 'laughing, delighted' });
      } else {
        await g.say('dreamer', 'Venice… A duel, at dawn. And a countess — but her name I must not say', { how: 'making it up as he goes, with relish' });
        await g.say('nastya', 'And was it in winter? Was it cold?', { how: 'quickly, showering him with questions, playing along' });
        await g.say('dreamer', 'In winter… that is, in summer… there, you know, there is no winter', { how: 'getting tangled, then laughing at himself' });
        g.mood('nastya', 'laugh');
        await g.plate(tr('She plays along: she wants to know what he is like when he lies.'));
      }
      g.apply('story');
    },
    // 2.3: the pin (М2)
    async g => {
      await g.scene('night', { here: ['dreamer', 'nastya'], moods: { dreamer: 'neutral', nastya: 'smile' } }, { cut: true });
      await g.say('nastya', 'And my story is this');
      await g.plate(tr('She takes the pin out of her collar.'));
      await g.say('nastya', 'This is how she does it to me — give me your sleeve', { how: 'gaily; under it, half of every day of her life' });
      await g.plate(tr('She pins her hem to his sleeve.'));
      const r = await g.play(pin);
      if (r.torn) {
        g.mood('dreamer', 'afraid');
        await g.plate(tr('He jerks his arm — a rip: the hem is torn.'));
        g.mood('nastya', 'laugh');
        await g.say('nastya', 'Grandmother will kill me', { how: 'roaring with laughter' });
        g.mark('hem', true, tr('The hem is torn.'));
      } else {
        await g.say('nastya', 'There, you see how I sit');
        await g.plate(tr('She unpins it herself.'));
      }
    },
    // 2.4: her story (the memory: a year ago); “and he has not come”; ⚑ what he says of the Lodger
    async g => {
      await g.scene('memory', { here: ['nastya', 'babushka'], moods: { nastya: 'smile', babushka: 'neutral' } });
      await g.plate(tr('Her story — a year ago. A lodger with his books in the mezzanine. “The Barber of Seville”, where he took her and Grandmother.'));
      g.mood('nastya', 'sad');
      await g.plate(tr('The night she went up to him with her bundle.'));
      await g.say('lodger', 'I am poor; I cannot now. In a year I will come back', { how: 'low and firm, ashamed, a year ago' });
      await g.plate(tr('Three days later he left for Moscow. She did not go out to see him off.'));
      await g.scene('night', { here: ['dreamer', 'nastya'], moods: { dreamer: 'thinking', nastya: 'neutral' } });
      await g.say('nastya', 'It’s a year today. I counted — from that night. And he has been in Petersburg three days already. And has not come', { how: 'evenly, almost gaily; on “has not come” the voice breaks and at once collects itself' });
      const judge = await g.choose('judge', { 'dreamer#chest': [
        { id: 'reason', label: tr('“Then he has a reason”') },
        { id: 'unworthy', label: tr('“Perhaps he is not worth you”') },
        { id: 'silent', label: tr('Say nothing, look at the water') },
      ] });
      if (judge === 'reason') {
        await g.say('dreamer', 'Then he has a reason');
        g.mood('nastya', 'smile');
        await g.say('nastya', 'You are kind. You really are kind', { how: 'brightening' });
      } else if (judge === 'unworthy') {
        await g.plate(tr('Before the words — a pause in which one can hear that it pleases him to sting.'));
        await g.say('dreamer', 'Perhaps he is not worth you');
        g.mood('nastya', 'angry');
        await g.say('nastya', 'Don’t you dare!', { how: 'flaring up' });
        await g.plate(tr('She goes off to the railing. Then, more quietly:'));
        g.mood('nastya', 'sad');
        await g.say('nastya', 'You don’t know him');
      } else {
        await g.say('nastya', 'Why are you silent?');
        await g.plate(tr('She answers herself:'));
        await g.say('nastya', 'He’ll come');
      }
      g.apply('judge');
    },
    // 2.5: Ш1 ✦ — “Nastenka… I already have”
    async g => {
      await g.scene('night', { here: ['dreamer', 'nastya'], moods: { dreamer: 'neutral', nastya: 'smile' } }, { cut: true });
      await g.plate(tr('She stands up.'));
      await g.say('nastya', 'How good that you didn’t fall in love with me. You would have been like all the rest', { how: 'a little for show, testing him' });
      const already = await g.choose('already', { 'dreamer#chest': [
        { id: 'tap', label: tr('“Nastenka… I already have”') },
      ] }, { within: 3000, otherwise: 'missed' });
      if (already === 'tap') {
        await g.say('dreamer', 'Nastenka… I already have', { how: 'blurting it out, then out of breath' });
        g.mood('nastya', 'surprised');
        await g.plate(tr('She freezes (close up) and steps back toward the railing.'));
        await agreement(g);
        await g.wait(1500);
        g.mood('nastya', 'neutral');
        await g.say('nastya', 'So be it. Then you’ll help me all the more. You’re good, aren’t you', { how: 'not unkindly — she truly thinks so; fast, so as not to hear herself' });
      } else {
        await g.say('nastya', 'And so you are — a friend…', { how: 'a pause before “a friend”' });
        await g.say('dreamer', 'Yes. A friend');
        await g.plate(tr('She nods, pleased.'));
        g.mood('dreamer', 'sad');
        await g.think('dreamer', 'I didn’t say it. Well, and good… good');
      }
      g.apply('already');
    },
    // 2.6: the letter; ⏸ alone with it
    async g => {
      await g.scene('night', { here: ['dreamer', 'nastya'], moods: { dreamer: 'neutral', nastya: 'sad' }, keys: { nastya_with: ['letter'] } }, { cut: true });
      await g.plate(tr('She takes out a crumpled sealed envelope; her eyes are full.'));
      await g.say('nastya', 'Take it to my acquaintances — here is the address. He calls on them. If he loves me, he will come here tomorrow, at ten', { how: 'asking, but the voice commands; “at ten” almost soundless' });
      g.set('nastya_with', []);
      g.set('dreamer_with', ['letter']);
      await g.plate(tr('His “yes” comes by itself. She goes quickly, without looking back.'));
      g.here('nastya', false);
      g.mood('dreamer', 'sad');
      await g.plate(tr('⏸ He is alone at the railing with the letter, fifteen seconds. The rustle of paper; the water.'));
    },
  ],
};
