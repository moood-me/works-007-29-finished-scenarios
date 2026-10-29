// 3. “Qingming” (scenario §5, 3.1–3.6, and the finale, §9). The next spring, the first Qingming without her; the house
// sold, the new people move in tomorrow. Boxes and the same crackle of tape; the animals wake for the day, and Laohu
// unfolds himself from her crooked fold into a sheet of her writing; a stranger on the square reads it aloud — whose
// voice reads it is the language at home's; her last strip of tape; ⚑ what to tell Dad; the character 爱 under hers;
// ⚑ Laohu (hinge 2) — fold him, keep the letter, or give him to her in the fire: the finale, «The Tiger», «The Letter»
// or «The Smoke», its form by the train (2.3), its details by the language, the menagerie and the marks — Dad, the ear,
// the seam, the sign.
// On the scenes' pieces (game.md «Stage 5 — pieces»): the kitchen a year on (`boxes`, `her_hand`), the attic and Jack's
// room (`wake_*`, `unfold`, `open`), the yard a year on (`mark` toward the street, `step`, `father_*`, `sign`,
// `sunset`, the finales' pieces, `dad_end`), the square (`bench`, `reading` — the letter's first half read over it —,
// `tear` and М7 in its close-up, then the second half, `reading_end`).
// Reads: everything. Leaves: choices.father, choices.laohu; marks.father, marks.crooked, marks.curled.
import { KIT, ROOMS, YARD, ENDINGS, facts, piece } from '../story.js';
import { read } from '../letter.js';
import { flame, fold, peel, sign, smooth, stroke } from '../minigames/all.js';

const label = id => ENDINGS.find(e => e.id === id).label;
// the square's people (С6): Jack, the woman on the bench, the guide at the coach, three of the group
const SQUARE = ['jack', 'translator', 'guide', 'tourist_cap', 'tourist_hat', 'tourist_coat'];
// the yard a year on: Jack and Dad
const PAIR = ['jack', 'dad'];

export default {
  number: '3', title: tr('Qingming'),
  titles: ['The Boxes', 'Laohu', 'The Square', 'The Letter', 'Dad', 'The Character', 'Laohu', 'The Finale', 'The Last Word'],
  choices: [
    { id: 'father', title: tr('What does she write?'), options: [
      { id: 'all', label: tr('Tell him everything'), came: tr('You told Dad everything — he stood a long time by the apple tree.') },
      { id: 'apple', label: tr('“About the village. And about the apple tree”'), came: tr('You told him about the apple tree — “So I wouldn’t be lying”.') },
      { id: 'later', label: tr('“Later, Dad”'), came: tr('You said “later” — he did not ask.') },
    ] },
    { id: 'laohu', title: tr('Laohu'), weight: '⚑', options: [
      { id: 'fold', label: tr('Fold Laohu') },
      { id: 'letter', label: tr('Keep it a letter') },
      { id: 'smoke', label: tr('Give Laohu to her — in her bucket') },
    ] },
  ],
  steps: [
    // 3.1: the boxes; the day circled on the calendar; the suit or “you eating there?” (`boxes`)
    async g => {
      const f = facts(g.state);
      await piece(g, 'boxes', {
        dad: async () => {
          await g.say('dad', 'The new people move in tomorrow. I told them — not before. Today… she always burned paper on this day. I circled it on the calendar', { how: 'rambling a little, then short' });
          if (f.lang > 0) await g.say('jack_grown', 'Qingming', { how: 'quietly' });
          else {
            await g.say('jack_grown', 'Her day, with the paper… what’s it called, in hers?', { how: 'quietly, searching' });
            await g.say('dad', 'Don’t remember. You used to know');
          }
        },
        suit: async () => {
          if (f.stayed) await g.say('dad', 'Yours. Been hanging here… well, I didn’t know where to put it', { how: 'awkward' });
          else {
            if (f.talk === 'forty') await g.say('dad', 'Forty floors, then. You eating there at least?', { how: 'trying to sound casual' });
            else await g.say('dad', 'You eating there at least?', { how: 'trying to sound casual' });
            await g.say('jack_grown', 'Fine', { how: 'short' });
          }
        },
        sill: () => (f.zoo === 2 ? g.say('dad', 'Didn’t touch these. Didn’t know how', { how: 'quietly' }) : null),
      }, async () => {
        await g.scene('house', { beat: 'boxes', here: PAIR, moods: { jack: 'neutral', dad: 'tired' }, keys: { ...KIT(f), suit_bag: f.stayed, menagerie: f.zoo === 2 ? 'sill' : 'none' } });
        g.title(tr('Qingming'), tr('The next spring. The first Qingming without her'));
      });
    },
    // 3.2: the rustle; the animals wake; М6 «Stroking»; Laohu unfolds himself, from her crooked fold (`wake_attic`,
    // `wake_room` | `wake_shelf` | `wake_house`; `unfold`, М6, `open`; the kitchen's `her_hand`)
    async g => {
      const f = facts(g.state);
      const room = beat => g.scene('bare', { beat, here: f.zoo === 2 ? PAIR : ['jack'], moods: { jack: 'surprised', dad: 'surprised' }, keys: ROOMS(f) });
      if (f.zoo === 0) {
        await piece(g, 'wake_attic', {}, () => g.scene('attic', { beat: 'wake_attic', here: ['jack'], moods: { jack: 'surprised' } }));
        await piece(g, 'wake_room', {}, () => room('wake_room'));
      } else if (f.zoo === 1) await piece(g, 'wake_shelf', {}, () => room('wake_shelf'));
      else await piece(g, 'wake_house', { call: () => g.say('dad', 'Jack!..', { at: 'narrator', how: 'calling from downstairs, startled' }) }, () => room('wake_house'));
      g.know(tr('Today is Qingming: the dead come home, and her animals wake — for one day.'));
      await piece(g, 'unfold');
      await g.play(stroke);
      await piece(g, 'open', {
        tail: () => g.know(tr('He unfolded himself — from her crooked fold, the one “for once only”.')),
        flat: () => g.know(f.lang === 2 ? tr('On the back of the wrapping, columns of her writing. You recognize your name — “Jieke” — and at the bottom the sign from your palm, 爱.')
          : f.lang === 1 ? tr('On the back of the wrapping, columns of her writing. You recognize only 爱, at the bottom.')
            : tr('On the back of the wrapping, columns of her writing. You can’t read it; the sign at the bottom seems familiar.')),
      });
      g.mood('jack', 'sad');
      await piece(g, 'her_hand', {
        dad: async () => {
          await g.say('dad', 'That’s her hand', { how: 'very quietly' });
          await g.say('jack_grown', 'I’ll find someone to read it');
        },
      }, () => g.scene('house', { beat: 'her_hand', here: PAIR, moods: { jack: 'neutral', dad: 'sad' }, keys: { ...KIT(f), suit_bag: false, menagerie: f.zoo === 2 ? 'awake' : 'none' } }));
    },
    // 3.3: the square; the woman; the letter's first half (`bench`, `reading`)
    async g => {
      const f = facts(g.state);
      await piece(g, 'bench', {
        ask: async () => {
          if (f.lang === 2) {
            await g.say('jack_grown', '阿姨，您能帮我念一下吗？', { sub: tr('Auntie, could you read this for me?'), how: 'in Mandarin Chinese, plain home Chinese, a little shy' });
            await g.say('translator', '你说话像乡下人。像我奶奶。', { sub: tr('You talk like a villager. Like my grandmother.'), how: 'surprised, warming at once' });
          } else if (f.lang === 1) await g.say('jack_grown', 'Could you read this for me? Read it as it is — in Chinese. I’ll understand', { how: 'a little shy' });
          else await g.say('jack_grown', 'Could you read this for me? It’s in Chinese', { how: 'a little shy' });
        },
        warm: () => (f.lang === 2 ? g.say('translator', '这么暖和。', { sub: tr('So warm.'), how: 'surprised' }) : g.say('translator', 'So warm', { how: 'surprised' })),
        wind: () => (f.lang === 2 ? g.say('translator', '风吹的。', { sub: tr('The wind.'), how: 'brushing it off' }) : g.say('translator', 'The wind', { how: 'brushing it off' })),
      }, () => g.scene('square', { beat: 'bench', here: SQUARE, moods: { jack: 'neutral', translator: 'neutral' }, keys: { tear: 'taped' } }));
      // (whose voice: 2 — the woman's first, then hers; 1 — the woman's, the last line hers; 0 — the woman translating)
      const who = f.lang > 0 ? 'translator' : 'en', on = f.lang === 2 ? 'mom' : who;
      await piece(g, 'reading', {
        start: async () => {
          await read(g, who, 'p0');
          await read(g, who, 'p1');
          // (the reading not one held shot: the back of her sheet, close, beside the woman while the voice goes on)
          g.set('letter_close', 1, 1.2);
          await read(g, on, f.asked ? 'p2asked' : 'p2silent');
          await read(g, on, 'p3');
          if (f.talk === 'grandma') {
            g.mood('jack', 'surprised');
            if (f.lang === 2) await g.say('jack_grown', '接着念。', { sub: tr('Go on.'), how: 'in Mandarin Chinese, hoarse' });
            else await g.say('jack_grown', 'Go on', { how: 'hoarse' });
            g.kept(tr('“I’ll finish later” — she finished it here.'));
          }
          await read(g, on, 'p4');
          g.set('letter_close', 0, 1);
          await read(g, on, 'p5');
          await read(g, on, 'p6');
        },
      });
    },
    // 3.3: the tear; М7 «The Tape, Her Last»; the letter's second half; the woman goes (`tear`, М7, `reading_end`)
    async g => {
      const f = facts(g.state);
      await piece(g, 'tear', {
        open: () => (f.lang === 2 ? g.say('translator', '这儿撕破了，边叠在一起了。字在底下。', { sub: tr('It’s torn here, the edges overlap. The word is under them.'), how: 'peering, practical' })
          : g.say('translator', 'It’s torn here, the edges overlap. The word is under them', { how: 'peering, practical' })),
      }, () => g.scene('square', { beat: 'tear', here: SQUARE, moods: { jack: 'sad', translator: 'thinking' }, keys: { tear: 'taped' } }, { cut: true }));
      const { missed } = await g.play(peel);
      if (missed) {
        g.mark('curled', true, null);
        if (f.lang === 2) await g.say('translator', '看不清。大概是——“一个人”。', { sub: tr('I can’t see. Probably — “alone”.'), how: 'squinting, gently' });
        else await g.say('translator', 'I can’t see. Probably — “alone”', { how: 'squinting, gently' });
      }
      const who = f.lang === 2 ? 'mom' : f.lang === 1 ? 'translator' : 'en';
      await read(g, who, 'p7');
      await read(g, who, `p8${f.yard}`);
      await read(g, who, `p9${f.box}`);
      await read(g, who, 'p10');
      if (f.lang > 0) await read(g, 'mom', 'p11');
      else {
        await g.say('translator', 'And at the bottom — “Mom”. And a sign before it…', { how: 'translating aloud, slowly' });
        await g.say('mom', '爱。', { at: 'narrator', how: 'quietly, warmly' });
      }
      g.know(tr('Now you know her life: Sigulu, the famine, Hong Kong, the iron, the letters with the apple tree — and “alone”.'));
      if (f.asked) g.kept(tr('“I’ll tell you later” — “Here is later.”'));
      else g.kept(tr('“I’ll tell you later” — she told it in the letter.'));
      await piece(g, 'reading_end', {
        back: () => (f.lang === 2 ? g.say('jack_grown', '不用。我就这样拿着。', { sub: tr('Don’t. I’ll keep it like this.'), how: 'in Mandarin Chinese, gently' })
          : g.say('jack_grown', 'Don’t. I’ll keep it like this', { how: 'gently' })),
        guide: () => g.say('guide', '周阿姨！上车了！', { sub: f.lang > 0 ? tr('Auntie Zhou! The bus!') : null, how: 'shouting across the square in Mandarin Chinese' }),
      });
    },
    // 3.4: Mark across the street; the box of the woken animals; ⚑ what does she write? (`mark` toward the street, then
    // `step`, `father_<choice>`)
    async g => {
      const f = facts(g.state);
      await piece(g, 'mark', {
        say: async () => {
          if (f.yard === 'english') await g.say('mark_grown', 'Heard. Sorry, man. She brought us buns that time, remember?', { how: 'awkward, sincere' });
          else if (f.yard === 'run') {
            await g.say('mark_grown', 'Hey', { how: 'across the street, a nod' });
            await g.say('jack_grown', 'Hey');
          }
        },
      }, () => g.scene('porch', { beat: 'mark', here: ['jack', 'mark_grown'], moods: { jack: 'neutral' }, keys: YARD(f) }));
      g.here('mark_grown', false);
      g.here('dad', true);
      g.mood('dad', 'tired');
      await piece(g, 'step', {
        ask: () => g.say('dad', 'What does she write?', { how: 'for once asking, not looking at the sheet' }),
      });
      const father = await g.choose('father', { 'jack#chest': [
        { id: 'all', label: tr('Tell him everything') },
        { id: 'apple', label: tr('“About the village. And about the apple tree”') },
        { id: 'later', label: tr('“Later, Dad”') },
      ] });
      g.set('father', father);
      if (father === 'all') {
        await piece(g, 'father_all', {
          scar: () => g.say('dad', 'The scar… I thought — from the stove', { how: 'very quietly, stunned' }),
        });
      } else if (father === 'apple') {
        await g.say('jack_grown', 'About the village. And about the apple tree');
        await piece(g, 'father_apple', {
          smile: () => g.say('dad', 'About the apple tree, then. I planted it in the spring, before the first letter. So I wouldn’t be lying', { how: 'smiling, short' }),
        });
      } else {
        await g.say('jack_grown', 'Later, Dad');
        await piece(g, 'father_later', {
          nod: () => g.say('dad', 'Later. Okay', { how: 'nodding, as he nodded to her all his life' }),
        });
      }
      g.apply('father');
    },
    // 3.5: М8 «The Character» (`sign`)
    async g => {
      const f = facts(g.state);
      await piece(g, 'sign', {}, () => g.scene('porch', { beat: 'sign', here: ['jack'], moods: { jack: 'thinking' }, keys: YARD(f) }));
      const { missed } = await g.play(sign);
      if (missed) g.mark('crooked', true, tr('His 爱 came out crooked — and it will stay so.'));
      g.know(tr('One sign — ten seconds. On the sheet there are dozens of columns.'));
    },
    // 3.6: ⚑ Laohu (hinge 2) — sunset; the animals fall asleep; the sheet still remembers the tiger's folds (`sunset`)
    async g => {
      const f = facts(g.state);
      await piece(g, 'sunset', {
        fold: () => g.know(tr('The sheet still trembles along the tiger’s folds; her crooked fold at the tail lies dead — it will not fold again.')),
      }, () => g.scene('porch', { beat: 'sunset', here: ['jack'], moods: { jack: 'sad' }, keys: YARD(f) }));
      await g.sheet(tr('What Jack knows'), [
        tr('You don’t unfold a living one: unfolded by hand, he is just paper — and there is no one to breathe into him.'),
        tr('At night paper forgets its folds: folded after that, even along the same lines, it is just paper.'),
        tr('Her crooked fold was for once only: he opened himself by it, and the sheet no longer remembers it. Folded, he will not open again by himself.'),
        tr('Today is Qingming: what burns, they will have there.'),
        tr('Folded, her lines go inside the living tiger; kept a letter, Laohu never stands again; given to the fire — neither tiger nor letter.'),
      ]);
      const laohu = await g.choose('laohu', { 'jack#chest': [
        { id: 'fold', label: tr('Fold Laohu') },
        { id: 'letter', label: tr('Keep it a letter') },
        { id: 'smoke', label: tr('Give Laohu to her — in her bucket') },
      ] });
      g.apply('laohu');
      if (laohu === 'smoke') g.know(tr('She sent paper to her own for twenty years, and no one sent her any. There, she has no one to fold a tiger for her.'));
    },
    // the finale (scenario §9), part one: its image — the tiger, the letter, the smoke (`tiger`, «fold», `tiger_up` |
    // `letter_end`, «smooth», `letter_flat` | `smoke`, «flame», `smoke_up`)
    async g => {
      const f = facts(g.state);
      const open = name => async () => {
        await g.scene('porch', { beat: name, here: PAIR, moods: { jack: 'sad', dad: 'tired' }, keys: YARD(f) });
        g.title(label(f.ending));
      };
      if (f.ending === 'tiger') {
        await piece(g, 'tiger', {}, open('tiger'));
        await g.play(fold);
        await piece(g, 'tiger_up', {
          up: () => g.mood('jack', 'smile'),
          hum: () => (f.lang === 2 ? g.say('jack_grown', '两只老虎，两只老虎，跑得快……', { sub: tr('Two tigers, two tigers, running fast…'), how: 'humming the children’s song softly, with the words, in Mandarin Chinese' })
            : f.lang === 1 ? g.say('jack_grown', 'Mm-mm, mm-mm…', { how: 'humming the first line of the children’s song Two Tigers without words, to the tune of Frère Jacques' }) : null),
        });
      } else if (f.ending === 'letter') {
        await piece(g, 'letter_end', {}, open('letter_end'));
        await g.play(smooth);
        await piece(g, 'letter_flat');
      } else {
        await piece(g, 'smoke', {}, open('smoke'));
        await g.play(flame);
        await piece(g, 'smoke_up', {
          say: async () => {
            if (f.lang === 2) await g.say('jack_grown', '妈妈，老虎——给你。', { sub: tr('Mom, Laohu — for you.'), how: 'into the fire, in Mandarin Chinese, quietly' });
            else if (f.lang === 1) {
              await g.say('jack_grown', 'Mom, Laohu — for you', { how: 'into the fire, quietly' });
              await g.say('jack_grown', '爱。', { sub: tr('Ài.'), how: 'into the fire, the one word in Mandarin Chinese, barely aloud' });
            } else await g.say('jack_grown', 'Mom, Laohu — for you', { how: 'into the fire, quietly' });
          },
        });
      }
    },
    // the finale, part two: Dad, by the mark; the line of the train; the last line (`dad_end`)
    async g => {
      const f = facts(g.state);
      const dad = {
        tiger: { all: () => g.say('dad', 'Hello, beast', { how: 'softly, hoarse' }) },
        letter: { all: () => g.say('dad', 'Let’s do it together. I’m on twelve', { how: 'shy, determined' }), apple: () => g.say('dad', 'Take it. No use to me now', { how: 'gruff, gentle' }) },
        smoke: { apple: () => g.say('dad', 'That’s how she did it', { how: 'from the porch, quietly' }),
          later: async () => {
            await g.say('dad', 'That you… well', { how: 'from the door, unsure' });
            await g.say('jack_grown', 'Mom’s');
          } },
      }[f.ending][f.father] ?? (() => null);
      await piece(g, 'dad_end', {
        say: dad,
        last: async () => {
          if (!f.stayed) await g.say('jack_grown', 'The last thing she said to me herself: “Go”. And I went. Here — I’m back', { how: 'grown-up, very quiet' });
          else if (f.lang > 0) await g.say('jack_grown', 'The last thing she said to me herself: “Don’t be alone”', { how: 'grown-up, very quiet' });
          else await g.say('jack_grown', 'The last thing she said to me herself was one word. I knew it', { how: 'grown-up, very quiet' });
          if (f.ending === 'tiger') await g.say('jack_grown', 'Once a year, at Qingming, he wakes up. I don’t unfold him', { how: 'grown-up, very quiet' });
          else if (f.ending === 'smoke') await g.say('jack_grown', 'He never woke for me again. At Qingming I fold the paper myself', { how: 'grown-up, very quiet' });
          else if (f.lang === 2) await g.say('jack_grown', 'Reading her hand took me two years. Aloud — in her accent', { how: 'grown-up, very quiet' });
          else if (f.lang === 1) await g.say('jack_grown', 'A year later I read the first line', { how: 'grown-up, very quiet' });
          else await g.say('jack_grown', 'A year later I recognized the second sign in it — the first I learned myself, after her 爱. It was “I”', { how: 'grown-up, very quiet' });
        },
      }, () => g.scene('porch', { beat: 'dad_end', here: PAIR, moods: { jack: 'sad', dad: 'sad' }, keys: YARD(f) }, { cut: true }));
    },
  ],
};
