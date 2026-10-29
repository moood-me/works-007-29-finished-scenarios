// Epilogue (scenario §10): one of three finales, by the path (story.js facts) — “The Almond” (went with him: Papa's chair
// at her door, the funeral under the yew, years later with Cecil), “The Candle by the Wall” (walked past the chair: the
// breakfast, the chair gone, the funeral, the wedding, Papa on the floor before the tapestry), “The Stain” (stayed at the
// door or woke Papa: the morning they leave, the carriages past the dry almond). Two parts with “Next” between them — a
// pause meant: the player only watches. The finale's name is its title, at the beginning.
// Stand-ins (story.js PLACES): the corridor and the hall — the library; the garden by the house and the churchyard — the
// Garden of Death.
// Reads: the path, choices.name, choices.paints, choices.trap, choices.goodnight, choices.door, scales.
import { ENDINGS, LIBRARY, OTIS, CORRIDOR, GROUNDS, facts } from '../story.js';

const label = id => ENDINGS.find(e => e.id === id).label;

export default {
  number: '', title: tr('Epilogue'),
  titles: ['The Finale, part one', 'The Finale, part two'],
  choices: [],
  steps: [
    async g => {
      const f = facts(g.state);
      if (f.ending === 'almond') {
        await g.scene('corridor', { here: ['otis', 'virginia'], moods: { otis: 'tired', virginia: 'sad' }, keys: CORRIDOR.chair });
        g.title(label('almond'));
        await g.plate(tr('The night after her return. Papa sets an armchair at her door and sits down in it with a book. He asks her nothing.'));
        await g.say('narrator', 'Mr Otis had slept badly before. From that night until they left Canterville he did not sleep at all');
        await funeral(g, f, tr('Four days later, at night. The churchyard under the old yew: torches, black plumes, the coffin on its trestles. Virginia lays on the coffin a cross of white almond blossom. The moon comes out from behind the clouds.'));
        if (f.shares) await g.plate(tr('The whole family beside her; Washington with a torch; the twins silent.'));
        else await g.plate(tr('She stands at the coffin alone; the family a step behind.'));
      } else if (f.ending === 'candle') {
        await g.scene('library', { here: ['otis', 'virginia'], moods: { otis: 'tired', virginia: 'sad' }, keys: LIBRARY.morning });
        g.title(label('candle'));
        await g.plate(tr('Morning, breakfast.'));
        await g.say('otis', 'We shall stay four more days. A funeral');
        await g.say('mrs_otis', 'Whose, Hiram?');
        await g.say('otis', 'Ask Virginia');
        if (f.shares) {
          await g.say('virginia', 'His. I went with him in the night. I promised Papa — and I went');
          await g.plate(tr('Her mother puts down her cup and takes her hand. Washington gets up and goes out.'));
        } else {
          await g.plate(tr('Virginia looks at the table.'));
          await g.say('washington', 'Ginny?');
          await g.plate(tr('She says nothing; Papa says nothing too. Her mother looks from one to the other.'));
        }
        await g.scene('corridor', { here: ['virginia'], moods: { virginia: 'sad' }, keys: CORRIDOR.empty });
        await g.plate(tr('At night she opens her door: no armchair; the corridor is empty.'));
        await g.scene('library', { here: ['otis'], moods: { otis: 'thinking' }, keys: LIBRARY.night });
        await g.plate(tr('Downstairs, in the library, the lamp: Papa is writing letters. The drawing that stood against his inkstand he has put away in a drawer of his desk.'));
        await funeral(g, f, tr('The funeral, at night, under the yew. Virginia lays a cross of almond blossom on the coffin; Papa stands apart, with a candle.'));
      } else {
        await g.scene('library', { here: ['otis', 'virginia'], moods: { otis: 'neutral', virginia: 'sad' }, keys: LIBRARY.morning });
        g.title(label('stain'));
        if (f.plays) {
          await g.plate(tr('The morning they leave. In the library, before the hearth, the stain again — fresh, scarlet; where he found the red, nobody knows. Washington takes out his little bottle.'));
          await g.say('otis', 'Leave it. It is his house. At a valuation');
        } else {
          await g.plate(tr('The morning they leave. The floor is clean.'));
          await g.say('mrs_umney', 'It has gone quiet. Quite quiet', { how: 'at the doors, softly, almost sorry' });
        }
        if (f.paints === 'leave') await g.plate(tr('Virginia leaves her sketch of the dry almond on the window-sill by the library: her paint-box has stood there since that night — she would not let it be cleared away. The sketch goes on top of it.'));
        else await g.plate(tr('Virginia leaves her sketch of the dry almond on the window-sill by the library.'));
        if (g.state.marks.sketch === 'blot') await g.plate(tr('On the sketch, on the old trunk, the blot where the brush slipped that morning.'));
        if (f.warned) await g.plate(tr('That morning her candle-end lay at her door. She takes it with her.'));
        if (f.door === 'stay') {
          await g.scene('hall', { here: ['otis', 'virginia'], moods: { otis: 'tired', virginia: 'sad' }, keys: OTIS });
          await g.plate(tr('In the hall, Papa, buttoning his coat:'));
          await g.say('otis', 'I believe I fell asleep in the night. Forgive me, Ginny');
          await g.plate(tr('She says nothing, and takes his hand.'));
        } else {
          await g.plate(tr('Papa is beside her all morning, and never takes his eyes off the windows of the Tapestry Chamber.'));
        }
      }
    },
    async g => {
      const f = facts(g.state);
      if (f.ending === 'almond') {
        if (!f.named) await stain(g);
        await g.scene('grounds', { here: ['virginia', 'cecil'], moods: { virginia: 'smile', cecil: 'smile' }, keys: GROUNDS.years });
        await g.plate(tr('Years later. Virginia is a duchess; she is under the yew with Cecil.'));
        await g.say('cecil', 'You have never told me what happened to you that night');
        await g.say('virginia', 'Don’t ask me, Cecil. He showed me what Life is, and what Death signifies, and why Love is stronger than both');
        await g.say('cecil', 'You may keep your secret, as long as I have your heart');
        await g.say('virginia', 'You have always had it');
        await g.say('cecil', 'And you will tell our children some day, won’t you?');
        await g.plate(tr('She blushes.'));
        await g.scene('grounds', { keys: GROUNDS.last });
        if (f.named) await g.plate(tr('Moonlight on the flowering almond over the grave — and silence.'));
        else await g.plate(tr('Moonlight on the flowering almond over the grave; the nightingale sings.'));
      } else if (f.ending === 'candle') {
        if (!f.named) await stain(g);
        await g.say('narrator', 'The Otises kept Canterville, and came there every summer');
        await g.scene('hall', { here: ['otis', 'virginia'], moods: { otis: 'smile', virginia: 'smile' }, keys: OTIS });
        await g.plate(tr('Her wedding. At the carriage.'));
        await g.say('cecil', 'I promise you, sir, she will write every week');
        await g.say('otis', 'Promise for yourself, Your Grace');
        g.mood('otis', 'sad');
        await g.plate(tr('He takes her hand — and lets it go first.'));
        await g.scene('tapestry', {});
        await g.plate(tr('The carriage has gone. Papa, with a candle, goes into the Tapestry Chamber and sits down on the floor facing the tapestry, as on that night when he waited for her. The tapestry stirs no more. Quiet.'));
      } else {
        await g.scene('hall', { here: ['otis', 'virginia'], moods: { otis: 'neutral', virginia: 'sad' }, keys: OTIS });
        await g.plate(tr('The porch; the carriages.'));
        if (f.door === 'wake') await g.plate(tr('Papa gives her his hand at the carriage.'));
        if (f.shares) await g.plate(tr('She sits between the twins, who are arguing about which of them will see London first.'));
        else await g.plate(tr('She is the last to come down the steps, and turns to look at the windows of the Tapestry Chamber.'));
        if (f.plays) await g.plate(tr('From above, from the windows of the Tapestry Chamber, a chain clinks — once. The twins fall silent; nobody laughs.'));
        if (f.wished) {
          await g.say('virginia', 'Good night, sir', { how: 'a whisper, in broad daylight' });
          await g.plate(tr('Nobody answers.'));
        }
        if (f.plays) await g.say('narrator', 'They say that at Canterville they still rattle chains at night, and the new owners buy lubricant');
        else await g.say('narrator', 'They say nothing has been heard at Canterville for a long time. Only the Tapestry Chamber is always cold');
        await g.scene('grounds', { keys: GROUNDS.coaches });
        await g.plate(tr('The carriages go down the avenue past the dry almond tree. It does not blossom.'));
      }
    },
  ],
};

// the funeral under the yew: the nightingale — or silence (her name)
async function funeral(g, f, text) {
  const home = f.ending === 'almond' ? ['otis', 'mrs_otis', 'washington', 'twin_star', 'twin_stripes'] : ['otis'];
  await g.scene('grounds', { here: ['virginia', ...home], moods: { virginia: 'sad' }, keys: { ...GROUNDS.funeral, ...(f.ending === 'candle' ? GROUNDS.apart : {}) } });
  await g.plate(text);
  if (f.named) await g.plate(tr('No nightingale; quiet — only the torches crackle.'));
  else await g.plate(tr('In the grove a nightingale begins to sing — the same as in the Garden.'));
}
// the next morning, when nobody said her name: the old brown stain under the paints, and a rug over it
async function stain(g) {
  await g.scene('library', { here: ['virginia'], moods: { virginia: 'sad' }, keys: LIBRARY.morning });
  await g.plate(tr('In the morning, before the hearth in the library, an old brown stain has come through from under all the paints — a real one. Washington rubs it with Pinkerton’s Champion; it does not come off. He sits back on his heels and puts the stick in his pocket.'));
  await g.say('mrs_otis', 'Put a rug over it');
  await g.plate(tr('They unroll the rug. Virginia stands in the doorway, silent.'));
}
