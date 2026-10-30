// Prologue. “Dusk” (scenario §5, П.1–П.3). Sunset over Patagonia: Fabien's plane, a lonely house's window lighting up
// below, his note “San Julián. Sky clear”; the tap of the key becomes the inker's in the bureau — three mails in the
// air, the player leads the blue flag; later, Robineau's papers: the board doubts the night, Pellerin's fine by the
// rule, Madame Fabien's message (“the line is for the service”), Roblet's order ready.
// Stage 5: on the scenes' pieces (game.md «Stage 5 — pieces»): the cockpit's `dusk`, `note_back`; the bureau's
// `inker`, `ache`, `papers`, `out`; М1 real (it leaves the blue flag at San Julián).
// Reads: nothing. Leaves: nothing.
import { FLAGS, SKY, bureau, clock, piece } from '../story.js';
import { flag } from '../minigames/all.js';

export default {
  number: '', title: tr('Dusk'),
  titles: ['Dusk', 'The Flag', 'The Papers'],
  choices: [],
  steps: [
    // П.1: dusk over Patagonia; the window below; the note (`dusk`, `note_back`)
    async g => {
      await piece(g, 'dusk', {
        window: () => g.say('narrator', 'Below, the windows were lighting up. In each of them someone was waiting'),
      }, async () => {
        await g.scene('cockpit', { beat: 'dusk', here: ['fabien', 'radioman'], moods: { fabien: 'neutral', radioman: 'neutral' }, keys: SKY.dusk });
        g.title(tr('Night Flight'));
      });
      await piece(g, 'note_back', {
        read: () => g.say('fabien', 'San Julián. Sky clear', { how: 'a note written in the air, read short over the engine' }),
        // (the radio operator's key — the knock the bureau's inker takes up)
        tap: () => g.sound('key', { loud: 0.8, words: 'SAN JULIAN CIEL CLAIR' }),
      });
    },
    // П.2: the tap becomes the inker's; М1 the flag; “three in the air” (`inker`, `ache`)
    async g => {
      await piece(g, 'inker', {
        read: () => g.say('telegraphist', 'Patagonian: passed San Julián. Sky clear'),
      }, () => g.scene('bureau', { beat: 'inker', here: ['riviere', 'telegraphist'], moods: { riviere: 'neutral', telegraphist: 'neutral' },
        keys: { ...bureau(clock(19, 50), { tape: 1, flags: FLAGS.evening }), riviere_look: 'map', telegraphist_look: 'tel_inker' } }));
      await g.play(flag);
      g.set('tape', 0);
      g.air(null);
      await g.plate(tr('On the map two more flags are in the air — over the Andes, and over the river in the north; the red one, the European mail’s, stands at the field.'));
      await piece(g, 'ache', {
        say: async () => {
          await g.say('riviere', 'Three in the air');
          g.mood('riviere', 'tired');
        },
      });
    },
    // П.3: Robineau's papers (`papers`, `out`)
    async g => {
      await piece(g, 'papers', {
        near: async () => {
          await g.say('robineau', 'The board asks whether the night flights should not be suspended till spring. After last winter');
          await g.say('riviere', 'They will not close the night until I close it myself');
          await g.say('robineau', 'The Chilean mail is late. Pellerin ran into a storm over the Andes. By the rule — a fine for being late');
          await g.say('riviere', 'By the rule');
        },
      }, () => g.scene('bureau', { beat: 'papers', here: ['riviere', 'telegraphist', 'robineau'], moods: { riviere: 'neutral', telegraphist: 'neutral', robineau: 'neutral' },
        keys: { ...bureau(clock(22, 5), { flags: FLAGS.julian }), riviere_look: 'robineau', telegraphist_look: 'riviere', robineau_spot: 'desk', robineau_look: 'riviere' } }));
      g.mood('robineau', 'thinking');
      await g.wait(1200);
      await g.say('robineau', 'And… Madame Fabien telephoned. She asked us to tell her husband she will not go to bed till he comes');
      await g.say('riviere', 'The line is for the service');
      await g.say('robineau', 'That is what I told her');
      await g.wait(1500);
      await g.say('robineau', 'Roblet is waiting by the hangar. The order is ready');
      await piece(g, 'out');
    },
  ],
};
