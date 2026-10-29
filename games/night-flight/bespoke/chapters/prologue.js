// Prologue. “Dusk” (scenario §5, П.1–П.3). Sunset over Patagonia: Fabien's plane, a lonely house's window lighting up
// below, his note “San Julián. Sky clear”; the tap of the key becomes the inker's in the bureau — three mails in the
// air, the player leads the blue flag; later, Robineau's papers: the board doubts the night, Pellerin's fine by the
// rule, Madame Fabien's message (“the line is for the service”), Roblet's order ready.
// Stand-ins: none. Not in the scenes yet: Robineau in the bureau — his voice only.
// Reads: nothing. Leaves: nothing.
import { SKY, bureau, clock } from '../story.js';
import { flag } from '../minigames/all.js';

export default {
  number: '', title: tr('Dusk'),
  titles: ['Dusk', 'The Flag', 'The Papers'],
  choices: [],
  steps: [
    // П.1: dusk over Patagonia; the window below; the note
    async g => {
      await g.scene('cockpit', { here: ['fabien', 'radioman'], moods: { fabien: 'neutral', radioman: 'neutral' }, keys: SKY.dusk });
      g.title(tr('Night Flight'));
      await g.plate(tr('Sunset over Patagonia; under the wing, the steppe. Fabien flies the mail north, calmly. Below, the window of a lonely house lights up.'));
      await g.say('narrator', 'Below, the windows were lighting up. In each of them someone was waiting');
      await g.plate(tr('Fabien writes a note and passes it back to the radio operator.'));
      await g.say('fabien', 'San Julián. Sky clear', { how: 'a note written in the air, read short over the engine' });
      await g.plate(tr('The radio operator taps it out on his key.'));
    },
    // П.2: the tap becomes the inker's; М1 the flag; “three in the air”
    async g => {
      await g.scene('bureau', { here: ['riviere', 'telegraphist'], moods: { riviere: 'neutral', telegraphist: 'neutral' },
        keys: { ...bureau(clock(19, 50), { tape: 1 }), riviere_look: 'map', telegraphist_look: 'tel_inker' } });
      await g.plate(tr('The tap of the key becomes the tap of the inker: the bureau of the night mail, at the edge of a great field. Rivière at the map of the three lines.'));
      await g.say('telegraphist', 'Patagonian: passed San Julián. Sky clear');
      await g.play(flag);
      g.set('tape', 0);
      await g.plate(tr('On the map two more flags are in the air — over the Andes, and over the river in the north; the red one, the European mail’s, stands at the field.'));
      await g.say('riviere', 'Three in the air');
      g.mood('riviere', 'tired');
      await g.plate(tr('His hand stays a moment on his side — it aches — and he takes it away.'));
    },
    // П.3: Robineau's papers
    async g => {
      await g.scene('bureau', { here: ['riviere', 'telegraphist'], moods: { riviere: 'neutral', telegraphist: 'neutral' },
        keys: { ...bureau(clock(22, 5)), riviere_look: 'rob_desk', telegraphist_look: 'riviere' } });
      await g.plate(tr('Later. The clock over the map: five past ten; outside the bureau’s window it is dark. Robineau, the inspector, comes up with his folder.'));
      await g.say('robineau', 'The board asks whether the night flights should not be suspended till spring. After last winter');
      await g.say('riviere', 'They will not close the night until I close it myself');
      await g.say('robineau', 'The Chilean mail is late. Pellerin ran into a storm over the Andes. By the rule — a fine for being late');
      await g.say('riviere', 'By the rule');
      await g.plate(tr('Robineau hesitates.'));
      await g.say('robineau', 'And… Madame Fabien telephoned. She asked us to tell her husband she will not go to bed till he comes');
      await g.say('riviere', 'The line is for the service');
      await g.say('robineau', 'That is what I told her');
      await g.plate(tr('A pause.'));
      await g.say('robineau', 'Roblet is waiting by the hangar. The order is ready');
      await g.plate(tr('Rivière goes out onto the field.'));
    },
  ],
};
