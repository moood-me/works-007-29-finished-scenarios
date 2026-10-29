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
// blots himself), М1 on the map.
// Reads: choices.roblet, .robineau, .minute; scales.exceptions, .told. Leaves: choices.european, marks.european.
import { ENDINGS, FIELD, FLAGS, OFFICE, PLANE, bureau, clock, facts } from '../story.js';
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
    // 4.1: the field; М8 the light; who is where
    async g => {
      const { roblet, robineau, bends } = facts(g.state);
      const here = ['riviere', 'pilot', ...crew(roblet), ...(roblet === 'fire' ? [] : ['roblet']), ...(robineau === 'work' ? [] : ['robineau'])];
      await g.scene('field', { here, moods: { riviere: 'tired', roblet: 'sad', robineau: 'sad', pilot: 'neutral' },
        keys: { ...FIELD.dark, ...ready(roblet), riviere_look: 'hangar_front#switch', robineau_look: 'riviere', roblet_look: 'riviere', pilot_look: 'plane' } });
      await g.plate(tr('Ten to three. The European mail by the hangar under the lamps, its engine warming up; the mechanics are loading the mail bags; the field behind it is dark. The pilot by the wing. Rivière goes out to the switch.'));
      await g.play(light_european);
      g.set('riviere_look', null);
      await g.plate(tr('The floodlights come on one after another; the field is light to its very edge.'));
      if (roblet === 'keep') {
        await g.plate(tr('Roblet closes the cowling and wipes his hands.'));
        await g.say('roblet', 'Checked it twice');
        await g.plate(tr('The pilot looks at Roblet, then at Rivière.'));
      } else if (roblet === 'remove') {
        await g.plate(tr('Roblet by the wheels with the chocks; he does not look at the engine.'));
      } else {
        await g.plate(tr('At the engine, a young mechanic.'));
        g.set('pilot_look', 'mechanic');
        await g.say('pilot', 'Who checked it?');
        await g.say('mechanic', 'I did. Roblet’s gone');
        await g.plate(tr('The pilot looks under the cowling himself. Under the lamp by the hangar — Roblet’s empty workbench.'));
      }
      if (robineau === 'sit') await g.plate(tr('Robineau came out with Rivière and stands at his shoulder.'));
      else if (robineau === 'work') {
        g.here('robineau', true);
        await g.plate(tr('Robineau comes out of the office after him, buttoned up, his folder and the finished report under his arm.'));
      } else await g.plate(tr('Robineau is already here, by the hangar wall a step from the switch: no coat, the folder pressed to his chest; he has been standing in the wind a long time. Rivière has come to the switch beside him — and has not looked at him.'));
      g.set('madame_window', 1);
      g.set('pilot_look', 'riviere');
      await g.plate(tr('Up above, in the lit window of the office, her silhouette.'));
      await g.say('pilot', 'They said to hold it till he came in');
      await g.plate(tr('A pause.'));
      await g.say('pilot', 'The south is closed. By three the storm will be here');
      g.set('robineau_look', 'office_windows');
      await g.say('robineau', 'One more… this same night…', { how: 'looking up at the window; he does not finish' });
      await g.plate(tr('He lowers his eyes to his folder: on top lies the board’s paper — “On suspending the night flights”. He closes the folder.'));
      if (bends === 'none') await g.plate(tr('The pilot puts on his helmet and waits for the sign; he does not look at the window.'));
      else if (bends === 'one') await g.say('pilot', 'Ready, sir');
      else {
        await g.plate(tr('By the mail bags the mechanics talk in low voices about what bent tonight. The pilot, not waiting, buckles his helmet and lays his hand on the side of the plane.'));
        await g.say('pilot', 'Ready. Ready a long time');
      }
    },
    // 4.2: ⚑ the European mail — a timer of ten seconds: nothing chosen, he says nothing
    async g => {
      const { roblet, robineau, exceptions } = facts(g.state);
      const here = ['riviere', 'pilot', ...crew(roblet), ...(roblet === 'fire' ? [] : ['roblet']), 'robineau'];
      await g.scene('field', { here, moods: { riviere: 'tired', roblet: 'sad', robineau: 'sad', pilot: 'neutral' },
        keys: { ...FIELD.lit, ...ready(roblet), madame_window: 1, robineau_look: 'riviere', roblet_look: 'riviere', pilot_look: 'riviere' } }, { cut: true });
      await g.plate(tr('The engine runs up; the pilot looks at Rivière. There are ten seconds to choose: nothing chosen — Rivière says nothing.'));
      const european = await g.choose('european', { 'riviere#chest': [
        { id: 'fly', label: tr('Raise his hand: fly') },
        { id: 'ground', label: tr('“Stand down. Till dawn”') },
        { id: 'silent', label: tr('Say nothing') },
      ] }, { within: 10000, otherwise: 'silent' });
      if (european === 'fly') {
        await g.plate(tr('Rivière raises his hand.'));
        const { long } = await g.play(chocks);
        g.set('chocks', 0);
        if (roblet === 'remove') await g.plate(tr('Roblet pulls away the chocks.'));
        else await g.plate(tr('The mechanics pull away the chocks.'));
        if (long) await g.plate(tr('His hand still up, the pilot moves off by himself at the mechanic’s sign.'));
        g.here('pilot', false);
        for (const [k, v] of Object.entries(PLANE.away('european'))) g.set(k, v);
        g.set('riviere_look', 'plane');
        await g.plate(tr('The plane runs across the light field and goes north; its lights melt away. Her silhouette in the window does not move.'));
        if (robineau === 'sit') await g.plate(tr('Robineau, silent beside him, looks not at the sky but at the window.'));
        else if (robineau === 'work') await g.say('robineau', 'Two fifty-two', { how: 'writing the time down' });
        else await g.plate(tr('Robineau, beside him by the wall, watches the lights go. They do not turn to each other.'));
      } else if (european === 'ground') {
        await g.say('riviere', 'Stand down. Till dawn');
        if (exceptions === 0) {
          await g.say('pilot', 'Stand down? You?');
          g.mood('robineau', 'surprised');
          await g.plate(tr('The mechanics freeze: this has never happened.'));
        } else {
          await g.plate(tr('The pilot slowly takes off his helmet.'));
          await g.say('pilot', 'Till dawn, sir');
          await g.plate(tr('He looks at the plane, not at Rivière.'));
        }
        await g.say('robineau', 'To the board… shall I write?');
        await g.say('riviere', 'I will myself');
        await g.play(light_off);
        g.set('engine', 0);
        await g.plate(tr('The floodlights he lit ten minutes ago go out one after another. The pilot stays by the wing, his hand on the side of the plane they did not let go.'));
        if (roblet === 'keep') {
          await g.say('roblet', 'Because of me?');
          await g.say('riviere', 'No');
        }
        await g.plate(tr('Rivière goes toward the office, toward her window.'));
      } else {
        await g.plate(tr('Rivière does not move. The pilot waits, looks at him, at the window, at him again; Rivière does not look away and does not raise his hand.'));
        await g.say('pilot', 'He won’t come now');
        await g.plate(tr('A pause.'));
        await g.say('pilot', 'Since you say nothing — by the timetable');
        g.here('pilot', false);
        g.set('chocks', 0);
        for (const [k, v] of Object.entries(PLANE.away('european'))) g.set(k, v);
        g.set('riviere_look', 'plane');
        await g.plate(tr('He goes behind the wing; a mechanic, looking now at the wing, now at the director, pulls away the chocks; the engine roars, the plane runs across the light field and goes. Rivière’s hand rises when the lights are already in the sky. He stands till the drone dies away.'));
        if (robineau === 'sit') await g.say('robineau', 'Gone', { how: 'quietly, beside him' });
        else if (robineau === 'work') await g.plate(tr('Robineau, in the office doorway, writes down the time.'));
        else await g.plate(tr('Robineau, beside him by the wall, looks up too. They do not turn to each other.'));
      }
      g.apply('european');
    },
    // Ф.1–Ф.2: the office at three; where she is; what she takes away; her two movements
    async g => {
      const f = facts(g.state);
      await g.scene('office', { here: ['riviere', 'madame'], moods: { riviere: 'tired', madame: 'sad' },
        keys: { ...OFFICE(f), riviere_spot: f.ending === 'dawn' ? 'window' : 'room', madame_spot: { victory: 'door', silence: 'window', dawn: 'chair' }[f.ending],
          riviere_look: 'madame', madame_look: f.ending === 'silence' ? 'pane' : 'riviere' } });
      g.title(label(f.ending));
      await g.plate(tr('Three o’clock; Rivière’s office. The storm has reached the field: the first rain on the glass. From the window she has seen the field.'));
      if (f.ending === 'victory') await g.plate(tr('She has already left the window: she stands by the door in her buttoned coat, her back to the field.'));
      else if (f.ending === 'silence') {
        await g.plate(tr('She has stood at the window till the drone died away — as he did, below. She turns round as he comes in.'));
        g.set('madame_look', 'riviere');
      } else await g.plate(tr('Under her window the floodlights went out one after another. For the first time she has sat down — on the visitor’s chair, her gloves on her knees. Rivière stays standing at the window.'));
      await g.plate(f.ending === 'dawn' ? tr('Nobody keeps her. She gets up first.') : tr('Nobody keeps her.'));
      if (f.ending === 'dawn') g.set('madame_spot', 'door');
      if (f.minute === 'bearing') {
        await g.say('madame', 'Will they go there?');
        await g.say('riviere', 'The launches from Trelew. At dawn');
        await g.say('madame', 'I will go to Trelew');
      } else if (f.minute === 'hers') {
        await g.plate(tr('The tape is in her hand.'));
        await g.say('madame', 'He saw a light');
        await g.plate(tr('She looks at Rivière.'));
        await g.say('madame', 'Is it lights? Did he land?');
        await g.plate(tr('Rivière says nothing. She folds the tape into her glove.'));
        await g.say('madame', 'I will be at home');
      } else if (f.storm) {
        await g.say('madame', 'He began — to me. What comes next?');
        await g.say('riviere', 'It could not be made out');
        await g.plate(tr('Rivière says nothing more.'));
      } else {
        await g.plate(tr('She asks nothing; she puts on her gloves.'));
      }
      await g.plate(tr('She says nothing more.'));
      if (f.minute === 'bearing') await g.plate(f.storm ? tr('At the door she turns round and nods to him.') : tr('At the door she does not turn round.'));
      else if (f.minute === 'hers') await g.plate(tr('At the door she looks at him once more, as if an answer might still come. None comes.'));
      else await g.plate(f.storm ? tr('At the door she stops, as if waiting for something more.') : tr('She goes past him without looking.'));
      if (f.ending === 'victory') await g.plate(tr('To the window, where the lights went, she never turns.'));
      else if (f.ending === 'silence') await g.plate(tr('At the door she looks once more at the window — at the sky where the lights melted away.'));
      else await g.plate(tr('At the door she looks at the dark field, put out under her window.'));
      g.here('madame', false);
    },
    // Ф.3–Ф.4: М2 the log; the window and the door
    async g => {
      const f = facts(g.state);
      await g.scene('office', { here: ['riviere'], moods: { riviere: 'tired', robineau: 'sad' },
        keys: { ...OFFICE(f), rain: 1, riviere_spot: 'desk', riviere_look: 'desk_top#log', robineau_look: 'riviere' } }, { cut: true });
      const { blot } = await g.play(log, { line: f.bearing ? 'bearing' : 'unknown' });
      if (blot) await g.plate(tr('Rivière blots it himself.'));
      if (f.bearing) await g.plate(tr('Rivière writes: “Fabien, radio operator. Over the sea, a hundred and fifty east of Trelew. 2:45.”'));
      else await g.plate(tr('Rivière writes: “Fabien, radio operator. Position unknown.”'));
      g.set('riviere_look', 'pane');
      if (f.roblet === 'keep') await g.plate(tr('Below, in the rain, Roblet stands by the hangar.'));
      else if (f.roblet === 'remove') await g.plate(tr('Below, in the rain, Roblet is gathering up the chocks.'));
      else await g.plate(tr('Below, under the lamp by the hangar, Roblet’s empty workbench in the rain.'));
      if (f.robineau === 'sit') {
        g.here('robineau', true);
        await g.say('robineau', 'I am here, sir', { how: 'in the doorway, quietly' });
      }
      else if (f.robineau === 'work') await g.plate(tr('Behind the wall a typewriter clatters: the report.'));
      else await g.plate(tr('In the window: he is still by the hangar wall, in the rain, without his coat.'));
    },
    // Ф.5: the bureau — by the finale
    async g => {
      const f = facts(g.state);
      if (f.ending === 'victory') {
        await g.scene('bureau', { here: ['riviere', 'telegraphist', ...nearby(f)], moods: { riviere: 'tired', telegraphist: 'neutral', robineau: 'sad' },
          keys: { ...bureau(clock(3, 10), { flags: night(f), outside: 'empty' }), ...desk(f), riviere_look: 'map' } });
        await g.plate(tr('Rivière comes out of the office to the map. The telegraphist at the inker.'));
        await g.play(flag_red);
        await g.say('narrator', 'Rivière the Great, Rivière the Conqueror, bearing his heavy victory');
      } else if (f.ending === 'silence') {
        await g.scene('bureau', { here: ['riviere', 'telegraphist', ...nearby(f)], moods: { riviere: 'tired', telegraphist: 'neutral', robineau: 'sad' },
          keys: { ...bureau(clock(3, 10), { flags: night(f), outside: 'empty' }), ...desk(f), riviere_look: 'map' } });
        await g.plate(tr('Rivière comes out of the office to the map. The red flag stands at the field; he looks at it and does not touch it.'));
      } else {
        await g.scene('bureau', { here: ['riviere', 'telegraphist', ...nearby(f)], moods: { riviere: 'tired', telegraphist: 'eyes_closed', robineau: 'sad' },
          keys: { ...bureau(clock(6, 0), { flags: night(f), outside: 'rolled' }), ...desk(f), telegraphist_spot: 'bench', riviere_look: 'map', telegraphist_look: null } });
        await g.plate(tr('The rain has passed. The bureau at dawn, grey; the inker is silent, the telegraphist dozes.'));
        if (f.roblet === 'keep') await g.plate(tr('In the window, on the field, the European mail is being rolled into the hangar; Roblet is pushing the wing.'));
        else if (f.roblet === 'remove') await g.plate(tr('In the window, on the field, the mechanics are rolling the European mail into the hangar.'));
        else await g.plate(tr('In the window, on the field, the mechanics are rolling the European mail into the hangar; Roblet’s workbench is empty.'));
        await g.play(flag_down);
        await g.plate(tr('The other flags Rivière takes down by hand, one by one.'));
        for (const k of ['blue', 'west', 'north']) g.set(k, 'off');
        if (f.robineau === 'sit') await g.plate(tr('Robineau takes them down with him.'));
        else if (f.robineau === 'work') await g.plate(tr('Robineau at his desk over his report; he does not raise his eyes.'));
        else await g.plate(tr('Robineau is not here: he went home without a word.'));
      }
    },
    // the epilogue: the next evening — Э.1 the news, Э.2 Robineau, Э.3 by the finale
    async g => {
      const f = facts(g.state);
      await g.scene('bureau', { here: ['riviere', 'telegraphist', 'robineau'], moods: { riviere: 'neutral', telegraphist: 'neutral', robineau: 'neutral' },
        keys: { ...bureau(clock(19, 40), { flags: f.ending === 'dawn' ? FLAGS.down : FLAGS.evening, outside: { victory: 'landing', silence: 'european', dawn: 'idle' }[f.ending] }),
          riviere_look: 'robineau', telegraphist_look: 'tel_inker', robineau_spot: 'desk', robineau_look: 'riviere' } });
      await g.plate(tr('The next evening. The bureau at dusk; the map with its flags, the window onto the field.'));
      if (f.bearing) await g.say('robineau', 'Trelew: the launches are back. On the water, by the point of the bearing — a patch of oil. Nothing more');
      else {
        await g.say('robineau', 'The search along the line: nothing');
        if (f.minute === 'hers') await g.say('robineau', 'Madame Fabien telephoned. She asks whether they have found him');
      }
      if (f.robineau === 'sit') {
        g.set('robineau_spot', 'bench');
        await g.plate(tr('Robineau comes in and, as in the night, sits down on the bench by the telegraph without asking; he catches Rivière’s eye and gets up.'));
        g.set('robineau_spot', 'desk');
        await g.say('robineau', 'Forgive me');
        g.set('riviere_look', 'map');
        await g.plate(tr('Rivière moves away to the map.'));
      } else if (f.robineau === 'work') {
        await g.plate(tr('He lays the report of the night on the desk.'));
        await g.say('robineau', 'All by the clock, sir');
        await g.say('riviere', 'Good');
      } else {
        await g.plate(tr('He coughs; his nose is red.'));
        await g.say('robineau', 'I seem to have caught a cold…');
        g.set('riviere_look', 'map');
        await g.say('riviere', 'Get to work', { how: 'without turning round' });
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
        await g.say('telegraphist', 'European: passed Montevideo on time');
        await g.plate(tr('Then, with the same tapping as in the prologue:'));
        await g.say('telegraphist', 'Patagonian: passed San Julián. Sky clear');
        await g.play(flag_blue);
        g.set('tape', 0);
        await g.plate(tr('Outside the window the Chilean mail is landing.'));
      } else if (f.ending === 'silence') {
        await g.say('telegraphist', 'Release the Patagonian?');
        await g.plate(tr('Rivière looks at the map a long time.'));
        await g.say('riviere', 'Release');
        await g.play(flag_late);
      } else {
        await g.plate(tr('Robineau lays a telegram from the board on the desk.'));
        await g.say('robineau', 'Night flights suspended pending inquiry', { how: 'reading a telegram aloud, flatly' });
        if (f.exceptions >= 1) await g.say('robineau', 'The director to submit explanations of the departures from the rules last night', { how: 'reading a telegram aloud, flatly' });
        g.set('riviere_look', 'pane');
        await g.plate(tr('The inker is silent. Outside, on the field, the floodlights are not lit; by the hangar Pellerin smokes beside his plane. Rivière at the window.'));
        await g.say('narrator', 'The mail went by day. The night was nobody’s again');
      }
    },
  ],
};
