// Epilogue (scenario §10): one of three finales, by the path (story.js facts) — “The Almond” (went with him: Papa's chair
// at her door, the funeral under the yew, years later with Cecil), “The Candle by the Wall” (walked past the chair: the
// breakfast, the chair gone, the funeral, the wedding, Papa on the floor before the tapestry), “The Stain” (stayed at the
// door or woke Papa: the morning they leave, the carriages past the dry almond). Two parts with “Next” between them — a
// pause meant: the player only watches. The finale's name is its title, at the beginning.
// On the scenes' pieces (game.md «Stage 5 — pieces»); the hall still the library till its scene comes.
// Reads: the path, choices.name, choices.paints, choices.trap, choices.goodnight, choices.door, scales.
import { ENDINGS, LIBRARY, CORRIDOR, GROUNDS, HALL, facts, piece } from '../story.js';

const label = id => ENDINGS.find(e => e.id === id).label;

export default {
  number: '', title: tr('Epilogue'),
  titles: ['The Finale, part one', 'The Finale, part two'],
  choices: [],
  steps: [
    async g => {
      const f = facts(g.state);
      if (f.ending === 'almond') {
        await piece(g, 'chair_night', {
          sat: () => g.say('narrator', 'Mr Otis had slept badly before. From that night until they left Canterville he did not sleep at all'),
        }, async () => {
          await g.scene('corridor', { beat: 'chair_night', here: ['otis', 'virginia'], moods: { otis: 'tired', virginia: 'sad' }, keys: CORRIDOR.chair });
          g.title(label('almond'));
        });
        await g.say('narrator', 'Four days later, at night, they buried him in the churchyard under the old yew');
        await funeral(g, f);
      } else if (f.ending === 'candle') {
        await piece(g, 'breakfast_funeral', {
          say: async () => {
            await g.say('otis', 'We shall stay four more days. A funeral');
            await g.say('mrs_otis', 'Whose, Hiram?');
            await g.say('otis', 'Ask Virginia');
            if (f.shares) await g.say('virginia', 'His. I went with him in the night. I promised Papa — and I went');
            else {
              await g.say('washington', 'Ginny?');
              await g.say('narrator', 'She said nothing; her father said nothing too. Her mother looked from one to the other');
            }
          },
        }, async () => {
          await g.scene('library', { beat: 'breakfast_funeral', here: ['virginia', 'otis', 'mrs_otis', 'washington', 'twin_star', 'twin_stripes'], moods: { otis: 'tired', virginia: 'sad' }, keys: { ...LIBRARY.morning, shares: f.shares } });
          g.title(label('candle'));
        });
        await piece(g, 'no_chair', {}, () => g.scene('corridor', { beat: 'no_chair', here: ['virginia'], moods: { virginia: 'sad' }, keys: CORRIDOR.empty }));
        await piece(g, 'letters', {}, () => g.scene('library', { beat: 'letters', here: ['otis'], moods: { otis: 'thinking' }, keys: LIBRARY.night }));
        await funeral(g, f);
      } else {
        await piece(g, 'departure', {
          stain: () => (f.plays ? g.say('otis', 'Leave it. It is his house. At a valuation') : g.say('mrs_umney', 'It has gone quiet. Quite quiet', { how: 'at the doors, softly, almost sorry' })),
        }, async () => {
          await g.scene('library', { beat: 'departure', here: ['virginia', 'otis', 'mrs_otis', 'washington', 'twin_star', 'twin_stripes', 'mrs_umney'], moods: { otis: 'neutral', virginia: 'sad' }, keys: { ...LIBRARY.morning, plays: f.plays, paints: f.paints === 'leave', sketch: g.state.marks.sketch === 'blot' ? 'blot' : 'clean' } });
          g.title(label('stain'));
        });
        if (f.warned) await g.say('narrator', 'That morning her candle-end lay at her door. She took it with her');
        if (f.door === 'stay') {
          // (the hall: its pieces not made yet — its moment, narrated)
          await g.scene('hall', { here: ['otis', 'virginia'], moods: { otis: 'tired', virginia: 'sad' }, keys: HALL.departure });
          await g.say('otis', 'I believe I fell asleep in the night. Forgive me, Ginny');
          await g.say('narrator', 'She said nothing, and took his hand');
        } else {
          await g.say('narrator', 'Her father was beside her all morning, and never took his eyes off the windows of the Tapestry Chamber');
        }
      }
      // (the pause the scenario means: the finale's two parts, “Next” between them)
      await g.plate(f.ending === 'stain' ? tr('The porch; the carriages.') : tr('Years later.'));
    },
    async g => {
      const f = facts(g.state);
      if (f.ending === 'almond') {
        if (!f.named) await stain(g);
        await piece(g, 'years', {}, () => g.scene('grounds', { beat: 'years', here: ['virginia', 'cecil'], moods: { virginia: 'smile', cecil: 'smile' }, keys: GROUNDS.years }));
        await g.say('cecil', 'You have never told me what happened to you that night');
        await g.say('virginia', 'Don’t ask me, Cecil. He showed me what Life is, and what Death signifies, and why Love is stronger than both');
        await g.say('cecil', 'You may keep your secret, as long as I have your heart');
        await g.say('virginia', 'You have always had it');
        await g.say('cecil', 'And you will tell our children some day, won’t you?');
        g.mood('virginia', 'surprised');
        await g.wait(2000);
        await piece(g, 'almond_last', {}, () => g.scene('grounds', { beat: 'almond_last', keys: { ...GROUNDS.last, nightingale: f.named ? 0 : 1 } }));
      } else if (f.ending === 'candle') {
        if (!f.named) await stain(g);
        await g.say('narrator', 'The Otises kept Canterville, and came there every summer');
        // (the hall: its pieces not made yet — its moment, narrated)
        await g.scene('hall', { here: ['otis', 'virginia', 'cecil'], moods: { otis: 'smile', virginia: 'smile', cecil: 'smile' }, keys: HALL.wedding });
        await g.say('narrator', 'Her wedding. At the carriage');
        await g.say('cecil', 'I promise you, sir, she will write every week');
        await g.say('otis', 'Promise for yourself, Your Grace');
        g.mood('otis', 'sad');
        await g.say('narrator', 'He took her hand — and let it go first');
        await piece(g, 'candle_last', {}, () => g.scene('tapestry', { beat: 'candle_last', here: ['otis'], moods: { otis: 'sad' } }));
      } else {
        // (the hall: its pieces not made yet — its moment, narrated)
        await g.scene('hall', { here: ['virginia', 'otis', 'mrs_otis', 'washington', 'twin_star', 'twin_stripes'], moods: { otis: 'neutral', virginia: 'sad' }, keys: HALL.departure });
        if (f.door === 'wake') await g.say('narrator', 'Her father gave her his hand at the carriage');
        if (f.shares) await g.say('narrator', 'She sat between the twins, who were arguing about which of them would see London first');
        else await g.say('narrator', 'She was the last to come down the steps, and turned to look at the windows of the Tapestry Chamber');
        if (f.plays) await g.say('narrator', 'From above, from the windows of the Tapestry Chamber, a chain clinked — once. The twins fell silent; nobody laughed');
        if (f.wished) {
          await g.say('virginia', 'Good night, sir', { how: 'a whisper, in broad daylight' });
          await g.wait(1500);
        }
        if (f.plays) await g.say('narrator', 'They say that at Canterville they still rattle chains at night, and the new owners buy lubricant');
        else await g.say('narrator', 'They say nothing has been heard at Canterville for a long time. Only the Tapestry Chamber is always cold');
        await piece(g, 'coaches', {}, () => g.scene('grounds', { beat: 'coaches', keys: GROUNDS.coaches }));
      }
    },
  ],
};

// the funeral under the yew (`funeral`): the nightingale — or silence (her name); the family beside her, or a step
// behind; at «Свеча» Mr Otis apart with his candle
async function funeral(g, f) {
  const home = f.ending === 'almond' ? ['otis', 'mrs_otis', 'washington', 'twin_star', 'twin_stripes'] : ['otis'];
  await piece(g, 'funeral', {}, () => g.scene('grounds', { beat: 'funeral', here: ['virginia', ...home], moods: { virginia: 'sad' },
    keys: { ...GROUNDS.funeral, ...(f.ending === 'candle' ? GROUNDS.apart : {}), with_family: f.ending === 'almond' && f.shares, father_apart: f.ending === 'candle', nightingale: f.named ? 0 : 1 } }));
}
// the next morning, when nobody said her name: the old brown stain under the paints, and a rug over it (`brown`)
async function stain(g) {
  await piece(g, 'brown', {
    rug: () => g.say('mrs_otis', 'Put a rug over it'),
  }, () => g.scene('library', { beat: 'brown', here: ['virginia', 'washington', 'mrs_otis'], moods: { virginia: 'sad', washington: 'thinking' }, keys: { ...LIBRARY.morning, stain: 'brown' } }));
}
