// I. “Oil for the Chains” (scenario §5, 1.1–1.7). The first night: chains in the corridor, Papa offers the ghost the
// Rising Sun Lubricator, a pillow flies; ⚑ a chance at her door — “Good night, sir”; the ghost alone in his room, mortally
// insulted; the stain comes back, morning after morning, and the family bets on its colour; the dry almond, and her
// reds scraped out of the box; ⚑ the paints.
// On the scenes' pieces (game.md «Stage 5 — pieces»): the corridor, the tapestry, the library, the garden by the castle.
// Reads: nothing. Leaves: choices.goodnight, choices.paints, marks.goodnight, marks.paints, scales; the mini-games' traces:
// marks.creaked (М2 — he turns at the creak), marks.sketch (М3 — the blot stays on the sketch, «Пятно»).
import { LIBRARY, CORRIDOR, GROUNDS, facts, piece } from '../story.js';
import { door, sketch } from '../minigames/all.js';

export default {
  number: 'I', title: tr('Oil for the Chains'),
  titles: ['The Chains', 'The Lubricator', 'The Tapestry Chamber', 'The Wagers', 'The Almond', 'The Paints'],
  choices: [
    { id: 'goodnight', title: tr('At the crack of her door'), options: [{ id: 'wish', label: tr('“Good night, sir”') }, { id: 'pass', label: tr('Let him pass') }] },
    { id: 'paints', title: tr('The paints'), options: [{ id: 'leave', label: tr('Leave him the box') }, { id: 'lock', label: tr('Lock the paints away') }, { id: 'tell', label: tr('Tell Washington') }] },
  ],
  steps: [
    // 1.1: one o'clock at night; the door (the piece `chains`, М2)
    async g => {
      await g.scene('corridor', { beat: 'chains', here: ['simon'], moods: { simon: 'angry' }, keys: CORRIDOR.chains });
      // (chains, steps, a groan — what wakes her)
      g.sound('chains', { loud: 0.8 });
      g.sound('groan', { delay: 2.4, loud: 0.7 });
      g.sound('chains', { delay: 4.2 });
      g.title(tr('The First Night'));
      await g.beat('chains');
      const { creaked } = await g.play(door);
      g.mark('creaked', creaked, null);
    },
    // 1.2: the lubricator; the pillow; ⚑ “Good night, sir” — a chance at the crack of her door (`oil`, `smash`, then
    // `wish_stop` | `creak_look` | `pass_by`)
    async g => {
      await piece(g, 'oil', {
        speak: () => g.say('otis', 'My dear sir, I really must insist on your oiling those chains. I have brought you a small bottle of the Tammany Rising Sun Lubricator. It is said to be completely efficacious upon one application'),
        shut: () => { g.sound('door', { loud: 0.6 }); },
      }, async () => {
        await g.scene('corridor', { beat: 'oil', here: ['simon', 'virginia', 'otis'], moods: { simon: 'angry', virginia: 'afraid', otis: 'smile' }, keys: CORRIDOR.oil }, { cut: true });
        g.sound('creak', { loud: 0.5 });
      });
      await piece(g, 'smash', {
        howl: () => { g.sound('smash'); g.sound('groan', { delay: 0.3 }); },
        pillow: () => { g.sound('pillow', { delay: 0.6 }); g.sound('laugh', { far: true, delay: 0.4 }); },
      });
      // (a chance, hers: the mark on her, behind the crack — a whisper is hers to say; a few seconds while he is there)
      const goodnight = await g.choose('goodnight', { 'virginia#chest': [
        { id: 'wish', label: tr('Whisper: “Good night, sir”') },
      ] }, { within: 5000, otherwise: 'pass', touch: tr('An old man in fetters at the crack of her door.') });
      if (goodnight === 'wish') {
        await g.say('virginia', 'Good night, sir', { how: 'a whisper through the crack of the door' });
        await piece(g, 'wish_stop');
      } else if (g.state.marks.creaked) {
        await piece(g, 'creak_look');
      } else {
        await piece(g, 'pass_by');
      }
      g.here('simon', false);
      g.apply('goodnight');
    },
    // 1.3: the Tapestry Chamber — only the player sees it (`insulted`)
    async g => {
      const { wished } = facts(g.state);
      await piece(g, 'insulted', {
        ear: async () => {
          // (the twins' laughter, from downstairs)
          g.sound('laugh', { far: true });
          await g.wait(1200);
          await g.say('narrator', 'Never, in a brilliant and uninterrupted career of three hundred years, had he been so grossly insulted');
          await g.say('simon', 'Oil. For me. For me, at whom the Dowager Duchess of Bolton…');
        },
      }, () => g.scene('tapestry', { beat: 'insulted', here: ['simon'], moods: { simon: 'angry' }, air: { wind: 0.24 } }));
      if (wished) {
        await g.say('simon', '“Good night”… She is mocking me');
        g.mark('goodnight', 'wish', tr('You wished him good night. He decided you were mocking him.'));
      }
      g.mood('simon', 'thinking');
      await g.say('simon', 'The stain. We shall begin with the stain');
      g.gauge('simon');
    },
    // 1.4: the wagers (`wagers`)
    async g => {
      await piece(g, 'wagers', {
        bet: async () => {
          await g.say('narrator', 'Morning after morning the stain was back in its place. Washington rubbed it out; Mr Otis locked the library at night and kept the key in his pocket; and in the morning the stain was there again');
          await g.say('narrator', 'Sometimes it was a dull red, then it would be vermilion, then a rich purple');
          await g.say('twin_star', 'A dollar on purple!');
          await g.say('twin_stripes', 'Two on vermilion!');
        },
        paper: () => g.say('otis', 'The laws of Nature are not going to be suspended for the British aristocracy', { how: 'from behind his newspaper, without looking up' }),
      }, () => g.scene('library', { beat: 'wagers', here: ['virginia', 'otis', 'mrs_otis', 'washington', 'twin_star', 'twin_stripes'], moods: { otis: 'thinking', virginia: 'neutral', twin_star: 'smile', twin_stripes: 'smile' }, keys: { ...LIBRARY.morning, stain: 'vermilion' } }));
      g.mood('otis', 'smile');
      g.mood('virginia', 'laugh');
      await g.wait(1800);
      g.mood('virginia', 'sad');
      await g.wait(1500);
    },
    // 1.5: the almond; the sketch (М3, then `paint`)
    async g => {
      await g.scene('grounds', { here: ['virginia', 'mrs_umney'], moods: { virginia: 'thinking' }, keys: GROUNDS.paint });
      const { blot } = await g.play(sketch);
      g.mark('sketch', blot ? 'blot' : 'clean', null);
      await piece(g, 'paint', {
        umney: () => g.say('mrs_umney', 'It does not flower. Not as long as I can remember', { how: 'in passing, to herself' }),
        box: async () => {
          g.mood('virginia', 'surprised');
          // (her box, close: the pans of red and vermilion scraped out)
          g.set('paintbox', true);
          g.set('board_open', 1, 0.8);
          await g.say('narrator', 'Virginia reached for her red. The cakes of red and of vermilion in her box were nearly gone — scraped out');
          await g.wait(1200);
          g.set('board_open', 0, 0.8);
        },
      });
    },
    // 1.6: ⚑ the paints (`look_house`; then `box_morning` | `pacing`, `clean_floor` | `peas_night`, `half_stain`)
    async g => {
      await piece(g, 'look_house', {}, () => g.scene('grounds', { beat: 'look_house', here: ['virginia'], moods: { virginia: 'thinking' }, keys: GROUNDS.paint }, { cut: true }));
      const paints = await g.choose('paints', { 'virginia#chest': [
        { id: 'leave', label: tr('Leave the open box by the library') },
        { id: 'lock', label: tr('Lock the paints away') },
        { id: 'tell', label: tr('Tell Washington') },
      ] });
      if (paints === 'leave') {
        await g.say('narrator', 'That evening she left her open paint-box on the window-sill by the library doors');
        await piece(g, 'box_morning', {}, () => g.scene('library', { beat: 'box_morning', here: ['virginia'], moods: { virginia: 'sad' }, keys: { ...LIBRARY.morning, paints: true, stain: 'scarlet' } }));
      } else if (paints === 'lock') {
        await g.say('narrator', 'She locked her paints in the chest of drawers, and put the key under her pillow');
        await piece(g, 'pacing', { clink: () => { g.sound('chain_clink'); g.sound('chain_clink', { delay: 3, loud: 0.8 }); } }, () => g.scene('corridor', { beat: 'pacing', here: ['simon'], moods: { simon: 'angry' }, keys: CORRIDOR.pacing }));
        await piece(g, 'clean_floor', {}, () => g.scene('library', { beat: 'clean_floor', here: ['virginia'], moods: { virginia: 'thinking' }, keys: { ...LIBRARY.morning, stain: 'none' } }));
      } else {
        await g.scene('grounds', { here: ['virginia', 'washington'], moods: { virginia: 'thinking', washington: 'smile' },
          keys: { ...GROUNDS.paint, washington_a: 1.75, washington_d: 5.2, washington_turn: 60, washington_do: 'stand', washington_with: [],
            washington_look: 'virginia', virginia_look: 'washington', virginia_do: 'stand', virginia_with: [] } }, { cut: true });
        await g.say('virginia', 'He takes my paints');
        await g.say('washington', 'Does he? Then we’ll be waiting for him');
        await g.say('narrator', 'That evening Washington begged the library key from his father');
        await piece(g, 'peas_night', {
          cry: async () => {
            await g.say('twin_star', 'For Ginny’s paints!', { at: 'narrator', how: 'a battle cry, in the dark, from downstairs' });
            g.sound('peas', { loud: 0.7 });
            g.sound('peas', { delay: 0.7, loud: 0.6 });
          },
          groan: () => { g.sound('groan', { far: true }); },
        }, () => g.scene('corridor', { beat: 'peas_night', keys: CORRIDOR.night }));
        await piece(g, 'half_stain', {}, () => g.scene('library', { beat: 'half_stain', here: ['virginia'], moods: { virginia: 'sad' }, keys: { ...LIBRARY.morning, stain: 'half' } }));
      }
      g.apply('paints');
    },
  ],
};
