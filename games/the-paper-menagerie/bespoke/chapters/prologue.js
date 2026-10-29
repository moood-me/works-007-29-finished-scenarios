// Prologue. “Laohu” (scenario §5, П.1–П.4). The evening after Christmas: a five-year-old crying over a broken robot,
// his mother folding a tiger out of wrapping paper and breathing it alive; “you don't unfold a living one”; her song,
// her animals; at night — “Where is she?” — “Far away. I'll tell you later.” No choice: the map does not come after it.
// Jack is five here; the kitchen's Jack is the world's only boy (ten) — the plate says his age.
// Reads: nothing. Leaves: nothing but what the player was told.
import { KITCHEN, ROOM } from '../story.js';
import { palms } from '../minigames/all.js';

export default {
  number: '', title: tr('Laohu'),
  titles: ['The Robot', 'Palms', 'The Menagerie', 'Later'],
  choices: [],
  steps: [
    // П.1: the robot; she folds without looking at her hands
    async g => {
      await g.scene('kitchen', { here: ['mom', 'jack', 'dad'], moods: { jack: 'sad', mom: 'neutral', dad: 'sad' }, keys: KITCHEN.evening });
      g.title(tr('The Paper Menagerie'));
      await g.plate(tr('The evening after Christmas. Torn wrapping paper all over the table. Jack — he is five — is crying over his wind-up robot: one of its legs has snapped off.'));
      await g.say('dad', 'We’ll buy another one tomorrow', { how: 'squatting by the boy, helpless' });
      await g.plate(tr('It doesn’t help. Mom takes a sheet of wrapping paper from the table — red, with gold stars — and folds it in silence: quickly, without looking at her hands.'));
    },
    // П.2: М1 «Palms»
    async g => {
      await g.scene('kitchen', { here: ['mom', 'jack', 'dad'], moods: { jack: 'sad', mom: 'smile', dad: 'neutral' }, keys: KITCHEN.evening }, { cut: true });
      await g.plate(tr('She puts a paper tiger into Jack’s palms.'));
      await g.say('mom', '拿着。别出声。', { sub: tr('Hold it. Quiet.'), how: 'softly, in Mandarin Chinese, to a crying child' });
      const { missed } = await g.play(palms);
      if (missed) await g.plate(tr('The tiger rolls off his palms onto the table — and gets up on its paws all the same.'));
      await g.plate(tr('She breathes on it. The tiger grows warm, its sides rise; it stands up on its paws and growls — a rustle of paper.'));
      g.mood('jack', 'laugh');
      await g.plate(tr('Jack laughs through his tears.'));
    },
    // П.3: “Laohu”; you don't unfold a living one; the song; the menagerie
    async g => {
      await g.scene('kitchen', { here: ['mom', 'jack', 'dad'], moods: { jack: 'smile', mom: 'smile', dad: 'smile' }, keys: KITCHEN.evening }, { cut: true });
      await g.say('mom', '老虎。', { sub: tr('Laohu. Tiger.') });
      await g.say('jack', '老虎！', { sub: tr('Laohu!'), how: 'delighted, in Mandarin Chinese' });
      await g.plate(tr('The tiger pounces on the scraps of paper.'));
      await g.say('dad', 'How she does it — don’t ask. I don’t know either', { how: 'getting up, half amused' });
      g.mood('jack', 'thinking');
      await g.plate(tr('Jack pulls the tiger by a fold on its side — to see what is inside. Mom gently takes his fingers.'));
      await g.say('mom', '不行。活的不能拆开。', { sub: tr('No. You don’t unfold a living one.') });
      await g.say('jack', '拆了会怎么样？', { sub: tr('Or what?') });
      await g.say('mom', '拆了就变成纸了。', { sub: tr('Or it turns into paper.') });
      g.know(tr('You don’t unfold a living one: it turns into paper.'));
      await g.say('mom', '两只老虎，两只老虎，跑得快，跑得快……', { sub: tr('Two tigers, two tigers, running fast, running fast…'), how: 'singing under her breath, the children’s song to the tune of Frère Jacques' });
      await g.plate(tr('She sings “Two Tigers” under her breath — Laohu walks across the table in time.'));
      await g.plate(tr('And then, without words: goats on the window sill, a deer, a buffalo in a flowerpot, a shark swimming in the sink. Dad snores in his armchair — Laohu growls at the snoring.'));
    },
    // П.4: night; “Where is she?” — “Far away. I'll tell you later.”
    async g => {
      await g.scene('room', { here: ['mom', 'jack'], moods: { jack: 'tired', mom: 'smile' }, keys: ROOM.bedtime });
      await g.plate(tr('Night. Jack is falling asleep, Laohu under his hand. Mom sits beside him.'));
      await g.say('jack', '妈妈，谁教你的？', { sub: tr('Mom, who taught you?'), how: 'sleepily, in Mandarin Chinese' });
      await g.say('mom', '我妈妈。', { sub: tr('My mom.') });
      await g.say('jack', '她在哪儿？', { sub: tr('Where is she?'), how: 'sleepily, in Mandarin Chinese' });
      await g.plate(tr('Mom straightens his blanket.'));
      g.mood('mom', 'neutral');
      await g.say('mom', '很远。以后再告诉你。', { sub: tr('Far away. I’ll tell you later.'), how: 'lightly, as if it were nothing; under it, “far away” means “nowhere”' });
      g.promise(tr('Mom: “I’ll tell you later” — where her mother is.'));
    },
  ],
};
