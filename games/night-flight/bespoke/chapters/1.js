// I. “The Andes” (scenario §5, 1.1–1.5). Twenty past ten: Rivière lights the field himself and the Chilean mail lands
// into the light; Pellerin — “Fine. A bit of a breeze” — and his shaking hands; ⚑ a chance: touch his shoulder; the
// fine for the forty minutes over the Andes — ⚑ whose hand signs it; Roblet in the hangar gate, the nut not locked —
// ⚑ Roblet: dismiss, keep on the engines, take off the engines; Fabien over Trelew: “No. We’ll outrun it.”
// Stage 4: Pellerin and the mechanics on the field; the Chilean mail coming down out of the dark, then standing; Roblet's
// box at his feet, in his hands or gone; the spanner from hand to hand. Stage 5: the mini-games real — М8 lights the
// field, М2 leaves a blot Robineau blots, М3 and М4 pass the box and the spanner (М4 missed: the spanner on the
// workbench); “Touch his shoulder” one touch in 3 s. On the scenes' pieces: the field's, the cockpit's `trelew`.
// Reads: nothing. Leaves: choices.touch, .fine, .roblet; marks.touched, .fine, .roblet; scales.exceptions.
import { FIELD, PLANE, SKY, piece } from '../story.js';
import { light, pen, box, spanner } from '../minigames/all.js';

// the mechanics at the plane; listening, their faces to Roblet (1.3–1.4)
const MECHANICS = ['mechanic', 'mechanic_b', 'mechanic_c'];
const AT_ENGINES = { toolbox: 1, roblet_spot: 'front', mechanic_look: 'roblet', mechanic_b_look: 'roblet', mechanic_c_look: 'roblet' };

export default {
  number: 'I', title: tr('The Andes'),
  titles: ['The Landing', 'The Fine', 'Roblet', 'Roblet: the choice', 'Trelew'],
  choices: [
    { id: 'touch', title: tr('Pellerin’s shoulder'), options: [
      { id: 'tap', label: tr('You touched his shoulder — Pellerin turned round') },
      { id: 'pass', label: tr('You walked past — “Report to Robineau”') }] },
    { id: 'fine', title: tr('The fine'), options: [
      { id: 'robineau', label: tr('You gave the fine to Robineau — the form went into his pocket') },
      { id: 'self', label: tr('You signed it yourself — “Thank you, sir”') },
      { id: 'tear', label: tr('You tore up the fine — the mechanics looked at one another') }] },
    { id: 'roblet', title: tr('Roblet'), options: [
      { id: 'fire', label: tr('You dismissed Roblet — he went across the field') },
      { id: 'keep', label: tr('You gave him back his box — “Twice”') },
      { id: 'remove', label: tr('You took his spanner — “Better you had fired me”') }] },
  ],
  steps: [
    // 1.1: the landing; М8 the light; ⚑ a chance — touch his shoulder (`dark_drone`, `landing`, `breeze`, `gloves`,
    // then `touch` | `pass`)
    async g => {
      await piece(g, 'dark_drone', {}, () => g.scene('field', { beat: 'dark_drone', here: ['riviere', 'pellerin', ...MECHANICS], moods: { riviere: 'neutral', pellerin: 'smile' },
        keys: { ...FIELD.dark, ...PLANE.coming('chilean'), toolbox: 0, riviere_look: 'hangar_front#switch', mechanic_look: 'plane#nose', mechanic_b_look: 'plane#nose', mechanic_c_look: 'plane#nose' } }));
      await g.plate(tr('Twenty past ten. The field is dark; over it the drone of an engine, lower and lower. Rivière stands at the switch on the hangar wall.'));
      await g.play(light);
      await piece(g, 'landing');
      await piece(g, 'breeze', {
        say: () => g.say('pellerin', 'Fine. A bit of a breeze', { how: 'to the mechanics, offhand, with a grin' }),
        hands: () => g.say('pellerin', 'The ridge like a wall — and me under it, like a fly under the ceiling', { how: 'showing it with his hands, laughing' }),
      });
      g.mood('riviere', 'thinking');
      await piece(g, 'gloves');
      const touch = await g.choose('touch', { 'pellerin#chest': [
        { id: 'tap', label: tr('Touch his shoulder') },
      ] }, { within: 3000, otherwise: 'pass', touch: tr('His hands are shaking. Nobody is looking.') });
      if (touch === 'tap') await piece(g, 'touch', { turn: () => g.say('riviere', 'Report to Robineau') });
      else await piece(g, 'pass', { by: () => g.say('riviere', 'Report to Robineau') });
      g.apply('touch');
    },
    // 1.2: ⚑ the fine (`fine`, then `fine_robineau` | `fine_self` | `fine_tear`)
    async g => {
      await piece(g, 'fine', {
        near: async () => {
          await g.say('robineau', 'I asked him to supper tonight. He said yes', { how: 'in an undertone' });
          await g.say('riviere', 'The fine');
          await g.say('robineau', 'Forty minutes… The Andes…');
        },
      }, () => g.scene('field', { beat: 'fine', here: ['riviere', 'robineau', ...MECHANICS], moods: { riviere: 'neutral', robineau: 'sad' }, keys: { ...FIELD.lit, ...PLANE.stand('chilean'), toolbox: 0, riviere_look: 'robineau', robineau_look: 'riviere' } }));
      g.gauge('exceptions');
      const fine = await g.choose('fine', { 'riviere#chest': [
        { id: 'robineau', label: tr('“You will sign it, Robineau”') },
        { id: 'self', label: tr('“I will sign it myself”') },
        { id: 'tear', label: tr('Tear it up') },
      ] });
      if (fine === 'robineau') {
        await g.say('riviere', 'You will sign it, Robineau. You are the inspector. You are not his friend');
        g.mood('robineau', 'sad');
        await piece(g, 'fine_robineau');
      } else if (fine === 'self') {
        await piece(g, 'fine_self', {
          give: async () => {
            await g.say('riviere', 'Give it to him from me');
            await g.say('robineau', 'Thank you, sir');
            g.mood('robineau', 'surprised');
          },
        });
        await g.plate(tr('He stops short — there is nothing to thank him for —, blushes, and puts the form away.'));
      } else {
        await piece(g, 'fine_tear', {
          torn: async () => {
            g.mood('robineau', 'surprised');
            await g.say('robineau', 'You… but you never…');
            await g.say('riviere', 'Go to your supper');
          },
        });
      }
      g.apply('fine');
    },
    // 1.3: Roblet (`roblet`)
    async g => {
      await piece(g, 'roblet', {
        say: async () => {
          await g.say('robineau', 'The nut on the petrol pipe of the Asunción mail. Not locked. The plane came down at night in a field. The pilot unhurt. Lucky');
          await g.say('roblet', 'Twenty years, sir. The first engines here — my hands. I… one nut…');
        },
        hands: () => g.say('narrator', 'Rivière looked at his hands. He thought that he could keep him'),
      }, () => g.scene('field', { beat: 'roblet', here: ['riviere', 'robineau', 'roblet', ...MECHANICS], moods: { riviere: 'neutral', robineau: 'thinking', roblet: 'sad' }, keys: { ...FIELD.lit, ...PLANE.stand('chilean'), ...AT_ENGINES } }));
    },
    // 1.4: ⚑ Roblet (`order`, М2, `roblet_go` | `box_lift`, М3, `box_given` | `palm`, М4, `chocks_pick`)
    async g => {
      await g.scene('field', { here: ['riviere', 'robineau', 'roblet', ...MECHANICS], moods: { riviere: 'neutral', robineau: 'thinking', roblet: 'sad' }, keys: { ...FIELD.lit, ...PLANE.stand('chilean'), ...AT_ENGINES } }, { cut: true });
      const roblet = await g.choose('roblet', { 'roblet#chest': [
        { id: 'fire', label: tr('Dismiss him') },
        { id: 'keep', label: tr('Keep him on the engines') },
        { id: 'remove', label: tr('Take him off the engines') },
      ] });
      if (roblet === 'fire') {
        await piece(g, 'order');
        const { blot } = await g.play(pen);
        if (blot) await g.plate(tr('Robineau blots it. It is signed.'));
        await piece(g, 'roblet_go', {
          cap: async () => {
            await g.say('riviere', 'I am not dismissing you. I am dismissing the mistake');
            await g.say('roblet', 'I understand');
          },
        });
        g.here('roblet', false);
      } else if (roblet === 'keep') {
        await piece(g, 'box_lift');
        await g.play(box);
        await g.say('riviere', 'The European mail is yours tonight. You will check it twice');
        await g.say('roblet', 'Twice');
        g.mood('robineau', 'surprised');
        await piece(g, 'box_given', { look: () => g.say('robineau', 'Sir… you?') });
      } else {
        await g.say('riviere', 'Not the engines. The field: the chocks, the store');
        g.set('roblet_with', ['spanner']);
        await piece(g, 'palm');
        const { bench } = await g.play(spanner);
        if (bench) await g.plate(tr('Roblet lays the spanner on the workbench himself.'));
        await piece(g, 'chocks_pick', { say: () => g.say('roblet', 'Better you had fired me') });
      }
      g.apply('roblet');
    },
    // 1.5: Trelew (`trelew`)
    async g => {
      await piece(g, 'trelew', {
        note: () => g.say('radioman', 'Trelew: land?', { how: 'a note written in the air, read short over the engine' }),
        answer: async () => {
          await g.say('fabien', 'No. We’ll outrun it', { how: 'a note written in the air, read short over the engine' });
          g.mood('fabien', 'thinking');
        },
      }, () => g.scene('cockpit', { beat: 'trelew', here: ['fabien', 'radioman'], moods: { fabien: 'neutral', radioman: 'thinking' }, keys: SKY.night }));
    },
  ],
};
