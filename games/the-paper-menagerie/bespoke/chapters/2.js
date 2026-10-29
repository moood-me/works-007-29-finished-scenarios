// 2. “A Good Day” (scenario §5, 2.1–2.4). Eleven years later, autumn; Jack twenty-one, his first suit, a ticket for the
// 23:00 train and an interview in the city; Mom in hospital, her third week. The nurse: “A good day for her. Stay a
// while longer.” Laohu on the nightstand, folded anew, crooked, an extra fold at the tail — “Don't touch. This one is for
// once only”; ⚑ what they talk about; ⚑ the train (hinge 1: stay or go — the form of the finale and her last word to
// him); the night (stayed) or the train (went); Friday night, her hand.
// Her language: the language at home (scenario §1, §8) — 2 Mom's: both in Chinese, subtitled; 1 two languages: she in
// Chinese, subtitled, he in English; 0 English: she in English, slowly — and what she says in Chinese is not
// subtitled: Jack no longer understands it.
// On the ward's pieces (game.md «Stage 5 — pieces»): the corridor by its view (`door`, `phone`), the ward (`ward_in`,
// `once`, `talk_*`, `coat`, `stay` | `go`, `night` | `menu`, `friday`, `silence`); the things by the ward's keys (WARDS).
// Reads: the language, the menagerie, marks.ear. Leaves: choices.talk, choices.train; marks.talk, marks.train.
import { WARDS, facts, piece } from '../story.js';
import { hand } from '../minigames/all.js';

const ALL = ['mom', 'jack', 'dad'];

export default {
  number: '2', title: tr('A Good Day'),
  titles: ['At the Ward Door', 'The Ward', 'The Train', 'The Night', 'The Hand'],
  choices: [
    { id: 'talk', title: tr('What about'), options: [
      { id: 'grandma', label: tr('“Tell me about your mom”'), came: tr('You asked about her mother — “I’ll finish later”.') },
      { id: 'forty', label: tr('Tell her about the job in the city'), came: tr('You told her about the forty floors — “I washed windows on the third”.') },
      { id: 'hand', label: tr('Take her hand'), came: tr('You took her hand — she sang about the two tigers.') },
    ] },
    { id: 'train', title: tr('The train'), weight: '⚑', options: [
      { id: 'stay', label: tr('Stay'), came: tr('You stayed, though she said “Go” — she turned away; the job went to someone else.') },
      { id: 'go', label: tr.c('the choice: take the train', 'Go'), came: tr('You went — when you came back she no longer spoke; on the nightstand stood a paper house.') },
    ] },
  ],
  steps: [
    // 2.1: at the ward door — the nurse, the ticket, the phrasebook, the tiger folded anew (`door`, the corridor)
    async g => {
      const f = facts(g.state);
      await piece(g, 'door', {
        dad: () => g.say('dad', 'A good day today. She ate. Soup… well, half a bowl — that’s a lot, for her', { how: 'rambling a little, trying to sound hopeful' }),
        nurse: async () => {
          await g.say('nurse', 'You’re the one going to the city? She’s told us all about it…', { how: 'passing by, nodding at the suit bag, warm' });
          await g.say('nurse', 'It’s a good day for her. Stay a while longer', { how: 'already walking on, lower' });
        },
        ticket: async () => {
          await g.say('dad', 'Can’t you move it?', { how: 'looking at the ticket' });
          await g.say('jack_grown', 'I already did. When they took her in', { how: 'flat, tired' });
          await g.say('dad', 'I’ll drive you at eleven', { how: 'nodding' });
          g.know(tr('The interview has been moved once already; it won’t move twice.'));
        },
        book: () => g.say('dad', 'Learned “ni hao”. She says I sound like a duck', { how: 'a short, shy joke' }),
        tiger: () => (f.zoo === 0 ? g.say('dad', 'She asked for the tiger — I brought it last week, from the attic. I come in the evening — and it’s folded all over again, crooked. She breathed on it the whole evening. Don’t know why', { how: 'puzzled, quietly' })
          : f.zoo === 1 ? g.say('dad', 'She asked for the tiger — I brought it last week, off your shelf. I come in the evening — and it’s folded all over again, crooked. She breathed on it the whole evening. Don’t know why', { how: 'puzzled, quietly' })
            : g.say('dad', 'She asked for the tiger — I brought it last week, from your room; there’s a whole regiment of them in there. I come in the evening — and it’s folded all over again, crooked. She breathed on it the whole evening. Don’t know why', { how: 'puzzled, quietly' })),
      }, async () => {
        await g.scene('hallway', { beat: 'door', here: ['jack', 'dad', 'nurse'], moods: { jack: 'tired', dad: 'tired' }, keys: WARDS(f) });
        g.title(tr('A Good Day'), tr('Eleven years later. Autumn'));
      });
    },
    // 2.2: the ward; “You've got thin”; “Don't touch. This one is for once only”; the suit; ⚑ what about (`ward_in`,
    // `once`, then `talk_<choice>`)
    async g => {
      const f = facts(g.state);
      await piece(g, 'ward_in', {
        greet: async () => {
          if (f.lang === 2) {
            await g.say('mom', 'Jieke. You’ve got thin.', { spoken: '杰克。你瘦了。' });
            await g.say('jack_grown', 'So have you, Mom.', { spoken: '你也是，妈。', how: 'in Mandarin Chinese, gently' });
          } else if (f.lang === 1) {
            await g.say('mom', 'Jieke. You’ve got thin.', { spoken: '杰克。你瘦了。' });
            await g.say('jack_grown', 'So have you, Mom', { how: 'gently' });
          } else {
            await g.say('mom', 'Jack. You are thin', { how: 'in English, slowly' });
            await g.say('jack_grown', 'So have you, Mom', { how: 'gently' });
            await g.say('mom', '老虎，你要乖乖的，等着他。', { how: 'murmuring to the paper tiger, tenderly' });
          }
        },
      }, () => g.scene('ward', { beat: 'ward_in', here: ALL, moods: { mom: 'smile', jack: 'neutral', dad: 'neutral' }, keys: WARDS(f) }));
      await piece(g, 'once', {
        touch: async () => {
          g.mood('mom', 'neutral');
          if (f.lang === 0) await g.say('mom', 'Don’t touch. This one — only once', { how: 'in English, slowly; matter-of-fact, as if about the dishes' });
          else await g.say('mom', 'Don’t touch. This one is for once only.', { spoken: '别碰。这个——只能一次。', how: 'matter-of-fact, as if about the dishes' });
          g.know(tr('Of the crooked fold at the tail she said: “for once only”. You didn’t understand.'));
        },
        suit: async () => {
          g.mood('mom', 'smile');
          if (f.lang === 0) await g.say('mom', 'Suit? Show me', { how: 'in English, brightening' });
          else await g.say('mom', 'A suit? Show me.', { spoken: '西装？给我看看。', how: 'brightening' });
          if (f.lang === 0) await g.say('mom', 'Good', { how: 'in English, proud' });
          else await g.say('mom', 'Good.', { spoken: '好。', how: 'proud' });
        },
      });
      const talk = await g.choose('talk', { 'jack#chest': [
        { id: 'grandma', label: tr('“Tell me about your mom”') },
        { id: 'forty', label: tr('Tell her about the job in the city') },
        { id: 'hand', label: tr('Take her hand') },
      ] });
      if (talk === 'grandma') {
        if (f.lang === 2) await g.say('jack_grown', 'Tell me about your mom.', { spoken: '跟我讲讲你妈妈。', how: 'in Mandarin Chinese, carefully' });
        else await g.say('jack_grown', 'Tell me about your mom', { how: 'carefully' });
        await piece(g, 'talk_grandma', {
          say: async () => {
            if (f.lang === 0) await g.say('mom', 'She folded me animals. From newspapers…', { how: 'in English, slowly, far away' });
            else await g.say('mom', 'She folded animals for me. Out of newspapers…', { spoken: '她给我折小动物。用报纸……', how: 'far away' });
            g.mood('mom', 'tired');
          },
          end: async () => {
            if (f.lang === 0) await g.say('mom', 'I finish later. Show me the sleeve again', { how: 'in English, lightly, changing the subject' });
            else await g.say('mom', 'I’ll finish later. Show me the sleeve again.', { spoken: '以后再说完。再给我看看袖子。', how: 'lightly, changing the subject' });
            g.promise(tr('Mom: “I’ll finish later” — about her mother.'));
          },
        });
      } else if (talk === 'forty') {
        await piece(g, 'talk_forty', {
          say: async () => {
            if (f.lang === 0) await g.say('mom', 'Tall building? How many floors?', { how: 'in English, eager' });
            else await g.say('mom', 'A tall building? How many floors?', { spoken: '楼高吗？多少层？', how: 'eager' });
            if (f.lang === 2) await g.say('jack_grown', 'Forty.', { spoken: '四十层。', how: 'in Mandarin Chinese, a little proud' });
            else await g.say('jack_grown', 'Forty', { how: 'a little proud' });
          },
          end: async () => {
            g.mood('mom', 'laugh');
            if (f.lang === 0) await g.say('mom', 'Forty. I wash windows on third floor — I was scared', { how: 'in English, laughing' });
            else await g.say('mom', 'Forty. I used to wash windows on the third floor — I was scared.', { spoken: '四十层。我以前在三楼擦窗户——都害怕。', how: 'laughing' });
            g.mood('mom', 'surprised');
          },
        });
      } else {
        await piece(g, 'talk_hand', {
          say: () => (f.lang > 0 ? g.say('mom', 'Two tigers, two tigers, running fast, running fast. One has no ears, one has no tail…', { spoken: '两只老虎，两只老虎，跑得快，跑得快。一只没有耳朵，一只没有尾巴……', how: 'singing very softly, the children’s song to the tune of Frère Jacques' })
            : g.say('mom', '两只老虎，两只老虎，跑得快，跑得快。一只没有耳朵，一只没有尾巴……', { how: 'singing very softly, the children’s song to the tune of Frère Jacques' })),
        });
      }
      g.apply('talk');
    },
    // 2.3: ⚑ the train (hinge 1) (`coat`, then `stay` | `go`)
    async g => {
      const f = facts(g.state);
      await piece(g, 'coat', {
        dad: () => g.say('dad', 'Let’s go, I’ll drive you to the station', { how: 'gently' }),
        mom: async () => {
          if (f.talk === 'forty') {
            if (f.lang === 0) await g.say('mom', 'Go. Forty floors', { how: 'in English, smiling' });
            else await g.say('mom', 'Go. Forty floors.', { spoken: '去吧。四十层。', how: 'smiling' });
          } else if (f.talk === 'grandma') {
            if (f.lang === 0) await g.say('mom', 'Go. I finish later', { how: 'in English, lightly' });
            else await g.say('mom', 'Go. I’ll finish later.', { spoken: '去吧。以后再说完。', how: 'lightly' });
          } else {
            if (f.lang > 0) await g.say('mom', 'How strange, how strange.', { spoken: '真奇怪，真奇怪。', how: 'finishing the line of the song, very softly' });
            else await g.say('mom', '真奇怪，真奇怪。', { how: 'finishing the line of the song, very softly' });
            if (f.lang === 0) await g.say('mom', 'Go', { how: 'in English, softly' });
            else await g.say('mom', 'Go.', { spoken: '去吧。', how: 'softly' });
          }
        },
      }, () => g.scene('ward', { beat: 'coat', here: ALL, moods: { mom: 'smile', jack: 'thinking', dad: 'tired' }, keys: WARDS(f) }));
      g.know(tr('The ticket for tonight; the interview, two days; it has been moved once already. Her thinness — and “stay a while longer”.'));
      const train = await g.choose('train', { 'jack#chest': [
        { id: 'stay', label: tr('Stay') },
        { id: 'go', label: tr.c('the choice: take the train', 'Go') },
      ] });
      if (train === 'stay') {
        await piece(g, 'stay', {
          say: () => g.say('jack_grown', 'I’ll stay, Dad', { how: 'quietly, decided' }),
          turn: async () => {
            if (f.lang === 0) await g.say('mom', 'Silly', { how: 'in English, softly' });
            else await g.say('mom', 'Silly.', { spoken: '傻孩子。', how: 'softly' });
            g.mood('mom', 'sad');
            if (f.lang === 0) await g.say('mom', 'Okay', { how: 'in English, flat, turning away' });
            else await g.say('mom', 'All right.', { spoken: '好吧。', how: 'flat, turning away' });
          },
        });
      } else {
        await piece(g, 'go', {
          hand: async () => {
            await g.say('jack_grown', 'I’ll be back on Friday', { how: 'gently, a promise' });
            g.promise(tr('Jack: “I’ll be back on Friday.”'));
            if (f.lang === 0) await g.say('mom', 'Go', { how: 'in English' });
            else await g.say('mom', 'Go.', { spoken: '去吧。' });
          },
        });
      }
      g.apply('train');
    },
    // 2.3а the night and the morning's payphone (stayed: `night`, `phone`) — or 2.3б the train (went: `menu`)
    async g => {
      const f = facts(g.state);
      if (f.stayed) {
        await piece(g, 'night', {
          bag: () => (f.lang === 0 ? g.say('mom', 'Hang straight. It will crease', { how: 'in English, slowly, practical' })
            : g.say('mom', 'Hang it straight. It’ll crease.', { spoken: '挂直了。会皱的。', how: 'practical' })),
          tiger: async () => {
            if (f.lang === 0) await g.say('mom', 'Laohu. <short pause> Home', { how: 'in English, with pauses, two words' });
            else await g.say('mom', 'Take Laohu home. To where he lived.', { spoken: '把老虎带回家。带回它住的地方。' });
            g.promise(tr('Mom: “Take Laohu home.”'));
          },
          talk: async () => {
            g.mood('mom', 'smile');
            if (f.lang === 2) {
              await g.say('mom', 'Are the onions by the porch still green?', { spoken: '门口的葱还绿吗？' });
              await g.say('jack_grown', 'Green.', { spoken: '绿。', how: 'in Mandarin Chinese, softly' });
              await g.say('mom', 'Is your father still snoring?', { spoken: '你爸还打呼噜吗？' });
              await g.say('jack_grown', 'He snores.', { spoken: '打。', how: 'in Mandarin Chinese, smiling' });
              await g.say('mom', 'Let him snore.', { spoken: '让他打吧。' });
            } else if (f.lang === 1) {
              await g.say('mom', 'Are the onions by the porch still green?', { spoken: '门口的葱还绿吗？' });
              await g.say('jack_grown', 'Green', { how: 'softly' });
              await g.say('mom', 'Is your father still snoring?', { spoken: '你爸还打呼噜吗？' });
              await g.say('jack_grown', 'He snores', { how: 'smiling' });
              g.mood('mom', 'laugh');
              await g.say('mom', 'Like before.', { spoken: '跟以前一样。', how: 'laughing softly' });
            } else {
              await g.say('mom', '杰克，你小时候，门口的葱，你爸爸打呼噜，老虎在你枕头上走来走去……', { how: 'quickly and warmly, a rush of memories' });
              g.mood('mom', 'sad');
            }
          },
          last: async () => {
            if (f.lang > 0) await g.say('mom', 'Don’t be alone.', { spoken: '别一个人。', how: 'very quietly' });
            else {
              await g.say('mom', 'Ài.', { spoken: '爱。', how: 'a whisper' });
              await g.say('jack_grown', 'I know, Mom', { how: 'barely aloud' });
            }
            g.mood('mom', 'eyes_closed');
          },
        }, () => g.scene('ward', { beat: 'night', here: ['mom', 'jack'], moods: { mom: 'neutral', jack: 'tired' }, keys: WARDS(f, { suit_on_chair: true }) }));
        await piece(g, 'phone', {
          dad: async () => {
            g.know(tr('On the phone: the position will go to another candidate.'));
            await g.say('dad', 'Gave it away?', { how: 'quietly' });
            await g.say('jack_grown', 'They did');
            await g.say('dad', 'Well… okay', { how: 'helpless, kind' });
          },
        }, () => g.scene('hallway', { beat: 'phone', here: ['jack', 'dad'], moods: { jack: 'tired', dad: 'sad' }, keys: WARDS(f, { suit_on_chair: true }) }));
      } else {
        await piece(g, 'menu', {
          door: async () => {
            await g.say('dad', 'I’ll take the tiger back home later', { at: 'narrator', how: 'back from the station, in the doorway, quietly' });
            g.promise(tr('Dad: “I’ll take the tiger back home.”'));
          },
        }, () => g.scene('ward', { beat: 'menu', here: ['mom'], moods: { mom: 'neutral' }, keys: WARDS(f, { menu: 'flat' }) }));
      }
    },
    // 2.4: Friday night; М5 «The Hand» (`friday`, М5, `silence`)
    async g => {
      const f = facts(g.state);
      await piece(g, 'friday', {
        back: () => (f.stayed ? null : f.talk === 'forty' ? g.say('jack_grown', 'Forty floors, Mom', { how: 'quietly, hoping' }) : g.say('jack_grown', 'Mom. They took me', { how: 'quietly, hoping' })),
        house: async () => {
          if (f.stayed) {
            g.know(tr('Since that night she has not woken up clear. For three days you hardly left her.'));
            g.kept(tr('“Take Laohu home” — he did, on the first morning.'));
          } else {
            g.mood('dad', 'tired');
            await g.say('dad', 'She folded it on Wednesday. After that she couldn’t', { how: 'just woken, hoarse' });
            if (f.talk === 'forty') await g.say('dad', 'Forty. I counted', { how: 'hoarse, short' });
            g.kept(tr('“I’ll be back on Friday” — he came back; she no longer spoke.'));
          }
        },
      }, () => g.scene('ward', { beat: 'friday', here: ALL, moods: { mom: 'eyes_closed', jack: 'sad', dad: 'eyes_closed' },
        keys: WARDS(f, { laohu_here: false, menu_house: !f.stayed, suit_on_chair: f.stayed }) }));
      await g.play(hand);
      await piece(g, 'silence');
    },
  ],
};
