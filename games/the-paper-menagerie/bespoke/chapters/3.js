// 3. “Qingming” (scenario §5, 3.1–3.6, and the finale, §9). The next spring, the first Qingming without her; the house
// sold, the new people move in tomorrow. Boxes and the same crackle of tape; the animals wake for the day, and Laohu
// unfolds himself from her crooked fold into a sheet of her writing; a stranger on the square reads it aloud — whose
// voice reads it is the language at home's; her last strip of tape; ⚑ what to tell Dad; the character 爱 under hers;
// ⚑ Laohu (hinge 2) — fold him, keep the letter, or give him to her in the fire: the finale, «The Tiger», «The Letter»
// or «The Smoke», its form by the train (2.3), its details by the language, the menagerie and the marks — Dad, the ear,
// the seam, the sign.
// Jack's room a year on (its moment `packed`) and the attic are their own scenes.
// Stand-ins (story.js PLACES): the kitchen a spring later and the yard at dusk — the ward (Jack
// grown and Dad grey are the cast's looks of another year, which a game cannot name on the kitchen's and the yard's
// people: game.md, asks of the world), Mom not there; Mark grown is a voice. The square is its own scene: the woman on
// the bench, the guide at the coach, the tourists; the letter goes from Jack's hands to hers and back (the cast's part
// `letter`).
// Reads: everything. Leaves: choices.father, choices.laohu; marks.father, marks.crooked.
import { GROWN, MENAGERIE, WARD, ENDINGS, facts } from '../story.js';
import { read } from '../letter.js';
import { flame, fold, peel, sign, smooth, stroke } from '../minigames/all.js';

const label = id => ENDINGS.find(e => e.id === id).label;
// the square's people (С6): Jack, the woman on the bench, the guide at the coach, three of the group
const SQUARE = ['jack', 'translator', 'guide', 'tourist_cap', 'tourist_hat', 'tourist_coat'];

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
    // 3.1: the boxes; the day circled on the calendar; the suit or “you eating there?”
    async g => {
      const f = facts(g.state);
      await g.scene('house', { here: ['jack', 'dad'], moods: { jack: 'neutral', dad: 'tired' }, keys: { ...WARD.evening, ...GROWN } });
      g.title(tr('Qingming'));
      await g.plate(tr('The next spring, the first Qingming without her. The house is sold. Jack is helping Dad clear it out: an empty kitchen, boxes. Dad seals a box with tape — the same crackle.'));
      await g.say('dad', 'The new people move in tomorrow. I told them — not before. Today… she always burned paper on this day. I circled it on the calendar', { how: 'rambling a little, then short' });
      if (f.lang > 0) await g.say('jack_grown', 'Qingming', { how: 'quietly' });
      else {
        await g.say('jack_grown', 'Her day, with the paper… what’s it called, in hers?', { how: 'quietly, searching' });
        await g.say('dad', 'Don’t remember. You used to know');
      }
      if (f.stayed) {
        await g.plate(tr('Dad takes the suit bag down off a nail: the suit, the tag on the sleeve never cut off.'));
        await g.say('dad', 'Yours. Been hanging here… well, I didn’t know where to put it', { how: 'awkward' });
        await g.plate(tr('Jack takes it; he doesn’t look at the tag.'));
      } else {
        if (f.talk === 'forty') await g.say('dad', 'Forty floors, then. You eating there at least?', { how: 'trying to sound casual' });
        else await g.say('dad', 'You eating there at least?', { how: 'trying to sound casual' });
        await g.say('jack_grown', 'Fine', { how: 'short' });
      }
      if (f.zoo === 2) {
        await g.plate(tr('On the bare window sill, paper cranes and frogs — the only things not packed.'));
        await g.say('dad', 'Didn’t touch these. Didn’t know how', { how: 'quietly' });
      }
    },
    // 3.2: the rustle; the animals wake; М6 «Stroking»; Laohu unfolds himself, from her crooked fold
    async g => {
      const f = facts(g.state);
      if (f.zoo === 0) {
        await g.scene('attic', { here: ['jack'], moods: { jack: 'surprised' } });
        await g.plate(tr('A rustle — from the attic. In the dusty light the shoebox trembles. Jack lifts it down through the hatch and sits on the floor of his room with it; the lid rises — out come the dusty goats, the deer, the buffalo, and Laohu, in his tape.'));
        await g.scene('bare', { here: ['jack'], moods: { jack: 'surprised' }, keys: { moment: 'packed', menagerie: MENAGERIE[f.zoo], laohu_ear: f.ear, laohu_seam: f.seam } });
      } else if (f.zoo === 1) {
        await g.scene('bare', { here: ['jack'], moods: { jack: 'surprised' }, keys: { moment: 'packed', menagerie: MENAGERIE[f.zoo], laohu_ear: f.ear, laohu_seam: f.seam } });
        await g.plate(tr('A rustle. On the empty shelf Laohu stretches; overhead, in the attic, the box with the others rustles.'));
      } else {
        await g.scene('bare', { here: ['jack', 'dad'], moods: { jack: 'surprised', dad: 'surprised' }, keys: { moment: 'packed', menagerie: MENAGERIE[f.zoo], laohu_ear: f.ear, laohu_seam: f.seam } });
        await g.plate(tr('A rustle. Laohu stretches on the shelf — alone; the others are downstairs, in the kitchen: from there, a rustle; the cranes fly from the sill onto the curtain, the frogs slap across the floor.'));
        await g.say('dad', 'Jack!..', { how: 'calling from downstairs, startled' });
        await g.plate(tr('Dad in the doorway with a paper frog on his palm — silent.'));
      }
      g.know(tr('Today is Qingming: the dead come home, and her animals wake — for one day.'));
      const looks = f.ear && f.seam ? tr('Laohu — one-eared, limping worse — comes to Jack and rubs against him.')
        : f.ear ? tr('Laohu — one-eared — comes to Jack and rubs against him.')
          : f.seam ? tr('Laohu — limping worse — comes to Jack and rubs against him.') : tr('Laohu comes to Jack and rubs against him.');
      await g.plate(looks);
      const { missed } = await g.play(stroke);
      if (missed) await g.plate(tr('He grumbles — and lies down all the same.'));
      await g.plate(tr('He purrs. Then he lies down in Jack’s lap — and unfolds himself: first the fold at the tail comes apart — the crooked, extra one Laohu never had — then the others, one by one, carefully, as she folded them, only backwards.'));
      g.know(tr('He unfolded himself — from her crooked fold, the one “for once only”.'));
      g.mood('jack', 'sad');
      await g.plate(tr('A flat sheet, warm, trembling along its folds. On the back of the wrapping paper — columns of Chinese characters. Across it, the old yellow tape; the lines go round it. Lower down, a fresh tear: the edges overlap right across a line, a clear strip of tape over them — a word gone under the overlap.'));
      if (f.lang === 2) await g.plate(tr('Jack recognizes his name — “Jieke” — and at the bottom, the sign from his palm: 爱.'));
      else if (f.lang === 1) await g.plate(tr('Jack recognizes only 爱 — at the bottom.'));
      else await g.plate(tr('Only her handwriting. The sign at the bottom seems familiar.'));
      await g.scene('house', { here: ['jack', 'dad'], moods: { jack: 'neutral', dad: 'sad' }, keys: { ...WARD.evening, ...GROWN } });
      await g.plate(tr('Jack walks through the kitchen with the sheet.'));
      await g.say('dad', 'That’s her hand', { how: 'very quietly' });
      await g.say('jack_grown', 'I’ll find someone to read it');
    },
    // 3.3: the square; the woman; the letter's first half
    async g => {
      const f = facts(g.state);
      await g.scene('square', { here: SQUARE, moods: { jack: 'neutral', translator: 'neutral' }, keys: { jack_with: ['letter'], jack_look: 'translator', translator_with: [], translator_look: 'jack' } });
      await g.plate(tr('The square. A tour bus; the guide is calling. A woman on the bench looks at her watch.'));
      if (f.lang === 2) {
        await g.say('jack_grown', '阿姨，您能帮我念一下吗？', { sub: tr('Auntie, could you read this for me?'), how: 'in Mandarin Chinese, plain home Chinese, a little shy' });
        await g.say('translator', '你说话像乡下人。像我奶奶。', { sub: tr('You talk like a villager. Like my grandmother.'), how: 'surprised, warming at once' });
      } else if (f.lang === 1) {
        await g.say('jack_grown', 'Could you read this for me? Read it as it is — in Chinese. I’ll understand', { how: 'a little shy' });
      } else {
        await g.say('jack_grown', 'Could you read this for me? It’s in Chinese', { how: 'a little shy' });
      }
      g.set('jack_with', []);
      g.set('translator_with', ['letter']);
      g.set('translator_look', 'translator#letter');
      g.set('jack_look', 'translator#letter');
      g.mood('translator', 'surprised');
      await g.plate(tr('She takes the sheet — and raises her eyebrows.'));
      if (f.lang === 2) await g.say('translator', '这么暖和。', { sub: tr('So warm.'), how: 'surprised' });
      else await g.say('translator', 'So warm', { how: 'surprised' });
      await g.plate(tr('The sheet trembles on her knees; she presses it down with her palm.'));
      if (f.lang === 2) await g.say('translator', '风吹的。', { sub: tr('The wind.'), how: 'brushing it off' });
      else await g.say('translator', 'The wind', { how: 'brushing it off' });
      await g.plate(tr('She reads, not letting go of it.'));
      // (whose voice: 2 — the woman's first, then hers; 1 — the woman's, the last line hers; 0 — the woman translating)
      const who = f.lang > 0 ? 'translator' : 'en';
      await read(g, who, 'p0');
      await read(g, who, 'p1');
      if (f.lang === 2) await g.plate(tr('After a sentence the woman’s voice goes — and the letter is read by Mom’s voice.'));
      const on = f.lang === 2 ? 'mom' : who;
      await read(g, on, f.asked ? 'p2asked' : 'p2silent');
      await read(g, on, 'p3');
      if (f.talk === 'grandma') {
        await g.plate(tr('At the words about the animals out of newspapers, Jack raises his head. The woman stops and looks at him. He nods.'));
        if (f.lang === 2) await g.say('jack_grown', '接着念。', { sub: tr('Go on.'), how: 'in Mandarin Chinese, hoarse' });
        else await g.say('jack_grown', 'Go on', { how: 'hoarse' });
        g.kept(tr('“I’ll finish later” — she finished it here.'));
      }
      await read(g, on, 'p4');
      await read(g, on, 'p5');
      await read(g, on, 'p6');
    },
    // 3.3: the tear; М7 «The Tape, Her Last»; the letter's second half; the woman goes
    async g => {
      const f = facts(g.state);
      await g.scene('square', { here: SQUARE, moods: { jack: 'sad', translator: 'thinking' } }, { cut: true });
      if (f.lang === 2) await g.say('translator', '这儿撕破了，边叠在一起了。字在底下。', { sub: tr('It’s torn here, the edges overlap. The word is under them.'), how: 'peering, practical' });
      else await g.say('translator', 'It’s torn here, the edges overlap. The word is under them', { how: 'peering, practical' });
      const { missed } = await g.play(peel);
      if (missed) {
        await g.plate(tr('The edge of the tear stays folded under.'));
        if (f.lang === 2) await g.say('translator', '看不清。大概是——“一个人”。', { sub: tr('I can’t see. Probably — “alone”.'), how: 'squinting, gently' });
        else await g.say('translator', 'I can’t see. Probably — “alone”', { how: 'squinting, gently' });
      } else await g.plate(tr('The edges come apart and lie side by side; the word, a little split along the tear.'));
      const who = f.lang === 2 ? 'mom' : f.lang === 1 ? 'translator' : 'en';
      await read(g, who, 'p7');
      await read(g, who, `p8${f.yard}`);
      await read(g, who, `p9${f.box}`);
      await read(g, who, 'p10');
      if (f.lang === 1) await g.plate(tr('The last line — in Mom’s voice.'));
      if (f.lang > 0) await read(g, 'mom', 'p11');
      else {
        await g.say('translator', 'And at the bottom — “Mom”. And a sign before it…', { how: 'translating aloud, slowly' });
        await g.plate(tr('The last word — in Mom’s voice.'));
        await g.say('mom', '爱。', { at: 'narrator', how: 'quietly, warmly' });
      }
      g.know(tr('Now you know her life: Sigulu, the famine, Hong Kong, the iron, the letters with the apple tree — and “alone”.'));
      if (f.asked) g.kept(tr('“I’ll tell you later” — “Here is later.”'));
      else g.kept(tr('“I’ll tell you later” — she told it in the letter.'));
      await g.plate(tr('Out of habit the woman starts to fold the sheet — Jack takes it from her, flat.'));
      g.set('translator_with', []);
      g.set('jack_with', ['letter']);
      g.set('jack_look', 'jack#letter');
      if (f.lang === 2) await g.say('jack_grown', '不用。我就这样拿着。', { sub: tr('Don’t. I’ll keep it like this.'), how: 'in Mandarin Chinese, gently' });
      else await g.say('jack_grown', 'Don’t. I’ll keep it like this', { how: 'gently' });
      await g.say('guide', '周阿姨！上车了！', { sub: f.lang > 0 ? tr('Auntie Zhou! The bus!') : null, how: 'shouting across the square in Mandarin Chinese' });
      g.here('translator', false);
      await g.plate(tr('She goes to the bus without looking back.'));
    },
    // 3.4: Mark across the street; the box of the woken animals; ⚑ what does she write?
    async g => {
      const f = facts(g.state);
      await g.scene('porch', { here: ['jack', 'dad'], moods: { jack: 'neutral', dad: 'tired' }, keys: { ...WARD.evening, ...GROWN } });
      await g.plate(tr('Dusk. Across the street, by Mark’s house, a car; grown-up Mark is carrying out a bag.'));
      if (f.yard === 'english') {
        await g.plate(tr('Mark waves and crosses the street.'));
        await g.say('mark_grown', 'Heard. Sorry, man. She brought us buns that time, remember?', { how: 'awkward, sincere' });
        await g.plate(tr('He pats Jack on the shoulder and goes back to the car.'));
      } else if (f.yard === 'chinese') {
        await g.plate(tr('Mark sees Jack — and looks past him. He gets into the car.'));
      } else {
        await g.say('mark_grown', 'Hey', { how: 'across the street, a nod' });
        await g.say('jack_grown', 'Hey');
      }
      if (f.zoo < 2) await g.plate(tr('Dad on the porch step with the last box. Beside it, the shoebox of animals — during the day Jack gathered the woken ones into it: the goats, the deer, the buffalo, dusty, from the attic.'));
      else await g.plate(tr('Dad on the porch step with the last box. Beside it, the shoebox of animals — during the day Jack gathered the woken ones into it: it is full — cranes, frogs, the shark, new ones he has never seen; the lid won’t close.'));
      if (!f.stayed) await g.plate(tr('On top, the paper house from the hospital. It did not wake: she never breathed on it.'));
      await g.say('dad', 'What does she write?', { how: 'for once asking, not looking at the sheet' });
      const father = await g.choose('father', { 'jack#chest': [
        { id: 'all', label: tr('Tell him everything') },
        { id: 'apple', label: tr('“About the village. And about the apple tree”') },
        { id: 'later', label: tr('“Later, Dad”') },
      ] });
      if (father === 'all') {
        await g.plate(tr('Jack tells him everything: the scar, the iron, “not at once”. Dad sits for a long time.'));
        await g.say('dad', 'The scar… I thought — from the stove', { how: 'very quietly, stunned' });
        g.here('dad', false);
        await g.plate(tr('He gets up, goes to the apple tree and stands with his palm on its bark.'));
      } else if (father === 'apple') {
        await g.say('jack_grown', 'About the village. And about the apple tree');
        g.mood('dad', 'smile');
        await g.say('dad', 'About the apple tree, then. I planted it in the spring, before the first letter. So I wouldn’t be lying', { how: 'smiling, short' });
      } else {
        await g.say('jack_grown', 'Later, Dad');
        await g.say('dad', 'Later. Okay', { how: 'nodding, as he nodded to her all his life' });
        g.here('dad', false);
        await g.plate(tr('He carries the box into the house.'));
      }
      g.apply('father');
    },
    // 3.5: М8 «The Character»
    async g => {
      const f = facts(g.state);
      await g.scene('porch', { here: ['jack'], moods: { jack: 'thinking' }, keys: { ...WARD.evening, ...GROWN } });
      await g.plate(f.lang === 2 ? tr('Jack sits down on the step, takes Dad’s pen and writes his own sign under hers — 爱. From memory.') : tr('Jack sits down on the step, takes Dad’s pen and writes his own sign under hers — 爱, copying hers, stroke by stroke.'));
      const { missed } = await g.play(sign);
      if (missed) g.mark('crooked', true, tr('His 爱 came out crooked — and it will stay so.'));
      await g.plate(tr('One sign — ten seconds. On the sheet there are dozens of columns.'));
    },
    // 3.6: ⚑ Laohu (hinge 2) — sunset; the animals fall asleep; the sheet still remembers the tiger's folds
    async g => {
      await g.scene('porch', { here: ['jack'], moods: { jack: 'sad' }, keys: { ...WARD.night, ...GROWN } });
      await g.plate(tr('The sun is setting behind the apple tree. The car at the gate is packed; the house is empty. In the shoebox on the step the animals move slower and slower; a goat lies down — and it is paper now, then the deer.'));
      await g.plate(tr('The sheet in Jack’s hands still trembles along the tiger’s folds — it remembers: under his finger it lies along them by itself, as if ready to fold. He runs a finger along the crooked fold at the tail, her “for once only” — it lies like a dead line and doesn’t stir. Under the apple tree — her bucket, rusty.'));
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
    // the finale (scenario §9), part one: its image — the tiger, the letter, the smoke
    async g => {
      const f = facts(g.state);
      await g.scene('porch', { here: ['jack', 'dad'], moods: { jack: 'sad', dad: 'tired' }, keys: { ...WARD.night, ...GROWN } });
      g.title(label(f.ending));
      await g.plate(tr('The yard, dusk, the first Qingming without her; the house is sold. The animals in the shoebox on the step have fallen asleep. Jack will take the box with him.'));
      if (f.ending === 'tiger') {
        const { missed } = await g.play(fold);
        if (missed) await g.plate(tr('The folds find themselves: the paper folds on its own.'));
        await g.plate(tr('The folds along the old lines — the paper remembers them; the crooked fold at the tail it doesn’t find, and the tiger folds without it. Her lines go inside; last of all, her 爱 — and his under it.'));
        if (f.crooked) await g.plate(tr('His — crooked.'));
        await g.plate(tr('The sheet becomes a tiger: tape across his back.'));
        if (f.ear) await g.plate(tr('One ear.'));
        if (f.seam) await g.plate(tr('He limps.'));
        g.mood('jack', 'smile');
        await g.plate(tr('Laohu stands up on the step, shakes himself and purrs. Jack takes him into the crook of his arm.'));
        if (f.lang === 2) await g.say('jack_grown', '两只老虎，两只老虎，跑得快……', { sub: tr('Two tigers, two tigers, running fast…'), how: 'humming the children’s song softly, with the words, in Mandarin Chinese' });
        else if (f.lang === 1) await g.plate(tr('He hums the first line of “Two Tigers” — without the words.'));
        else await g.plate(tr('He just carries him.'));
      } else if (f.ending === 'letter') {
        await g.plate(tr('The porch step, the lamp over the door.'));
        const { missed } = await g.play(smooth);
        if (missed) await g.plate(tr('The sheet lies flat by itself.'));
        await g.plate(tr('It is getting dark. The sheet trembles along its folds one last time — and lies flat; the folds are visible and move no more.'));
        await g.plate(f.crooked ? tr('At the bottom — her 爱, and his, crooked.') : tr('At the bottom — her 爱, and his, even.'));
      } else {
        await g.plate(tr('Her bucket under the apple tree; the fire.'));
        const { missed } = await g.play(flame);
        if (missed) await g.plate(tr('The flame takes the sheet by itself.'));
        await g.plate(tr('The sheet burns; the smoke goes up through the apple tree — and for a moment something striped seems to pass through the smoke. And is gone.'));
        if (f.lang === 2) await g.say('jack_grown', '妈妈，老虎——给你。', { sub: tr('Mom, Laohu — for you.'), how: 'into the fire, in Mandarin Chinese, quietly' });
        else if (f.lang === 1) {
          await g.say('jack_grown', 'Mom, Laohu — for you', { how: 'into the fire, quietly' });
          await g.say('jack_grown', '爱。', { sub: tr('Ài.'), how: 'into the fire, the one word in Mandarin Chinese, barely aloud' });
        } else await g.say('jack_grown', 'Mom, Laohu — for you', { how: 'into the fire, quietly' });
      }
    },
    // the finale, part two: Dad, by the mark; the line of the train; the last line
    async g => {
      const f = facts(g.state);
      await g.scene('porch', { here: ['jack', 'dad'], moods: { jack: 'sad', dad: 'sad' }, keys: { ...WARD.dark, ...GROWN } }, { cut: true });
      if (f.ending === 'tiger') {
        if (f.father === 'all') {
          await g.plate(tr('Dad stands by the apple tree, his palm on the bark, as during the day; he turns to the tiger not at once.'));
          await g.say('dad', 'Hello, beast', { how: 'softly, hoarse' });
          g.here('dad', false);
          await g.plate(tr('He stays by the apple tree; Jack walks to the gate alone.'));
        } else if (f.father === 'apple') {
          g.mood('dad', 'smile');
          await g.plate(tr('Dad waves from the porch.'));
        } else {
          await g.plate(tr('Dad locks the door and asks about nothing; at the gate they shake hands.'));
        }
      } else if (f.ending === 'letter') {
        if (f.father === 'all') {
          await g.plate(tr('Dad sits down beside him and takes out his phrasebook, the bookmark at page twelve.'));
          await g.say('dad', 'Let’s do it together. I’m on twelve', { how: 'shy, determined' });
        } else if (f.father === 'apple') {
          await g.plate(tr('Dad gives him the phrasebook.'));
          await g.say('dad', 'Take it. No use to me now', { how: 'gruff, gentle' });
        } else {
          g.here('dad', false);
          await g.plate(tr('Dad carries the last box to the car and waits there; Jack is on the step alone.'));
        }
      } else if (f.father === 'all') {
        await g.plate(tr('Dad stands beside him, his hand on Jack’s back — as his hand was on her back that evening by the bucket, long ago.'));
      } else if (f.father === 'apple') {
        await g.say('dad', 'That’s how she did it', { how: 'from the porch, quietly' });
      } else {
        g.here('dad', false);
        await g.plate(tr('Dad opens a window and looks at the fire.'));
        await g.say('dad', 'That you… well', { at: 'narrator', how: 'from the window, unsure' });
        await g.say('jack_grown', 'Mom’s');
        await g.plate(tr('Dad nods and closes the window.'));
      }
      if (!f.stayed) await g.say('jack_grown', 'The last thing she said to me herself: “Go”. And I went. Here — I’m back', { how: 'grown-up, very quiet' });
      else if (f.lang > 0) await g.say('jack_grown', 'The last thing she said to me herself: “Don’t be alone”', { how: 'grown-up, very quiet' });
      else await g.say('jack_grown', 'The last thing she said to me herself was one word. I knew it', { how: 'grown-up, very quiet' });
      if (f.ending === 'tiger') await g.say('jack_grown', 'Once a year, at Qingming, he wakes up. I don’t unfold him', { how: 'grown-up, very quiet' });
      else if (f.ending === 'smoke') await g.say('jack_grown', 'He never woke for me again. At Qingming I fold the paper myself', { how: 'grown-up, very quiet' });
      else if (f.lang === 2) await g.say('jack_grown', 'Reading her hand took me two years. Aloud — in her accent', { how: 'grown-up, very quiet' });
      else if (f.lang === 1) await g.say('jack_grown', 'A year later I read the first line', { how: 'grown-up, very quiet' });
      else await g.say('jack_grown', 'A year later I recognized the second sign in it — the first I learned myself, after her 爱. It was “I”', { how: 'grown-up, very quiet' });
    },
  ],
};
