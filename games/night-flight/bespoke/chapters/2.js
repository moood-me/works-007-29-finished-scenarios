// II. “The Storm” (scenario §5, 2.1–2.4). Twenty past eleven: the Asunción mail lands on time, its pilot on Roblet;
// the storm from the south, the fields closed, no word from Fabien — “hold the European until he comes in”; in the
// cockpit, “Where to?” — “I don’t know”, the plane thrown about; half past twelve: Robineau back from supper with
// Pellerin, and the European pilot sits down to wait; twenty-five to two, the telephone — ⚑ what she is told.
// Stage 4: the Asunción pilot and Robineau in the bureau; the European pilot sits down on the bench; Rivière at the
// telephone on Robineau's desk. Stage 5: М1 and М5 real (М5 missed: over on a wing, the water below); on the scenes' pieces —
// the bureau's asuncion_in, storm_south, back, folder_shift, to_map, coat_off, pilot_in, phone, phone_robineau,
// phone_down; the cockpit's storm.
// Reads: choices.roblet, .fine; marks.touched. Leaves: choices.phone, marks.phone, scales.told.
import { FLAGS, SKY, bureau, clock, facts, piece } from '../story.js';
import { flag_north, stick } from '../minigames/all.js';

export default {
  number: 'II', title: tr('The Storm'),
  titles: ['The Asunción Mail', 'The Storm', 'Robineau', 'The Telephone'],
  choices: [
    { id: 'phone', title: tr('The telephone'), options: [
      { id: 'wind', label: tr('You told her: the wind — “Thank you. Forgive me”') },
      { id: 'storm', label: tr('You told her the truth — “I am coming”') },
      { id: 'robineau', label: tr('You gave the receiver away — Robineau did not raise his eyes') }] },
  ],
  steps: [
    // 2.1: the Asunción mail; М1 the flag; the storm from the south (`asuncion_in`, `storm_south`)
    async g => {
      const { roblet } = facts(g.state);
      // (over the roof the drone of an engine: the Asunción mail coming down on time — in the window, the floodlights lit
      // and its lamp over the field)
      await g.scene('bureau', { here: ['riviere', 'telegraphist'], moods: { riviere: 'neutral', telegraphist: 'neutral' },
        keys: { ...bureau(clock(23, 20), { tape: 1, flags: FLAGS.trelew, outside: 'landing' }), riviere_spot: 'flags', riviere_look: 'map', telegraphist_look: 'tel_inker', asuncion_look: 'riviere' } });
      g.sound('landing', { far: true });
      await g.wait(4500);
      await g.say('telegraphist', 'Asunción: landed');
      // (the map close: the northern flag comes home)
      g.set('camera_target', 'map');
      g.set('camera_shot', 'medium');
      await g.wait(1600);
      await g.play(flag_north);
      g.here('asuncion', true);
      g.set('tape', 0);
      g.air(null);
      await piece(g, 'asuncion_in');
      if (roblet === 'fire') {
        await g.say('asuncion', 'Sorry for the old man');
        await g.wait(1200);
        await g.say('asuncion', 'And I sat in that field an hour, thinking — that’s it');
      } else if (roblet === 'keep') {
        await g.say('asuncion', 'Roblet on the engines?');
        await g.wait(1200);
        await g.say('asuncion', 'Well. You know best');
      } else {
        await g.say('asuncion', 'Saw him with the chocks. He put the chocks under me');
        await g.wait(1200);
        await g.say('asuncion', 'He didn’t look at me');
      }
      // (the inker runs again: the south)
      g.set('tape', 1);
      g.air(null);
      await piece(g, 'storm_south', {
        read: async () => {
          await g.say('telegraphist', 'Trelew: storm from the south. Field closed');
          await g.say('telegraphist', 'Comodoro: wind eighty. No contact with Fabien for fifteen minutes');
        },
        order: () => g.say('riviere', 'All stations listen for Fabien. Bearing on request. Hold the European until he comes in'),
      });
      g.air(null);
    },
    // 2.2: the storm; М5 the stick (`storm`)
    async g => {
      g.sound('thunder', { loud: 0.7, delay: 1.6 });
      await piece(g, 'storm', {
        note: () => g.say('radioman', 'Trelew closed. Comodoro closed. Where to?', { how: 'a note written in the air, read short over the engine' }),
        answer: () => g.say('fabien', 'I don’t know', { how: 'a note written in the air, read short over the engine' }),
      }, () => g.scene('cockpit', { beat: 'storm', here: ['fabien', 'radioman'], moods: { fabien: 'thinking', radioman: 'afraid' }, keys: SKY.storm }));
      await g.play(stick);
      await g.say('narrator', 'He no longer knew whether he was over land');
    },
    // 2.3: Robineau back from supper; the European pilot comes in (`back`, `folder_shift`, `to_map`, `coat_off`,
    // `pilot_in`)
    async g => {
      const { fine, touched } = facts(g.state);
      await piece(g, 'back', {}, () => g.scene('bureau', { beat: 'back', here: ['riviere', 'telegraphist', 'robineau', 'pilot'], moods: { riviere: 'neutral', telegraphist: 'neutral', robineau: 'neutral', pilot: 'neutral' },
        keys: { ...bureau(clock(0, 30)), riviere_look: 'robineau', telegraphist_look: 'tel_inker', robineau_spot: 'desk', robineau_look: 'riviere' } }));
      if (fine === 'robineau') {
        await g.say('robineau', 'I gave him the form. Over the soup. He signed it and went off to bed');
        await g.wait(1200);
        await g.say('robineau', 'The soup was good');
      } else if (fine === 'self') {
        await g.say('robineau', 'He saw your signature and said: the old man is right');
        await g.wait(1200);
        await g.say('robineau', 'Then all through supper — about the Andes. And about you');
        await g.wait(1200);
        await g.say('robineau', 'He paid for both of us. He said: another time — when you have no papers with you');
        await piece(g, 'folder_shift');
      } else {
        await g.say('robineau', 'He didn’t believe it. He asked: did I look that bad?');
      }
      if (touched) {
        await g.say('robineau', 'And he asked too… whether the old man is ill');
        await piece(g, 'to_map');
      }
      await piece(g, 'coat_off');
      await piece(g, 'pilot_in');
    },
    // 2.4: ⚑ the telephone (`phone`, then `phone_down` | `phone_robineau`)
    async g => {
      await g.scene('bureau', { here: ['riviere', 'telegraphist', 'pilot', 'robineau'], moods: { riviere: 'neutral', telegraphist: 'neutral', pilot: 'neutral', robineau: 'neutral' },
        keys: { ...bureau(clock(1, 35)), riviere_spot: 'desk', pilot_spot: 'bench', robineau_spot: 'desk', riviere_look: 'rob_phone', pilot_look: 'riviere', telegraphist_look: 'riviere', robineau_look: 'riviere' } });
      // (the telephone rings; the telegraphist, nearer, has it first)
      await g.wait(800);
      g.sound('ring');
      await g.wait(2600);
      g.sound('ring');
      await g.wait(2000);
      await g.say('telegraphist', 'Madame Fabien');
      await piece(g, 'phone', {
        receiver: () => {
          g.sound('receiver', { loud: 0.7 });
          return g.say('madame', 'Forgive me for… We have such a wind here. He said — by two. He hasn’t come down somewhere to wait it out?', { at: 'narrator', how: 'on the telephone, small and far; behind her the wind bangs a shutter' });
        },
      });
      const phone = await g.choose('phone', { 'riviere#chest': [
        { id: 'wind', label: tr('“He is delayed. The wind”') },
        { id: 'storm', label: tr('“He is in the storm. We are listening for him”') },
        { id: 'robineau', label: tr('Hold out the receiver to Robineau') },
      ] });
      if (phone === 'wind') {
        await g.say('riviere', 'He is delayed. The wind');
        await g.wait(1500);
        await g.say('madame', 'Thank you. Forgive me', { at: 'narrator', how: 'on the telephone, small and far' });
        g.sound('receiver', { loud: 0.7, delay: 0.8 });
        await piece(g, 'phone_down');
      } else if (phone === 'storm') {
        await g.say('riviere', 'He is in the storm. We are listening for him');
        await g.wait(3000);
        await g.say('madame', 'I am coming', { at: 'narrator', how: 'on the telephone, small and far' });
        g.sound('receiver', { loud: 0.7, delay: 0.8 });
        await piece(g, 'phone_down');
      } else {
        await piece(g, 'phone_robineau', {
          talk: () => g.say('robineau', 'The wind, madame… the line is bad… don’t you worry…', { how: 'flustered, into the receiver' }),
          down: () => g.sound('receiver', { loud: 0.7 }),
        });
      }
      g.apply('phone');
      g.gauge('told');
    },
  ],
};
