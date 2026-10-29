// I. “A Hundred Acorns” (scenario §5, 1.1–1.7). Morning mist on the bare slope: the rod, the acorn, the foot; handing
// him acorns; on a stone, his facts in a few words; ⚑ the rod left standing — take it or wait; the evening, the razor,
// the button; ⚑ at the door at dawn — “I’ll be back” or a raised hand; down through the village, the war; ⚑ Lina asks
// what the shepherd does up there. Its choices only lean the scales (§3, §8); the map after it is the prologue's too.
// Stand-ins (story.js PLACES): the slope — the shepherd's house (its rod standing in the earth).
// Reads: nothing. Leaves: choices.rod, choices.farewell, choices.tell, their marks (and the promise marks.back),
// scales.path, scales.word.
import { hand_in } from '../minigames/all.js';

export default {
  number: 'I', title: tr('A Hundred Acorns'),
  titles: ['The Rod', 'On the Stone', 'The Rod Left Standing', 'The Button', 'At the Door', 'Down Through the Village'],
  choices: [
    { id: 'rod', title: tr('The rod left in the earth'), options: [{ id: 'take', label: tr('Take the rod') }, { id: 'wait', label: tr('Wait for him') }] },
    { id: 'farewell', title: tr('At the door at dawn'), options: [{ id: 'back', label: tr('“I’ll be back”') }, { id: 'hand', label: tr('Raise a hand without a word') }] },
    { id: 'tell', title: tr('What does the shepherd do?'), options: [{ id: 'oaks', label: tr('“He plants oaks”') }, { id: 'sheep', label: tr('“He grazes sheep”') }] },
  ],
  steps: [
    // 1.1–1.2: the mist, the rod, the acorn; handing them
    async g => {
      await g.scene('slope0', { here: ['elzeard', 'traveller'], moods: { elzeard: 'neutral', traveller: 'thinking' } });
      g.title(tr('A Hundred Acorns'));
      await g.plate(tr('Morning, mist on the bare slope. Elzéard leaves the sheep to the dog and goes out with an iron rod and a pail. He drives the rod into the earth, lays an acorn in the hole, closes the earth with his foot. The blow of the rod is dull.'));
      await g.say('narrator', 'He was planting oaks');
      await g.play(hand_in);
    },
    // 1.3: on a stone — his facts, in a few words
    async g => {
      await g.scene('slope0', { here: ['elzeard', 'traveller'], moods: { elzeard: 'neutral', traveller: 'surprised' } }, { cut: true });
      await g.plate(tr('They sit on a stone.'));
      await g.say('elzeard', 'Three years. A hundred thousand. Twenty came up. Mice will eat half. Ten thousand oaks will be left', { how: 'short, factual, each fact a breath apart' });
      await g.say('traveller', 'Whose land is this?');
      await g.say('elzeard', 'I don’t know. Not mine');
      g.mood('traveller', 'smile');
      await g.say('traveller', 'When they find out down below, they’ll put up a monument to you');
      await g.say('elzeard', 'Then they’ll come to look. And I have planting to do');
      g.mood('traveller', 'thinking');
      await g.say('traveller', 'You’re fifty-five. In thirty years…', { how: 'counting aloud' });
      await g.say('elzeard', 'If God gives me thirty years, there’ll be so many that these ten thousand are a drop');
    },
    // 1.4: ⚑ the rod left standing
    async g => {
      await g.scene('slope0', { here: ['elzeard', 'traveller'], moods: { elzeard: 'neutral', traveller: 'thinking' } }, { cut: true });
      await g.plate(tr('Elzéard goes off to move the sheep; the rod is left standing in the earth.'));
      g.here('elzeard', false);
      const rod = await g.choose('rod', { rod: [
        { id: 'take', label: tr('Take the rod') },
        { id: 'wait', label: tr('Wait for him') },
      ] });
      if (rod === 'take') {
        await g.plate(tr('The Traveller pushes the rod in himself, lays an acorn, closes the earth — clumsily.'));
        g.here('elzeard', true);
        await g.plate(tr('Elzéard comes back, looks at his hole by the stone, takes the rod and plants on, as if that was how it should be.'));
      } else {
        g.here('elzeard', true);
        await g.plate(tr('Elzéard comes back and plants on. The Traveller counts aloud.'));
        await g.say('traveller', 'Forty-one… forty-two…', { how: 'counting under his breath, in time with the rod' });
        await g.say('elzeard', 'Don’t count. You put me off');
      }
      g.apply('rod');
      g.gauge('path');
    },
    // 1.5: the evening — the razor, the button
    async g => {
      await g.scene('house0', { here: ['elzeard', 'traveller'], moods: { elzeard: 'neutral', traveller: 'thinking' }, keys: { lamp: 1 } });
      await g.plate(tr('Evening, the house. Elzéard shaves at the window, then sews on a button.'));
      await g.say('narrator', 'His buttons were sewn on as if they could never be lost');
      await g.plate(tr('Silence; the lamp.'));
    },
    // 1.6: ⚑ at the door at dawn
    async g => {
      await g.scene('house0', { here: ['elzeard', 'traveller'], moods: { elzeard: 'neutral', traveller: 'sad' }, keys: { lamp: 0 } });
      await g.plate(tr('Dawn, the threshold. The Traveller is leaving. Elzéard at the door.'));
      const farewell = await g.choose('farewell', { 'traveller#chest': [
        { id: 'back', label: tr('“I’ll be back”') },
        { id: 'hand', label: tr('Raise a hand without a word') },
      ] });
      if (farewell === 'back') {
        await g.say('traveller', 'I’ll be back');
        await g.plate(tr('Elzéard looks at him and nods.'));
        await g.say('elzeard', 'The slope is here');
      } else {
        await g.plate(tr('The Traveller raises his hand. Elzéard nods and turns to the sheep.'));
      }
      g.apply('farewell');
    },
    // 1.7: down through the village; the war; ⚑ what does the shepherd do
    async g => {
      await g.scene('village0', { here: ['traveller', 'lina', 'father'], moods: { traveller: 'neutral', lina: 'neutral', father: 'tired' }, keys: { cart: true, smoke_home: 1, lina_a: 3.6, lina_d: 11.2 } });
      await g.plate(tr('Down through the village. Lina’s father is loading charcoal onto a cart. Lina at the well.'));
      await g.say('lina', 'Down below they’re shouting — war. All the young ones. You’re young');
      await g.wait(1200);
      g.mood('lina', 'smile');
      await g.say('lina', 'Well, what about the shepherd? What does he do up there all day?');
      const tell = await g.choose('tell', { 'traveller#chest': [
        { id: 'oaks', label: tr('“He plants oaks”') },
        { id: 'sheep', label: tr('“He grazes sheep”') },
      ] });
      if (tell === 'oaks') {
        await g.say('traveller', 'He plants oaks');
        g.mood('lina', 'laugh');
        await g.say('lina', 'Oaks. Here', { how: 'laughing' });
        await g.say('father', 'He’s a fool', { how: 'not turning round, loading charcoal; gruff' });
        g.mood('lina', 'thinking');
        await g.plate(tr('Lina looks up at the slope longer than she needs to.'));
      } else {
        await g.say('traveller', 'He grazes sheep');
        await g.say('lina', 'Well, yes. What else');
        g.set('wet', true);
        await g.plate(tr('She pours the water on the stump.'));
      }
      g.apply('tell');
      g.gauge('word');
      await g.say('narrator', 'A week later I was a soldier. Five years of war, and a year before they let us go, I did not think about the oaks');
    },
  ],
};
