// Prologue. “Pinkerton’s Champion” (scenario §5, П.1–П.5). The evening they arrive, a storm: the bloodstain before the
// hearth, Pinkerton’s Champion rubs it out — thunder; in the window, behind the family’s backs, an old face only Virginia
// sees; ⚑ the face (it only colours).
// Reads: nothing. Leaves: choices.face, marks.face, scales.virginia. М1 touched — «There was someone… I think».
import { LIBRARY, piece } from '../story.js';

// the evening they come: the rain lashing the windows, the fire
const STORM = { storm: 0.55, fire: 0.22 };
import { glass } from '../minigames/all.js';

export default {
  number: '', title: tr('Pinkerton’s Champion'),
  titles: ['The Storm and the Stain', 'The Face in the Window'],
  choices: [
    { id: 'face', title: tr('The face in the window'), options: [{ id: 'told', label: tr('“There was someone. In the window”') }, { id: 'silent', label: tr('Say nothing') }] },
  ],
  steps: [
    // П.1–П.2: the storm; the stain (the pieces `arrive`, `stain`, `rub`)
    async g => {
      const FAMILY = ['virginia', 'otis', 'mrs_otis', 'washington', 'twin_star', 'twin_stripes', 'mrs_umney'];
      await piece(g, 'arrive', {
        in: async () => {
          await g.say('narrator', 'When Mr Hiram B. Otis, the American Minister, bought Canterville Chase, everyone told him he was doing a very foolish thing, as there was no doubt at all that the place was haunted');
          await g.say('otis', 'I will take the furniture and the ghost at a valuation');
        },
      }, async () => {
        await g.scene('library', { beat: 'arrive', here: FAMILY, moods: { virginia: 'neutral', otis: 'smile' }, keys: LIBRARY.evening, air: STORM });
        g.title(tr('The Canterville Ghost'));
      });
      await piece(g, 'stain', { point: () => g.say('mrs_otis', 'I am afraid something has been spilt there') });
      g.mood('virginia', 'afraid');
      await g.say('mrs_umney', 'Blood, madam. Lady Eleanore’s. Her own husband, Sir Simon, murdered her on this very spot. In fifteen hundred and seventy-five', { how: 'quietly, as if he might hear' });
      await g.say('mrs_umney', 'The stain cannot be washed out. And his room is the Tapestry Chamber, upstairs. Nobody goes there');
      await piece(g, 'rub', {
        kneel: () => g.say('washington', 'Pinkerton’s Champion Stain Remover. It will clean up anything'),
        thunder: () => { g.sound('thunder'); },
        cheer: async () => {
          await g.say('twin_star', 'Hurrah!');
          await g.say('twin_stripes', 'Hurrah!');
        },
      });
    },
    // П.3–П.4: the window (М1); ⚑ the face (the pieces `window_face`, `face_told` | `face_silent`)
    async g => {
      await g.scene('library', { beat: 'window_face', here: ['virginia', 'otis', 'mrs_otis', 'washington', 'twin_star', 'twin_stripes', 'mrs_umney'], moods: { virginia: 'thinking', otis: 'laugh', twin_star: 'laugh', twin_stripes: 'laugh', washington: 'laugh', mrs_umney: 'eyes_closed' }, keys: LIBRARY.evening, air: STORM }, { cut: true });
      g.sound('laugh', { loud: 0.5 });
      await g.beat('window_face');
      const { touched } = await g.play(glass);
      g.mood('virginia', 'afraid');
      await g.beat('her_window');
      const face = await g.choose('face', { 'virginia#chest': [
        { id: 'told', label: tr('“There was someone. In the window”') },
        { id: 'silent', label: tr('Say nothing') },
      ] });
      if (face === 'told') {
        if (touched) await g.say('virginia', 'There was someone… I think', { how: 'unsure, quietly' });
        else await g.say('virginia', 'There was someone. In the window');
        await piece(g, 'face_told', {
          turn: async () => {
            await g.say('washington', 'A reflection, Ginny. Shall I take that out too?');
            g.sound('laugh', { loud: 0.6 });
          },
          hand: async () => {
            g.mood('virginia', 'sad');
            await g.say('otis', 'It is only the storm, my dear');
          },
        });
      } else {
        g.mood('virginia', 'thinking');
        // (she keeps it: the thunder going away, the rain, the laughter dying down behind her)
        g.sound('thunder', { far: true, delay: 1, loud: 0.6 });
        await piece(g, 'face_silent');
      }
      g.apply('face');
    },
  ],
};
