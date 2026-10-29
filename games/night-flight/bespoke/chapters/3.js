// III. “The Stars” (scenario §5, 3.1–3.7). She comes to the bureau — at a quarter to two if she was told the storm,
// at ten past two if the wind; Rivière pulls the tape himself: thirty minutes of fuel, and Comodoro asks for the one
// minute — ⚑ the last minute: the bearing, her words, his own; in the cockpit, the gap and the stars, the note that
// came, the climb above the clouds; the last tape; a quarter to three, the fuel counted out — the flag led into the sea
// or held at Trelew; the bridge; ⚑ Robineau, his shoulders shaking: “Get to work”, “Sit down”, or nothing.
// Stand-ins: none. Not in the scenes yet: Robineau in the bureau — his voice and plates.
// Reads: scales.told, choices.phone, .minute. Leaves: choices.minute, .robineau; marks.bearing, .minute, .robineau;
// scales.exceptions.
import { SKY, bureau, clock, facts } from '../story.js';
import { tape, climb, flag_sea, flag_hold } from '../minigames/all.js';

const ALL = ['riviere', 'telegraphist', 'pilot', 'madame'];
const MOODS = { riviere: 'neutral', telegraphist: 'neutral', pilot: 'neutral', madame: 'sad' };

export default {
  number: 'III', title: tr('The Stars'),
  titles: ['She', 'The Tape', 'The Last Minute', 'The Stars', 'The Last Tape', 'Silence', 'Robineau'],
  choices: [
    { id: 'minute', title: tr('The last minute'), options: [
      { id: 'bearing', label: tr('You gave the minute to the bearing — the flag in the sea') },
      { id: 'hers', label: tr('You gave it to her words — “To her: I see a light”') },
      { id: 'own', label: tr('You gave it to your own — “To Rivière: understood. To her”') }] },
    { id: 'robineau', title: tr('Robineau'), options: [
      { id: 'work', label: tr('You said “Get to work” — Robineau sat down to his report') },
      { id: 'sit', label: tr('You sat down beside Robineau — the telegraph was silent') },
      { id: 'silent', label: tr('You turned away to the map — Robineau went out onto the field alone') }] },
  ],
  steps: [
    // 3.1: she comes
    async g => {
      const { storm, phone } = facts(g.state);
      await g.scene('bureau', { here: ALL, moods: { ...MOODS, riviere: 'surprised' }, keys: bureau(storm ? clock(1, 45) : clock(2, 10)) });
      await g.plate(tr('Madame Fabien in the doorway: her coat thrown on, no hat. Rivière gets up; on the bench the European pilot gets up too.'));
      if (storm) {
        await g.say('madame', 'You told the truth. I couldn’t stay at home');
      } else if (phone === 'robineau') {
        await g.plate(tr('Ten past two. She waited till two; he has not come. She says it to Robineau.'));
        await g.say('madame', 'Two o’clock. He hasn’t come. I was told — the wind…');
        await g.plate(tr('Robineau moves away to his desk.'));
      } else {
        await g.plate(tr('Ten past two. She waited till two; he has not come.'));
        await g.say('madame', 'Two o’clock. He hasn’t come. You said — the wind');
      }
      await g.say('madame', 'I am in your way. I will stand here. I won’t be in the way');
      g.mood('riviere', 'neutral');
      await g.say('riviere', 'Madame, all the stations are listening for him');
      await g.say('narrator', 'Before him stood another truth — a lamp, a table laid for two o’clock. And he had nothing to set against it');
      await g.plate(tr('She stays by the door and does not sit down.'));
    },
    // 3.2: М9 the tape; Comodoro's minute
    async g => {
      await g.scene('bureau', { here: ALL, moods: MOODS, keys: { ...bureau(clock(2, 15), { tape: 1 }), riviere_look: 'tel_inker', madame_look: 'tel_inker', pilot_look: 'tel_inker' } });
      await g.plate(tr('A quarter past two.'));
      await g.play(tape);
      await g.plate(tr('Rivière pulls the tape out of the inker himself, word by word:'));
      await g.say('radioman', 'We see nothing. Trying to climb. Fuel for thirty minutes', { at: 'narrator', how: 'as the tape gives it, word by word: clipped, far away' });
      await g.plate(tr('Then a telegram from Comodoro; the telegraphist reads it off the tape, evenly, as he reads all the reports.'));
      await g.say('telegraphist', 'Comodoro: we catch him every other time. A gap — perhaps a minute. We ask for him under bearing, for the search: the key held in one long tone, the lines silent. Give him no words: if he answers, there will be no tone');
      g.set('tape', 0);
      g.set('telegraphist_look', 'riviere');
      await g.plate(tr('He raises his eyes to the director — waiting for the order. Madame Fabien in the doorway looks at the inker. The pilot looks at the tape.'));
    },
    // 3.3: ⚑ the last minute — a timer of ten seconds: nothing chosen, the service, the bearing
    async g => {
      await g.scene('bureau', { here: ALL, moods: MOODS, keys: { ...bureau(clock(2, 16)), riviere_look: 'telegraphist', madame_look: 'tel_inker' } }, { cut: true });
      await g.plate(tr('The telegraphist’s hand over the key; the second hand of the clock. There are ten seconds to choose: nothing chosen, the telegraphist sends what the service wants — the bearing.'));
      const minute = await g.choose('minute', { 'riviere#chest': [
        { id: 'bearing', label: tr('The service: the bearing') },
        { id: 'hers', label: tr('Her words') },
        { id: 'own', label: tr('My own') },
      ] }, { within: 10000, otherwise: 'bearing' });
      if (minute === 'bearing') {
        await g.say('riviere', 'Comodoro — bearing. The rest, silence');
        await g.plate(tr('The telegraphist taps the request and takes his hand off the key. She looks at the inker, which is silent.'));
      } else if (minute === 'hers') {
        g.set('riviere_look', 'madame');
        await g.plate(tr('Rivière turns to her.'));
        await g.say('riviere', 'What shall we send?');
        g.mood('madame', 'surprised');
        await g.plate(tr('She does not understand at once. Then:'));
        await g.say('madame', 'That I haven’t gone to bed. I am waiting');
        await g.say('telegraphist', 'Sir… on the service line?');
        await g.say('riviere', 'Send it');
      } else {
        await g.say('riviere', 'To Fabien. The whole line is listening to you. Your wife is here. Rivière', { how: 'dictating, evenly' });
        g.mood('telegraphist', 'surprised');
        await g.plate(tr('The telegraphist raises his eyes: the director never signs. She, in the doorway, hears “your wife is here” — said for her.'));
      }
      g.apply('minute');
    },
    // 3.4: the stars; the note that came; М6 up
    async g => {
      const { minute } = facts(g.state);
      await g.scene('cockpit', { here: ['fabien', 'radioman'], moods: { fabien: 'thinking', radioman: 'thinking' }, keys: SKY.storm });
      await g.plate(tr('The storm. Overhead, a gap in the clouds, and stars in it. The radio operator catches something, writes, and passes a note forward.'));
      if (minute === 'bearing') {
        await g.say('radioman', 'Comodoro: hold the key. Bearing', { how: 'a note written in the air, read short over the engine' });
        await g.plate(tr('The radio operator presses the key and holds it; Fabien looks at the fuel needle.'));
      } else if (minute === 'hers') {
        await g.say('radioman', 'From your wife: not gone to bed. Waiting', { how: 'a note written in the air, read short over the engine' });
        g.mood('fabien', 'sad');
        await g.plate(tr('Fabien holds the note to the instrument lamp. A long time. He looks at the light in the gap, writes, and passes it back.'));
        await g.say('fabien', 'To her: I see a light', { how: 'a note written in the air, read short over the engine' });
        await g.plate(tr('The radio operator taps it out.'));
      } else {
        await g.say('radioman', 'Rivière: the whole line is listening to you. Your wife is here', { how: 'a note written in the air, read short over the engine' });
        g.mood('fabien', 'smile');
        await g.plate(tr('Fabien laughs briefly at the signature — he did not expect it; then looks longer at “your wife is here”. He writes.'));
        g.mood('fabien', 'sad');
        await g.say('fabien', 'To Rivière: understood. To her —', { how: 'a note written in the air, read short over the engine' });
        await g.plate(tr('The radio operator taps; the gap closes over in the middle of a word.'));
      }
      await g.plate(tr('The minute is over. Fabien pulls the plane up.'));
      await g.play(climb);
      g.set('above', 1);
      g.set('rain', 0);
      g.mood('fabien', 'neutral');
      await g.plate(tr('The plane comes out above the clouds: the moon, a white sea of cloud, silence, stars. Fabien’s face in the moonlight.'));
      await g.say('narrator', 'He knew that from this beauty there was no coming back. And still he climbed');
      await g.say('radioman', 'Beautiful', { how: 'a note written in the air, read quietly' });
      await g.plate(tr('Fabien writes his last note and passes it back; the radio operator taps — through the clouds only scraps reach the ground.'));
    },
    // 3.5: the last tape
    async g => {
      const { minute } = facts(g.state);
      await g.scene('bureau', { here: ALL, moods: MOODS, keys: { ...bureau(clock(2, 25), { tape: 1 }), riviere_look: 'tel_inker', madame_look: 'tel_inker', pilot_look: 'tel_inker' } });
      await g.plate(tr('The bureau. A tapping.'));
      if (minute === 'bearing') {
        await g.plate(tr('The tape draws one long line — the note of the key, no words.'));
        await g.say('telegraphist', 'Comodoro: bearing taken. By bearing and reckoning — over the sea, a hundred and fifty east of Trelew');
        g.mood('madame', 'afraid');
        await g.plate(tr('Her face.'));
      } else if (minute === 'hers') {
        await g.say('telegraphist', 'To her: I see a light');
        g.set('riviere_look', 'madame');
        await g.plate(tr('Rivière tears off the piece of tape and gives it to her. She holds the tape in both hands.'));
        await g.say('telegraphist', 'Comodoro: no bearing. There was no tone');
      } else {
        await g.say('telegraphist', 'To Rivière: understood. To her');
        await g.plate(tr('And the tape breaks off. She reads over the telegraphist’s shoulder, waiting for the next word.'));
        await g.say('telegraphist', 'Comodoro: no bearing. There was no tone');
      }
      await g.plate(tr('Later — a few scraps of tapping.'));
      await g.say('telegraphist', 'He is sending something. I can’t make it out');
      g.set('tape', 0);
      await g.plate(tr('Then the inker is silent.'));
    },
    // 3.6: silence; М1 the flag — into the sea, or held at Trelew; the bridge; to the office
    async g => {
      const { bearing } = facts(g.state);
      await g.scene('bureau', { here: ALL, moods: { ...MOODS, riviere: 'tired' }, keys: { ...bureau(clock(2, 45)), riviere_look: 'map', madame_look: 'map', telegraphist_look: 'clock' } });
      await g.plate(tr('A quarter to three. Rivière at the map. The telegraphist looks at the clock and counts the fuel under his breath, minute by minute.'));
      if (bearing) {
        await g.play(flag_sea);
        await g.plate(tr('Rivière has led the blue flag from Trelew into the sea, to the point of the bearing. She looks at where he has put it.'));
      } else {
        await g.play(flag_hold);
      }
      await g.say('telegraphist', 'By the fuel… that’s all');
      if (!bearing) await g.plate(tr('Only now does the finger let the blue flag go — by Trelew.'));
      g.here('pilot', false);
      await g.plate(tr('The European pilot gets up, puts on his helmet and goes out onto the field without a word.'));
      await g.say('narrator', 'Once he had watched a bridge being built, and asked himself: is a bridge worth one crushed face? And he found no answer');
      g.set('riviere_look', 'madame');
      await g.say('riviere', 'Robineau. Take madame to my office');
      if (!bearing) {
        await g.say('madame', 'Can one see the field from there?', { how: 'quietly' });
        await g.say('riviere', 'One can');
      } else {
        await g.plate(tr('She goes without a word.'));
      }
      g.here('madame', false);
      await g.plate(tr('Robineau takes her to the office; she stands at the window over the field.'));
    },
    // 3.7: ⚑ Robineau
    async g => {
      await g.scene('bureau', { here: ['riviere', 'telegraphist'], moods: { riviere: 'tired', telegraphist: 'sad' }, keys: { ...bureau(clock(2, 48)), riviere_look: 'rob_desk', telegraphist_look: 'tel_inker' } });
      await g.plate(tr('Robineau comes back and stands at his desk over his papers; his shoulders are shaking. The telegraphist is at the inker.'));
      const robineau = await g.choose('robineau', { 'riviere#chest': [
        { id: 'work', label: tr('“Get to work, Robineau”') },
        { id: 'sit', label: tr('“Sit down”') },
        { id: 'silent', label: tr('Say nothing') },
      ] });
      if (robineau === 'work') {
        await g.say('riviere', 'Get to work, Robineau');
        await g.plate(tr('Robineau sits down to his report. Rivière’s hand rises over his shoulder — and comes down.'));
      } else if (robineau === 'sit') {
        await g.say('riviere', 'Sit down');
        await g.plate(tr('Rivière sits down on the bench by the telegraph; Robineau, not believing it, sits down beside him. They are silent. The telegraphist looks at them and turns away to the inker.'));
      } else {
        g.set('riviere_look', 'map');
        await g.plate(tr('Rivière turns away to the map. Robineau stands; then he takes his folder and goes out onto the field, without his coat.'));
      }
      g.apply('robineau');
    },
  ],
};
