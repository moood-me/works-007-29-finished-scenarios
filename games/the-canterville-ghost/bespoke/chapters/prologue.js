// Prologue. “Pinkerton’s Champion” (scenario §5, П.1–П.5). The evening they arrive, a storm: the bloodstain before the
// hearth, Pinkerton’s Champion rubs it out — thunder; in the window, behind the family’s backs, an old face only Virginia
// sees; ⚑ the face (it only colours).
// Reads: nothing. Leaves: choices.face, marks.face, scales.virginia.
import { LIBRARY } from '../story.js';
import { glass } from '../minigames/all.js';

export default {
  number: '', title: tr('Pinkerton’s Champion'),
  titles: ['The Storm and the Stain', 'The Face in the Window'],
  choices: [
    { id: 'face', title: tr('The face in the window'), options: [{ id: 'told', label: tr('“There was someone. In the window”') }, { id: 'silent', label: tr('Say nothing') }] },
  ],
  steps: [
    // П.1–П.2: the storm; the stain
    async g => {
      await g.scene('library', { here: ['virginia', 'otis'], moods: { virginia: 'neutral', otis: 'smile' }, keys: LIBRARY.evening });
      g.title(tr('The Canterville Ghost'));
      await g.plate(tr('Evening; rain lashes the painted window. The Otises come into the library with wet umbrellas: Mr Otis, Mrs Otis, Washington, the twins and Virginia. The old housekeeper, Mrs Umney, in black silk and a white cap, drops them a curtsey.'));
      await g.say('narrator', 'When Mr Hiram B. Otis, the American Minister, bought Canterville Chase, everyone told him he was doing a very foolish thing, as there was no doubt at all that the place was haunted');
      await g.say('otis', 'I will take the furniture and the ghost at a valuation');
      await g.say('mrs_otis', 'I am afraid something has been spilt there');
      await g.plate(tr('Before the hearth, on the floor, a dark red stain.'));
      g.mood('virginia', 'afraid');
      await g.say('umney', 'Blood, madam. Lady Eleanore’s. Her own husband, Sir Simon, murdered her on this very spot. In fifteen hundred and seventy-five', { how: 'quietly, as if he might hear' });
      await g.say('umney', 'The stain cannot be washed out. And his room is the Tapestry Chamber, upstairs. Nobody goes there');
      await g.plate(tr('Washington is already on his knees by the hearth with a little black stick.'));
      await g.say('washington', 'Pinkerton’s Champion Stain Remover. It will clean up anything');
      await g.plate(tr('He rubs. The stain is gone. Lightning — and thunder through the whole house. Mrs Umney sinks into an armchair in a faint.'));
      await g.say('twin_a', 'Hurrah!');
      await g.say('twin_b', 'Hurrah!');
    },
    // П.3–П.4: the window; ⚑ the face
    async g => {
      await g.scene('library', { here: ['virginia', 'otis'], moods: { virginia: 'thinking', otis: 'laugh' }, keys: LIBRARY.evening }, { cut: true });
      await g.plate(tr('Everyone is laughing and fanning Mrs Umney. Virginia is looking at the dark window.'));
      await g.play(glass);
      g.here('simon', true);
      g.mood('simon', 'sad');
      g.mood('virginia', 'afraid');
      await g.plate(tr('Lightning: in the glass, behind the family’s backs, an old face, its eyes like red coals. It is looking at the clean floor.'));
      const face = await g.choose('face', { 'virginia#chest': [
        { id: 'told', label: tr('“There was someone. In the window”') },
        { id: 'silent', label: tr('Say nothing') },
      ] });
      if (face === 'told') {
        await g.say('virginia', 'There was someone. In the window');
        g.here('simon', false);
        await g.plate(tr('Everyone turns round: in the window there is only rain.'));
        await g.say('washington', 'A reflection, Ginny. Shall I take that out too?');
        g.mood('virginia', 'sad');
        await g.plate(tr('The twins roar with laughter. Papa puts his hand on her shoulder.'));
        g.mood('otis', 'smile');
        await g.say('otis', 'It is only the storm, my dear');
      } else {
        g.mood('virginia', 'thinking');
        await g.plate(tr('She looks at the window till Mrs Umney opens her eyes. The face is gone. She says nothing.'));
        g.here('simon', false);
      }
      g.apply('face');
    },
  ],
};
