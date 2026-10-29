// 1. “Trash” (scenario §5, 1.1–1.7). Five years later, spring, Sunday, Qingming; Dad on his shift. The ingots for the
// dead, Jack's with his name on it; Mark's knight, the puddle, Laohu torn — “cheap Chinese trash”; ⚑ the yard: in
// which language Jack answers her in front of Mark (the language at home, set once); the fire in the bucket; the tape
// and 爱 on his palm; ⚑ the question — “Did Dad buy you?”; ⚑ the box (the menagerie, set once); the gate on Monday
// morning.
// On the scenes' pieces (game.md «Stage 5 — pieces»): the kitchen, the yard (1.7 toward the street), Jack's room.
// Reads: the miss marks; the yard. Leaves: choices.yard, choices.asked, choices.box; scales.language,
// scales.menagerie; marks.yard, marks.asked, marks.ear, marks.seam, marks.ingot.
import { KIT, ROOM, ROOMS, YARD, facts, piece } from '../story.js';
import { ingot, scraps, tape } from '../minigames/all.js';

export default {
  number: '1', title: tr('Trash'),
  titles: ['The Ingots', 'The Knight', 'The Yard', 'Dusk', 'The Tape', 'The Question', 'The Box', 'The Gate'],
  choices: [
    { id: 'yard', title: tr('The yard'), options: [
      { id: 'english', label: tr('“In English, Mom!”'), came: tr('You told Mom: in English — in the morning you rode off with them.') },
      { id: 'chinese', label: tr('Answer her in Chinese: “Fix it, Mom”'), came: tr('You answered her in her language — in the morning you stood at the gate alone.') },
      { id: 'run', label: tr('Run away'), came: tr('You ran away — “Psycho”.') },
    ] },
    { id: 'asked', title: tr('The question'), options: [
      { id: 'asked', label: tr('“Did Dad buy you?”'), came: tr('You asked whether Dad bought her — he went to mend the porch; “I’ll tell you later”.') },
      { id: 'silent', label: tr('Say nothing'), came: tr('You did not ask — she waited.') },
    ] },
    { id: 'box', title: tr('The box'), options: [
      { id: 'attic', label: tr('All of them into the box'), came: tr('You put the animals away in the attic — the tiger scratched at the lid.') },
      { id: 'laohu', label: tr('All but Laohu'), came: tr('You kept Laohu — in the morning he limped after you.') },
      { id: 'all', label: tr('None of them'), came: tr('You kept them all — in the morning the whole bus stop saw them.') },
    ] },
  ],
  steps: [
    // 1.1: the ingots; М2 «The Fold»; “Jack! Come out!” (`ingots`, М2, `ingot_name`)
    async g => {
      await piece(g, 'ingots', {
        say: async () => {
          await g.say('mom', '今天是清明。死去的人回家。我的家人很远，我给他们寄。烧了的，他们在那边就有了。', { sub: tr('Today is Qingming. The dead come home. Mine are far away — I send them things. What burns, they will have there.') });
          g.know(tr('Qingming: the dead come home; what burns, they will have there.'));
        },
      }, async () => {
        await g.scene('kitchen', { beat: 'ingots', here: ['mom', 'jack'], moods: { mom: 'smile', jack: 'neutral' }, keys: KIT(facts(g.state)) });
        g.title(tr('Trash'), tr('Five years later. Spring, Qingming'));
      });
      const { missed } = await g.play(ingot);
      if (missed) {
        g.mark('ingot', 'crooked', null);
        await g.say('mom', '给外婆，这样也很好。', { sub: tr('For Grandma, this one is good enough.'), how: 'laughing' });
      }
      await piece(g, 'ingot_name', {
        write: async () => {
          await g.say('jack', '让他们知道是谁送的。', { sub: tr('So they know who it’s from.'), how: 'in Mandarin Chinese, a little proud' });
          g.mood('mom', 'laugh');
        },
        call: async () => {
          await g.say('mark', 'Jack! Come out!', { how: 'shouting from the street' });
          g.mood('mom', 'smile');
          await g.say('mom', '去吧。晚上一起烧。', { sub: tr('Go. We’ll burn them tonight.') });
          g.promise(tr('Mom: “We’ll burn them tonight.”'));
        },
      });
    },
    // 1.2: the knight; the puddle; Laohu torn; М3 «The Scraps» (`knight`)
    async g => {
      await piece(g, 'knight', {
        show: () => g.say('mark', 'My dad sent me this', { how: 'showing off, holding it up' }),
        tear: () => g.say('mark', 'It’s trash. Cheap Chinese trash', { how: 'furious, near tears' }),
        wind: () => g.know(tr('Torn, Laohu is just paper: he doesn’t move.')),
      }, () => g.scene('yard', { beat: 'knight', here: ['jack', 'mark'], moods: { jack: 'smile', mark: 'smile' }, keys: YARD(facts(g.state)) }));
      const { missed } = await g.play(scraps);
      if (missed) g.mark('ear', true, tr('The wind took the ear into the drain across the street — Laohu will stay one-eared.'));
    },
    // 1.3: ⚑ the yard (eight seconds; nothing chosen — run away) (`plate`, then `yard_<way>`)
    async g => {
      await piece(g, 'plate', {
        hand: async () => {
          await g.say('mom', '给我。我来修。叫你的朋友也来吃。', { sub: tr('Give them to me. I’ll fix it. Call your friend, let him eat too.') });
          await g.say('mark', 'What’s she jabbering? At school they say you talk like that with her too. My mom says your dad ordered her from a catalogue. Like a vacuum cleaner', { how: 'loud, mean, repeating the grown-ups' });
          await g.say('mark', 'Tell her to talk normal');
        },
      }, () => g.scene('yard', { beat: 'plate', here: ['mom', 'jack', 'mark'], moods: { mom: 'neutral', jack: 'sad', mark: 'angry' }, keys: YARD(facts(g.state)) }));
      const yard = await g.choose('yard', { 'jack#chest': [
        { id: 'english', label: tr('“In English, Mom!”') },
        { id: 'chinese', label: tr('Answer her in Chinese: “Fix it, Mom”') },
        { id: 'run', label: tr('Run away') },
      ] }, { within: 8000, otherwise: 'run' });
      g.set('way', yard);
      if (yard === 'english') {
        await g.say('jack', 'In English, Mom!', { how: 'loud, so that Mark hears, ashamed and angry' });
        g.mood('mom', 'sad');
        await piece(g, 'yard_english', {
          freeze: () => g.say('mom', 'Okay. Eat, please', { how: 'in English, slowly, carefully, quietly' }),
          go: () => g.say('mark', 'Come over to mine. I’ve got a console', { how: 'after a pause, gruffly friendly' }),
        });
      } else if (yard === 'chinese') {
        await piece(g, 'yard_chinese', {
          give: () => g.say('jack', '妈妈，你修好它。', { sub: tr('Fix it, Mom.'), how: 'in Mandarin Chinese, quietly but clearly' }),
          go: () => g.say('mark', 'Fine, sit there with your trash', { how: 'hurt, sneering' }),
        });
        g.mood('mom', 'smile');
      } else {
        await piece(g, 'yard_run', {
          door: () => g.say('mark', 'Psycho'),
        });
        g.mood('mom', 'sad');
      }
      g.apply('yard');
    },
    // 1.4: dusk; the fire in the bucket; his ingot burns on every branch; Dad (`fire`, `dad_home`; «Run away» — `knock`
    // in his room)
    async g => {
      const f = facts(g.state);
      const burnt = () => g.kept(tr('“We’ll burn them tonight” — his ingot burned with hers.'));
      const fire = f.yard === 'english' ? { pass: () => g.say('mom', 'Dinner soon', { how: 'in English, slowly' }), ingot: burnt }
        : f.yard === 'chinese' ? { speak: async () => {
          await g.say('mom', '外公外婆看得见你。跟他们说句话。', { sub: tr('Grandma and Grandpa can see you. Say something to them.') });
          await g.say('jack', '你们好。', { sub: tr('Hello.'), how: 'into the fire, awkwardly, in Mandarin Chinese' });
        }, ingot: burnt }
          : { ingot: burnt };
      await piece(g, 'fire', fire, () => g.scene('yard', { beat: 'fire', here: ['mom', 'jack', 'dad'], moods: { mom: f.yard === 'run' ? 'sad' : 'neutral', jack: f.yard === 'run' ? 'sad' : 'neutral' }, keys: YARD(f) }));
      await piece(g, 'dad_home', {
        talk: () => (f.yard === 'english' ? g.say('dad', 'Mom said you asked for English. She needs it too. Only… go easy on her', { how: 'awkwardly, gently' })
          : f.yard === 'chinese' ? g.say('dad', 'Mrs Douglas caught me at the gate. Mark came home upset. You’ve got to go to school with them, Jack', { how: 'tired, not angry' })
            : null),
      });
      if (f.yard === 'run') {
        await piece(g, 'knock', {
          knock: async () => {
            await g.say('dad', 'What happened?', { at: 'narrator', how: 'through the door' });
            await g.wait(1200);
          },
          plate: () => g.say('dad', 'Okay. Whenever you want to tell me', { at: 'narrator', how: 'through the door, gently' }),
        }, () => g.scene('room', { beat: 'knock', here: ['jack'], moods: { jack: 'sad' }, keys: { ...ROOM.ran, ...ROOMS(f, false) } }));
      }
    },
    // 1.5: the tape; М4 «The Tape»; she breathes; what she says now, in his language; 爱 on his palm (`tape`, М4,
    // `breathe`, `palm`; «Run away» — first his room, she at his door)
    async g => {
      const f = facts(g.state);
      if (f.yard === 'run') {
        await g.scene('room', { here: ['jack', 'mom'], moods: { jack: 'sad', mom: 'neutral' }, keys: { ...ROOM.call, ...ROOMS(f, false) } });
        await g.wait(3500);
      }
      await piece(g, 'tape', {
        now: async () => {
          if (f.lang === 0) {
            await g.say('mom', 'Now. Tomorrow it will be just paper', { how: 'in English, slowly, choosing the words' });
            await g.say('mom', 'Hold. Two hands is not enough', { how: 'in English, slowly' });
          } else {
            await g.say('mom', '现在修。明天就只是纸了。', { sub: tr('Now. Tomorrow it will be just paper.') });
            await g.say('mom', '按住。两只手不够。', { sub: tr('Hold it. Two hands aren’t enough.') });
          }
          g.know(tr('Torn paper remembers its folds until night; tomorrow it is just paper.'));
        },
      }, () => g.scene('kitchen', { beat: 'tape', here: ['mom', 'jack'], moods: { mom: 'neutral', jack: 'sad' }, keys: KIT(f) }));
      const { missed } = await g.play(tape);
      if (missed) {
        g.mark('seam', true, tr('The seam came out crooked — Laohu will limp worse.'));
        g.set('laohu_seam', true);
      }
      await piece(g, 'breathe');
      g.mood('jack', 'neutral');
      await piece(g, 'palm', {
        say: async () => {
          if (f.yard === 'english') {
            await g.say('mom', 'I will speak English. Only… “love” — I say here', { how: 'in English, slowly, with long pauses, touching her lips' });
            await g.say('mom', '“Ài” — here', { how: 'in English, slowly; “ài” in Chinese; touching her chest' });
            await g.say('mom', 'But I will', { how: 'in English, quietly, firmly' });
          } else if (f.yard === 'chinese') {
            await g.say('mom', '有马克在，我就说英语。你要跟他们一起上学。', { sub: tr('In front of Mark I’ll speak English. You have to go to school with them.') });
          } else {
            await g.say('mom', '我们家的门很响。', { sub: tr('Our door is a loud one.'), how: 'out of the corner of her mouth, almost laughing' });
            await g.say('mom', '没关系。', { sub: tr('It’s all right.') });
          }
        },
        sign: async () => {
          g.mood('mom', 'smile');
          await g.say('mom', '爱。', { sub: tr('Ài — love.') });
          g.know(tr('The sign 爱 — ài, love: she wrote it on your palm.'));
        },
      });
    },
    // 1.5: ⚑ the question — Dad in the doorway (`question`, then `asked` | `silent`)
    async g => {
      const f = facts(g.state);
      await piece(g, 'question', {}, () => g.scene('kitchen', { beat: 'question', here: ['mom', 'jack', 'dad'], moods: { mom: 'neutral', jack: 'thinking', dad: 'neutral' }, keys: KIT(f) }, { cut: true }));
      const asked = await g.choose('asked', { 'jack#chest': [
        { id: 'asked', label: tr('“Did Dad buy you?”') },
        { id: 'silent', label: tr('Say nothing') },
      ] });
      if (asked === 'asked') {
        if (f.lang === 2) await g.say('jack', '爸爸是从 catalogue 上把你买来的吗？', { sub: tr('Did Dad buy you from a catalogue?'), how: 'in Mandarin Chinese; the one word “catalogue” in English, Mark’s word' });
        else await g.say('jack', 'Did Dad buy you?', { how: 'blurting it out, a child asking what burns' });
        await piece(g, 'asked', {
          look: async () => {
            g.mood('mom', 'sad');
            if (f.lang === 0) await g.say('mom', 'No. I chose. Many letters. His — about apple tree', { how: 'in English, slowly, to her son' });
            else await g.say('mom', '不是。是我自己选的。信有很多。他的信里写了一棵苹果树。', { sub: tr('No. I chose myself. There were many letters. His was about an apple tree.') });
            g.know(tr('She chose Dad herself: there were many letters, and his were about an apple tree.'));
          },
          dad: () => g.say('dad', 'She chose. I only wrote the letters. Bad ones', { how: 'not coming in, short' }),
          hammer: async () => {
            if (f.lang === 2) await g.say('jack', '那在他之前呢？你在哪儿？', { sub: tr('And before him? Where were you?'), how: 'in Mandarin Chinese' });
            else await g.say('jack', 'And before him? Where were you?');
            if (f.lang === 0) await g.say('mom', 'Far. I tell you later', { how: 'in English, lightly, not looking up' });
            else await g.say('mom', '很远。以后再告诉你。', { sub: tr('Far away. I’ll tell you later.'), how: 'lightly, not looking up' });
            g.promise(tr('Mom: “I’ll tell you later” — where she was before Dad.'));
          },
        });
      } else {
        await piece(g, 'silent', {
          dad: () => g.say('dad', 'So, is the tiger alive?', { how: 'cheerfully, coming in' }),
        });
      }
      g.apply('asked');
    },
    // 1.6: ⚑ the box (the menagerie) (`box_night`, then `box_<choice>`)
    async g => {
      const f = facts(g.state);
      await piece(g, 'box_night', {}, () => g.scene('room', { beat: 'box_night', here: ['jack'], moods: { jack: 'thinking' }, keys: { ...ROOM.night, ...ROOMS(f, false) } }));
      const box = await g.choose('box', { 'jack#chest': [
        { id: 'attic', label: tr('All of them into the box') },
        { id: 'laohu', label: tr('All but Laohu') },
        { id: 'all', label: tr('None of them') },
      ] });
      await piece(g, `box_${box}`);
      g.apply('box');
    },
    // 1.7: the gate, Monday morning — the yard toward the street (`stop`)
    async g => {
      const f = facts(g.state);
      const at = {
        mark: async () => {
          if (f.yard === 'english') {
            await g.say('mark', 'Jack! Sit with us', { how: 'waving, friendly' });
            await g.say('mom', 'Bye', { how: 'in English, from the porch, quietly' });
          } else if (f.yard === 'chinese') {
            await g.say('mark', 'Nee-e-e haa-o-o!', { how: 'drawling, mocking a Chinese greeting' });
            await g.say('kids', 'Nee-haaa-o!', { at: 'boy_a', how: 'picking it up, laughing' });
          } else await g.say('mark', 'Psycho. Ran off over a piece of paper', { how: 'jeering' });
        },
      };
      if (f.zoo > 0) {
        at.laohu = async () => {
          if (f.yard === 'english') await g.say('mark', 'Whoa, the trash is alive? Man', { how: 'laughing, half impressed' });
          else await g.say('kids', 'His trash follows him around!', { at: 'boy_a', how: 'jeering, laughing' });
          await g.say('mom', '老虎。', { sub: tr('Laohu.'), how: 'quietly, from the porch' });
        };
      }
      if (f.zoo === 2) {
        at.window = () => (f.yard === 'english' ? g.say('mark', 'You’ve got a whole bunch of them in there? A zoo!', { how: 'laughing' })
          : g.say('kids', 'Trash zoo! Trash zoo!', { at: 'boy_a', how: 'chanting, all the way to the bus' }));
      }
      await piece(g, 'stop', at, () => g.scene('stop', { beat: 'stop', here: ['mom', 'jack', 'mark', 'boy_a', 'boy_b'], moods: { mom: 'neutral', jack: 'neutral', mark: f.yard === 'chinese' ? 'angry' : 'smile' }, keys: YARD(f) }));
    },
  ],
};
