// III. “The Stars” (scenario §5, 3.1–3.7). She comes to the bureau — at a quarter to two if she was told the storm,
// at ten past two if the wind; Rivière pulls the tape himself: thirty minutes of fuel, and Comodoro asks for the one
// minute — ⚑ the last minute: the bearing, her words, his own; in the cockpit, the gap and the stars, the note that
// came, the climb above the clouds; the last tape; a quarter to three, the fuel counted out — the flag led into the sea
// or held at Trelew; the bridge; ⚑ Robineau, his shoulders shaking: “Get to work”, “Sit down”, or nothing.
// Stage 4: Robineau in the bureau (standing at his desk, sitting to his report, on the bench beside Rivière); the
// European pilot gets up from the bench; the blue flag in the sea or by Trelew; the gap in the storm. Stage 5: М9, М6
// and М1 real (М9 missed: the tape runs out by itself, and the telegraphist reads it); on the scenes' pieces — the
// bureau's she, tape, comodoro, minute and its three, last_tape and its two, scraps, silence, pilot_out, to_office,
// shoulders and its three; the cockpit's gap and its three, above.
// Reads: scales.told, choices.phone, .minute. Leaves: choices.minute, .robineau; marks.bearing, .minute, .robineau;
// scales.exceptions.
import { FLAGS, SKY, bureau, clock, facts, piece } from '../story.js';
import { tape, climb, flag_sea, flag_hold } from '../minigames/all.js';

const ALL = ['riviere', 'telegraphist', 'pilot', 'madame', 'robineau'];
const MOODS = { riviere: 'neutral', telegraphist: 'neutral', pilot: 'neutral', madame: 'sad', robineau: 'sad' };

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
    // 3.1: she comes (`she`, `she_robineau`)
    async g => {
      const { storm, phone } = facts(g.state);
      await piece(g, 'she', {}, () => g.scene('bureau', { beat: 'she', here: ALL, moods: { ...MOODS, riviere: 'surprised' }, keys: { ...bureau(storm ? clock(1, 45) : clock(2, 10)), robineau_look: 'madame' } }));
      if (storm) {
        await g.say('madame', 'You told the truth. I couldn’t stay at home');
      } else if (phone === 'robineau') {
        // (she says it to Robineau, who told her the wind; he moves away to his desk)
        g.set('madame_look', 'robineau');
        await g.say('madame', 'Two o’clock. He hasn’t come. I was told — the wind…');
        await piece(g, 'she_robineau');
        g.set('madame_look', 'riviere');
      } else {
        await g.say('madame', 'Two o’clock. He hasn’t come. You said — the wind');
      }
      await g.say('madame', 'I am in your way. I will stand here. I won’t be in the way');
      g.mood('riviere', 'neutral');
      await g.say('riviere', 'Madame, all the stations are listening for him');
      await g.say('narrator', 'Before him stood another truth — a lamp, a table laid for two o’clock. And he had nothing to set against it');
    },
    // 3.2: М9 the tape; Comodoro's minute (`tape`, `comodoro`)
    async g => {
      await piece(g, 'tape', {}, () => g.scene('bureau', { beat: 'tape', here: ALL, moods: MOODS, keys: { ...bureau(clock(2, 15), { tape: 1 }), riviere_look: 'tel_inker', madame_look: 'tel_inker', pilot_look: 'tel_inker' } }));
      // (Fabien's words come as Rivière draws the tape out, a phrase at each third; the tape run out by itself, the
      // telegraphist reads them all)
      const PARTS = [
        () => g.say('radioman', 'We see nothing', { at: 'narrator', how: 'as the tape gives it, word by word: clipped, far away' }),
        () => g.say('radioman', 'Trying to climb', { at: 'narrator', how: 'as the tape gives it, word by word: clipped, far away' }),
        () => g.say('radioman', 'Fuel for thirty minutes', { at: 'narrator', how: 'as the tape gives it, word by word: clipped, far away' }),
      ];
      const heard = [];
      const { self, said } = await g.play(tape, { words: k => heard.push(PARTS[k]()) });
      await Promise.all(heard);
      if (self) await g.say('telegraphist', 'We see nothing. Trying to climb. Fuel for thirty minutes');
      else for (let k = said ?? 0; k < 3; k++) await PARTS[k]();
      await piece(g, 'comodoro', {
        read: () => g.say('telegraphist', 'Comodoro: we catch him every other time. A gap — perhaps a minute. We ask for him under bearing, for the search: the key held in one long tone, the lines silent. Give him no words: if he answers, there will be no tone'),
      });
      g.set('tape', 0);
      g.air(null);
    },
    // 3.3: ⚑ the last minute — a timer of ten seconds: nothing chosen, the service, the bearing — the telegraphist sends
    // it himself (`minute`, then `bearing_sent` | `hers_asked` | `own_sent`)
    async g => {
      // (the clock loud in the silence while the minute is chosen)
      await piece(g, 'minute', {}, () => g.scene('bureau', { beat: 'minute', here: ALL, moods: MOODS, keys: { ...bureau(clock(2, 16)), riviere_look: 'telegraphist', madame_look: 'tel_inker' },
        air: { clock: 0.5, field: 0.08 } }, { cut: true }));
      const minute = await g.choose('minute', { 'riviere#chest': [
        { id: 'bearing', label: tr('The service: the bearing') },
        { id: 'hers', label: tr('Her words') },
        { id: 'own', label: tr('My own') },
      ] }, { within: 10000, otherwise: 'bearing' });
      if (minute === 'bearing') {
        // (the ten seconds ran out: Rivière said nothing — the telegraphist sends what the service wants, himself)
        if (g.late('minute')) await g.say('telegraphist', 'Nothing, sir? Then by the service. Comodoro — bearing');
        else await g.say('riviere', 'Comodoro — bearing. The rest, silence');
        g.air(null);
        g.sound('key', { loud: 0.8 });
        await piece(g, 'bearing_sent');
      } else if (minute === 'hers') {
        await piece(g, 'hers_asked', {
          ask: async () => {
            await g.say('riviere', 'What shall we send?');
            g.mood('madame', 'surprised');
            await g.wait(1500);
            await g.say('madame', 'That I haven’t gone to bed. I am waiting');
            await g.say('telegraphist', 'Sir… on the service line?');
            await g.say('riviere', 'Send it');
            g.air(null);
            g.sound('key', { loud: 0.8, delay: 0.4 });
          },
        });
      } else {
        await piece(g, 'own_sent', {
          dictate: () => {
            g.air(null);
            g.sound('key', { loud: 0.7, delay: 1.2 });
            return g.say('riviere', 'To Fabien. The whole line is listening to you. Your wife is here. Rivière', { how: 'dictating, evenly' });
          },
          eyes: () => g.mood('telegraphist', 'surprised'),
        });
      }
      g.apply('minute');
    },
    // 3.4: the stars; the note that came; М6 up (`gap`, then `key_held` | `lamp_note` | `laugh_note`; `above`)
    async g => {
      const { minute } = facts(g.state);
      g.sound('thunder', { loud: 0.5, far: true, delay: 1.2 });
      await piece(g, 'gap', {
        note: () => (minute === 'bearing' ? g.say('radioman', 'Comodoro: hold the key. Bearing', { how: 'a note written in the air, read short over the engine' })
          : minute === 'hers' ? g.say('radioman', 'From your wife: not gone to bed. Waiting', { how: 'a note written in the air, read short over the engine' })
            : g.say('radioman', 'Rivière: the whole line is listening to you. Your wife is here', { how: 'a note written in the air, read short over the engine' })),
      }, () => g.scene('cockpit', { beat: 'gap', here: ['fabien', 'radioman'], moods: { fabien: 'thinking', radioman: 'thinking' }, keys: { ...SKY.storm, fabien_look: [-2, 1.5, 5] } }));
      if (minute === 'bearing') {
        // (the key held down: one long note — the bearing)
        g.tone(5.5, { loud: 0.3, delay: 0.6 });
        await piece(g, 'key_held');
      } else if (minute === 'hers') {
        g.mood('fabien', 'sad');
        await piece(g, 'lamp_note', {
          write: () => g.say('fabien', 'To her: I see a light', { how: 'a note written in the air, read short over the engine' }),
          tap: () => g.sound('key', { loud: 0.7 }),
        });
      } else {
        g.mood('fabien', 'smile');
        await piece(g, 'laugh_note', {
          write: async () => {
            g.mood('fabien', 'sad');
            g.sound('key', { loud: 0.7, delay: 1.5, cut: 2.2 });
            await g.say('fabien', 'To Rivière: understood. To her —', { how: 'a note written in the air, read short over the engine' });
          },
        });
      }
      await g.play(climb);
      g.mood('fabien', 'neutral');
      // (over the clouds: the storm gone below, the engine alone)
      g.air({ cockpit: 0.22 });
      await piece(g, 'above', {
        face: () => g.say('narrator', 'He knew that from this beauty there was no coming back. And still he climbed'),
        note: () => g.say('radioman', 'Beautiful', { how: 'a note written in the air, read quietly' }),
        last: () => g.sound('key', { loud: 0.6 }),
      });
    },
    // 3.5: the last tape (`last_tape`, then `tape_torn` | `over_shoulder`; `scraps`)
    async g => {
      const { minute } = facts(g.state);
      // (the last tape: the inker — or one long note, the bearing)
      if (minute === 'bearing') g.tone(4.5, { loud: 0.28, far: true, delay: 1.2 });
      await piece(g, 'last_tape', {
        read: async () => {
          if (minute === 'bearing') {
            await g.say('telegraphist', 'Comodoro: bearing taken. By bearing and reckoning — over the sea, a hundred and fifty east of Trelew');
            g.mood('madame', 'afraid');
          } else if (minute === 'hers') await g.say('telegraphist', 'To her: I see a light');
          else await g.say('telegraphist', 'To Rivière: understood. To her');
        },
      }, () => g.scene('bureau', { beat: 'last_tape', here: ALL, moods: MOODS,
        air: { clock: 0.12, field: 0.1, ...(minute === 'bearing' ? {} : { inker: 0.3 }) },
        keys: { ...bureau(clock(2, 25), { tape: 1 }), tape_mark: { bearing: 'line', hers: 'words', own: 'cut' }[minute], riviere_look: 'tel_inker', madame_look: 'tel_inker', pilot_look: 'tel_inker' } }));
      g.air({ clock: 0.12, field: 0.1 });
      if (minute === 'hers') {
        g.sound('tear', { loud: 0.4, delay: 0.8 });
        await piece(g, 'tape_torn');
        await g.say('telegraphist', 'Comodoro: no bearing. There was no tone');
      } else if (minute === 'own') {
        await piece(g, 'over_shoulder');
        await g.say('telegraphist', 'Comodoro: no bearing. There was no tone');
      }
      // (a few scraps of tapping through the clouds; then nothing)
      g.sound('key', { loud: 0.45, far: true, delay: 0.3, cut: 1.2 });
      g.sound('key', { loud: 0.35, far: true, delay: 2.6, cut: 0.9 });
      await piece(g, 'scraps', { read: () => g.say('telegraphist', 'He is sending something. I can’t make it out') });
    },
    // 3.6: silence; М1 the flag — into the sea, or held at Trelew; the bridge; to the office (`silence`, `pilot_out`,
    // `to_office`)
    async g => {
      const { bearing } = facts(g.state);
      // (the clock heard while the fuel is counted)
      await piece(g, 'silence', {}, () => g.scene('bureau', { beat: 'silence', here: ALL, moods: { ...MOODS, riviere: 'tired' }, keys: { ...bureau(clock(2, 45)), riviere_look: 'map', madame_look: 'map', telegraphist_look: 'clock', robineau_look: 'map' },
        air: { clock: 0.45, field: 0.1 } }));
      if (bearing) await g.play(flag_sea);
      else await g.play(flag_hold);
      await g.say('telegraphist', 'By the fuel… that’s all');
      g.air(null);
      await piece(g, 'pilot_out');
      g.here('pilot', false);
      await g.say('narrator', 'Once he had watched a bridge being built, and asked himself: is a bridge worth one crushed face? And he found no answer');
      g.set('riviere_look', 'madame');
      await g.say('riviere', 'Robineau. Take madame to my office');
      if (!bearing) {
        await g.say('madame', 'Can one see the field from there?', { how: 'quietly' });
        await g.say('riviere', 'One can');
      }
      await piece(g, 'to_office', { door: () => g.sound('door', { loud: 0.5 }) });
      g.here('madame', false);
      g.here('robineau', false);
    },
    // 3.7: ⚑ Robineau (`shoulders`, then `work` | `sit` | `alone`)
    async g => {
      const { bearing } = facts(g.state);
      await piece(g, 'shoulders', {}, () => g.scene('bureau', { beat: 'shoulders', here: ['riviere', 'telegraphist', 'robineau'], moods: { riviere: 'tired', telegraphist: 'sad', robineau: 'sad' },
        keys: { ...bureau(clock(2, 48), { flags: bearing ? FLAGS.sea : FLAGS.night }), riviere_look: 'robineau', telegraphist_look: 'tel_inker', robineau_spot: 'desk', robineau_look: 'rob_top' } }));
      const robineau = await g.choose('robineau', { 'riviere#chest': [
        { id: 'work', label: tr('“Get to work, Robineau”') },
        { id: 'sit', label: tr('“Sit down”') },
        { id: 'silent', label: tr('Say nothing') },
      ] });
      if (robineau === 'work') {
        await g.say('riviere', 'Get to work, Robineau');
        await piece(g, 'work');
      } else if (robineau === 'sit') {
        await g.say('riviere', 'Sit down');
        await piece(g, 'sit');
      } else {
        await piece(g, 'alone');
        g.here('robineau', false);
      }
      g.apply('robineau');
    },
  ],
};
