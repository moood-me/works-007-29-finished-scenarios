// IV. In two forms, by the wall (3.7). “The Garden of Death” (scenario §5, 4.1–4.7; went with him): the dark and the
// voices; the house looking for her; the Garden; ⚑ her name in the prayer; tears, the casket, “Good night” or
// “Farewell”; midnight — the whole house falls silent, the panel on the landing, the chamber, the almond in blossom.
// “The Last Night” (4С.1–4С.6; called Papa): by the fire, “We go to London tomorrow”; the word at her door, Papa's chair;
// he comes to take his leave; ⚑ past the chair — then, late (walked past): the dark, the Garden, ⚑ her name, tears;
// midnight, Papa waiting at the wall, “You promised.” — “Yes.”; the chamber. Stayed at the door or woke Papa: the
// chapter ends after the chair.
// Each step is one of the first form and one of the second (their titles say both); a step with nothing in this form
// passes.
// On the scenes' pieces (game.md «Stage 5 — pieces»): the dark is the Tapestry Chamber with its wall open.
// Reads: choices.wall, choices.hunger, choices.trap, choices.goodnight, scales. Leaves: choices.name, choices.door,
// marks.name, marks.door, marks.word.
import { LIBRARY, CORRIDOR, CHAMBER, facts, piece } from '../story.js';
import { hand, release, word, tiptoe, threshold, shoulder } from '../minigames/all.js';

const FAMILY = ['virginia', 'otis', 'mrs_otis', 'washington', 'twin_star', 'twin_stripes'];

export default {
  number: 'IV', title: tr('The Garden of Death'),
  titleOf: state => (facts(state).wall === 'papa' ? tr('The Last Night') : tr('The Garden of Death')),
  titles: ['The Dark · By the Fire', 'The House · The Word', 'The Garden · The Farewell', 'Her Name · Past the Chair', 'Tears · Too Late', 'Midnight · Too Late: the Wall'],
  choices: [
    { id: 'door', title: tr('Past the chair'), weight: '⚑', options: [{ id: 'pass', label: tr('Walk past Papa') }, { id: 'stay', label: tr('Stay at the door') }, { id: 'wake', label: tr('Wake Papa') }] },
    { id: 'name', title: tr('Her name'), options: [{ id: 'named', label: tr('“…and give rest to Lady Eleanore”') }, { id: 'unnamed', label: tr('“Lord, let him sleep”') }] },
  ],
  steps: [
    // 4.1 the dark (`dark`, М6) | 4С.1 by the fire (`fireside`, `knock_evening`, `london`)
    async g => {
      const { wall, shares } = facts(g.state);
      if (wall === 'go') {
        await dark(g);
        return;
      }
      await piece(g, 'fireside', {}, async () => {
        await g.scene('library', { beat: 'fireside', here: FAMILY, moods: { otis: 'neutral', virginia: 'sad' }, keys: { ...LIBRARY.evening, shares } });
        await g.say('virginia', 'He asked me to go with him into the Garden of Death. Through the wall. To pray for him');
      });
      if (shares) await g.say('otis', 'You told us about him before. I believe you');
      else {
        await g.say('washington', 'How many times have you been to him, Ginny?');
        g.mood('otis', 'sad');
        await g.say('narrator', 'She did not answer. Her father touched her forehead — then looked at her a long while, and stopped smiling');
      }
      await piece(g, 'knock_evening', { knock: async () => { g.sound('knock'); await g.wait(1300); await g.say('otis', 'Sir?'); } },
        () => g.scene('tapestry', { beat: 'knock_evening', here: ['otis'], moods: { otis: 'thinking' } }));
      await piece(g, 'london', {
        say: async () => {
          await g.say('otis', 'We are going to London. Tomorrow morning, all of us');
          await g.say('twin_star', 'And the ghost?');
        },
      }, () => g.scene('library', { beat: 'london', here: FAMILY, moods: { otis: 'thinking', virginia: 'sad' }, keys: LIBRARY.evening }));
    },
    // 4.2 the house looking for her (`calling`, `lantern`, `pocket`) | 4С.2 the word (`word`, М9, `chair_sit`)
    async g => {
      const { wall, shares, trap } = facts(g.state);
      if (wall === 'go') {
        await piece(g, 'calling', { call: () => g.say('mrs_otis', 'Virginia! Ginny!', { how: 'calling up the stairs, worried' }) },
          async () => {
            await g.scene('hall', { beat: 'calling', here: ['mrs_otis', 'twin_star', 'twin_stripes'], moods: { mrs_otis: 'afraid' } });
            g.sound('bell');
          });
        await piece(g, 'lantern', {
          pound: async () => {
            if (!shares) return;
            g.sound('knock', { rate: 0.75 });
            g.sound('knock', { rate: 0.7, delay: 1.1 });
            await g.say('washington', 'Give her back!', { how: 'shouting, beating on the wall' });
          },
        },
          () => g.scene('tapestry', { beat: 'lantern', here: ['washington'], moods: { washington: 'afraid' }, keys: { trap, shares } }));
        await piece(g, 'pocket', { say: () => g.say('otis', 'The gypsies were camped by the field') },
          () => g.scene('library', { beat: 'pocket', here: ['otis'], moods: { otis: 'sad' }, keys: LIBRARY.night }));
        g.sound('hooves', { far: true });
        await g.wait(1500);
        await g.say('narrator', 'Hoofbeats in the yard: Mr Otis and Cecil galloped off to the gypsy camp. Mrs Otis sat in the hall in her shawl, and did not get up');
        return;
      }
      await g.scene('corridor', { beat: 'word', here: ['otis', 'virginia'], moods: { otis: 'neutral', virginia: 'sad' }, keys: CORRIDOR.word });
      await g.say('otis', 'Promise me: never alone. Not to him, not after him');
      await g.beat('word');
      const { slips } = await g.play(word);
      await g.say('virginia', 'I promise');
      if (slips) await g.say('narrator', 'She took her hand back first. Her father held his out a moment longer');
      await piece(g, 'chair_sit', { sat: () => g.say('otis', 'I’ll sit here. I can’t sleep anyway') });
      g.mark('word', 'given', tr('You promised Papa: “Never alone.”'));
    },
    // 4.3 the Garden (`garden_come`) | 4С.3 the farewell (`farewell`)
    async g => {
      const { wall, hunger, plays } = facts(g.state);
      if (wall === 'go') {
        await piece(g, 'garden_come', {
          sat: () => (hunger === 'killed' ? g.say('simon', 'You said then: “You killed her. Nothing else matters.” Do you think so still?') : null),
        }, () => g.scene('death', { beat: 'garden_come', here: ['simon', 'virginia'], moods: { simon: 'tired', virginia: 'sad' }, keys: { parcel: hunger === 'bread' } }));
        await pray(g);
        return;
      }
      await piece(g, 'farewell', {
        far: () => (plays ? g.say('narrator', 'For the first time in three hundred years Sir Simon walked down the corridor without a single sound') : null),
        bow: async () => {
          await g.say('simon', 'I have come to take my leave. It is the custom');
          if (hunger === 'bread') await g.say('simon', 'No one has offered me bread for three hundred years');
          else await g.say('simon', 'Of everyone. Even of those who read me morals');
        },
      }, () => g.scene('corridor', { beat: 'farewell', here: ['otis', 'virginia', 'simon'], moods: { otis: 'eyes_closed', virginia: 'neutral', simon: plays ? 'neutral' : 'tired' }, keys: { ...CORRIDOR.farewell, ghost_light: plays ? 1 : 0.4, plays } }));
    },
    // 4.4 ⚑ her name | 4С.4 ⚑ past the chair (`farewell_go`; then М8 `pass_chair` | М8в `stay_door` | М8б `wake_papa`)
    async g => {
      const { wall, plays, wished } = facts(g.state);
      if (wall === 'go') {
        await g.scene('death', { here: ['simon', 'virginia'], moods: { simon: 'tired', virginia: 'sad' } }, { cut: true });
        await name(g);
        return;
      }
      await piece(g, 'farewell_go', {}, () => g.scene('corridor', { beat: 'farewell_go', here: ['otis', 'virginia', 'simon'], moods: { otis: 'eyes_closed', virginia: 'sad', simon: 'tired' }, keys: { ...CORRIDOR.farewell, ghost_light: plays ? 1 : 0.4, plays } }, { cut: true }));
      const door = await g.choose('door', { 'virginia#chest': [
        { id: 'pass', label: tr('Walk past Papa') },
        { id: 'stay', label: tr('Stay at the door') },
        { id: 'wake', label: tr('Wake Papa') },
      ] });
      if (door === 'pass') {
        await g.play(tiptoe);
        await piece(g, 'pass_chair');
        await g.say('virginia', 'I will come');
        await g.wait(1500);
        await g.say('simon', 'You promised your father. I heard');
        await g.say('virginia', 'I know');
      } else if (door === 'stay') {
        const { stepped } = await g.play(threshold);
        if (stepped) await g.say('narrator', 'She took half a step over the threshold, and stopped. He did not turn');
        await piece(g, 'stay_door', {
          stop: async () => {
            if (!wished) return;
            await g.say('virginia', 'Good night, sir', { how: 'a whisper after him down the corridor' });
            await g.say('simon', 'Good night, Miss Virginia');
          },
        });
        g.here('simon', false);
      } else {
        const { sharp } = await g.play(shoulder);
        g.mood('otis', 'surprised');
        await piece(g, 'wake_papa', {
          up: async () => {
            g.mood('otis', 'neutral');
            await g.say('otis', 'Sir. My daughter stays', { how: 'slowly, very politely, standing between them' });
          },
          bow: () => (wished ? g.say('simon', 'Good night, Miss Virginia') : null),
        }, sharp ? () => { g.set('otis_with', []); } : null);
        g.here('simon', false);
      }
      g.apply('door');
    },
    // 4.5 tears (`tears`, М7, `sleep`) | 4С.5 too late: the dark, the Garden, ⚑ her name
    async g => {
      const { wall, door } = facts(g.state);
      if (wall === 'go') {
        await tears(g);
        return;
      }
      if (door !== 'pass') return;
      await dark(g);
      await piece(g, 'garden_come', {}, () => g.scene('death', { beat: 'garden_come', here: ['simon', 'virginia'], moods: { simon: 'tired', virginia: 'sad' }, keys: { parcel: false } }));
      await pray(g);
      await name(g);
    },
    // 4.6 midnight (`midnight`, `chamber_family`, `casket`) | 4С.5 too late: tears, midnight, Papa at the wall (`woken`,
    // `wait_wall`, `chamber_father`, `casket`)
    async g => {
      const { wall, door, shares, trap, named, warned } = facts(g.state);
      if (wall === 'go') {
        await piece(g, 'midnight', {
          stroke: async () => {
            await twelve(g);
            await g.say('narrator', 'The clock struck, and with its last stroke the whole house fell silent');
          },
          panel: () => { g.sound('panel'); },
          hold: async () => {
            await g.say('otis', 'How could you!');
            await g.say('virginia', 'Papa, I have been with the ghost. He is dead. Come');
            if (named) await g.say('virginia', 'He said her name');
            else await g.say('virginia', 'He was a very wicked man. I prayed for him');
          },
        }, () => g.scene('hall', { beat: 'midnight', here: [...FAMILY, 'cecil'], moods: { otis: 'sad', virginia: 'tired', mrs_otis: 'afraid' }, keys: { shares, trap } }));
        await piece(g, 'chamber_family', {
          almond: () => g.say('twin_star', 'The almond! The dry almond has blossomed!', { how: 'at the little window, astonished, not loud' }),
        }, () => g.scene('chamber', { beat: 'chamber_family', here: FAMILY, keys: CHAMBER.family }));
        await piece(g, 'casket', {}, () => { g.set('stub', warned); });
        return;
      }
      if (door !== 'pass') return;
      await tears(g);
      await g.scene('corridor', { here: ['otis'], moods: { otis: 'eyes_closed' }, keys: CORRIDOR.woken, air: { wind: 0.22, clock: 0.12 } });
      await twelve(g, { far: true });
      await g.say('narrator', 'The clock struck — and the whole house fell silent at once');
      await piece(g, 'woken', {}, () => g.scene('corridor', { beat: 'woken', here: ['otis'], moods: { otis: 'eyes_closed' }, keys: CORRIDOR.woken, air: {} }, { cut: true }));
      await piece(g, 'wait_wall', {
        knock: async () => { g.sound('knock'); await g.wait(1300); await g.say('otis', 'Sir. Ginny'); },
        out: async () => {
          g.mood('virginia', 'tired');
          await g.say('otis', 'You promised');
          await g.say('virginia', 'Yes');
          await g.wait(2000);
          await g.say('otis', 'Show me');
        },
      }, () => g.scene('tapestry', { beat: 'wait_wall', here: ['otis', 'virginia'], moods: { otis: 'afraid' }, air: {} }));
      await g.say('narrator', 'He did not give her his hand. She led him behind the tapestry, down a narrow passage in the wall, into the secret chamber');
      await piece(g, 'chamber_father', {}, () => g.scene('chamber', { beat: 'chamber_father', here: ['virginia', 'otis'], moods: { virginia: 'sad', otis: 'sad' }, keys: CHAMBER.father }));
      await piece(g, 'casket', {}, () => { g.set('stub', warned); });
    },
  ],
};

// 4.6 / 4С.5: midnight — the clock strikes twelve, and with the last stroke the whole house falls silent at once: the
// clock, the wind, the boards (every bed of sound out). far — heard from the hall below
async function twelve(g, { far = false } = {}) {
  for (let i = 0; i < 12; i++) {
    g.sound('strike', { far, loud: far ? 0.9 : 1, cut: 1.9 });
    await g.wait(1600);
  }
  await g.wait(600);
  g.air({});
  await g.wait(1400);
}
// 4.1 / 4С.5: the dark beyond the wall, the voices; holding his hand (`dark`, М6)
async function dark(g) {
  await piece(g, 'dark', {
    voices: async () => {
      g.sound('wings', { loud: 0.7 });
      await g.say('voices', 'Go back, little Virginia! Go back!');
      await g.say('simon', 'Do not listen');
    },
  }, () => g.scene('dark', { beat: 'dark', here: ['simon', 'virginia'], moods: { simon: 'tired', virginia: 'afraid' }, keys: { wall: 1, dark: 1, shapes: 1 } }));
  const { slips } = await g.play(hand);
  if (slips) await g.say('narrator', 'Her hand lost his in the dark and searched — and his found hers by itself');
}
// 4.3 / 4С.5: his one request
async function pray(g) {
  await g.say('simon', 'Pray with me. I do not remember the words. Of her — we will not speak', { how: '“of her” said quickly, passing it by; he does not say her name' });
}
// 4.4 / 4С.5: ⚑ her name — she prays aloud, he repeats after her word for word (`named`, `named_back` | `unnamed`)
async function name(g) {
  const { plays } = facts(g.state);
  await g.say('narrator', 'She prayed aloud, and he repeated it after her, word for word');
  const name = await g.choose('name', { 'virginia#chest': [
    { id: 'named', label: tr('“…and give rest to Lady Eleanore”') },
    { id: 'unnamed', label: tr('“Lord, let him sleep”') },
  ] });
  if (name === 'named') {
    await g.say('virginia', 'Lord, have mercy on him — and give rest to Lady Eleanore', { how: 'praying aloud, simply, like a child' });
    // (he repeats it after her — up to the name, and stops)
    await g.say('simon', 'Lord, have mercy on me — and give rest to…', { how: 'repeating after her word for word, hoarse and slow; he stops dead before the name' });
    g.mood('simon', 'angry');
    g.air({ night: 0.22 });
    await piece(g, 'named', {
      stand: () => (plays ? g.say('simon', 'Madam, I said: of her we will not speak. I am Sir Simon de Canterville, and I do not bargain at a graveside', { how: 'drawing himself up, cold and proud' }) : null),
    });
    await piece(g, 'named_back', {
      name: async () => {
        g.mood('simon', 'sad');
        await g.say('simon', 'Eleanore', { how: 'barely audible, the first time in three hundred years' });
        if (plays) await g.say('simon', 'There. Your father would be pleased: a bargain', { how: 'dryly' });
      },
    });
    await g.say('simon', 'Lord, give rest to Lady Eleanore. And have mercy on me', { how: 'the prayer to its end, quietly and flatly, not looking at her' });
    await g.say('narrator', 'He did not look at Virginia again. The nightingale sang no more');
  } else {
    await g.say('virginia', 'Lord, let him sleep', { how: 'praying aloud, simply, like a child' });
    // (he repeats it after her, like a child, looking at her)
    await g.say('simon', 'Lord… let me sleep', { how: 'repeating after her like a child, slowly, wondering at the words, looking at her' });
    await piece(g, 'unnamed');
  }
  g.apply('name');
}
// 4.5 / 4С.5: tears; the casket; letting go of his hand; he sleeps (`tears`, М7, `sleep`)
async function tears(g) {
  const { named, wished } = facts(g.state);
  await g.say('narrator', 'And a little child gave away its tears: Virginia wept — for him');
  await piece(g, 'tears', {}, () => g.scene('death', { beat: 'tears', here: ['simon', 'virginia'], moods: { simon: named ? 'sad' : 'surprised', virginia: 'sad' }, keys: { named, nightingale: named ? 0 : 1 } }, { cut: true }));
  const { long } = await g.play(release);
  if (long) await g.say('narrator', 'His hand slipped out of hers by itself');
  g.mood('simon', 'tired');
  await piece(g, 'sleep', {
    lie: () => (wished ? g.say('simon', 'Good night, Miss Virginia', { how: 'very softly, falling asleep' }) : g.say('simon', 'Farewell', { how: 'very softly, falling asleep' })),
  });
  g.here('simon', false);
}
