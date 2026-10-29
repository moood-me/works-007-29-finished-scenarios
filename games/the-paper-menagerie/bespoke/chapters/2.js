// 2. “A Good Day” (scenario §5, 2.1–2.4). Eleven years later, autumn; Jack twenty-one, his first suit, a ticket for the
// 23:00 train and an interview in the city; Mom in hospital, her third week. The nurse: “A good day for her. Stay a
// while longer.” Laohu on the nightstand, folded anew, crooked, an extra fold at the tail — “Don't touch. This one is for
// once only”; ⚑ what they talk about; ⚑ the train (hinge 1: stay or go — the form of the finale and her last word to
// him); the night (stayed) or the train (went); Friday night, her hand.
// Her language: the language at home (scenario §1, §8) — 2 Mom's: both in Chinese, subtitled; 1 two languages: she in
// Chinese, subtitled, he in English; 0 English: she in English, slowly — and what she says in Chinese is not
// subtitled: Jack no longer understands it.
// Stand-ins (story.js PLACES): the corridor outside the ward — the ward, Mom not seen. The menu crane on the sill —
// only on the menagerie «the whole house» (the ward's key `crane`).
// Reads: the language, the menagerie, marks.ear. Leaves: choices.talk, choices.train; marks.talk, marks.train.
import { WARD, facts } from '../story.js';
import { hand } from '../minigames/all.js';

export default {
  number: '2', title: tr('A Good Day'),
  titles: ['At the Ward Door', 'The Ward', 'What About', 'The Train', 'The Night', 'The Hand'],
  choices: [
    { id: 'talk', title: tr('What about'), options: [
      { id: 'grandma', label: tr('“Tell me about your mom”'), came: tr('You asked about her mother — “I’ll finish later”.') },
      { id: 'forty', label: tr('Tell her about the job in the city'), came: tr('You told her about the forty floors — “I washed windows on the third”.') },
      { id: 'hand', label: tr('Take her hand'), came: tr('You took her hand — she sang about the two tigers.') },
    ] },
    { id: 'train', title: tr('The train'), weight: '⚑', options: [
      { id: 'stay', label: tr('Stay'), came: tr('You stayed, though she said “Go” — she turned away; the job went to someone else.') },
      { id: 'go', label: tr('Go'), came: tr('You went — when you came back she no longer spoke; on the nightstand stood a paper house.') },
    ] },
  ],
  steps: [
    // 2.1: at the ward door — the nurse, the ticket, the phrasebook, the tiger folded anew
    async g => {
      const f = facts(g.state);
      await g.scene('hallway', { here: ['jack', 'dad'], moods: { jack: 'tired', dad: 'tired' }, keys: { ...WARD.evening, crane: f.zoo === 2 } });
      g.title(tr('A Good Day'));
      await g.plate(tr('Eleven years later, autumn. Jack is twenty-one, his last year at university. Mom has been in hospital for three weeks. Tuesday. Dad, unshaven, with a bag of oranges. Jack with a suit bag over his shoulder — his first suit. In his hand a ticket: “Tue 23:00 → Wed 7:40”; the return — “Fri”.'));
      await g.say('dad', 'A good day today. She ate. Soup… well, half a bowl — that’s a lot, for her', { how: 'rambling a little, trying to sound hopeful' });
      await g.say('nurse', 'You’re the one going to the city? She’s told us all about it…', { how: 'passing by, nodding at the suit bag, warm' });
      await g.say('nurse', 'It’s a good day for her. Stay a while longer', { how: 'already walking on, lower' });
      await g.say('dad', 'Can’t you move it?', { how: 'looking at the ticket' });
      await g.say('jack_grown', 'I already did. When they took her in', { how: 'flat, tired' });
      await g.say('dad', 'I’ll drive you at eleven', { how: 'nodding' });
      g.know(tr('The interview has been moved once already; it won’t move twice.'));
      await g.plate(tr('Dad shows a worn phrasebook.'));
      g.mood('dad', 'smile');
      await g.say('dad', 'Learned “ni hao”. She says I sound like a duck', { how: 'a short, shy joke' });
      g.mood('dad', 'thinking');
      await g.plate(tr('And, already holding the door handle:'));
      if (f.zoo === 0) await g.say('dad', 'She asked for the tiger — I brought it last week, from the attic. I come in the evening — and it’s folded all over again, crooked. She breathed on it the whole evening. Don’t know why', { how: 'puzzled, quietly' });
      else if (f.zoo === 1) await g.say('dad', 'She asked for the tiger — I brought it last week, off your shelf. I come in the evening — and it’s folded all over again, crooked. She breathed on it the whole evening. Don’t know why', { how: 'puzzled, quietly' });
      else await g.say('dad', 'She asked for the tiger — I brought it last week, from your room; there’s a whole regiment of them in there. I come in the evening — and it’s folded all over again, crooked. She breathed on it the whole evening. Don’t know why', { how: 'puzzled, quietly' });
    },
    // 2.2: the ward; “You've got thin”; “Don't touch. This one is for once only”; the suit
    async g => {
      const f = facts(g.state);
      await g.scene('ward', { here: ['mom', 'jack', 'dad'], moods: { mom: 'smile', jack: 'neutral', dad: 'neutral' }, keys: { ...WARD.evening, laohu_ear: f.ear, crane: f.zoo === 2 } });
      await g.plate(f.ear ? tr('Mom, thin, in a kerchief. On the nightstand, Laohu — paper, not moving: folded a little crookedly, an extra fold at the tail, a fresh strip of tape on his side; one-eared.') : tr('Mom, thin, in a kerchief. On the nightstand, Laohu — paper, not moving: folded a little crookedly, an extra fold at the tail, a fresh strip of tape on his side.'));
      if (f.zoo === 2) await g.plate(tr('On the window sill, a paper crane, not moving.'));
      await g.plate(tr('Dad sits down on the chair by the window.'));
      if (f.lang === 2) {
        await g.say('mom', '杰克。你瘦了。', { sub: tr('Jieke. You’ve got thin.') });
        await g.say('jack_grown', '你也是，妈。', { sub: tr('So have you, Mom.'), how: 'in Mandarin Chinese, gently' });
      } else if (f.lang === 1) {
        await g.say('mom', '杰克。你瘦了。', { sub: tr('Jieke. You’ve got thin.') });
        await g.say('jack_grown', 'So have you, Mom', { how: 'gently' });
      } else {
        await g.say('mom', 'Jack. You are thin', { how: 'in English, slowly' });
        await g.say('jack_grown', 'So have you, Mom', { how: 'gently' });
        await g.plate(tr('Then she says something to Laohu in Chinese.'));
        await g.say('mom', '老虎，你要乖乖的，等着他。', { how: 'murmuring to the paper tiger, tenderly' });
      }
      await g.plate(tr('Jack picks the tiger up from the nightstand — his old tape on its side — and catches the crooked fold at the tail with his finger, to straighten it. Mom gently lifts his fingers off the paper, as when he was five.'));
      g.mood('mom', 'neutral');
      if (f.lang === 0) await g.say('mom', 'Don’t touch. This one — only once', { how: 'in English, slowly; matter-of-fact, as if about the dishes' });
      else await g.say('mom', '别碰。这个——只能一次。', { sub: tr('Don’t touch. This one is for once only.'), how: 'matter-of-fact, as if about the dishes' });
      await g.plate(tr('She doesn’t explain. She puts the tiger back.'));
      g.know(tr('Of the crooked fold at the tail she said: “for once only”. You didn’t understand.'));
      g.mood('mom', 'smile');
      if (f.lang === 0) await g.say('mom', 'Suit? Show me', { how: 'in English, brightening' });
      else await g.say('mom', '西装？给我看看。', { sub: tr('A suit? Show me.'), how: 'brightening' });
      await g.plate(tr('Jack unzips the bag — a dark sleeve. She touches it with her fingers.'));
      if (f.lang === 0) await g.say('mom', 'Good', { how: 'in English, proud' });
      else await g.say('mom', '好。', { sub: tr('Good.'), how: 'proud' });
    },
    // 2.2: ⚑ what about
    async g => {
      const f = facts(g.state);
      await g.scene('ward', { here: ['mom', 'jack', 'dad'], moods: { mom: 'smile', jack: 'thinking', dad: 'neutral' }, keys: { ...WARD.evening, laohu_ear: f.ear, crane: f.zoo === 2 } }, { cut: true });
      const talk = await g.choose('talk', { 'jack#chest': [
        { id: 'grandma', label: tr('“Tell me about your mom”') },
        { id: 'forty', label: tr('Tell her about the job in the city') },
        { id: 'hand', label: tr('Take her hand') },
      ] });
      if (talk === 'grandma') {
        if (f.lang === 2) await g.say('jack_grown', '跟我讲讲你妈妈。', { sub: tr('Tell me about your mom.'), how: 'in Mandarin Chinese, carefully' });
        else await g.say('jack_grown', 'Tell me about your mom', { how: 'carefully' });
        await g.plate(tr('She looks at Laohu.'));
        if (f.lang === 0) await g.say('mom', 'She folded me animals. From newspapers…', { how: 'in English, slowly, far away' });
        else await g.say('mom', '她给我折小动物。用报纸……', { sub: tr('She folded animals for me. Out of newspapers…'), how: 'far away' });
        g.mood('mom', 'tired');
        await g.plate(tr('She falls silent; her eyes move to the suit bag. She coughs.'));
        if (f.lang === 0) await g.say('mom', 'I finish later. Show me the sleeve again', { how: 'in English, lightly, changing the subject' });
        else await g.say('mom', '以后再说完。再给我看看袖子。', { sub: tr('I’ll finish later. Show me the sleeve again.'), how: 'lightly, changing the subject' });
        g.promise(tr('Mom: “I’ll finish later” — about her mother.'));
        await g.plate(tr('Dad raises his head.'));
      } else if (talk === 'forty') {
        await g.plate(tr('Jack tells her about the job in the city.'));
        if (f.lang === 0) await g.say('mom', 'Tall building? How many floors?', { how: 'in English, eager' });
        else await g.say('mom', '楼高吗？多少层？', { sub: tr('A tall building? How many floors?'), how: 'eager' });
        if (f.lang === 2) await g.say('jack_grown', '四十层。', { sub: tr('Forty.'), how: 'in Mandarin Chinese, a little proud' });
        else await g.say('jack_grown', 'Forty', { how: 'a little proud' });
        g.mood('mom', 'laugh');
        if (f.lang === 0) await g.say('mom', 'Forty. I wash windows on third floor — I was scared', { how: 'in English, laughing' });
        else await g.say('mom', '四十层。我以前在三楼擦窗户——都害怕。', { sub: tr('Forty. I used to wash windows on the third floor — I was scared.'), how: 'laughing' });
        g.mood('mom', 'surprised');
        await g.plate(tr('She said it — and surprised herself.'));
      } else {
        await g.plate(f.ear ? tr('He takes her hand. She holds his fingers, strokes his knuckles and hums “Two Tigers” — on the line “one has no ears” she smiles at Laohu.') : tr('He takes her hand. She holds his fingers, strokes his knuckles and hums “Two Tigers”.'));
        await g.say('mom', '两只老虎，两只老虎，跑得快，跑得快。一只没有耳朵，一只没有尾巴……', { sub: f.lang > 0 ? tr('Two tigers, two tigers, running fast, running fast. One has no ears, one has no tail…') : null, how: 'singing very softly, the children’s song to the tune of Frère Jacques' });
        await g.plate(tr('She reaches toward the tiger with her free hand — to breathe on him, as always — and can’t reach. She puts her hand back, on his fingers.'));
      }
      g.apply('talk');
    },
    // 2.3: ⚑ the train (hinge 1)
    async g => {
      const f = facts(g.state);
      await g.scene('ward', { here: ['mom', 'jack', 'dad'], moods: { mom: 'smile', jack: 'thinking', dad: 'tired' }, keys: { ...WARD.night, laohu_ear: f.ear, crane: f.zoo === 2 } });
      await g.plate(tr('It is getting dark outside the window. Dad puts on his coat.'));
      await g.say('dad', 'Let’s go, I’ll drive you to the station', { how: 'gently' });
      await g.plate(tr('Jack holds the suit bag. Mom:'));
      if (f.talk === 'forty') {
        if (f.lang === 0) await g.say('mom', 'Go. Forty floors', { how: 'in English, smiling' });
        else await g.say('mom', '去吧。四十层。', { sub: tr('Go. Forty floors.'), how: 'smiling' });
      } else if (f.talk === 'grandma') {
        if (f.lang === 0) await g.say('mom', 'Go. I finish later', { how: 'in English, lightly' });
        else await g.say('mom', '去吧。以后再说完。', { sub: tr('Go. I’ll finish later.'), how: 'lightly' });
      } else {
        await g.say('mom', '真奇怪，真奇怪。', { sub: f.lang > 0 ? tr('How strange, how strange.') : null, how: 'finishing the line of the song, very softly' });
        if (f.lang === 0) await g.say('mom', 'Go', { how: 'in English, softly' });
        else await g.say('mom', '去吧。', { sub: tr('Go.'), how: 'softly' });
      }
      await g.plate(tr('The ticket for tonight; the interview, two days; it has been moved once already. Her thinness — and “stay a while longer”.'));
      const train = await g.choose('train', { 'jack#chest': [
        { id: 'stay', label: tr('Stay') },
        { id: 'go', label: tr('Go') },
      ] });
      if (train === 'stay') {
        await g.say('jack_grown', 'I’ll stay, Dad', { how: 'quietly, decided' });
        await g.plate(f.talk === 'hand' ? tr('He hangs the suit bag on the back of the chair and sits on the edge of the bed, her hand in his — he never let it go.') : tr('He hangs the suit bag on the back of the chair, sits on the edge of the bed and takes her hand.'));
        await g.plate(tr('Dad looks at him, at her; nods, and leaves alone.'));
        g.here('dad', false);
        if (f.lang === 0) await g.say('mom', 'Silly', { how: 'in English, softly' });
        else await g.say('mom', '傻孩子。', { sub: tr('Silly.'), how: 'softly' });
        g.mood('mom', 'sad');
        if (f.lang === 0) await g.say('mom', 'Okay', { how: 'in English, flat, turning away' });
        else await g.say('mom', '好吧。', { sub: tr('All right.'), how: 'flat, turning away' });
        await g.plate(tr('She takes her hand out of his and turns to the window; she smooths the edge of the blanket and doesn’t look at him again all evening.'));
      } else {
        await g.plate(tr('Jack squeezes her hand.'));
        await g.say('jack_grown', 'I’ll be back on Friday', { how: 'gently, a promise' });
        g.promise(tr('Jack: “I’ll be back on Friday.”'));
        if (f.lang === 0) await g.say('mom', 'Go', { how: 'in English' });
        else await g.say('mom', '去吧。', { sub: tr('Go.') });
        g.here('jack', false);
        g.here('dad', false);
        g.mood('mom', 'neutral');
        await g.plate(tr('In the doorway he looks back: she is already looking out of the window; Laohu on the nightstand.'));
      }
      g.apply('train');
    },
    // 2.3а the night (stayed) — or 2.3б the train (went)
    async g => {
      const f = facts(g.state);
      if (f.stayed) {
        await g.scene('ward', { here: ['mom', 'jack'], moods: { mom: 'neutral', jack: 'tired' }, keys: { ...WARD.dark, laohu_ear: f.ear, crane: f.zoo === 2 } });
        await g.plate(tr('Three in the morning, the lamp. Mom wakes up clear. The first thing she sees is the suit bag on the back of the chair — she looks at it, not at her son.'));
        if (f.lang === 0) await g.say('mom', 'Hang straight. It will crease', { how: 'in English, slowly, practical' });
        else await g.say('mom', '挂直了。会皱的。', { sub: tr('Hang it straight. It’ll crease.'), how: 'practical' });
        await g.plate(tr('Jack hangs it again. Then she looks at the tiger on the nightstand.'));
        if (f.lang === 0) await g.say('mom', 'Laohu. <short pause> Home', { how: 'in English, with pauses, two words' });
        else await g.say('mom', '把老虎带回家。带回它住的地方。', { sub: tr('Take Laohu home. To where he lived.') });
        g.promise(tr('Mom: “Take Laohu home.”'));
        await g.plate(tr('Only now does she look at Jack.'));
        g.mood('mom', 'smile');
        if (f.lang === 2) {
          await g.say('mom', '门口的葱还绿吗？', { sub: tr('Are the onions by the porch still green?') });
          await g.say('jack_grown', '绿。', { sub: tr('Green.'), how: 'in Mandarin Chinese, softly' });
          await g.say('mom', '你爸还打呼噜吗？', { sub: tr('Is your father still snoring?') });
          await g.say('jack_grown', '打。', { sub: tr('He snores.'), how: 'in Mandarin Chinese, smiling' });
          await g.say('mom', '让他打吧。', { sub: tr('Let him snore.') });
        } else if (f.lang === 1) {
          await g.say('mom', '门口的葱还绿吗？', { sub: tr('Are the onions by the porch still green?') });
          await g.say('jack_grown', 'Green', { how: 'softly' });
          await g.say('mom', '你爸还打呼噜吗？', { sub: tr('Is your father still snoring?') });
          await g.say('jack_grown', 'He snores', { how: 'smiling' });
          g.mood('mom', 'laugh');
          await g.say('mom', '跟以前一样。', { sub: tr('Like before.'), how: 'laughing softly' });
        }
        if (f.lang > 0) {
          await g.plate(tr('A pause. The last thing she says:'));
          await g.say('mom', '别一个人。', { sub: tr('Don’t be alone.'), how: 'very quietly' });
          g.mood('mom', 'eyes_closed');
          await g.plate(tr('She falls asleep.'));
        } else {
          await g.say('mom', '杰克，你小时候，门口的葱，你爸爸打呼噜，老虎在你枕头上走来走去……', { how: 'quickly and warmly, a rush of memories' });
          g.mood('mom', 'sad');
          await g.plate(tr('She speaks Chinese, quickly and warmly — and sees his face, and stops. She looks for the English words — and doesn’t find them. She touches her chest:'));
          await g.say('mom', '爱。', { sub: tr('Ài.'), how: 'a whisper' });
          await g.plate(tr('Then his.'));
          g.mood('mom', 'eyes_closed');
          await g.plate(tr('She falls asleep.'));
          await g.say('jack_grown', 'I know, Mom', { how: 'barely aloud' });
        }
        await g.scene('hallway', { here: ['jack'], moods: { jack: 'tired' }, keys: { ...WARD.evening, crane: f.zoo === 2 } });
        await g.plate(tr('Morning. Jack calls from the payphone in the corridor to say he won’t come. The answer: the position will go to another candidate.'));
        g.here('dad', true);
        await g.plate(tr('Dad comes down the corridor with oranges and sees his face.'));
        await g.say('dad', 'Gave it away?', { how: 'quietly' });
        await g.say('jack_grown', 'They did');
        await g.say('dad', 'Well… okay', { how: 'helpless, kind' });
        await g.plate(tr('Jack puts the tiger in his jacket pocket.'));
      } else {
        await g.scene('ward', { here: ['mom'], moods: { mom: 'neutral' }, keys: { ...WARD.dark, laohu_ear: f.ear, crane: f.zoo === 2 } });
        await g.plate(tr('Night in the ward without him: Mom looks out of the window, the tiger on the nightstand. On the blanket, the hospital menu — she slowly folds it in half.'));
        await g.say('dad', 'I’ll take the tiger back home later', { at: 'narrator', how: 'back from the station, in the doorway, quietly' });
        g.promise(tr('Dad: “I’ll take the tiger back home.”'));
      }
    },
    // 2.4: Friday night; М5 «The Hand»
    async g => {
      const f = facts(g.state);
      await g.scene('ward', { here: ['mom', 'jack', 'dad'], moods: { mom: 'eyes_closed', jack: 'sad', dad: 'eyes_closed' }, keys: { ...WARD.dark, laohu_ear: f.ear, crane: f.zoo === 2 } });
      await g.plate(tr('Friday, night. Mom no longer speaks. Dad is asleep on the chair.'));
      if (!f.stayed) {
        await g.plate(tr('Jack comes in with his bag, straight from the station, and sits down.'));
        if (f.talk === 'forty') await g.say('jack_grown', 'Forty floors, Mom', { how: 'quietly, hoping' });
        else await g.say('jack_grown', 'Mom. They took me', { how: 'quietly, hoping' });
        await g.plate(tr('No answer. On the nightstand, where the tiger stood, a paper house folded out of the hospital menu — tall, its windows drawn in pen, row above row; not moving.'));
        g.mood('dad', 'tired');
        await g.say('dad', 'She folded it on Wednesday. After that she couldn’t', { how: 'just woken, hoarse' });
        if (f.talk === 'forty') await g.say('dad', 'Forty. I counted', { how: 'hoarse, short' });
        g.kept(tr('“I’ll be back on Friday” — he came back; she no longer spoke.'));
      } else {
        await g.plate(tr('Since that night she never woke up clear. For three days Jack hardly left the room — only on the first morning did he take Laohu home. He wears the same shirt; the suit bag hangs straight on the back of the chair.'));
        g.kept(tr('“Take Laohu home” — he did, on the first morning.'));
      }
      const { missed } = await g.play(hand);
      if (missed) await g.plate(tr('Dad’s palm comes down over both their hands, and they let go together.'));
      g.set('lamp', 0.3);
      await g.plate(tr('Silence. The lamp.'));
    },
  ],
};
