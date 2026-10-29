// I. “The Andes” (scenario §5, 1.1–1.5). Twenty past ten: Rivière lights the field himself and the Chilean mail lands
// into the light; Pellerin — “Fine. A bit of a breeze” — and his shaking hands; ⚑ a chance: touch his shoulder; the
// fine for the forty minutes over the Andes — ⚑ whose hand signs it; Roblet in the hangar gate, the nut not locked —
// ⚑ Roblet: dismiss, keep on the engines, take off the engines; Fabien over Trelew: “No. We’ll outrun it.”
// Stage 4: Pellerin and the mechanics on the field; the Chilean mail coming down out of the dark, then standing; Roblet's
// box at his feet, in his hands or gone; the spanner from hand to hand.
// Reads: nothing. Leaves: choices.touch, .fine, .roblet; marks.touched, .fine, .roblet; scales.exceptions.
import { FIELD, PLANE, SKY } from '../story.js';
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
    // 1.1: the landing; М8 the light; ⚑ a chance — touch his shoulder
    async g => {
      await g.scene('field', { here: ['riviere', ...MECHANICS], moods: { riviere: 'neutral', pellerin: 'smile' },
        keys: { ...FIELD.dark, ...PLANE.coming('chilean'), toolbox: 0, riviere_look: 'hangar_front#switch', mechanic_look: 'plane#nose', mechanic_b_look: 'plane#nose', mechanic_c_look: 'plane#nose' } });
      await g.plate(tr('Twenty past ten. The field is dark; over it the drone of an engine, lower and lower. Rivière stands at the switch on the hangar wall.'));
      await g.play(light);
      g.set('floods', 1);
      g.set('riviere_look', null);
      for (const [k, v] of Object.entries(PLANE.stand('chilean'))) g.set(k, v);
      await g.plate(tr('The floodlights come on one after another, and out of the dark the Chilean mail lands into the light. The engine stops. Pellerin comes out from behind the wing and pulls off his helmet.'));
      g.here('pellerin', true);
      for (const id of ['riviere', ...MECHANICS]) g.set(`${id}_look`, 'pellerin');
      await g.say('pellerin', 'Fine. A bit of a breeze', { how: 'to the mechanics, offhand, with a grin' });
      await g.plate(tr('The mechanics laugh.'));
      await g.say('pellerin', 'The ridge like a wall — and me under it, like a fly under the ceiling', { how: 'showing it with his hands, laughing' });
      g.mood('riviere', 'thinking');
      await g.plate(tr('He pulls off his gloves — his hands are shaking; he hides them in his pockets. Rivière stands in the shadow by the hangar.'));
      const touch = await g.choose('touch', { 'riviere#chest': [
        { id: 'tap', label: tr('Touch his shoulder') },
      ] }, { within: 5000, otherwise: 'pass' });
      if (touch === 'tap') {
        await g.plate(tr('Rivière goes up and lays his hand on his shoulder. Pellerin turns round, surprised. Rivière has already taken his hand away.'));
        await g.say('riviere', 'Report to Robineau');
      } else {
        await g.plate(tr('Rivière walks past him.'));
        await g.say('riviere', 'Report to Robineau');
      }
      g.apply('touch');
    },
    // 1.2: ⚑ the fine
    async g => {
      await g.scene('field', { here: ['riviere', 'robineau', ...MECHANICS], moods: { riviere: 'neutral', robineau: 'sad' }, keys: { ...FIELD.lit, ...PLANE.stand('chilean'), toolbox: 0, riviere_look: 'robineau', robineau_look: 'riviere' } });
      await g.plate(tr('By the workbench Robineau, with the form of the fine.'));
      await g.say('robineau', 'I asked him to supper tonight. He said yes', { how: 'in an undertone' });
      await g.say('riviere', 'The fine');
      await g.say('robineau', 'Forty minutes… The Andes…');
      g.gauge('exceptions');
      const fine = await g.choose('fine', { 'riviere#chest': [
        { id: 'robineau', label: tr('“You will sign it, Robineau”') },
        { id: 'self', label: tr('“I will sign it myself”') },
        { id: 'tear', label: tr('Tear it up') },
      ] });
      if (fine === 'robineau') {
        await g.say('riviere', 'You will sign it, Robineau. You are the inspector. You are not his friend');
        g.mood('robineau', 'sad');
        await g.plate(tr('Robineau takes a long time to sign; he folds the form and puts it in his jacket pocket.'));
      } else if (fine === 'self') {
        await g.plate(tr('Rivière signs it.'));
        await g.say('riviere', 'Give it to him from me');
        await g.say('robineau', 'Thank you, sir');
        g.mood('robineau', 'surprised');
        await g.plate(tr('He stops short — there is nothing to thank him for —, blushes, and puts the form away.'));
      } else {
        await g.plate(tr('Rivière tears up the form in front of the mechanics.'));
        g.mood('robineau', 'surprised');
        await g.say('robineau', 'You… but you never…');
        await g.say('riviere', 'Go to your supper');
        await g.plate(tr('The mechanics look at one another.'));
      }
      g.apply('fine');
    },
    // 1.3: Roblet
    async g => {
      await g.scene('field', { here: ['riviere', 'robineau', 'roblet', ...MECHANICS], moods: { riviere: 'neutral', robineau: 'thinking', roblet: 'sad' }, keys: { ...FIELD.lit, ...PLANE.stand('chilean'), ...AT_ENGINES } });
      await g.plate(tr('Half past ten. In the hangar gate, Roblet: his cap in his hands, at his feet his tool box, already packed.'));
      await g.say('robineau', 'The nut on the petrol pipe of the Asunción mail. Not locked. The plane came down at night in a field. The pilot unhurt. Lucky');
      await g.say('roblet', 'Twenty years, sir. The first engines here — my hands. I… one nut…');
      await g.plate(tr('He falls silent. At the engines the mechanics work more slowly — they are listening.'));
      await g.say('narrator', 'Rivière looked at his hands. He thought that he could keep him');
    },
    // 1.4: ⚑ Roblet
    async g => {
      await g.scene('field', { here: ['riviere', 'robineau', 'roblet', ...MECHANICS], moods: { riviere: 'neutral', robineau: 'thinking', roblet: 'sad' }, keys: { ...FIELD.lit, ...PLANE.stand('chilean'), ...AT_ENGINES } }, { cut: true });
      const roblet = await g.choose('roblet', { 'roblet#chest': [
        { id: 'fire', label: tr('Dismiss him') },
        { id: 'keep', label: tr('Keep him on the engines') },
        { id: 'remove', label: tr('Take him off the engines') },
      ] });
      if (roblet === 'fire') {
        await g.plate(tr('Rivière lays the order on the box.'));
        await g.play(pen);
        await g.say('riviere', 'I am not dismissing you. I am dismissing the mistake');
        await g.say('roblet', 'I understand');
        await g.plate(tr('He does not understand. He puts on his cap, picks up his box and goes across the field to the gate. The mechanics do not raise their heads.'));
        g.here('roblet', false);
        g.set('toolbox', 0);
      } else if (roblet === 'keep') {
        await g.plate(tr('Rivière does not sign. He picks up the box and gives it to Roblet, from hand to hand.'));
        await g.play(box);
        g.set('roblet_with', ['toolbox_held']);
        await g.say('riviere', 'The European mail is yours tonight. You will check it twice');
        await g.say('roblet', 'Twice');
        g.mood('robineau', 'surprised');
        await g.say('robineau', 'Sir… you?');
        await g.plate(tr('The mechanics look at Rivière.'));
      } else {
        await g.say('riviere', 'Not the engines. The field: the chocks, the store');
        g.set('roblet_with', ['spanner']);
        await g.plate(tr('Rivière holds out his hand for the spanner Roblet is holding.'));
        await g.play(spanner);
        g.set('roblet_with', null);
        g.set('riviere_with', ['spanner']);
        await g.plate(tr('The palm is not taken back. Roblet’s fingers open slowly; the spanner passes from hand to hand.'));
        await g.say('roblet', 'Better you had fired me');
        await g.plate(tr('A pause. He picks up the chocks.'));
      }
      g.apply('roblet');
    },
    // 1.5: Trelew
    async g => {
      await g.scene('cockpit', { here: ['fabien', 'radioman'], moods: { fabien: 'neutral', radioman: 'thinking' }, keys: SKY.night });
      await g.plate(tr('Eleven o’clock. Below, the lights of Trelew. Far away in the south, silent sheet lightning. The radio operator passes a note forward.'));
      await g.say('radioman', 'Trelew: land?', { how: 'a note written in the air, read short over the engine' });
      await g.say('fabien', 'No. We’ll outrun it', { how: 'a note written in the air, read short over the engine' });
      g.mood('fabien', 'thinking');
      await g.plate(tr('He looks at the lights of the little town till they go under the wing.'));
    },
  ],
};
