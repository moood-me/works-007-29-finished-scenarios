// The day. “The Door” (scenario §5, Д1–Д3; Friday). Morning in his room: the letter on the table, Matryona's “From the
// young lady, is it?”; the embankment by day, the wind off the canal (М3: carry the letter); the acquaintances' door,
// ⏸ his hand on the bell-pull; Glasha: “every day… tomorrow, it seems, he'll get it”; ⚑ (Ш2) give the letter, or say
// “wrong door” and carry it away — the branch A, or the evening decides.
// Stand-in (story.js PLACES): the door — Grandmother's room, no one but him.
// Reads: facts — stain. Leaves: choices.door; marks.stain (М3 missed).
import { facts } from '../story.js';
import { letter } from '../minigames/all.js';

export default {
  number: tr('The Day'), title: tr('The Door'),
  titles: ['Matryona', 'The Wind', 'The Door'],
  choices: [
    { id: 'door', title: tr('At the door'), weight: '⚑', options: [{ id: 'give', label: tr('Give the letter') }, { id: 'keep', label: tr('Say “wrong door” and leave with the letter') }] },
  ],
  steps: [
    // Д1: the morning; Matryona
    async g => {
      await g.scene('room', { here: ['dreamer', 'matryona'], moods: { dreamer: 'thinking', matryona: 'neutral' } });
      g.title(tr('The Day'));
      await g.plate(tr('Morning, his room. On the table lies the letter, as if alive. Matryona brings the tea.'));
      await g.say('matryona', 'From the young lady, is it?', { how: 'indifferently; but the eyes are sharp' });
      await g.say('dreamer', 'Matryona, the cobweb, if you would…');
      await g.say('matryona', 'I’ll take it down, sir, I will');
      g.set('letter_table', false);
      await g.plate(tr('He hides the letter in his inside pocket, by his heart.'));
    },
    // Д2: the embankment by day; the wind (М3)
    async g => {
      await g.scene('day', { here: ['dreamer'] });
      await g.plate(tr('By day. At every house he checks the number against the address in her hand. A wind off the canal.'));
      g.set('wind', 1, 2);
      const r = await g.play(letter);
      if (r.stain) {
        g.mood('dreamer', 'afraid');
        await g.plate(tr('The envelope falls into a puddle; he snatches it out — a brown stain on the paper.'));
        g.set('dreamer_with', ['letter_stained']);
        g.mark('stain', true, tr('A stain on her envelope.'));
      }
    },
    // Д3: the door; ⏸; Glasha; ⚑ (Ш2) give it or carry it away
    async g => {
      const f = facts(g.state);
      await g.scene('door', { here: ['dreamer'], moods: { dreamer: 'afraid' }, keys: { door: 'shut', dreamer_with: [f.stain ? 'letter_stained' : 'letter'] } });
      await g.plate(tr('⏸ He stands before the door, his hand on the bell-pull, the letter in the other — twelve seconds. Steps lower down the stairs, a cough behind the wall. He pulls the cord. Glasha opens.'));
      g.set('door', 'open');
      g.here('glasha', true);
      await g.say('glasha', 'Is it for Grandmother’s lodger, then? He comes to us every day — is there anything for him. He’s been today already — so tomorrow, it seems, he’ll get it. And where he lives, he won’t say', { how: 'briskly, in passing' });
      if (f.stain) {
        await g.say('glasha', 'Look at that, gone and smeared it');
        g.mood('dreamer', 'sad');
        await g.plate(tr('He blushes.'));
      }
      await g.plate(tr('Glasha holds out her palm, and he does not unclench his fingers. “Tomorrow” is written on his face: her “at ten” will be empty.'));
      const door = await g.choose('door', { 'dreamer#chest': [
        { id: 'give', label: tr('Give the letter') },
        { id: 'keep', label: tr('Say “wrong door” and leave with the letter') },
      ] });
      if (door === 'give') {
        g.set('dreamer_with', []);
        await g.plate(tr('Glasha stuffs the letter into her apron.'));
        await g.say('glasha', 'I’ll pass it on');
        g.set('door', 'shut');
        g.here('glasha', false);
        await g.plate(tr('The door closes.'));
        await g.think('dreamer', 'There, that’s all. That’s good');
      } else {
        await g.say('dreamer', 'Forgive me… I was mistaken');
        await g.say('glasha', 'Well, a mistake’s a mistake');
        await g.plate(tr('She watches him go until he turns on the stairs. The letter is by his heart again. What he will tell her is decided tonight.'));
      }
      g.apply('door');
    },
  ],
};
