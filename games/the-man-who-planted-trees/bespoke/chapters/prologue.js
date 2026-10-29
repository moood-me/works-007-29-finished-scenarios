// Prologue. “Dry” (scenario §5, П.1–П.5). An empty flask, wind, a dead village, a girl watering a stump; ⚑ a drink of
// the linden's water; the climb at dusk to the one lit window, the shepherd who gives water and asks nothing; a hundred
// acorns on the table; ⚑ a question about his family. Both choices only colour (§3: the prologue and chapter I are for
// trying). No map after it: the prologue and chapter I are one map (§11) — game.js `onward`.
// Reads: nothing. Leaves: choices.drink, choices.ask, marks.drink, marks.ask.
import { acorns } from '../minigames/all.js';

export default {
  number: '', title: tr('Dry'), onward: true,
  titles: ['The Stump', 'The Lamp'],
  choices: [
    { id: 'drink', title: tr('At the stump'), options: [{ id: 'drink', label: tr('“Give me a drink”') }, { id: 'silent', label: tr('Say nothing') }] },
    { id: 'ask', title: tr('At the lamp'), options: [{ id: 'ask', label: tr('“Are you alone here?”') }, { id: 'silent', label: tr('Sit in silence') }] },
  ],
  steps: [
    // П.1–П.2: the flask; the dead village; the stump; ⚑ a drink
    async g => {
      await g.scene('village0', { here: ['traveller', 'lina'], moods: { traveller: 'tired', lina: 'neutral' }, keys: { home_door: 120 } });
      g.title(tr('The Man Who Planted Trees'));
      await g.plate(tr('A high plateau, wind, dry grass. The Traveller shakes his flask — empty.'));
      await g.say('narrator', 'I was twenty. I was going where nobody goes — so as to have something to tell. For three days I had not seen water');
      await g.plate(tr('A village: empty houses, a dry well. On the square a girl with a tin mug stands by a stump.'));
      await g.say('father', 'My sack! I carried it down from the mountain!', { at: 'home_door', how: 'an angry shout from behind a wall' });
      g.set('home_door', 180);
      await g.plate(tr('A door slams. Lina raises the mug to the stump.'));
      const drink = await g.choose('drink', { 'traveller#chest': [
        { id: 'drink', label: tr('“Give me a drink”') },
        { id: 'silent', label: tr('Say nothing') },
      ] });
      if (drink === 'drink') {
        await g.say('traveller', 'Give me a drink', { how: 'hoarse with thirst' });
        g.mood('lina', 'thinking');
        await g.plate(tr('Lina looks at the stump, then at him.'));
        await g.say('lina', 'Drink. She won’t mind');
        g.set('mug', true);
        g.set('lina_wear', { parts: [] });
      await g.plate(tr('He drinks. The stump stays dry. Lina sets the mug on it upside down.'));
      } else {
        g.set('wet', true);
        await g.plate(tr('Lina pours the water on the stump.'));
        g.mood('lina', 'smile');
        await g.say('lina', 'Funny, isn’t it? Watering a stump');
        await g.wait(1200);
        g.mood('lina', 'sad');
        await g.say('lina', 'Mother planted it. Father cut it down for charcoal');
        await g.plate(tr('She looks at his flask.'));
      }
      g.mood('lina', 'neutral');
      await g.say('lina', 'Up there, there’s a shepherd. He has a well. He doesn’t talk');
      await g.plate(tr('She points up the slope.'));
      g.apply('drink');
    },
    // П.3–П.5: the lit window; the gourd of water; a hundred acorns; ⚑ the question
    async g => {
      await g.scene('house0', { here: ['elzeard', 'traveller'], moods: { elzeard: 'neutral', traveller: 'tired' }, keys: { lamp: 1 } });
      await g.plate(tr('The climb at dusk. Ahead, a small light — a lamp in the window of a stone house. Elzéard at the door; the dog lifts its head.'));
      await g.plate(tr('Without a word he holds out a gourd of water.'));
      g.mood('traveller', 'surprised');
      await g.say('narrator', 'He did not ask who I was');
      await g.plate(tr('In the house: soup, the lamp. Elzéard pours a sack of acorns out on the table.'));
      const sorted = await g.play(acorns);
      if (sorted.self) await g.plate(tr('Elzéard finishes the sorting himself, without a word and faster, and takes one cracked acorn out of the Traveller’s heap.'));
      await g.plate(tr('He counts them off in tens.'));
      await g.say('elzeard', 'A hundred');
      await g.plate(tr('He lowers them into a pail of water.'));
      g.mood('traveller', 'thinking');
      const ask = await g.choose('ask', { 'traveller#chest': [
        { id: 'ask', label: tr('“Are you alone here?”') },
        { id: 'silent', label: tr('Sit in silence') },
      ] });
      if (ask === 'ask') {
        await g.say('traveller', 'Are you alone here?');
        await g.wait(1500);
        g.mood('elzeard', 'sad');
        await g.say('elzeard', 'There was a son. There was a wife', { how: 'not at once; flat and quiet' });
        await g.plate(tr('He gets up and goes out to the dog. The Traveller is alone at the lamp.'));
        g.here('elzeard', false);
      } else {
        await g.plate(tr('Elzéard pushes the pail of acorns over to him. They sit.'));
        await g.say('narrator', 'We were silent until night');
      }
      await g.say('narrator', 'In the morning I went after him. He did not object');
      g.apply('ask');
    },
  ],
};
