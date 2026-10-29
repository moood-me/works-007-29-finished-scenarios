// The third night. “Ten” (scenario §5, 3.0–3.4; Friday). “Four days. Never mind”; “well — did you take it?”: on A ⚑
// “I took it” or “he'll get it tomorrow”; with the letter in his pocket ⚑ (Ш2) “I took it” (U) or “No. Here it is” (C),
// and on C ⚑ why — “because I love you” or “I couldn't”; on A and U ⚑ her “I guessed that you love me” (or, once he has
// said it, “do you still?”); ⏸ ten strikes, no one comes (A, U), or she tears the letter on the tenth stroke (C); on A
// and U, after ten ⚑ stay, leave, or (A, “I took it”) tell her about Glasha.
// Reads: facts — judge, hem, story, letter, said, glasha. Leaves: choices.told | choices.answer, choices.why,
// choices.guessed | choices.still, choices.after.
import { facts, agreement } from '../story.js';

export default {
  number: tr('The Third Night'), title: tr('Ten'),
  titles: ['Four Days', 'Did You Take It?', 'Why', 'I Guessed', 'Ten', 'After Ten'],
  choices: [
    { id: 'told', title: tr('“Did you take it?”'), options: [{ id: 'brought', label: tr('“I took it”') }, { id: 'tomorrow', label: tr('“I took it. Only he’ll get it tomorrow”') }] },
    { id: 'answer', title: tr('“Did you take it?”'), weight: '⚑', options: [{ id: 'brought', label: tr('“I took it”') }, { id: 'here', label: tr('“No. Here it is”') }] },
    { id: 'why', title: tr('“Why?”'), options: [{ id: 'love', label: tr('“Because I love you”') }, { id: 'couldnt', label: tr('“I couldn’t”') }] },
    { id: 'guessed', title: tr('“I guessed that you love me”'), options: [{ id: 'yes', label: tr('“Yes. I love you”') }, { id: 'joke', label: tr('Turn it into a joke') }, { id: 'silent', label: tr('Say nothing') }] },
    { id: 'still', title: tr('“Do you still?”'), options: [{ id: 'yes', label: tr('“Yes”') }, { id: 'silent', label: tr('Say nothing') }] },
    { id: 'after', title: tr('After ten'), options: [{ id: 'stay', label: tr('Stay with her') }, { id: 'leave', label: tr('Leave: “I must go”') }, { id: 'glasha', label: tr('“He’ll get it tomorrow. He asks every day”') }] },
  ],
  steps: [
    // 3.0: she comes; “four days”
    async g => {
      const f = facts(g.state);
      await g.scene('night', { here: ['dreamer'], keys: { moment: 'third_night' } });
      g.title(tr('The Third Night'));
      g.here('nastya', true);
      await g.plate(tr('She comes round the corner.'));
      await g.say('nastya', 'Four days. Never mind', { how: 'gaily and resolutely; on “never mind” one hears that it is a lot' });
      if (f.judge === 'reason') await g.say('nastya', 'All day I kept repeating: he has a reason. It helps');
      else if (f.judge === 'unworthy') {
        g.mood('nastya', 'neutral');
        await g.say('nastya', 'I was angry with you all day');
        await g.plate(tr('She does not take his arm at once.'));
      }
      if (f.hem) {
        g.mood('nastya', 'laugh');
        await g.say('nastya', 'Grandmother asked who tore the hem. I said — the cat. We have no cat');
      }
    },
    // 3.1: “did you take it?” — on A ⚑ the whole truth or not; with the letter ⚑ (Ш2) “I took it” or “here it is”
    async g => {
      const f = facts(g.state);
      const kept = f.door === 'keep';
      await g.scene('night', { here: ['dreamer', 'nastya'], keys: { moment: 'third_night' } }, { cut: true });
      if (f.story === 'plain') await g.say('nastya', 'Well, my copyist — did you take it?');
      else if (f.story === 'type') await g.say('nastya', 'Well, my type — did you take it?');
      else {
        await g.say('nastya', 'Well, my Venetian — did you take it?');
        g.mood('dreamer', 'disgusted');
        await g.plate(tr('He winces: the name has stuck.'));
      }
      if (!kept) {
        const told = await g.choose('told', { 'dreamer#chest': [
          { id: 'brought', label: tr('“I took it”') },
          { id: 'tomorrow', label: tr('“I took it. Only he’ll get it tomorrow”') },
        ] });
        if (told === 'brought') {
          await g.say('dreamer', 'I took it');
          g.mood('nastya', 'laugh');
          await g.plate(tr('She seizes his arm and pulls him along the railing, almost running. The “tomorrow” he kept to himself.'));
        } else {
          await g.say('dreamer', 'I took it. Only he had already been to them today — he’ll get it tomorrow. He asks about you every day');
          g.mood('nastya', 'surprised');
          await g.say('nastya', 'Tomorrow…', { how: 'stopping short' });
          await g.say('nastya', 'Every day? Really? Well — tomorrow', { how: 'then quickly, rallying' });
          await g.plate(tr('She takes his arm, but walks more slowly.'));
        }
        g.apply('told');
      } else {
        const answer = await g.choose('answer', { 'dreamer#chest': [
          { id: 'brought', label: tr('“I took it”') },
          { id: 'here', label: tr('“No. Here it is”') },
        ] });
        if (answer === 'brought') {
          await g.say('dreamer', 'I took it');
          g.mood('dreamer', 'sad');
          g.mood('nastya', 'laugh');
          await g.plate(tr('She is just as happy — and he does not look her in the eyes.'));
        } else {
          await g.say('dreamer', 'No. Here it is');
          g.set('nastya_with', [f.stain ? 'letter_stained' : 'letter']);
          g.mood('nastya', 'surprised');
          await g.plate(tr('The letter is in her hands again. Her face, close up.'));
          await g.say('nastya', 'Why?');
        }
        g.apply('answer');
      }
    },
    // 3.1, C: ⚑ why — “because I love you” or “I couldn't”
    async g => {
      const f = facts(g.state);
      if (f.letter !== 'C') return;
      await g.scene('night', { here: ['dreamer', 'nastya'], moods: { dreamer: 'afraid', nastya: 'surprised' }, keys: { moment: 'third_night', nastya_with: [f.stain ? 'letter_stained' : 'letter'] } }, { cut: true });
      const why = await g.choose('why', { 'dreamer#chest': [
        { id: 'love', label: f.said ? tr('“You know why”') : tr('“Because I love you”') },
        { id: 'couldnt', label: tr('“I couldn’t”') },
      ] });
      if (why === 'love') {
        if (f.said) await g.say('dreamer', 'You know why', { how: 'quietly, not looking at her' });
        else {
          await g.say('dreamer', 'Because… because he, that is, I… Nastenka — that is why', { how: 'in the third person until it breaks; the word itself is never said, but it is understood' });
          await agreement(g);
        }
        g.mood('nastya', 'sad');
        await g.plate(tr('She looks at the letter, not at him.'));
      } else {
        await g.say('dreamer', 'I couldn’t');
        if (f.said) {
          await g.say('nastya', 'You couldn’t. Well, yes');
          await g.plate(tr('She turns away.'));
        } else await g.say('nastya', 'You couldn’t?');
        await g.say('nastya', 'And who opened? And what kind of door — with a bell?', { how: 'at once, quickly' });
        await g.say('dreamer', 'The maid. She says he comes to them every day, asks…');
        g.mood('nastya', 'sad');
        await g.say('nastya', 'Every day', { how: 'not to him; her face to the water' });
      }
      g.apply('why');
    },
    // 3.2 (A, U): ⚑ “I guessed that you love me” — or, once said, “do you still?”
    async g => {
      const f = facts(g.state);
      if (f.letter === 'C') return;
      await g.scene('night', { here: ['dreamer', 'nastya'], keys: { moment: 'third_night' } }, { cut: true });
      await g.plate(tr('They wait for ten. She is gay and talkative — and suddenly:'));
      if (!f.said) {
        await g.say('nastya', 'I guessed, you know, that you love me. Yesterday already. You aren’t angry? I like you all the more for it…', { how: 'gaily and almost cruelly, with no thought behind it; on “all the more” she breaks off' });
        const guessed = await g.choose('guessed', { 'dreamer#chest': [
          { id: 'yes', label: tr('“Yes. I love you”') },
          { id: 'joke', label: tr('Turn it into a joke') },
          { id: 'silent', label: tr('Say nothing') },
        ] });
        if (guessed === 'yes') {
          await g.say('dreamer', 'You guessed. That is… he — that is, I… Yes', { how: 'stumbling; the “yes” quieter than all the rest' });
          g.mood('nastya', 'surprised');
          await g.plate(tr('She blushes, lets go of his arm and at once takes it again.'));
          await agreement(g);
          g.mood('nastya', 'smile');
          if (f.glasha) await g.say('nastya', 'So be it. He will come tomorrow, and you’ll see what he is like');
          else await g.say('nastya', 'So be it. He will come now, and you’ll see what he is like');
          if (f.letter === 'U') await g.plate(tr('Of love he speaks; of the letter he is silent.'));
        } else if (guessed === 'joke') {
          await g.say('dreamer', 'Guessed? Why, I am in love with everyone — with the houses, with the lamp…', { how: 'lightly, a little too gaily' });
          g.mood('nastya', 'laugh');
          await g.plate(tr('She laughs — and looks at him a long time.'));
        } else {
          await g.say('nastya', 'Well, be silent then');
          await g.plate(tr('She goes off into talk of the Lodger: his books, how he read aloud — “Ivanhoe” three times.'));
        }
        g.apply('guessed');
      } else {
        await g.say('nastya', 'And I thought about yesterday all day. Funny: you — and suddenly. You aren’t angry that it’s funny? …Do you still?', { how: 'laughing so as to be able to ask; “do you still” quickly and aside, toward the corner' });
        const still = await g.choose('still', { 'dreamer#chest': [
          { id: 'yes', label: tr('“Yes”') },
          { id: 'silent', label: tr('Say nothing') },
        ] });
        if (still === 'yes') {
          await g.say('dreamer', 'Yes');
          await g.say('nastya', 'So be it');
          await g.plate(tr('She takes his arm tighter.'));
        } else {
          g.mood('nastya', 'neutral');
          await g.plate(tr('She lets go of his arm and talks about the Lodger.'));
        }
        g.apply('still');
      }
    },
    // 3.3: ⏸ ten (A, U): no one comes; C: she tears the letter on the tenth stroke
    async g => {
      const f = facts(g.state);
      if (f.letter === 'C') {
        await g.scene('night', { here: ['dreamer', 'nastya'], keys: { moment: 'third_tear', scraps: false } }, { cut: true });
        g.set('bell', 10, 10);
        await g.plate(tr('She stands at the railing holding the letter over the water. The bell strikes ten. On the tenth stroke she tears the letter to shreds and lets them fall into the water.'));
        g.set('nastya_with', []);
        g.set('scraps', true);
        await g.say('nastya', 'If he wanted to, he would have come himself', { how: 'dry, her hands shaking; on “himself” anger at both of them' });
        await g.plate(tr('She does not take his arm. Going, over her shoulder:'));
        if (g.state.choices.why === 'love') await g.say('nastya', 'Why did you have to tell me that now?');
        else await g.say('nastya', 'Why did you bring it back?');
        await g.plate(tr('She goes off at a quick step.'));
        g.here('nastya', false);
        await g.plate(tr('⏸ He is alone at the railing; scraps of paper float on the water.'));
        return;
      }
      await g.scene('night', { here: ['dreamer', 'nastya'], keys: { moment: 'third_ten' } }, { cut: true });
      g.set('bell', 10, 10);
      await g.plate(tr('⏸ Ten. The bell strikes ten times. She stands at the railing facing the corner, her back to him; he behind her. Nothing to do: the strokes, the water, a cab that does not turn in. The camera on his face.'));
      if (f.letter === 'U') await g.plate(tr('He looks at the granite; his hand lies on his pocket by itself; the rustle of paper only he hears.'));
      else if (f.glasha) await g.plate(tr('She knows “tomorrow” and stands facing the corner all the same; he watches her wait.'));
      else await g.plate(tr('He knows “he’s been today already”; his lips part, and close.'));
      g.mood('nastya', 'sad');
      await g.plate(tr('The tenth stroke. No one.'));
    },
    // 3.4 (A, U): after ten; ⚑ stay, leave, or (A, “I took it”) tell her about Glasha
    async g => {
      const f = facts(g.state);
      if (f.letter === 'C') return;
      await g.scene('night', { here: ['dreamer', 'nastya'], keys: { moment: 'third_bench' } }, { cut: true });
      await g.plate(tr('She sits down on the bench and is silent.'));
      if (f.glasha) await g.say('nastya', 'Tomorrow. You said so — tomorrow', { how: 'to herself, not to him' });
      const after = await g.choose('after', { 'dreamer#chest': [
        { id: 'stay', label: tr('Stay with her') },
        { id: 'leave', label: tr('Leave: “I must go”') },
        ...(f.letter === 'A' && !f.glasha ? [{ id: 'glasha', label: tr('“He’ll get it tomorrow. He asks every day”') }] : []),
      ] });
      if (after === 'stay') {
        await g.plate(tr('He sits down beside her and does not touch her. She lays her head on his shoulder and talks about the Lodger. Then:'));
        await g.say('nastya', 'You’re like a brother to me. Truly', { how: 'gratefully, from the heart; she does not hear what she has said' });
        g.mood('dreamer', 'sad');
        await g.plate(tr('His face, close up.'));
      } else if (after === 'leave') {
        await g.say('dreamer', 'I… must go. Forgive me');
        g.here('dreamer', false);
        await g.plate(tr('She watches him go and does not call after him.'));
      } else {
        await g.say('dreamer', 'He had already been to them today. He’ll get it tomorrow. He asks about you every day');
        g.mood('nastya', 'surprised');
        await g.say('nastya', 'Every day? Really? Tomorrow…', { how: 'raising her head' });
        await g.plate(tr('He gave his rival her hope — and it shows on his face.'));
      }
      g.apply('after');
    },
  ],
};
