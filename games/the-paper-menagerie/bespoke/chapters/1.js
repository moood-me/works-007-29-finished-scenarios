// 1. “Trash” (scenario §5, 1.1–1.7). Five years later, spring, Sunday, Qingming; Dad on his shift. The ingots for the
// dead, Jack's with his name on it; Mark's knight, the puddle, Laohu torn — “cheap Chinese trash”; ⚑ the yard: in
// which language Jack answers her in front of Mark (the language at home, set once); the fire in the bucket; the tape
// and 爱 on his palm; ⚑ the question — “Did Dad buy you?”; ⚑ the box (the menagerie, set once); the gate on Monday
// morning.
// Stand-ins (story.js PLACES): the bus stop (1.7) is behind the yard's eye: the label says it.
// Reads: the miss marks; the yard. Leaves: choices.yard, choices.asked, choices.box; scales.language,
// scales.menagerie; marks.yard, marks.asked, marks.ear, marks.seam, marks.ingot.
import { DUSK, EMPTY, KITCHEN, MENAGERIE, ROOM, UP, facts } from '../story.js';
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
    // 1.1: the ingots; М2 «The Fold»; “Jack! Come out!”
    async g => {
      await g.scene('kitchen', { here: ['mom', 'jack'], moods: { mom: 'smile', jack: 'neutral' }, keys: KITCHEN.morning });
      g.title(tr('Trash'));
      await g.plate(tr('Five years later. Spring, a Sunday morning; Dad is on his shift. Mom is folding little ingots out of yellow paper — yuanbao. Jack, ten now, sits across from her.'));
      await g.say('mom', '今天是清明。死去的人回家。我的家人很远，我给他们寄。烧了的，他们在那边就有了。', { sub: tr('Today is Qingming. The dead come home. Mine are far away — I send them things. What burns, they will have there.') });
      g.know(tr('Qingming: the dead come home; what burns, they will have there.'));
      const { missed } = await g.play(ingot);
      if (missed) {
        g.mark('ingot', 'crooked', null);
        await g.plate(tr('The ingot comes out crooked.'));
        await g.say('mom', '给外婆，这样也很好。', { sub: tr('For Grandma, this one is good enough.'), how: 'laughing' });
      }
      await g.plate(tr('Jack writes his name on his ingot in English letters.'));
      await g.say('jack', '让他们知道是谁送的。', { sub: tr('So they know who it’s from.'), how: 'in Mandarin Chinese, a little proud' });
      g.mood('mom', 'laugh');
      await g.plate(tr('Mom laughs. Laohu bats at the paper with his paw.'));
      await g.say('mark', 'Jack! Come out!', { how: 'shouting from the street' });
      g.mood('mom', 'smile');
      await g.say('mom', '去吧。晚上一起烧。', { sub: tr('Go. We’ll burn them tonight.') });
      g.promise(tr('Mom: “We’ll burn them tonight.”'));
    },
    // 1.2: the knight; the puddle; Laohu torn; М3 «The Scraps»
    async g => {
      await g.scene('yard', { here: ['jack', 'mark'], moods: { jack: 'smile', mark: 'smile' }, keys: { ...EMPTY, scraps: false } });
      await g.say('mark', 'My dad sent me this', { how: 'showing off, holding it up' });
      await g.plate(tr('Mark’s plastic knight; its sword lights up. Laohu has followed Jack out onto the porch. He sees the knight, pounces and knocks it off the step into a puddle. The sword goes out.'));
      g.mood('mark', 'angry');
      g.mood('jack', 'afraid');
      await g.plate(tr('Mark picks up the knight, water dripping off it. He grabs Laohu and tears him — once, twice.'));
      await g.say('mark', 'It’s trash. Cheap Chinese trash', { how: 'furious, near tears' });
      g.set('scraps', true);
      await g.plate(tr('He throws the scraps down — just paper, they don’t move. The wind carries them across the grass. Jack squats down and catches them in the grass.'));
      g.know(tr('Torn, Laohu is just paper: he doesn’t move.'));
      g.mood('jack', 'sad');
      const { missed } = await g.play(scraps);
      if (missed) {
        await g.plate(tr('The ear is carried away by the wind, across the street, into the drain by the road.'));
        g.mark('ear', true, tr('Laohu has lost an ear — he will stay one-eared.'));
      }
    },
    // 1.3: ⚑ the yard (eight seconds; nothing chosen — run away)
    async g => {
      await g.scene('yard', { here: ['mom', 'jack', 'mark'], moods: { mom: 'neutral', jack: 'sad', mark: 'angry' } });
      await g.plate(tr('Mom comes out onto the porch with a plate of buns — she was bringing them to the boys. She sees the scraps in her son’s hands. She comes down, squats beside him and holds out her hand.'));
      await g.say('mom', '给我。我来修。叫你的朋友也来吃。', { sub: tr('Give them to me. I’ll fix it. Call your friend, let him eat too.') });
      await g.say('mark', 'What’s she jabbering? At school they say you talk like that with her too. My mom says your dad ordered her from a catalogue. Like a vacuum cleaner', { how: 'loud, mean, repeating the grown-ups' });
      await g.plate(tr('He looks at Jack.'));
      await g.say('mark', 'Tell her to talk normal');
      await g.plate(tr('Mom’s face, close. Her hand held out.'));
      const yard = await g.choose('yard', { 'jack#chest': [
        { id: 'english', label: tr('“In English, Mom!”') },
        { id: 'chinese', label: tr('Answer her in Chinese: “Fix it, Mom”') },
        { id: 'run', label: tr('Run away') },
      ] }, { within: 8000, otherwise: 'run' });
      if (yard === 'english') {
        await g.say('jack', 'In English, Mom!', { how: 'loud, so that Mark hears, ashamed and angry' });
        g.mood('mom', 'sad');
        await g.plate(tr('Mom freezes. Then, in English, slowly:'));
        await g.say('mom', 'Okay. Eat, please', { how: 'in English, slowly, carefully, quietly' });
        await g.plate(tr('She puts the plate on the step and keeps her palm open; Jack, not looking, puts the scraps into it.'));
        g.set('jack_with', []);
        g.mood('mark', 'neutral');
        await g.say('mark', 'Come over to mine. I’ve got a console', { how: 'after a pause, gruffly friendly' });
        g.here('jack', false);
        g.here('mark', false);
        await g.plate(tr('Jack goes with him. Mom on the step alone: the plate beside her, the scraps in her palm.'));
      } else if (yard === 'chinese') {
        await g.say('jack', '妈妈，你修好它。', { sub: tr('Fix it, Mom.'), how: 'in Mandarin Chinese, quietly but clearly' });
        await g.plate(tr('He gives the scraps into her hand.'));
        g.set('jack_with', []);
        await g.plate(tr('Mark mimics him — drags out the vowels, pulls faces.'));
        await g.say('mark', 'Fine, sit there with your trash', { how: 'hurt, sneering' });
        g.here('mark', false);
        await g.plate(tr('He goes, the knight dripping. Mom sits down on the step next to Jack and holds out a bun to him.'));
        g.mood('mom', 'smile');
      } else {
        g.here('jack', false);
        await g.plate(tr('Jack runs into the house with the scraps in his fist; the door bangs.'));
        await g.say('mark', 'Psycho');
        g.here('mark', false);
        g.mood('mom', 'sad');
        await g.plate(tr('He goes. Mom stands with the plate. Then puts it down on the step.'));
      }
      g.apply('yard');
    },
    // 1.4: dusk; the fire in the bucket; his ingot burns on every branch; Dad
    async g => {
      const f = facts(g.state);
      if (f.yard === 'english') {
        await g.scene('dusk', { here: ['mom', 'jack'], moods: { mom: 'neutral', jack: 'neutral' }, keys: DUSK });
        await g.plate(tr('Dusk. Mom by the bucket under the apple tree, dropping the ingots into the fire one by one. Jack comes back from Mark’s through the gate.'));
        await g.say('mom', 'Dinner soon', { how: 'in English, slowly' });
        await g.plate(tr('He walks past. At the porch he turns: in the fire — his ingot, with his name.'));
      } else if (f.yard === 'chinese') {
        await g.scene('dusk', { here: ['mom', 'jack'], moods: { mom: 'smile', jack: 'neutral' }, keys: DUSK });
        await g.plate(tr('Dusk. Jack beside Mom at the bucket under the apple tree; they drop the ingots into the fire.'));
        await g.say('mom', '外公外婆看得见你。跟他们说句话。', { sub: tr('Grandma and Grandpa can see you. Say something to them.') });
        await g.say('jack', '你们好。', { sub: tr('Hello.'), how: 'into the fire, awkwardly, in Mandarin Chinese' });
        await g.plate(tr('He drops his own ingot into the fire himself.'));
      } else {
        await g.scene('dusk', { here: ['mom', 'jack'], moods: { mom: 'sad', jack: 'sad' }, keys: { ...DUSK, ...UP } });
        await g.plate(tr('Dusk. Mom by the bucket under the apple tree, dropping the ingots into the fire one by one. Jack is in the window of his room, the scraps on the sill.'));
        await g.plate(tr('Mom raises her head to his window. She holds the ingot with his name — and drops it into the fire.'));
      }
      g.kept(tr('“We’ll burn them tonight” — his ingot burned with hers.'));
      g.here('dad', true);
      await g.plate(tr('Dad comes home and stands beside her, his hand on her back; they talk quietly, too low to hear.'));
      if (f.yard === 'english') {
        await g.plate(tr('Then Dad, to Jack, on the porch:'));
        await g.say('dad', 'Mom said you asked for English. She needs it too. Only… go easy on her', { how: 'awkwardly, gently' });
      } else if (f.yard === 'chinese') {
        await g.plate(tr('Then Dad, to Jack, on the porch:'));
        await g.say('dad', 'Mrs Douglas caught me at the gate. Mark came home upset. You’ve got to go to school with them, Jack', { how: 'tired, not angry' });
      } else {
        await g.scene('room', { here: ['jack', 'dad'], moods: { jack: 'sad', dad: 'neutral' }, keys: ROOM.ran });
        await g.plate(tr('Dad knocks at Jack’s door.'));
        await g.say('dad', 'What happened?', { at: 'narrator', how: 'through the door' });
        await g.plate(tr('Jack says nothing.'));
        await g.say('dad', 'Okay. Whenever you want to tell me', { at: 'narrator', how: 'through the door, gently' });
        await g.plate(tr('He leaves a plate of buns outside the door — the one from the step.'));
      }
    },
    // 1.5: the tape; М4 «The Tape»; she breathes; what she says now, in his language; 爱 on his palm
    async g => {
      const f = facts(g.state);
      if (f.yard === 'run') {
        await g.scene('room', { here: ['jack', 'mom'], moods: { jack: 'sad', mom: 'neutral' }, keys: ROOM.call });
        await g.plate(tr('Mom comes to the door of his room and calls him to the kitchen. He brings the scraps himself.'));
      }
      await g.scene('kitchen', { here: ['mom', 'jack'], moods: { mom: 'neutral', jack: 'sad' }, keys: KITCHEN.evening });
      await g.plate(tr('Evening. On the table, Laohu’s scraps and a roll of tape. Mom has been waiting. She lays the scraps along the old lines without waiting for him to sit down.'));
      if (f.lang === 0) {
        await g.say('mom', 'Now. Tomorrow it will be just paper', { how: 'in English, slowly, choosing the words' });
        await g.say('mom', 'Hold. Two hands is not enough', { how: 'in English, slowly' });
      } else {
        await g.say('mom', '现在修。明天就只是纸了。', { sub: tr('Now. Tomorrow it will be just paper.') });
        await g.say('mom', '按住。两只手不够。', { sub: tr('Hold it. Two hands aren’t enough.') });
      }
      g.know(tr('Torn paper remembers its folds until night; tomorrow it is just paper.'));
      const { missed } = await g.play(tape);
      if (missed) g.mark('seam', true, tr('The seam came out crooked — Laohu will limp worse.'));
      await g.plate(f.ear ? tr('She breathes on him. Laohu stands up — one-eared — and limps across the table; the tape crackles.') : tr('She breathes on him. Laohu stands up and limps across the table; the tape crackles.'));
      if (missed) await g.plate(tr('The seam is crooked: he limps worse, lurching to one side.'));
      g.mood('jack', 'neutral');
      await g.plate(tr('Mom, not raising her eyes from the roll:'));
      if (f.yard === 'english') {
        await g.say('mom', 'I will speak English. Only… “love” — I say here', { how: 'in English, slowly, with long pauses' });
        await g.plate(tr('She touches her lips.'));
        await g.say('mom', '“Ài” — here', { how: 'in English, slowly; “ài” in Chinese' });
        await g.plate(tr('Her chest.'));
        await g.say('mom', 'But I will', { how: 'in English, quietly, firmly' });
      } else if (f.yard === 'chinese') {
        await g.say('mom', '有马克在，我就说英语。你要跟他们一起上学。', { sub: tr('In front of Mark I’ll speak English. You have to go to school with them.') });
        await g.plate(tr('He shakes his head; she doesn’t argue, she cuts the tape.'));
      } else {
        await g.plate(tr('She tears off the tape for a long time.'));
        await g.say('mom', '我们家的门很响。', { sub: tr('Our door is a loud one.'), how: 'out of the corner of her mouth, almost laughing' });
        await g.say('mom', '没关系。', { sub: tr('It’s all right.') });
      }
      g.mood('mom', 'smile');
      await g.plate(tr('She takes his palm and writes a sign on it with her finger — 爱 — and says it:'));
      await g.say('mom', '爱。', { sub: tr('Ài — love.') });
      g.know(tr('The sign 爱 — ài, love: she wrote it on your palm.'));
      await g.plate(tr('She lets go.'));
    },
    // 1.5: ⚑ the question — Dad in the doorway
    async g => {
      const f = facts(g.state);
      await g.scene('kitchen', { here: ['mom', 'jack', 'dad'], moods: { mom: 'neutral', jack: 'thinking', dad: 'neutral' }, keys: KITCHEN.evening }, { cut: true });
      await g.plate(tr('Mark’s words — “from a catalogue” — she heard them; she is waiting. Dad is in the doorway, just in from the porch, taking off his jacket.'));
      const asked = await g.choose('asked', { 'jack#chest': [
        { id: 'asked', label: tr('“Did Dad buy you?”') },
        { id: 'silent', label: tr('Say nothing') },
      ] });
      if (asked === 'asked') {
        if (f.lang === 2) await g.say('jack', '爸爸是从 catalogue 上把你买来的吗？', { sub: tr('Did Dad buy you from a catalogue?'), how: 'in Mandarin Chinese; the one word “catalogue” in English, Mark’s word' });
        else await g.say('jack', 'Did Dad buy you?', { how: 'blurting it out, a child asking what burns' });
        g.mood('mom', 'sad');
        await g.plate(f.lang === 2 ? tr('The hand with the tape stops. Mom looks not at Jack but at Dad: the word “catalogue” he heard.') : tr('The hand with the tape stops. Mom looks not at Jack but at Dad: he heard the question.'));
        if (f.lang === 0) await g.say('mom', 'No. I chose. Many letters. His — about apple tree', { how: 'in English, slowly, to her son' });
        else await g.say('mom', '不是。是我自己选的。信有很多。他的信里写了一棵苹果树。', { sub: tr('No. I chose myself. There were many letters. His was about an apple tree.') });
        g.know(tr('She chose Dad herself: there were many letters, and his were about an apple tree.'));
        await g.say('dad', 'She chose. I only wrote the letters. Bad ones', { how: 'not coming in, short' });
        g.here('dad', false);
        await g.plate(tr('He doesn’t sit down; he goes — and from the porch comes the knock of a hammer: he is mending the step he never meant to mend. Mom looks at the door.'));
        if (f.lang === 2) await g.say('jack', '那在他之前呢？你在哪儿？', { sub: tr('And before him? Where were you?'), how: 'in Mandarin Chinese' });
        else await g.say('jack', 'And before him? Where were you?');
        if (f.lang === 0) await g.say('mom', 'Far. I tell you later', { how: 'in English, lightly, not looking up' });
        else await g.say('mom', '很远。以后再告诉你。', { sub: tr('Far away. I’ll tell you later.'), how: 'lightly, not looking up' });
        g.promise(tr('Mom: “I’ll tell you later” — where she was before Dad.'));
        await g.plate(tr('She tears off the tape and doesn’t raise her eyes again. Jack smiles crookedly.'));
      } else {
        await g.plate(tr('Mom looks at him, waiting. He strokes Laohu. She tears off the tape and hums “Two Tigers” without words.'));
        g.mood('dad', 'smile');
        await g.say('dad', 'So, is the tiger alive?', { how: 'cheerfully, coming in' });
        await g.plate(tr('He sits down at the table, the third; Laohu limps to him across the oilcloth.'));
      }
      g.apply('asked');
    },
    // 1.6: ⚑ the box (the menagerie)
    async g => {
      const f = facts(g.state);
      await g.scene('room', { here: ['jack'], moods: { jack: 'thinking' }, keys: { ...ROOM.night, laohu_seam: f.seam, laohu_ear: f.ear } });
      await g.plate(f.seam ? tr('Night, his room. Laohu limps across the pillow and keels over onto his side. On the shelf — the goats, the deer, the buffalo. In the window, the light on at Mark’s. Tomorrow — the school bus.') : tr('Night, his room. Laohu limps across the pillow. On the shelf — the goats, the deer, the buffalo. In the window, the light on at Mark’s. Tomorrow — the school bus.'));
      const box = await g.choose('box', { 'jack#chest': [
        { id: 'attic', label: tr('All of them into the box') },
        { id: 'laohu', label: tr('All but Laohu') },
        { id: 'all', label: tr('None of them') },
      ] });
      g.set('menagerie', MENAGERIE[{ attic: 0, laohu: 1, all: 2 }[box]]);
      if (box === 'attic') {
        g.set('moment', 'hatch');
        await g.plate(tr('A shoebox. Laohu scratches inside, then goes quiet. Jack carries the box to the hatch of the attic.'));
      }
      else if (box === 'laohu') await g.plate(tr('The others go into the box, up to the attic. Laohu falls asleep under his hand.'));
      else await g.plate(tr('The animals stay where they lived — on the shelf and on the sill, the window onto the street. In the night the goats walk across the blanket; Laohu climbs under the covers with him.'));
      g.apply('box');
    },
    // 1.7: the gate, Monday morning
    async g => {
      const f = facts(g.state);
      await g.scene('stop', { here: ['mom', 'jack', 'mark'], moods: { mom: 'neutral', jack: 'neutral', mark: 'neutral' }, keys: { ...EMPTY, scraps: false } });
      await g.plate(tr('Morning. At the bus stop across the street, Mark and two boys. Mom on the porch, by the door — she goes no further.'));
      if (f.yard === 'english') {
        g.mood('mark', 'smile');
        await g.say('mark', 'Jack! Sit with us', { how: 'waving, friendly' });
        g.mood('jack', 'laugh');
        await g.plate(tr('Jack sits with them and laughs along with everyone.'));
        await g.say('mom', 'Bye', { how: 'in English, from the porch, quietly' });
        await g.plate(tr('He doesn’t turn round.'));
      } else if (f.yard === 'chinese') {
        g.mood('mark', 'angry');
        await g.say('mark', 'Nee-e-e haa-o-o!', { how: 'drawling, mocking a Chinese greeting' });
        await g.say('kids', 'Nee-haaa-o!', { how: 'picking it up, laughing' });
        g.mood('jack', 'sad');
        await g.plate(tr('It is a nickname already. Jack stands apart by the gate; on the bus he sits alone.'));
      } else {
        await g.say('mark', 'Psycho. Ran off over a piece of paper', { how: 'jeering' });
        await g.plate(tr('The boys laugh — and the bus pulls up; they forget about him. Jack sits at the edge.'));
      }
      if (f.zoo > 0) {
        await g.plate(f.seam ? tr('Laohu limps after Jack to the gate — falls, gets up again.') : tr('Laohu limps after Jack to the gate.'));
        if (f.yard === 'english') await g.say('mark', 'Whoa, the trash is alive? Man', { how: 'laughing, half impressed' });
        else await g.say('kids', 'His trash follows him around!', { how: 'jeering, laughing' });
        await g.say('mom', '老虎。', { sub: tr('Laohu.'), how: 'quietly, from the porch' });
        await g.plate(tr('The tiger hobbles back to her.'));
      }
      if (f.zoo === 2) {
        await g.plate(tr('And the window of his room: goats walking on the sill, the buffalo looking out of the flowerpot. The bus stop sees it all.'));
        if (f.yard === 'english') {
          await g.say('mark', 'You’ve got a whole bunch of them in there? A zoo!', { how: 'laughing' });
          await g.plate(tr('And Jack laughs along with everyone.'));
        } else await g.say('kids', 'Trash zoo! Trash zoo!', { how: 'chanting, all the way to the bus' });
      }
      if (f.zoo === 0) await g.plate(tr('Nobody follows him.'));
    },
  ],
};
