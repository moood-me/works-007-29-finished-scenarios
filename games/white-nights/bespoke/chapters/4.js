// The fourth night. “Rain” (scenario §5, 4.1–4.4; Saturday). On A and U: she cries at the railing as on the first
// night — “He won't come! He hasn't answered!”; ⚑ “I love you”, “He will come” (A), an arm round her shoulders, or —
// U — “I didn't take it” (U4: she takes the letter with two fingers and goes; the chapter ends in the rain). Her answer:
// the mezzanine; the rain, arm in arm (М4: hold); on U her invitation for Sunday, ⏸ under the awning. On A (Ш3) the
// Lodger under the lamp with her letter — ⚑ her hand in his palm (М5: let go, hold, reach); she always goes. On C: no
// tears, no letter — “let's just walk, about nothing”; ⚑ (Ш3) “I love you”, “he will still come”, or silence; the rain
// under the awning, ten strikes — she turns to the corner, or from it; М4; Sunday.
// After it, on A and U4, the finale comes straight on (`onward`); on C and U, the map, then Sunday.
// Reads: facts — letter, said, left, glasha, joked, couldnt, promise, hem, knows, confessed. Leaves: choices.rain |
// choices.free, choices.hand (A).
import { facts, agreement } from '../story.js';
import { arm_rain, CARDS } from '../minigames/all.js';

export default {
  number: tr('The Fourth Night'), title: tr('Rain'),
  onward: f => f.letter === 'A' || f.letter === 'U4',
  titles: ['He Won’t Come', 'Her Answer', 'Arm in Arm', 'Under the Lamp'],
  choices: [
    { id: 'rain', title: tr('In her tears'), weight: '⚑', also: f => (f.letter === 'U' ? tr('You kept silent about the letter in her tears. — She called you to come and take the mezzanine.') : null),
      options: [{ id: 'love', label: tr('“I love you”') }, { id: 'will_come', label: tr('“He will come”') }, { id: 'embrace', label: tr('Put your arm round her and say nothing') }, { id: 'not_brought', label: tr('“I didn’t take it”') }] },
    { id: 'free', title: tr('“About nothing”'), weight: '⚑', options: [{ id: 'love', label: tr('“I love you”') }, { id: 'will_come', label: tr('“He will still come”') }, { id: 'silent', label: tr('Walk beside her and say nothing') }] },
    { id: 'hand', title: tr('Under the lamp'), weight: '⚑', options: [{ id: 'let_go', label: tr('Let go') }, { id: 'hold', label: tr('Hold') }, { id: 'reach', label: tr('Reach after her') }] },
  ],
  steps: [
    // 4.1: A, U — her tears, ⚑ in her tears (U4 ends the chapter); C — “about nothing”, ⚑ in the night of nothing
    async g => {
      const f = facts(g.state);
      if (f.letter === 'C') {
        await g.scene('night', { here: ['dreamer', 'nastya'], moods: { nastya: 'neutral' }, keys: { moment: 'fourth_night' } });
        g.title(tr('The Fourth Night'));
        await g.plate(tr('She is at the railing, no tears: there is no letter now, and no one to wait for. The bell has not struck yet tonight.'));
        if (f.couldnt) {
          await g.plate(tr('She takes his arm herself, the way one takes a brother’s, and talks fast:'));
          await g.say('nastya', 'Well, come on, my knight. Let’s just walk. About nothing');
          g.mood('dreamer', 'sad');
          await g.plate(tr('In “knight” he hears yesterday’s “you couldn’t”.'));
        } else {
          await g.plate(tr('She stands at the railing and does not come to him; he goes up himself.'));
          await g.say('nastya', 'Let’s just walk. About nothing');
          await g.plate(tr('She walks a step ahead and does not take his arm.'));
        }
        const free = await g.choose('free', { 'dreamer#chest': [
          { id: 'love', label: f.said ? tr('“I love you. Just the same”') : tr('“I love you”') },
          { id: 'will_come', label: tr('“He will still come”') },
          { id: 'silent', label: tr('Walk beside her and say nothing') },
        ] });
        if (free === 'love') {
          await love(g, f);
          if (!f.said) {
            g.mood('nastya', 'surprised');
            await g.plate(tr('She stops and looks at him a long time (close up).'));
            await g.say('nastya', 'Yesterday you couldn’t. And tonight you could', { how: 'not a question' });
            await g.plate(tr('She takes her hand from under his elbow and walks on alone, a step ahead.'));
          } else {
            g.mood('nastya', 'sad');
            await g.say('nastya', 'I asked you — about nothing');
            await g.plate(tr('She walks on without turning round, a step ahead, and does not give him her hand.'));
          }
        } else if (free === 'will_come') {
          await g.say('dreamer', 'He will still come');
          await g.say('nastya', 'Don’t talk about him');
          await g.plate(tr('She lets go of his arm, if she held it, and walks by herself. A few steps on:'));
          await g.say('nastya', 'You’re always for him', { how: 'without reproach — the way one speaks to a brother' });
        } else {
          await g.plate(tr('He walks beside her, not a word. A long while — the water, their steps. Then she:'));
          await g.say('nastya', 'Like this. Good');
          if (f.said) await g.say('nastya', 'You won’t any more?.. Well, that’s good', { how: 'a little later, not looking at him' });
        }
        g.apply('free');
        return;
      }
      await g.scene('night', { here: ['dreamer', 'nastya'], keys: { moment: 'fourth_night' } });
      g.title(tr('The Fourth Night'));
      await g.plate(tr('She is at the railing. The shot almost repeats the first night: leaning on the railing, she cries.'));
      await g.say('nastya', 'He won’t come! He hasn’t answered!', { how: 'crying' });
      if (f.glasha) await g.say('nastya', 'He asks every day — you said so yourself! — and he doesn’t come!', { how: 'crying, angry' });
      if (f.left) {
        await g.say('nastya', 'Yesterday you left');
        await g.plate(tr('She does not take his arm.'));
      }
      if (f.joked) await g.say('nastya', 'It’s all right for you — you’re in love with everyone, with the houses, with the lamp…', { how: 'through tears' });
      if (f.letter === 'U') await g.plate(tr('At “He hasn’t answered!” the Dreamer’s hand lies on his pocket. The rustle of paper.'));
      const rain = await g.choose('rain', { 'dreamer#chest': [
        { id: 'love', label: f.said ? tr('“I love you. Just the same”') : tr('“I love you”') },
        ...(f.letter === 'A' ? [{ id: 'will_come', label: tr('“He will come”') }] : []),
        { id: 'embrace', label: tr('Put your arm round her and say nothing') },
        ...(f.letter === 'U' ? [{ id: 'not_brought', label: tr('“I didn’t take it”') }] : []),
      ] });
      if (rain === 'love') await love(g, f);
      else if (rain === 'will_come') {
        await g.say('dreamer', 'He will come. He will come');
        await g.plate(tr('She cries harder: comfort from a friend hurts more than from a stranger.'));
      } else if (rain === 'embrace') {
        g.set('dreamer_with', []);
        await g.plate(tr('His arm round her shoulders; both look at the water. She grows quiet.'));
      } else {
        g.set('dreamer_with', [f.stain ? 'letter_stained' : 'letter']);
        await g.plate(tr('He takes out the letter and holds it out.'));
        await g.say('dreamer', 'I didn’t take it');
        g.mood('nastya', 'surprised');
        await g.plate(tr('She looks at the envelope, then at him (close up). Not a word. She takes the letter with two fingers, as if it were someone else’s, and goes round the corner. The rain begins.'));
        g.set('dreamer_with', []);
        g.here('nastya', false);
        g.set('rain', 1, 4);
        await g.plate(tr('⏸ He is alone at the railing in the rain, his hands empty. The chapter ends.'));
      }
      g.apply('rain');
    },
    // 4.2 (A, U): her answer — the mezzanine; C: the rain under the awning, ten strikes
    async g => {
      const f = facts(g.state);
      if (f.letter === 'U4') return;
      if (f.letter === 'C') {
        await g.scene('rain', { here: ['dreamer', 'nastya'], keys: { moment: 'fourth_awning' } }, { cut: true });
        await g.plate(tr('The rain begins. Under the awning of the yellow house. The bell strikes ten — her hour. At the first stroke, out of habit, she turns to the corner (close up).'));
        if (f.confessed) {
          await g.plate(tr('She stands a step from him, her back to him, her face to the corner. On the tenth stroke she turns away from the corner — to him; she comes up herself, takes his arm and stands shoulder to shoulder.'));
          g.mood('nastya', 'smile');
        } else await g.plate(tr('She holds his arm the way one holds a railing, and watches the corner to the last stroke.'));
        return;
      }
      await g.scene('night', { here: ['dreamer', 'nastya'], keys: { moment: 'fourth_night' } }, { cut: true });
      if (f.left) {
        if (f.confessed) {
          await g.say('nastya', 'Yesterday you left. And tonight — this');
          await g.plate(tr('A pause.'));
        }
        await g.say('nastya', 'Let’s go. It’s raining');
        return;
      }
      if (f.knows) {
        g.mood('nastya', 'smile');
        await g.say('nastya', 'I will love you. Perhaps I already… Move in with us — the mezzanine is empty. Grandmother will ask whether you are young. Say — not very', { how: 'through tears and already laughing; deciding fast, so as not to wait; she does not believe her own “already”' });
      } else {
        await g.say('nastya', 'Move in with us. The mezzanine is empty. You’ll be my… you’ll be near. Grandmother will ask whether you are young. Say — not very', { how: 'through tears, deciding fast, so as not to wait' });
      }
      if (f.hem) await g.say('nastya', 'Grandmother will ask about the hem again. I’ll say — you');
      await g.say('nastya', 'Only don’t be offended if sometimes I think about him. A little', { how: 'in earnest' });
    },
    // 4.3: the rain, arm in arm (М4); U — her invitation, ⏸ under the awning; C — her invitation, ⏸
    async g => {
      const f = facts(g.state);
      if (f.letter === 'U4') return;
      await g.scene('rain', { here: ['dreamer', 'nastya'], moods: { nastya: f.left ? 'sad' : 'smile' }, keys: { moment: f.letter === 'C' ? 'fourth_awning' : 'fourth_rain' } }, { cut: true });
      if (f.letter === 'C') {
        const r = await g.play(arm_rain);
        if (r.loose) {
          await g.say('nastya', 'Where are you going? It’s wet');
          await g.plate(tr('She takes his arm again herself.'));
        } else await g.plate(tr('He held it; she does not take her hand away.'));
        if (f.confessed) await g.say('nastya', 'Come on Sunday, after mass, to Grandmother’s. To take the room. If she asks whether you are young — I’ll say “not young”', { how: 'almost laughing, for the first time that night' });
        else await g.say('nastya', 'Grandmother needs a lodger. Come on Sunday, after mass. If she asks whether you are young — say “not very”', { how: 'businesslike, so that there is something for tomorrow; her eyes on the corner' });
        await g.plate(tr('⏸ They wait out the rain in silence. The chapter ends.'));
        return;
      }
      await g.plate(tr('Rain. Arm in arm along the water.'));
      if (f.left) {
        await g.plate(tr('Only now does she give him her hand:'));
        await g.say('nastya', 'Well, give me your arm — it’s raining');
      }
      const r = await g.play(arm_rain);
      if (r.loose) {
        await g.say('nastya', 'Where are you going?');
        await g.plate(tr('She takes his arm again and walks a little ahead.'));
      } else if (!f.left) await g.plate(tr('He holds fast — she presses close.'));
      if (f.left) await g.plate(tr('They walk in silence; she looks at the water and does not laugh.'));
      else if (f.knows) await g.plate(tr('They laugh; she walks close and says nothing.'));
      else await g.plate(tr('They laugh; she chatters about the mezzanine and how its roof leaks.'));
      if (f.letter === 'U') {
        await g.plate(tr('At the corner:'));
        if (f.left) await g.say('nastya', 'Grandmother needs a lodger. Come on Sunday. If she asks whether you are young — say “not very”', { how: 'drily' });
        else await g.say('nastya', 'On Sunday, after mass — to Grandmother’s. To take the room');
        g.here('nastya', false);
        g.set('dreamer_with', [f.stain ? 'letter_stained' : 'letter']);
        g.mood('dreamer', 'sad');
        await g.plate(tr('⏸ He is alone under the awning of the yellow house; he takes out the envelope, looks at her handwriting, puts it back. The chapter ends.'));
      }
    },
    // 4.4 (A): Ш3 — the Lodger under the lamp; ⚑ her hand in his palm (М5); she goes; ⏸ alone in the rain
    async g => {
      const f = facts(g.state);
      if (f.letter !== 'A') return;
      await g.scene('rain', { here: ['dreamer', 'nastya', 'lodger'], keys: { moment: 'fourth_lodger', lodger_with: ['hat_low', f.stain ? 'letter_stained' : 'letter'] } }, { cut: true });
      await g.plate(tr('Under the lamp stands a man: his hat at his chest, her envelope in his hand.'));
      await g.say('lodger', 'Nastenka', { how: 'quietly; he does not come toward her, he waits' });
      await g.plate(tr('Her turn to the lamp, close up. She stops and, without looking, takes her hand from under his elbow and puts it into his palm, and presses it: she clutches at the last support. Slowly her hand leaves his palm.'));
      const off = g.card(CARDS.hand.title, CARDS.hand.gesture, CARDS.hand.about);
      const hand = await g.choose('hand', { 'dreamer#chest': [
        { id: 'let_go', label: tr('Let go') },
        { id: 'hold', label: tr('Hold') },
        { id: 'reach', label: tr('Reach after her') },
      ] });
      off();
      if (hand === 'let_go') {
        if (f.left) await g.plate(tr('She runs to the Lodger, and only waves from afar.'));
        else await g.plate(tr('She runs to the Lodger and embraces him; then runs back, embraces the Dreamer, kisses him — and goes.'));
      } else if (hand === 'hold') {
        g.mood('nastya', 'afraid');
        await g.plate(tr('She pulls, and he feels her tear free. After three seconds she frees herself, goes, and looks back once.'));
      } else {
        await g.say('dreamer', 'Nastenka!', { how: 'a step after her, the name torn out of him' });
        if (f.left) await g.plate(tr('She stops halfway; the Lodger waits. She does not come back.'));
        else await g.plate(tr('She stops halfway; the Lodger waits. Then she comes back, touches his cheek with her palm, says nothing, and goes.'));
      }
      g.apply('hand');
      g.here('nastya', false);
      await g.say('lodger', 'The post has been confirmed. Today. I could not come with nothing', { how: 'officially, as before his superiors; this is his truth, and he is ashamed of it' });
      await g.plate(tr('Then he looks over her shoulder at the Dreamer and speaks to her, not to him:'));
      await g.say('lodger', 'They only gave it to me today. Glasha says some gentleman brought it. Why not into my own hands?', { how: 'polite to the point of coldness; jealous, and does not know it' });
      await g.plate(tr('He puts on his hat; they go.'));
      g.set('moment', 'fourth_alone');
      g.mood('dreamer', 'sad');
      await g.plate(tr('⏸ He is alone at the railing in the rain, fifteen seconds.'));
    },
  ],
};

// В10 «Я люблю вас» (scenario §5 4.1, 4.1-С): confused, three or four phrases, at last without the third person; “I am
// breaking my promise” if he promised; her answer to his first confession, if it is the first
async function love(g, f) {
  if (f.said) await g.say('dreamer', 'I love you. Just the same', { how: 'quietly, plainly, without the third person' });
  else await g.say('dreamer', 'Nastenka… I love you. That is — he, the dreamer… no. I. I love you, Nastenka. That is all', { how: 'confused, stumbling, and at last without the third person' });
  if (f.promise === 'promise') await g.say('dreamer', 'I am breaking my promise. Forgive me');
  await agreement(g);
}
