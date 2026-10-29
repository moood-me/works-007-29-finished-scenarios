// III. “The Tapestry Chamber” (scenario §5, 3.1–3.8). Autumn: the door of his room ajar, an old man at the window; “behave
// yourself”; the buck and the ruffs — “though I did kill her”; ⚑ “starved”; the Garden of Death beyond the pine-woods;
// the prophecy on the library window; the wall parts — ⚑ the wall (the hinge: with him, or “I’ll call Papa”).
// All in the Tapestry Chamber (Virginia in her riding habit — the scene's own look of her), on its pieces.
// Reads: scales.simon, choices.trap, choices.paints. Leaves: choices.hunger, choices.wall, marks.hunger, marks.wall.
import { facts, piece } from '../story.js';
import { nightingale } from '../minigames/all.js';

export default {
  number: 'III', title: tr('The Tapestry Chamber'),
  titles: ['Leaves', '“Behave Yourself”', 'The Buck', '“Starved”', 'The Garden', 'The Prophecy', 'The Wall'],
  choices: [
    { id: 'hunger', title: tr('“Starved”'), options: [{ id: 'bread', label: tr('“Are you hungry? I have a sandwich”') }, { id: 'killed', label: tr('“You killed her. Nothing else matters”') }] },
    { id: 'wall', title: tr('The wall'), weight: '⚑', options: [{ id: 'go', label: tr('“I am not afraid”') }, { id: 'papa', label: tr('“I’ll call Papa”') }] },
  ],
  steps: [
    // 3.1: leaves
    async g => {
      await piece(g, 'leaves', {
        door: () => { g.here('virginia', true); g.mood('virginia', 'sad'); },
      }, async () => {
        await g.scene('tapestry', { beat: 'leaves', here: ['simon'], moods: { simon: 'tired' } });
        g.title(tr('Autumn'));
        await g.say('narrator', 'Autumn came. Virginia was back from a ride with Cecil, her habit torn on a hedge, and ran up the back stairs so that her mother would not see. The door of the Tapestry Chamber stood ajar');
      });
    },
    // 3.2: “behave yourself”
    async g => {
      const { plays, trap } = facts(g.state);
      await g.scene('tapestry', { here: ['simon', 'virginia'], moods: { simon: 'tired', virginia: 'sad' } }, { cut: true });
      if (plays) {
        g.mood('simon', 'angry');
        await piece(g, 'reuben', {
          up: () => g.say('simon', 'I am Red Reuben, or the Strangled…', { how: 'a thunderous stage voice, breaking off' }),
          down: () => { g.mood('simon', 'tired'); },
        });
      }
      await piece(g, 'talk');
      if (trap === 'warn') await g.say('simon', 'Ah — the one who warns ghosts. I did not ask you to');
      else if (trap === 'watch') await g.say('simon', 'And you laughed. Behind the door. I heard');
      else await g.say('simon', '“He’s old.” Your brothers shouted it under my door. Old. Hm');
      await g.say('virginia', 'I am so sorry for you. But my brothers are going back to Eton soon. And then, if you behave yourself, no one will annoy you');
      await g.say('simon', 'Behave myself? I must rattle my chains, and groan through keyholes, and walk about at night. It is my only reason for existing', { how: 'outraged, as at an absurdity' });
      g.mood('virginia', 'angry');
      await g.say('virginia', 'It is no reason at all for existing. And you have been very wicked. Mrs Umney told us you killed your wife');
    },
    // 3.3: the buck
    async g => {
      await g.scene('tapestry', { here: ['simon', 'virginia'], moods: { simon: 'thinking', virginia: 'angry' } }, { cut: true });
      await g.say('simon', 'My wife was very plain, never had my ruffs properly starched, and knew nothing about cookery');
      await g.say('simon', 'Why, there was a buck I had shot in Hogley Woods, a magnificent pricket — and do you know how she had it sent up to table?');
      g.mood('simon', 'tired');
      await g.say('simon', 'However, it is no matter now, for it is all over. And I don’t think it was very nice of her brothers to starve me to death');
      await g.say('simon', 'Though I did kill her', { how: 'in passing, as one speaks of the weather; no pause before “kill”' });
      g.mood('virginia', 'surprised');
    },
    // 3.4: ⚑ “starved”
    async g => {
      const { paints } = facts(g.state);
      await g.scene('tapestry', { here: ['simon', 'virginia'], moods: { simon: 'tired', virginia: 'surprised' } }, { cut: true });
      const hunger = await g.choose('hunger', { 'virginia#chest': [
        { id: 'bread', label: tr('“Starved? Are you hungry? I have a sandwich”') },
        { id: 'killed', label: tr('“You killed her. Nothing else matters”') },
      ] });
      if (hunger === 'bread') {
        await g.say('virginia', 'Starved? Are you hungry? I have a sandwich');
        g.mood('virginia', 'neutral');
        await piece(g, 'sandwich');
        await g.say('simon', 'Thank you. I never eat anything now. But you are kind. Much nicer than the rest of your horrid, rude, vulgar, dishonest family');
      } else {
        await g.say('virginia', 'You killed her. Nothing else matters');
        g.mood('simon', 'disgusted');
        await g.say('simon', 'The cheap severity of abstract morality. Exactly like your horrid, rude, vulgar, dishonest family');
      }
      g.mood('virginia', 'angry');
      await piece(g, 'stamp');
      await g.say('virginia', 'It is you who are rude and vulgar! And as for dishonest — who stole the paints out of my box?');
      if (paints === 'leave') {
        await g.say('virginia', 'I left them for you myself — and you made her green!');
        await g.say('simon', 'There was no red left. The emerald — yes, a mistake');
      } else {
        await g.say('virginia', 'To furbish up that ridiculous stain!');
        await g.say('simon', 'Well, really, where was I to get it? It is a very difficult thing to get real blood nowadays');
      }
      if (paints === 'tell') await g.say('simon', 'Your brothers fired peas at me. At my knees, madam');
      g.apply('hunger');
    },
    // 3.5: the garden beyond the pine-woods; the nightingale
    async g => {
      await g.scene('tapestry', { here: ['simon', 'virginia'], moods: { simon: 'tired', virginia: 'sad' } }, { cut: true });
      await g.say('simon', 'I have not slept for three hundred years. I am so tired', { how: 'very quietly, the actor gone out of his voice' });
      await g.say('virginia', 'Then why don’t you go to sleep?');
      await g.say('simon', 'Far away beyond the pine-woods there is a little garden. There the grass grows long and deep, there are the great white stars of the hemlock flower, and the nightingale sings all night long…', { how: 'dreamily, slowly, almost singing' });
      const { touched } = await g.play(nightingale);
      if (touched) {
        // (М5 touched: he breaks off, and says the rest shorter)
        await g.say('simon', 'You are not listening', { how: 'breaking off, hurt, then tired' });
        await g.say('virginia', 'You mean the Garden of Death');
      } else {
        await g.say('virginia', 'You mean the Garden of Death');
        await g.say('simon', 'To lie in the soft brown earth, and listen to silence. To have no yesterday, and no tomorrow');
      }
      await g.say('simon', 'You can open its doors for me. For Love is always with you, and Love is stronger than Death');
    },
    // 3.6: the prophecy; the wall parts
    async g => {
      await g.scene('tapestry', { here: ['simon', 'virginia'], moods: { simon: 'tired', virginia: 'thinking' } }, { cut: true });
      await g.say('simon', 'Have you ever read the old prophecy on the library window?');
      await g.say('virginia', 'Oh, often. “When a golden girl can win prayer from out the lips of sin, when the barren almond bears, and a little child gives away its tears, then shall all the house be still.” I don’t know what it means');
      await g.say('simon', 'Weep with me for my sins — I have no tears. Pray with me for my soul — I have no faith. It will be dark there, and wicked voices will whisper in your ear. They will not harm you');
    },
    // 3.7: ⚑ the wall
    async g => {
      const { plays } = facts(g.state);
      await piece(g, 'wall_parts', {
        supper: async () => {
          await g.say('washington', 'Ginny! Supper!', { at: 'narrator', how: 'shouting from far below, up the stairs' });
          g.mood('virginia', 'afraid');
        },
        hand: () => g.say('simon', 'I shall not ask a second time', { how: 'pride, not a threat; he is almost sure she will refuse' }),
      }, () => g.scene('tapestry', { beat: 'wall_parts', here: ['simon', 'virginia'], moods: { simon: 'tired', virginia: 'thinking' } }, { cut: true }));
      const wall = await g.choose('wall', { 'simon#chest': [
        { id: 'go', label: tr('“I am not afraid. I will ask the Angel for you”') },
        { id: 'papa', label: tr('“No. I’ll call Papa”') },
      ] });
      if (wall === 'go') {
        g.mood('virginia', 'sad');
        await g.say('virginia', 'I am not afraid. I will ask the Angel to have mercy on you');
        await piece(g, 'into_wall', {
          hand: () => g.say('washington', 'Ginny!', { at: 'narrator', how: 'calling from below, nearer now' }),
        });
      } else {
        await g.say('virginia', 'No. I’ll call Papa');
        if (plays) g.mood('simon', 'disgusted');
        g.set('plays', plays);
        await piece(g, 'hand_down', {
          bow: () => (plays ? g.say('simon', 'Call him. Let him bring the oil') : null),
          whisper: () => g.say('voices', 'Virginia…'),
        });
      }
      g.apply('wall');
    },
  ],
};
