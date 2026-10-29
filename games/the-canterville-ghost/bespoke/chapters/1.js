// I. “Oil for the Chains” (scenario §5, 1.1–1.7). The first night: chains in the corridor, Papa offers the ghost the
// Rising Sun Lubricator, a pillow flies; ⚑ a chance at her door — “Good night, sir”; the ghost alone in his room, mortally
// insulted; the stain comes back, morning after morning, and the family bets on its colour; the dry almond, and her
// reds scraped out of the box; ⚑ the paints.
// Stand-ins (story.js PLACES): the corridor — the library; the garden by the house — the Garden of Death.
// Reads: nothing. Leaves: choices.goodnight, choices.paints, marks.goodnight, marks.paints, scales.
import { LIBRARY, CORRIDOR, GROUNDS, facts } from '../story.js';
import { door, sketch } from '../minigames/all.js';

export default {
  number: 'I', title: tr('Oil for the Chains'),
  titles: ['The Chains', 'The Lubricator', 'The Tapestry Chamber', 'The Wagers', 'The Almond', 'The Paints'],
  choices: [
    { id: 'goodnight', title: tr('At the crack of her door'), options: [{ id: 'wish', label: tr('“Good night, sir”') }, { id: 'pass', label: tr('Let him pass') }] },
    { id: 'paints', title: tr('The paints'), options: [{ id: 'leave', label: tr('Leave him the box') }, { id: 'lock', label: tr('Lock the paints away') }, { id: 'tell', label: tr('Tell Washington') }] },
  ],
  steps: [
    // 1.1: one o'clock at night; the door
    async g => {
      await g.scene('corridor', { here: ['simon'], moods: { simon: 'angry' }, keys: CORRIDOR.chains });
      g.title(tr('The First Night'));
      await g.plate(tr('Night, one o’clock. In the corridor — a clank of metal, footsteps, a groan. There is light under Virginia’s door.'));
      await g.play(door);
    },
    // 1.2: the lubricator; the pillow; ⚑ “Good night, sir” — a chance at the crack of her door
    async g => {
      await g.scene('corridor', { here: ['simon', 'virginia', 'otis'], moods: { simon: 'angry', virginia: 'afraid', otis: 'smile' }, keys: CORRIDOR.oil }, { cut: true });
      await g.plate(tr('The moonlit corridor. Down the middle of it walks an old man in fetters, his eyes burning like red coals. The door of the parents’ room opens: Mr Otis, in his dressing-gown and slippers, with a candle.'));
      await g.say('otis', 'My dear sir, I really must insist on your oiling those chains. I have brought you a small bottle of the Tammany Rising Sun Lubricator. It is said to be completely efficacious upon one application');
      g.set('bottle', 'table');
      g.set('otis_with', ['candle_l']);
      await g.plate(tr('He sets the bottle on the little table by the suit of armour and shuts his door.'));
      g.here('otis', false);
      g.set('door_parents', 90);
      g.set('bottle', 'smashed');
      g.set('door_twins', 320);
      await g.plate(tr('The ghost stands still. Then he snatches up the bottle, dashes it on the floor and howls. From the twins’ door a pillow flies past his head. He backs away to the wall — past Virginia’s door, past the crack she is looking through.'));
      const goodnight = await g.choose('goodnight', { 'simon#chest': [
        { id: 'wish', label: tr('Whisper: “Good night, sir”') },
      ] }, { within: 5000, otherwise: 'pass' });
      if (goodnight === 'wish') {
        await g.say('virginia', 'Good night, sir', { how: 'a whisper through the crack of the door' });
        g.mood('simon', 'surprised');
        await g.plate(tr('He stops dead and looks into the crack. His eyes go out — just an old man. He goes into the wall without answering.'));
      } else {
        await g.plate(tr('He goes past without noticing the crack, and into the wall.'));
      }
      g.here('simon', false);
      g.apply('goodnight');
    },
    // 1.3: the Tapestry Chamber — only the player sees it
    async g => {
      const { wished } = facts(g.state);
      await g.scene('tapestry', { here: ['simon'], moods: { simon: 'angry' } });
      await g.plate(tr('Only you see this. Sir Simon on his window-seat, rubbing the oil off his sleeve. He lays his ear to the wall: from below, the twins’ laughter.'));
      await g.say('narrator', 'Never, in a brilliant and uninterrupted career of three hundred years, had he been so grossly insulted');
      await g.say('simon', 'Oil. For me. For me, at whom the Dowager Duchess of Bolton…');
      if (wished) {
        await g.plate(tr('He looks at the door.'));
        await g.say('simon', '“Good night”… She is mocking me');
        g.mark('goodnight', 'wish', tr('He decided you were mocking him.'));
      }
      g.mood('simon', 'thinking');
      await g.say('simon', 'The stain. We shall begin with the stain');
      g.gauge('simon');
    },
    // 1.4: the wagers
    async g => {
      await g.scene('library', { here: ['otis', 'virginia'], moods: { otis: 'thinking', virginia: 'neutral' }, keys: LIBRARY.morning });
      await g.plate(tr('Morning after morning. The stain is back in its place, bright red. Washington rubs it out; Papa locks the library and puts the key in his pocket; in the morning the stain is there again.'));
      await g.say('narrator', 'Sometimes it was a dull red, then it would be vermilion, then a rich purple');
      await g.plate(tr('Breakfast at the window. The family bets on the colour.'));
      await g.say('twin_star', 'A dollar on purple!');
      await g.say('twin_stripes', 'Two on vermilion!');
      await g.say('otis', 'The laws of Nature are not going to be suspended for the British aristocracy', { how: 'from behind his newspaper, without looking up' });
      g.mood('otis', 'smile');
      g.mood('virginia', 'laugh');
      await g.plate(tr('Mrs Otis laughs. Virginia laughs with them —'));
      g.mood('virginia', 'sad');
      await g.plate(tr('— and looks at the floor.'));
    },
    // 1.5: the almond; the sketch
    async g => {
      await g.scene('grounds', { here: ['virginia', 'mrs_umney'], moods: { virginia: 'thinking' }, keys: GROUNDS.paint });
      await g.plate(tr('Morning in the garden. Virginia at her easel, painting the old dry almond tree.'));
      await g.play(sketch);
      await g.say('mrs_umney', 'It does not flower. Not as long as I can remember', { how: 'in passing, to herself' });
      g.mood('virginia', 'surprised');
      await g.plate(tr('Virginia reaches for her red — the cakes of red and of vermilion are nearly gone, scraped out. She looks at the house.'));
    },
    // 1.6: ⚑ the paints
    async g => {
      await g.scene('grounds', { here: ['virginia'], moods: { virginia: 'thinking' }, keys: GROUNDS.paint }, { cut: true });
      await g.plate(tr('Her reds are on the stain. Going to him herself is too soon: she has never spoken to him, and the Tapestry Chamber is the murderer’s room, where, Mrs Umney says, nobody goes.'));
      const paints = await g.choose('paints', { 'virginia#chest': [
        { id: 'leave', label: tr('Leave the open box by the library') },
        { id: 'lock', label: tr('Lock the paints away') },
        { id: 'tell', label: tr('Tell Washington') },
      ] });
      if (paints === 'leave') {
        await g.scene('library', { here: ['virginia'], moods: { virginia: 'sad' }, keys: LIBRARY.morning });
        await g.plate(tr('In the evening she sets the open paint-box on the window-sill by the library doors. In the morning the box is in its place: the red, the vermilion and the purple scraped out clean. The stain is scarlet, fresh.'));
      } else if (paints === 'lock') {
        await g.scene('corridor', { here: ['simon'], moods: { simon: 'angry' }, keys: CORRIDOR.pacing });
        await g.plate(tr('The box goes into the chest of drawers, the key under her pillow. In the night someone walks up and down outside her door for a long time; the chains clink, and fall silent.'));
        await g.scene('library', { here: ['virginia'], moods: { virginia: 'thinking' }, keys: LIBRARY.morning });
        await g.plate(tr('In the morning the floor before the hearth is clean.'));
      } else {
        g.here('washington', true);
        g.mood('washington', 'smile');
        await g.say('virginia', 'He takes my paints');
        await g.say('washington', 'Does he? Then we’ll be waiting for him');
        await g.plate(tr('In the evening Washington begs the library key from Papa.'));
        await g.scene('corridor', { keys: CORRIDOR.night });
        await g.plate(tr('In the night, from the library —'));
        await g.say('twin_star', 'For Ginny’s paints!', { at: 'narrator', how: 'a battle cry, in the dark, from downstairs' });
        await g.plate(tr('— a rattle of peas, a groan.'));
        await g.scene('library', { here: ['virginia'], moods: { virginia: 'sad' }, keys: LIBRARY.morning });
        await g.plate(tr('In the morning the stain is red, half painted, unfinished at one edge.'));
      }
      g.apply('paints');
    },
  ],
};
