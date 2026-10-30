// IV. “The European Mail” (scenario §5 4.1–4.2, §9 the finales). Ten to three: the European mail ready under the
// hangar's lamps, Rivière lights the field for it; Roblet where Ш1 put him, Robineau as 3.7 left him, her silhouette
// in the office window, the board's paper in Robineau's folder, the pilot as the exceptions have him; ⚑ the European
// mail — fly, stand down till dawn, or say nothing (a timer of ten seconds: nothing — he says nothing). Then the finale
// it decides (its name the title): three o'clock in the office, the rain — where she is, what she takes away, the log,
// the window and the door; the bureau (Ф.5); and the next evening, the epilogue: the news, Robineau, the last of it.
// The map of chapter 4 comes only after the epilogue (scenario §10): the finale and the epilogue are its steps.
// Stage 4: the field with the European mail (the pilot, the mechanics, the bags, her silhouette upstairs; the plane
// going north or stood down); Rivière's office in its own scene (where she stands or sits, the rain, the field below);
// the bureau at three, at dawn (the telegraphist dozing on the bench, the European rolled back into the hangar, the
// flags taken down) and the next evening (the Chilean landing, or the field idle with Pellerin by his plane). Stage 5:
// the mini-games real — М8 up and down, М7 (missed: the pilot moves off by himself), М2 in the log (missed: a blot he
// blots himself), М1 on the map; the field, the office and the bureau on their pieces.
// Reads: choices.roblet, .robineau, .minute; scales.exceptions, .told. Leaves: choices.european, marks.european.
import { ENDINGS, FIELD, FLAGS, OFFICE, PLANE, bureau, clock, facts, piece } from '../story.js';
import { light_european, chocks, light_off, log, flag_red, flag_late, flag_down, flag_blue } from '../minigames/all.js';

const label = id => ENDINGS.find(e => e.id === id).label;
// the field at ten to three: the European under the lamps, its engine warming, the bags; at the engine the young
// mechanic if Roblet is gone, else Roblet where Ш1 put him; the mechanics' faces to Rivière
const crew = roblet => (roblet === 'fire' ? ['mechanic', 'mechanic_b', 'mechanic_c'] : ['mechanic_b', 'mechanic_c']);
const ready = roblet => ({
  ...PLANE.stand('european', 1), bags: 1, toolbox: 0, workbench: roblet === 'fire' ? 'empty' : 'tools',
  roblet_spot: roblet === 'remove' ? 'chocks' : 'engine', mechanic_look: 'plane#nose', mechanic_b_look: 'riviere', mechanic_c_look: 'riviere',
});
// the bureau after the European (Ф.5): the flags as the night left them; Robineau as 3.7 left him — beside Rivière
// (sat with him), at his desk over the report (sent to work), or gone home (went out alone)
const night = f => (f.bearing ? FLAGS.sea : FLAGS.night);
const nearby = f => (f.robineau === 'silent' ? [] : ['robineau']);
const desk = f => ({ robineau_spot: f.robineau === 'work' ? 'writing' : 'desk', robineau_look: f.robineau === 'work' ? 'rob_top' : 'riviere' });

export default {
  number: 'IV', title: tr('The European Mail'),
  titles: ['The Field', 'The European Mail', 'The Office', 'The Log', 'The Bureau', 'The Next Evening'],
  choices: [
    { id: 'european', title: tr('The European mail'), weight: '⚑', options: [
      { id: 'fly', label: tr('You raised your hand — the lights went north') },
      { id: 'ground', label: tr('You said “stand down” — the floodlights went out') },
      { id: 'silent', label: tr('You said nothing — “Since you say nothing — by the timetable”') }] },
  ],
  steps: [
    // 4.1: the field; М8 the light; who is where (`european`, М8, `twice` | `at_chocks` | `who_checked`,
    // `robineau_out` (sent to work), `window`, `folder`, `ready`)
    async g => {
      const { roblet, robineau, bends } = facts(g.state);
      const here = ['riviere', 'pilot', 'robineau', ...crew(roblet), ...(roblet === 'fire' ? [] : ['roblet'])];
      await piece(g, 'european', {}, () => g.scene('field', { beat: 'european', here, moods: { riviere: 'tired', roblet: 'sad', robineau: 'sad', pilot: 'neutral' },
        keys: { ...FIELD.dark, ...ready(roblet), robineau, bends, roblet, riviere_look: 'hangar_front#switch', robineau_look: 'riviere', roblet_look: 'riviere', pilot_look: 'plane' } }));
      await g.play(light_european);
      if (roblet === 'keep') await piece(g, 'twice', { shut: () => g.sound('cowling', { loud: 0.7 }), wipe: () => g.say('roblet', 'Checked it twice') });
      else if (roblet === 'remove') await piece(g, 'at_chocks');
      else {
        await piece(g, 'who_checked', {
          ask: async () => {
            await g.say('pilot', 'Who checked it?');
            await g.say('mechanic', 'I did. Roblet’s gone');
          },
        });
      }
      // (Robineau as 3.7 left him: come out with Rivière and at his shoulder, or by the hangar wall without his coat — the
      // piece `european` shows both; sent to work, he comes out now, buttoned up, with his report)
      if (robineau === 'work') await piece(g, 'robineau_out');
      await piece(g, 'window', {
        pilot: async () => {
          await g.say('pilot', 'They said to hold it till he came in');
          await g.wait(1200);
          await g.say('pilot', 'The south is closed. By three the storm will be here');
        },
      });
      await piece(g, 'folder', { look: () => g.say('robineau', 'One more… this same night…', { how: 'looking up at the window; he does not finish' }) });
      if (bends === 'none') await piece(g, 'ready');
      else if (bends === 'one') await piece(g, 'ready', { say: () => g.say('pilot', 'Ready, sir') });
      else await piece(g, 'ready', { say: () => g.say('pilot', 'Ready. Ready a long time') });
    },
    // 4.2: ⚑ the European mail — a timer of ten seconds: nothing chosen, he says nothing (`runup`, then `hand_up`,
    // М7, `takeoff` | `stand_down`, М8, `dark_field` | `waits`, `timetable`)
    async g => {
      const { roblet, robineau, exceptions, bends } = facts(g.state);
      const here = ['riviere', 'pilot', ...crew(roblet), ...(roblet === 'fire' ? [] : ['roblet']), 'robineau'];
      g.sound('runup', { loud: 0.8, delay: 0.3 });
      await piece(g, 'runup', {}, () => g.scene('field', { beat: 'runup', here, moods: { riviere: 'tired', roblet: 'sad', robineau: 'sad', pilot: 'neutral' },
        keys: { ...FIELD.lit, ...ready(roblet), madame_window: 1, robineau, bends, roblet, robineau_look: 'riviere', roblet_look: 'riviere', pilot_look: 'riviere' },
        air: { field: 0.3, idle: 0.5 } }, { cut: true }));
      const european = await g.choose('european', { 'riviere#chest': [
        { id: 'fly', label: tr('Raise his hand: fly') },
        { id: 'ground', label: tr('“Stand down. Till dawn”') },
        { id: 'silent', label: tr('Say nothing') },
      ] }, { within: 10000, otherwise: 'silent' });
      if (european === 'fly') {
        await piece(g, 'hand_up');
        await g.play(chocks);
        await piece(g, 'takeoff', {
          chocks: () => { g.air({ field: 0.3 }); g.sound('takeoff'); },
          gone: () => (robineau === 'work' ? g.say('robineau', 'Two fifty-two', { how: 'writing the time down' }) : null),
        });
        g.here('pilot', false);
      } else if (european === 'ground') {
        await g.say('riviere', 'Stand down. Till dawn');
        await piece(g, 'stand_down', {
          pilot: async () => {
            if (exceptions === 0) {
              await g.say('pilot', 'Stand down? You?');
              g.mood('robineau', 'surprised');
            } else await g.say('pilot', 'Till dawn, sir');
          },
          robineau: async () => {
            await g.say('robineau', 'To the board… shall I write?');
            await g.say('riviere', 'I will myself');
          },
        });
        await g.play(light_off);
        g.air({ field: 0.3 });
        g.sound('engine_off', { loud: 0.8 });
        await piece(g, 'dark_field', {
          still: async () => {
            if (roblet !== 'keep') return;
            await g.say('roblet', 'Because of me?');
            await g.say('riviere', 'No');
          },
        });
      } else {
        await piece(g, 'waits', {
          say: async () => {
            await g.say('pilot', 'He won’t come now');
            await g.wait(1200);
            await g.say('pilot', 'Since you say nothing — by the timetable');
          },
        });
        await piece(g, 'timetable', {
          chocks: () => { g.air({ field: 0.3 }); g.sound('takeoff'); },
          gone: () => (robineau === 'sit' ? g.say('robineau', 'Gone', { how: 'quietly, beside him' }) : null),
        });
        g.here('pilot', false);
      }
      g.apply('european');
    },
    // Ф.1–Ф.2: the office at three; where she is; what she takes away; her two movements (`office`, `rises`,
    // `gloves_on` | `tape_glove`, `leaves`)
    async g => {
      const f = facts(g.state);
      await piece(g, 'office', {}, async () => {
        await g.scene('office', { beat: 'office', here: ['riviere', 'madame'], moods: { riviere: 'tired', madame: 'sad' },
          keys: { ...OFFICE(f), riviere_spot: f.ending === 'dawn' ? 'window' : 'room', madame_spot: { victory: 'door', silence: 'window', dawn: 'chair' }[f.ending],
            riviere_look: 'madame', madame_look: f.ending === 'silence' ? 'pane' : 'riviere' } });
        g.title(label(f.ending));
        // (the storm at the field: thunder over the rain; and where the European went without an order, the last of its
        // drone dying away as she stands at the window)
        g.sound('thunder', { loud: 0.55, far: true, delay: 2.5 });
        if (f.ending === 'silence') g.sound('takeoff', { loud: 0.45, far: true, delay: 0.5 });
      });
      if (f.ending === 'dawn') await piece(g, 'rises');
      if (f.minute === 'bearing') {
        await g.say('madame', 'Will they go there?');
        await g.say('riviere', 'The launches from Trelew. At dawn');
        await g.say('madame', 'I will go to Trelew');
      } else if (f.minute === 'hers') {
        await g.say('madame', 'He saw a light');
        await g.wait(1200);
        await g.say('madame', 'Is it lights? Did he land?');
        await g.wait(1500);
        await piece(g, 'tape_glove', { end: () => g.say('madame', 'I will be at home') });
      } else if (f.storm) {
        await g.say('madame', 'He began — to me. What comes next?');
        await g.say('riviere', 'It could not be made out');
      } else {
        await piece(g, 'gloves_on');
      }
      // her two movements as she goes: to him (by Ш2 and what she was told), to the window (by Ш3)
      g.set('leave_turn', f.minute === 'bearing' ? (f.storm ? 'nod' : 'none') : f.minute === 'hers' ? 'look' : f.storm ? 'wait' : 'past');
      g.set('leave_look', { victory: 'none', silence: 'sky', dawn: 'field' }[f.ending]);
      await piece(g, 'leaves');
      g.here('madame', false);
    },
    // Ф.3–Ф.4: М2 the log; the window and the door (`log`, `log_done`, `doorway`)
    async g => {
      const f = facts(g.state);
      await piece(g, 'log', {}, () => g.scene('office', { beat: 'log', here: ['riviere', ...(f.robineau === 'sit' ? ['robineau'] : [])], moods: { riviere: 'tired', robineau: 'sad' },
        keys: { ...OFFICE(f), rain: 1, riviere_spot: 'desk', riviere_look: 'desk_top#log', robineau_look: 'riviere' } }, { cut: true }));
      const { blot } = await g.play(log, { line: f.bearing ? 'bearing' : 'unknown' });
      if (blot) await g.plate(tr('Rivière blots it himself.'));
      await piece(g, 'log_done');
      if (f.roblet === 'keep') await g.plate(tr('Below, in the rain, Roblet stands by the hangar.'));
      else if (f.roblet === 'remove') await g.plate(tr('Below, in the rain, Roblet is gathering up the chocks.'));
      else await g.plate(tr('Below, under the lamp by the hangar, Roblet’s empty workbench in the rain.'));
      if (f.robineau === 'sit') await piece(g, 'doorway', { in: () => g.say('robineau', 'I am here, sir', { how: 'in the doorway, quietly' }) });
      else if (f.robineau === 'work') {
        // (behind the wall a typewriter: his report)
        g.air({ rain: 0.3, typewriter: 0.3 });
        await g.wait(6500);
      } else await g.plate(tr('In the window: he is still by the hangar wall, in the rain, without his coat.'));
    },
    // Ф.5: the bureau — by the finale (`victory_map` | `silence_map` | `dawn`, `flags_down`)
    async g => {
      const f = facts(g.state);
      const at3 = { ...bureau(clock(3, 10), { flags: night(f), outside: 'empty' }), ...desk(f), robineau: f.robineau, riviere_look: 'map' };
      if (f.ending === 'victory') {
        await piece(g, 'victory_map', {}, () => g.scene('bureau', { beat: 'victory_map', here: ['riviere', 'telegraphist', ...nearby(f)], moods: { riviere: 'tired', telegraphist: 'neutral', robineau: 'sad' }, keys: at3 }));
        await g.play(flag_red);
        await g.say('narrator', 'Rivière the Great, Rivière the Conqueror, bearing his heavy victory');
      } else if (f.ending === 'silence') {
        await piece(g, 'silence_map', {}, () => g.scene('bureau', { beat: 'silence_map', here: ['riviere', 'telegraphist', ...nearby(f)], moods: { riviere: 'tired', telegraphist: 'neutral', robineau: 'sad' }, keys: at3 }));
      } else {
        await piece(g, 'dawn', {}, () => g.scene('bureau', { beat: 'dawn', here: ['riviere', 'telegraphist', ...nearby(f)], moods: { riviere: 'tired', telegraphist: 'eyes_closed', robineau: 'sad' },
          keys: { ...bureau(clock(6, 0), { flags: night(f), outside: 'rolled' }), ...desk(f), robineau: f.robineau, roblet: f.roblet, telegraphist_spot: 'bench', riviere_look: 'map', telegraphist_look: null } }));
        await g.play(flag_down);
        await piece(g, 'flags_down');
        if (f.robineau === 'silent') await g.plate(tr('Robineau is not here: he went home without a word.'));
      }
    },
    // the epilogue: the next evening — Э.1 the news, Э.2 Robineau, Э.3 by the finale (`next_evening`, then
    // `bench_again` | `report` | `cough`; `montevideo`, `chilean_lands` | `release` | `telegram`)
    async g => {
      const f = facts(g.state);
      await piece(g, 'next_evening', {}, () => g.scene('bureau', { beat: 'next_evening', here: ['riviere', 'telegraphist', 'robineau'], moods: { riviere: 'neutral', telegraphist: 'neutral', robineau: 'neutral' },
        keys: { ...bureau(clock(19, 40), { flags: f.ending === 'dawn' ? FLAGS.down : FLAGS.evening, outside: { victory: 'landing', silence: 'european', dawn: 'idle' }[f.ending] }),
          robineau: f.robineau, riviere_look: 'robineau', telegraphist_look: 'tel_inker', robineau_spot: 'desk', robineau_look: 'riviere' } }));
      if (f.bearing) await g.say('robineau', 'Trelew: the launches are back. On the water, by the point of the bearing — a patch of oil. Nothing more');
      else {
        await g.say('robineau', 'The search along the line: nothing');
        if (f.minute === 'hers') await g.say('robineau', 'Madame Fabien telephoned. She asks whether they have found him');
      }
      if (f.robineau === 'sit') {
        await piece(g, 'bench_again', { up: () => g.say('robineau', 'Forgive me') });
      } else if (f.robineau === 'work') {
        await piece(g, 'report', {
          laid: async () => {
            await g.say('robineau', 'All by the clock, sir');
            await g.say('riviere', 'Good');
          },
        });
      } else {
        await piece(g, 'cough', {
          end: async () => {
            await g.say('robineau', 'I seem to have caught a cold…');
            g.set('riviere_look', 'map');
            await g.say('riviere', 'Get to work', { how: 'without turning round' });
          },
        });
      }
      if (f.ending !== 'dawn') {
        if (f.bends === 'none') {
          await g.say('robineau', 'The fine for Pellerin — into the orders?');
          await g.say('riviere', 'Into the orders');
        } else if (f.bends === 'one') {
          await g.say('robineau', 'They are asking about last night… was it just once?');
          await g.say('riviere', 'Once');
        } else {
          await g.say('robineau', 'They are asking: are the rules now — as they were last night?');
          await g.say('riviere', 'Get to work');
        }
      }
      if (f.ending === 'victory') {
        g.set('tape', 1);
        g.air(null);
        await piece(g, 'montevideo', {
          read: async () => {
            await g.say('telegraphist', 'European: passed Montevideo on time');
            // (the same knock as in the prologue, the same words)
            g.sound('key', { loud: 0.6, far: true, words: 'SAN JULIAN CIEL CLAIR' });
            await g.say('telegraphist', 'Patagonian: passed San Julián. Sky clear');
          },
        });
        g.set('tape', 0);
        g.air(null);
        await g.play(flag_blue);
        g.sound('landing', { loud: 0.7, far: true });
        await piece(g, 'chilean_lands');
      } else if (f.ending === 'silence') {
        await piece(g, 'release', {
          ask: () => g.say('telegraphist', 'Release the Patagonian?'),
          say: () => g.say('riviere', 'Release'),
        });
        await g.play(flag_late);
      } else {
        await piece(g, 'telegram', {
          read: async () => {
            await g.say('robineau', 'Night flights suspended pending inquiry', { how: 'reading a telegram aloud, flatly' });
            if (f.exceptions >= 1) await g.say('robineau', 'The director to submit explanations of the departures from the rules last night', { how: 'reading a telegram aloud, flatly' });
          },
          window: () => g.say('narrator', 'The mail went by day. The night was nobody’s again'),
        });
      }
    },
  ],
};
