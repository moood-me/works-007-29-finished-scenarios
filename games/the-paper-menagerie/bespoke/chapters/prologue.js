// Prologue. “Laohu” (scenario §5, П.1–П.4). The evening after Christmas: a five-year-old crying over a broken robot,
// his mother folding a tiger out of wrapping paper and breathing it alive; “you don't unfold a living one”; her song,
// her animals; at night — “Where is she?” — “Far away. I'll tell you later.” No choice: the map does not come after it.
// On the scenes' pieces (game.md «Stage 5 — pieces»): the kitchen (`robot`, `palms`, `menagerie`), Jack's room
// (`bedtime`); Jack is five there (the pieces' `young`).
// Reads: nothing. Leaves: nothing but what the player was told.
import { piece } from '../story.js';
import { palms } from '../minigames/all.js';

const HOME = ['mom', 'jack', 'dad'];

export default {
  number: '', title: tr('Laohu'),
  titles: ['The Robot', 'Palms', 'The Menagerie', 'Later'],
  choices: [],
  steps: [
    // П.1: the robot; she folds without looking at her hands (`robot`)
    async g => {
      await piece(g, 'robot', {
        dad: () => g.say('dad', 'We’ll buy another one tomorrow', { how: 'squatting by the boy, helpless' }),
      }, async () => {
        await g.scene('kitchen', { beat: 'robot', here: HOME, moods: { jack: 'sad', mom: 'neutral', dad: 'sad' } });
        g.title(tr('The Paper Menagerie'), tr('The evening after Christmas'));
      });
    },
    // П.2: her tiger in his palms; М1 «Palms» (`palms`)
    async g => {
      await piece(g, 'palms', {
        give: () => g.say('mom', '拿着。别出声。', { sub: tr('Hold it. Quiet.'), how: 'softly, in Mandarin Chinese, to a crying child' }),
      }, () => g.scene('kitchen', { beat: 'palms', here: HOME, moods: { jack: 'sad', mom: 'smile', dad: 'neutral' } }, { cut: true }));
      await g.play(palms);
      g.mood('jack', 'laugh');
      await g.wait(1500);
    },
    // П.3: “Laohu”; you don't unfold a living one; the song; the menagerie (`menagerie`)
    async g => {
      await piece(g, 'menagerie', {
        name: async () => {
          await g.say('mom', '老虎。', { sub: tr('Laohu. Tiger.') });
          await g.say('jack', '老虎！', { sub: tr('Laohu!'), how: 'delighted, in Mandarin Chinese' });
        },
        dad: () => g.say('dad', 'How she does it — don’t ask. I don’t know either', { how: 'getting up, half amused' }),
        fold: async () => {
          await g.say('mom', '不行。活的不能拆开。', { sub: tr('No. You don’t unfold a living one.') });
          await g.say('jack', '拆了会怎么样？', { sub: tr('Or what?') });
          await g.say('mom', '拆了就变成纸了。', { sub: tr('Or it turns into paper.') });
          g.know(tr('You don’t unfold a living one: it turns into paper.'));
        },
        song: () => g.say('mom', '两只老虎，两只老虎，跑得快，跑得快……', { sub: tr('Two tigers, two tigers, running fast, running fast…'), how: 'singing under her breath, the children’s song to the tune of Frère Jacques' }),
      }, () => g.scene('kitchen', { beat: 'menagerie', here: HOME, moods: { jack: 'smile', mom: 'smile', dad: 'smile' } }, { cut: true }));
    },
    // П.4: night; “Where is she?” — “Far away. I'll tell you later.” (`bedtime`)
    async g => {
      await piece(g, 'bedtime', {
        ask: async () => {
          await g.say('jack', '妈妈，谁教你的？', { sub: tr('Mom, who taught you?'), how: 'sleepily, in Mandarin Chinese' });
          await g.say('mom', '我妈妈。', { sub: tr('My mom.') });
          await g.say('jack', '她在哪儿？', { sub: tr('Where is she?'), how: 'sleepily, in Mandarin Chinese' });
        },
        blanket: async () => {
          await g.say('mom', '很远。以后再告诉你。', { sub: tr('Far away. I’ll tell you later.'), how: 'lightly, as if it were nothing; under it, “far away” means “nowhere”' });
          g.promise(tr('Mom: “I’ll tell you later” — where her mother is.'));
        },
      }, () => g.scene('room', { beat: 'bedtime', here: ['mom', 'jack'], moods: { jack: 'tired', mom: 'smile' }, keys: { menagerie: 'shelf' } }));
    },
  ],
};
