// II. “The Storm” (scenario §5, 2.1–2.4). Twenty past eleven: the Asunción mail lands on time, its pilot on Roblet;
// the storm from the south, the fields closed, no word from Fabien — “hold the European until he comes in”; in the
// cockpit, “Where to?” — “I don’t know”, the plane thrown about; half past twelve: Robineau back from supper with
// Pellerin, and the European pilot sits down to wait; twenty-five to two, the telephone — ⚑ what she is told.
// Stand-ins: none. Not in the scenes yet: Robineau and the Asunción pilot in the bureau — voices and plates.
// Reads: choices.roblet, .fine; marks.touched. Leaves: choices.phone, marks.phone, scales.told.
import { SKY, bureau, clock, facts } from '../story.js';
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
    // 2.1: the Asunción mail; М1 the flag; the storm from the south
    async g => {
      const { roblet } = facts(g.state);
      await g.scene('bureau', { here: ['riviere', 'telegraphist'], moods: { riviere: 'neutral', telegraphist: 'neutral' },
        keys: { ...bureau(clock(23, 20), { tape: 1 }), riviere_look: 'map', telegraphist_look: 'tel_inker' } });
      await g.plate(tr('Twenty past eleven. Over the roof, the drone of an engine — the Asunción mail is landing on time.'));
      await g.say('telegraphist', 'Asunción: landed');
      await g.play(flag_north);
      g.set('tape', 0);
      await g.plate(tr('The Asunción mail’s pilot comes in and lays his report on Robineau’s empty desk — Robineau is at supper with Pellerin.'));
      if (roblet === 'fire') {
        await g.say('asuncion', 'Sorry for the old man');
        await g.plate(tr('A pause.'));
        await g.say('asuncion', 'And I sat in that field an hour, thinking — that’s it');
      } else if (roblet === 'keep') {
        await g.say('asuncion', 'Roblet on the engines?');
        await g.plate(tr('He looks at Rivière.'));
        await g.say('asuncion', 'Well. You know best');
      } else {
        await g.say('asuncion', 'Saw him with the chocks. He put the chocks under me');
        await g.plate(tr('A pause.'));
        await g.say('asuncion', 'He didn’t look at me');
      }
      g.set('tape', 1);
      await g.plate(tr('The inker taps.'));
      await g.say('telegraphist', 'Trelew: storm from the south. Field closed');
      await g.say('telegraphist', 'Comodoro: wind eighty. No contact with Fabien for fifteen minutes');
      g.set('riviere_look', 'telegraphist');
      await g.say('riviere', 'All stations listen for Fabien. Bearing on request. Hold the European until he comes in');
    },
    // 2.2: the storm; М5 the stick
    async g => {
      await g.scene('cockpit', { here: ['fabien', 'radioman'], moods: { fabien: 'thinking', radioman: 'afraid' }, keys: SKY.storm });
      await g.plate(tr('The storm. Darkness, lightning; the plane is thrown about. The radio operator passes a note forward.'));
      await g.say('radioman', 'Trelew closed. Comodoro closed. Where to?', { how: 'a note written in the air, read short over the engine' });
      await g.plate(tr('Fabien writes on his knee with one hand.'));
      await g.say('fabien', 'I don’t know', { how: 'a note written in the air, read short over the engine' });
      await g.play(stick);
      await g.say('narrator', 'He no longer knew whether he was over land');
    },
    // 2.3: Robineau back from supper; the European pilot comes in
    async g => {
      const { fine, touched } = facts(g.state);
      await g.scene('bureau', { here: ['riviere', 'telegraphist'], moods: { riviere: 'neutral', telegraphist: 'neutral' },
        keys: { ...bureau(clock(0, 30)), riviere_look: 'rob_desk', telegraphist_look: 'tel_inker' } });
      await g.plate(tr('Half past twelve. Robineau comes back from supper.'));
      if (fine === 'robineau') {
        await g.say('robineau', 'I gave him the form. Over the soup. He signed it and went off to bed');
        await g.plate(tr('A pause.'));
        await g.say('robineau', 'The soup was good');
      } else if (fine === 'self') {
        await g.say('robineau', 'He saw your signature and said: the old man is right');
        await g.plate(tr('A pause.'));
        await g.say('robineau', 'Then all through supper — about the Andes. And about you');
        await g.plate(tr('A pause.'));
        await g.say('robineau', 'He paid for both of us. He said: another time — when you have no papers with you');
        await g.plate(tr('Robineau opens his folder and shifts the papers in it.'));
      } else {
        await g.say('robineau', 'He didn’t believe it. He asked: did I look that bad?');
      }
      if (touched) {
        await g.say('robineau', 'And he asked too… whether the old man is ill');
        g.set('riviere_look', 'map');
        await g.plate(tr('Robineau does not know why. Rivière knows, and moves away to the map.'));
      }
      await g.plate(tr('Robineau sees “Fabien” on the tape, falls silent and takes off his coat.'));
      g.here('pilot', true);
      g.set('pilot_look', 'map');
      await g.plate(tr('The door from the field: the European mail’s pilot, his helmet in his hand. He looks at the map — there is no blue flag at the field —, sits down on the bench by the telegraph and lays his helmet on his knees. He asks nothing.'));
    },
    // 2.4: ⚑ the telephone
    async g => {
      await g.scene('bureau', { here: ['riviere', 'telegraphist', 'pilot'], moods: { riviere: 'neutral', telegraphist: 'neutral', pilot: 'neutral' },
        keys: { ...bureau(clock(1, 35)), riviere_look: 'rob_phone', pilot_look: 'riviere', telegraphist_look: 'riviere' } });
      await g.plate(tr('Twenty-five to two. The telephone rings.'));
      await g.say('telegraphist', 'Madame Fabien');
      await g.plate(tr('Rivière takes the receiver — his face close; hers only a voice. In the receiver the wind can be heard banging a shutter at her house.'));
      await g.say('madame', 'Forgive me for… We have such a wind here. He said — by two. He hasn’t come down somewhere to wait it out?', { at: 'narrator', how: 'on the telephone, small and far; behind her the wind bangs a shutter' });
      g.gauge('told');
      const phone = await g.choose('phone', { 'riviere#chest': [
        { id: 'wind', label: tr('“He is delayed. The wind”') },
        { id: 'storm', label: tr('“He is in the storm. We are listening for him”') },
        { id: 'robineau', label: tr('Hold out the receiver to Robineau') },
      ] });
      if (phone === 'wind') {
        await g.say('riviere', 'He is delayed. The wind');
        await g.plate(tr('A pause in the receiver.'));
        await g.say('madame', 'Thank you. Forgive me', { at: 'narrator', how: 'on the telephone, small and far' });
      } else if (phone === 'storm') {
        await g.say('riviere', 'He is in the storm. We are listening for him');
        await g.plate(tr('A long silence in the receiver.'));
        await g.say('madame', 'I am coming', { at: 'narrator', how: 'on the telephone, small and far' });
      } else {
        await g.plate(tr('Rivière holds out the receiver to Robineau.'));
        await g.say('robineau', 'The wind, madame… the line is bad… don’t you worry…', { how: 'flustered, into the receiver' });
        await g.plate(tr('He hangs up and does not raise his eyes.'));
      }
      g.apply('phone');
    },
  ],
};
