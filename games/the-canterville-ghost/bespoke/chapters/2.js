// II. “The Otis Ghost” (scenario §5, 2.1–2.8). The morning after the paints; Cecil comes to stay; the ghost rehearses
// Reckless Rupert before a mirror that does not show him; the brothers make a ghost of a turnip and a sheet; ⚑ the
// trap; he takes to his bed; a sleepless night in the library — “One may pity anyone. Paying his debts — no.”
// Stand-ins (story.js PLACES): the corridor — the library; the garden by the house — the Garden of Death.
// Reads: choices.paints. Leaves: choices.trap, marks.trap, scales.
import { LIBRARY, CORRIDOR, GROUNDS, facts } from '../story.js';
import { candle, portrait } from '../minigames/all.js';

export default {
  number: 'II', title: tr('The Otis Ghost'),
  titles: ['Morning', 'Cecil', 'The Part', 'The Turnip', 'The Trap', 'He Took to His Bed', 'Sleepless'],
  choices: [
    { id: 'trap', title: tr('The trap'), options: [{ id: 'warn', label: tr('Warn him') }, { id: 'watch', label: tr('Watch with the boys') }, { id: 'defend', label: tr('“Don’t,” to the boys') }] },
  ],
  steps: [
    // 2.1: the morning after the paints
    async g => {
      const { paints } = facts(g.state);
      await g.scene('library', { here: ['otis', 'virginia'], moods: { otis: 'smile', virginia: 'neutral' }, keys: LIBRARY.morning });
      if (paints === 'leave') {
        await g.plate(tr('Breakfast. The reds have run out: the stain is emerald green.'));
        g.mood('otis', 'laugh');
        await g.plate(tr('The family roars with laughter; the twins collect their wagers.'));
        g.mood('virginia', 'sad');
        await g.plate(tr('Virginia looks at the stain, her lips trembling. She gets up from the table and goes out.'));
        g.here('virginia', false);
      } else if (paints === 'lock') {
        await g.plate(tr('Breakfast. The floor is clean.'));
        await g.say('twin_star', 'Boring');
        await g.say('otis', 'Our guest seems to have given up');
        g.mood('virginia', 'sad');
        await g.plate(tr('Virginia looks at the clean floor.'));
      } else {
        await g.plate(tr('Breakfast. The twins show how they fired:'));
        await g.say('twin_stripes', 'Right in the knee!');
        g.mood('virginia', 'thinking');
        await g.plate(tr('Washington winks at Virginia; she does not wink back.'));
      }
    },
    // 2.2: Cecil
    async g => {
      await g.scene('library', { here: ['virginia'], moods: { virginia: 'smile' }, keys: LIBRARY.morning });
      await g.plate(tr('On the threshold, the young Duke of Cheshire, come to stay.'));
      await g.say('narrator', 'Virginia had twice raced old Lord Bilton on her pony round the park, and the young Duke fell in love with her on the spot — and stayed till the autumn');
      await g.say('cecil', 'Shall we ride to the brook tomorrow?');
      await g.say('virginia', 'Today');
    },
    // 2.3: the part — only the player sees it
    async g => {
      await g.scene('tapestry', { here: ['simon'], moods: { simon: 'angry' } });
      await g.plate(tr('Evening; only you see this. Sir Simon before the old mirror, in his cloak — and in the mirror there is no one. He rehearses a howl and a gesture. Behind the wall, in the corridor, someone rustles and whispers; he howls louder.'));
      await g.say('simon', 'Reckless Rupert, or the Headless Earl. Midnight. The corner of the corridor. The twins', { how: 'grandly, rehearsing a part, savouring each word' });
      g.mood('simon', 'smile');
      await g.plate(tr('He bows to the empty mirror.'));
    },
    // 2.4: the turnip
    async g => {
      await g.scene('corridor', { here: ['virginia', 'washington', 'twin_star', 'twin_stripes'], moods: { virginia: 'thinking', washington: 'smile', twin_star: 'laugh', twin_stripes: 'laugh' }, keys: CORRIDOR.evening });
      await g.plate(tr('Evening. At the corner of the corridor the twins and Washington are at work in whispers: a white sheet, a hollow turnip with a candle inside it, a kitchen knife, a placard:'));
      await g.plate(tr('“THE OTIS GHOST. The Only True and Original Spook. Beware of Imitations. All Others Are Counterfeit.”'));
      await g.plate(tr('Virginia is walking past.'));
      await g.say('twin_star', 'Ginny, not a word to anyone! He walks here every night — he’ll run away from himself!', { how: 'a loud excited whisper' });
      await g.say('washington', 'Come and watch. From behind the door', { how: 'in a whisper, grinning' });
    },
    // 2.5: ⚑ the trap
    async g => {
      await g.scene('corridor', { here: ['virginia', 'washington', 'twin_star', 'twin_stripes'], moods: { virginia: 'thinking', washington: 'smile', twin_star: 'laugh', twin_stripes: 'laugh' }, keys: CORRIDOR.evening }, { cut: true });
      const trap = await g.choose('trap', { 'virginia#chest': [
        { id: 'warn', label: tr('Warn him') },
        { id: 'watch', label: tr('Watch with the boys') },
        { id: 'defend', label: tr('Tell the boys: “Don’t”') },
      ] });
      if (trap === 'warn') {
        await g.scene('tapestry', { here: ['virginia'], moods: { virginia: 'afraid' } });
        await g.plate(tr('A quarter to midnight. She takes a candle and goes to the Tapestry Chamber.'));
        await g.play(candle);
        await g.plate(tr('The room is empty.'));
        await g.say('virginia', 'Sir Simon. It is Virginia. Don’t go round the corner tonight', { how: 'a whisper into an empty room' });
        await g.wait(1500);
        await g.say('simon', 'Young lady. Ghosts do not change their routes', { at: 'narrator', how: 'from inside the wall, deeply offended' });
        g.mood('virginia', 'sad');
        await g.plate(tr('She leaves the candle-end on the window-sill.'));
        await g.scene('corridor', { here: ['simon'], moods: { simon: 'disgusted' }, keys: CORRIDOR.midnight });
        await g.plate(tr('Midnight. He comes down the corridor, stops at the corner, looks the glowing turnip over, runs a finger along the placard, snorts — and walks past. Behind the door the twins groan with vexation.'));
        await g.scene('library', { here: ['virginia'], moods: { virginia: 'neutral' }, keys: LIBRARY.morning });
        await g.plate(tr('In the morning Washington looks at his sister.'));
        await g.say('washington', 'Somebody told him');
      } else if (trap === 'watch') {
        await g.scene('corridor', { here: ['simon'], moods: { simon: 'afraid' }, keys: CORRIDOR.midnight });
        await g.plate(tr('Midnight. She is behind the door with them. He comes round the corner — and before him stands a ghost with a glowing head and a knife.'));
        await g.plate(tr('A shriek. He backs away with his hands up and runs to his room.'));
        g.here('simon', false);
        g.mood('virginia', 'laugh');
        await g.plate(tr('The twins double up with laughter. Virginia laughs out loud —'));
        g.mood('virginia', 'afraid');
        await g.plate(tr('— and claps her hand over her mouth.'));
      } else {
        await g.say('virginia', 'He is old. Leave him alone');
        await g.say('twin_star', 'Ginny’s on the ghost’s side!');
        await g.say('washington', 'He killed his wife, Ginny', { how: 'suddenly serious, short' });
        await g.say('virginia', 'I know');
        await g.plate(tr('She goes to her room. At midnight, through the wall — a shriek, and her brothers’ laughter.'));
        await g.plate(tr('Next morning the twins gallop down the corridor past the Tapestry Chamber:'));
        await g.say('twin_stripes', 'Ginny’s on the ghost’s side! “He’s o-old!”', { how: 'sing-song, teasing, at the top of his voice' });
      }
      g.apply('trap');
    },
    // 2.6: he took to his bed — only the player sees him
    async g => {
      const { warned } = facts(g.state);
      await g.scene('tapestry', { here: ['simon'], moods: { simon: 'tired' } });
      await g.say('narrator', 'The days went by. Mrs Otis sent him a bottle of Doctor Dobell’s tincture for indigestion. The suit of armour came crashing down the stairs. Someone made a butter-slide on the floor of the corridor');
      if (warned) {
        await g.plate(tr('Only you see this. He turns her candle-end in his fingers.'));
        await g.say('simon', 'Warned. Me. As one helps an old woman across a puddle', { how: 'quietly, bitterly, more puzzled than angry' });
        await g.plate(tr('And he hides the candle-end in his sleeve.'));
      } else {
        await g.plate(tr('Only you see this. He sits before the hollow turnip with its placard — he took it from the corner at dawn — and shakes his chain. The chain does not ring.'));
      }
      await g.say('narrator', 'He took to his bed. The stain appeared no more');
      await g.scene('grounds', { here: ['virginia', 'cecil'], moods: { virginia: 'sad', cecil: 'neutral' }, keys: GROUNDS.idle });
      await g.plate(tr('Virginia sits at her easel and does not paint. Cecil sits down beside her on the grass, looks at the empty sheet and asks nothing.'));
      await g.wait(1500);
      await g.say('cecil', 'Shall we ride?');
      await g.say('virginia', 'Let’s');
    },
    // 2.7: sleepless; the portrait; “one may pity anyone”
    async g => {
      const { trap } = facts(g.state);
      await g.scene('library', { here: ['otis', 'virginia'], moods: { otis: 'thinking', virginia: 'neutral' }, keys: LIBRARY.night });
      await g.plate(tr('Night; the house has grown too quiet. Papa at his desk under the lamp, writing letters to London. Virginia in the doorway, in her nightgown.'));
      await g.say('otis', 'Can’t sleep? Neither can I. Sit down', { how: 'without raising his head, warmly' });
      await g.plate(tr('She sits on the window-sill with her sketchbook and draws him at his lamp.'));
      await g.play(portrait);
      g.mood('virginia', 'thinking');
      await g.say('virginia', 'Papa. If a person did something very bad — long, long ago — may one pity him?');
      await g.plate(tr('Papa lays down his pen and thinks.'));
      await g.say('otis', 'One may pity anyone, Ginny. Paying his debts — no');
      await g.plate(tr('In the doorway, Washington with a candle: he saw the light.'));
      if (trap === 'watch') {
        await g.say('washington', 'Is this about our old man? Ginny, he killed his wife. And the butler shot himself because of him — Mrs Umney told us');
      } else if (trap === 'warn') {
        await g.plate(tr('He looks at her.'));
        await g.say('washington', 'So it was you who told him');
        g.mood('virginia', 'angry');
        await g.plate(tr('She does not answer — and does not look away.'));
        await g.say('washington', 'He killed his wife, Ginny');
      } else {
        await g.say('washington', 'About him again');
        await g.plate(tr('He looks at her, not smiling.'));
      }
      g.mood('virginia', 'neutral');
      g.mood('otis', 'smile');
      await g.plate(tr('Papa takes the drawing and looks at it.'));
      await g.say('otis', 'It is like me. Let it stand here');
      await g.plate(tr('He stands it against his inkstand. In the doorway, Mrs Otis in her shawl.'));
      await g.say('mrs_otis', 'Your feet are like ice. Off to bed');
      await g.say('otis', 'Go. I’ll sit up a while. I can’t sleep anyway');
    },
  ],
};
