// II. “The Otis Ghost” (scenario §5, 2.1–2.8). The morning after the paints; Cecil comes to stay; the ghost rehearses
// Reckless Rupert before a mirror that does not show him; the brothers make a ghost of a turnip and a sheet; ⚑ the
// trap; he takes to his bed; a sleepless night in the library — “One may pity anyone. Paying his debts — no.”
// On the scenes’ pieces (game.md «Stage 5 — pieces»).
// Reads: choices.paints. Leaves: choices.trap, marks.trap, scales.
import { LIBRARY, CORRIDOR, GROUNDS, facts, piece } from '../story.js';
import { candle, portrait } from '../minigames/all.js';

export default {
  number: 'II', title: tr('The Otis Ghost'),
  titles: ['Morning', 'Cecil', 'The Part', 'The Turnip', 'The Trap', 'He Took to His Bed', 'Sleepless'],
  choices: [
    { id: 'trap', title: tr('The trap'), options: [{ id: 'warn', label: tr('Warn him') }, { id: 'watch', label: tr('Watch with the boys') }, { id: 'defend', label: tr('“Don’t,” to the boys') }] },
  ],
  steps: [
    // 2.1: the morning after the paints (`breakfast_green` | `breakfast_clean` | `breakfast_peas`)
    async g => {
      const { paints } = facts(g.state);
      const at = (beat, stain) => () => g.scene('library', { beat, here: ['virginia', 'otis', 'mrs_otis', 'washington', 'twin_star', 'twin_stripes'], moods: { otis: 'smile', virginia: 'neutral' }, keys: { ...LIBRARY.morning, stain } });
      if (paints === 'leave') {
        await piece(g, 'breakfast_green', {
          laugh: () => { g.mood('otis', 'laugh'); g.sound('laugh', { loud: 0.7 }); },
          out: () => { g.mood('virginia', 'sad'); },
        }, at('breakfast_green', 'emerald'));
        g.here('virginia', false);
      } else if (paints === 'lock') {
        await piece(g, 'breakfast_clean', {
          say: async () => {
            await g.say('twin_star', 'Boring');
            await g.say('otis', 'Our guest seems to have given up');
            g.mood('virginia', 'sad');
          },
        }, at('breakfast_clean', 'none'));
      } else {
        await piece(g, 'breakfast_peas', {
          show: () => g.say('twin_stripes', 'Right in the knee!'),
          wink: () => { g.mood('virginia', 'thinking'); },
        }, at('breakfast_peas', 'half'));
      }
    },
    // 2.2: Cecil (`cecil_in`)
    async g => {
      await piece(g, 'cecil_in', {}, () => g.scene('library', { beat: 'cecil_in', here: ['virginia', 'cecil'], moods: { virginia: 'smile', cecil: 'smile' }, keys: LIBRARY.morning }));
      await g.say('narrator', 'Virginia had twice raced old Lord Bilton on her pony round the park, and the young Duke fell in love with her on the spot — and stayed till the autumn');
      await g.say('cecil', 'Shall we ride to the brook tomorrow?');
      await g.say('virginia', 'Today');
    },
    // 2.3: the part — only the player sees it (`rehearse`)
    async g => {
      await piece(g, 'rehearse', {
        loom: async () => {
          g.sound('groan');
          await g.wait(1600);
          await g.say('simon', 'Reckless Rupert, or the Headless Earl. Midnight. The corner of the corridor. The twins', { how: 'grandly, rehearsing a part, savouring each word' });
        },
        bow: () => { g.mood('simon', 'smile'); },
      }, () => g.scene('tapestry', { beat: 'rehearse', here: ['simon'], moods: { simon: 'angry' }, air: { trees: 0.12, wind: 0.1 } }));
    },
    // 2.4: the turnip (`turnip`)
    async g => {
      await piece(g, 'turnip', {
        stop: async () => {
          await g.say('twin_star', 'Ginny, not a word to anyone! He walks here every night — he’ll run away from himself!', { how: 'a loud excited whisper' });
          await g.say('washington', 'Come and watch. From behind the door', { how: 'in a whisper, grinning' });
        },
      }, () => g.scene('corridor', { beat: 'turnip', here: ['virginia', 'washington', 'twin_star', 'twin_stripes'], moods: { virginia: 'thinking', washington: 'smile', twin_star: 'laugh', twin_stripes: 'laugh' }, keys: CORRIDOR.evening }));
    },
    // 2.5: ⚑ the trap (warn: `candle_walk` with М4, `candle_room`, `route`; watch: `fright`; defend: `defend`, `gallop`)
    async g => {
      await g.scene('corridor', { here: ['virginia', 'washington', 'twin_star', 'twin_stripes'], moods: { virginia: 'thinking', washington: 'smile', twin_star: 'laugh', twin_stripes: 'laugh' }, keys: CORRIDOR.evening }, { cut: true });
      const trap = await g.choose('trap', { 'virginia#chest': [
        { id: 'warn', label: tr('Warn him') },
        { id: 'watch', label: tr('Watch with the boys') },
        { id: 'defend', label: tr('Tell the boys: “Don’t”') },
      ] });
      if (trap === 'warn') {
        await g.scene('corridor', { beat: 'candle_walk', here: ['virginia'], moods: { virginia: 'afraid' }, keys: CORRIDOR.candle });
        g.beat('candle_walk', { wait: false });
        const { out } = await g.play(candle);
        await piece(g, 'candle_room', {
          whisper: () => g.say('virginia', 'Sir Simon. It is Virginia. Don’t go round the corner tonight', { how: 'a whisper into an empty room' }),
        }, () => g.scene('tapestry', { beat: 'candle_room', here: ['virginia'], moods: { virginia: 'afraid' }, keys: { candle_out: out }, air: { wind: 0.24 } }, { cut: true }));
        await g.say('simon', 'Young lady. Ghosts do not change their routes', { at: 'narrator', how: 'out of the dark, from inside the wall, deeply offended' });
        await piece(g, 'route', { stop: () => { g.sound('chain_clink', { loud: 0.7 }); } }, () => g.scene('corridor', { beat: 'route', here: ['simon'], moods: { simon: 'disgusted' }, keys: CORRIDOR.midnight }));
        await g.scene('library', { here: ['virginia', 'washington'], moods: { virginia: 'neutral', washington: 'thinking' }, keys: LIBRARY.morning });
        await g.say('washington', 'Somebody told him', { how: 'looking at his sister, not smiling' });
      } else if (trap === 'watch') {
        await g.say('narrator', 'At midnight she stood behind the twins’ door with her brothers');
        await piece(g, 'fright', {
          shriek: () => { g.sound('chains', { loud: 0.7 }); },
          laugh: async () => {
            g.mood('virginia', 'laugh');
            g.sound('laugh');
            await g.wait(1400);
            g.mood('virginia', 'surprised');
          },
        }, () => g.scene('corridor', { beat: 'fright', here: ['simon', 'virginia', 'washington', 'twin_star', 'twin_stripes'], moods: { simon: 'afraid', virginia: 'thinking', washington: 'smile', twin_star: 'laugh', twin_stripes: 'laugh' }, keys: CORRIDOR.midnight }));
        await g.say('narrator', 'The twins doubled up with laughter. Virginia laughed out loud — and clapped her hand over her mouth');
      } else {
        await piece(g, 'defend', {
          say: async () => {
            await g.say('virginia', 'He is old. Leave him alone');
            await g.say('twin_star', 'Ginny’s on the ghost’s side!');
            await g.say('washington', 'He killed his wife, Ginny', { how: 'suddenly serious, short' });
            await g.say('virginia', 'I know');
          },
        });
        await g.say('narrator', 'At midnight, through the wall, came a shriek — and her brothers’ laughter');
        g.sound('laugh', { far: true });
        await piece(g, 'gallop', {
          run: async () => {
            g.sound('laugh', { loud: 0.6 });
            await g.say('twin_stripes', 'Ginny’s on the ghost’s side! “He’s o-old!”', { how: 'sing-song, teasing, at the top of his voice' });
          },
        }, () => g.scene('corridor', { beat: 'gallop', here: ['twin_star', 'twin_stripes'], moods: { twin_star: 'laugh', twin_stripes: 'laugh' }, keys: CORRIDOR.morning, air: { wind: 0.08 } }));
      }
      g.apply('trap');
    },
    // 2.6: he took to his bed — only the player sees him (`stub_sleeve` | `turnip_shake`, then `easel_idle`)
    async g => {
      const { warned } = facts(g.state);
      // (the days going by, heard in the empty corridor: the armour down the stairs)
      await g.scene('corridor', { keys: CORRIDOR.night, air: { wind: 0.2, clock: 0.1 } });
      await g.wait(1200);
      g.sound('armour');
      await g.wait(2600);
      await g.say('narrator', 'The days went by. Mrs Otis sent him a bottle of Doctor Dobell’s tincture for indigestion. The suit of armour came crashing down the stairs. Someone made a butter-slide on the floor of the corridor');
      if (warned) {
        await piece(g, 'stub_sleeve', {
          turn: () => g.say('simon', 'Warned. Me. As one helps an old woman across a puddle', { how: 'quietly, bitterly, more puzzled than angry' }),
        }, () => g.scene('tapestry', { beat: 'stub_sleeve', here: ['simon'], moods: { simon: 'tired' }, keys: { stub: 'hand' }, air: { trees: 0.18 } }));
      } else {
        await piece(g, 'turnip_shake', {}, () => g.scene('tapestry', { beat: 'turnip_shake', here: ['simon'], moods: { simon: 'tired' }, keys: { turnip: true } }));
      }
      await g.say('narrator', 'He took to his bed. The stain appeared no more');
      await piece(g, 'easel_idle', {
        ask: async () => {
          await g.say('cecil', 'Shall we ride?');
          await g.say('virginia', 'Let’s');
        },
      }, () => g.scene('grounds', { beat: 'easel_idle', here: ['virginia', 'cecil'], moods: { virginia: 'sad', cecil: 'neutral' }, keys: GROUNDS.idle }));
    },
    // 2.7: sleepless; the portrait (М10); “one may pity anyone” (`sleepless`, `question`, `wash_door`, `drawing`)
    async g => {
      const { trap } = facts(g.state);
      await piece(g, 'sleepless', {
        door: () => g.say('otis', 'Can’t sleep? Neither can I. Sit down', { how: 'without raising his head, warmly' }),
      }, () => g.scene('library', { beat: 'sleepless', here: ['otis', 'virginia', 'washington', 'mrs_otis'], moods: { otis: 'thinking', virginia: 'neutral' }, keys: LIBRARY.night }));
      const { askew } = await g.play(portrait);
      g.mood('virginia', 'thinking');
      await g.say('virginia', 'Papa. If a person did something very bad — long, long ago — may one pity him?');
      await piece(g, 'question', { pen: () => g.say('otis', 'One may pity anyone, Ginny. Paying his debts — no') });
      await piece(g, 'wash_door');
      if (trap === 'watch') {
        await g.say('washington', 'Is this about our old man? Ginny, he killed his wife. And the butler shot himself because of him — Mrs Umney told us');
      } else if (trap === 'warn') {
        await g.say('washington', 'So it was you who told him', { how: 'looking hard at her' });
        g.mood('virginia', 'angry');
        await g.wait(1500);
        await g.say('washington', 'He killed his wife, Ginny');
      } else {
        await g.say('washington', 'About him again', { how: 'not smiling' });
      }
      g.mood('virginia', 'neutral');
      g.mood('otis', 'smile');
      await piece(g, 'drawing', {
        look: async () => {
          if (askew) {
            g.mood('otis', 'laugh');
            await g.say('otis', 'My nose is longer, I believe', { how: 'amused, warmly, and he laughs' });
          } else await g.say('otis', 'It is like me. Let it stand here');
        },
        mother: async () => {
          await g.say('mrs_otis', 'Your feet are like ice. Off to bed');
          await g.say('otis', 'Go. I’ll sit up a while. I can’t sleep anyway');
        },
      });
    },
  ],
};
