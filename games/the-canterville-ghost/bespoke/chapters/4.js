// IV. In two forms, by the wall (3.7). “The Garden of Death” (scenario §5, 4.1–4.7; went with him): the dark and the
// voices; the house looking for her; the Garden; ⚑ her name in the prayer; tears, the casket, “Good night” or
// “Farewell”; midnight — the whole house falls silent, the panel on the landing, the chamber, the almond in blossom.
// “The Last Night” (4С.1–4С.6; called Papa): by the fire, “We go to London tomorrow”; the word at her door, Papa's chair;
// he comes to take his leave; ⚑ past the chair — then, late (walked past): the dark, the Garden, ⚑ her name, tears;
// midnight, Papa waiting at the wall, “You promised.” — “Yes.”; the chamber. Stayed at the door or woke Papa: the
// chapter ends after the chair.
// Each step is one of the first form and one of the second (their titles say both); a step with nothing in this form
// passes.
// Stand-ins (story.js PLACES): the dark — the Tapestry Chamber; the corridor and the hall — the library; the chamber —
// the Garden of Death.
// Reads: choices.wall, choices.hunger, choices.trap, choices.goodnight, scales. Leaves: choices.name, choices.door,
// marks.name, marks.door, marks.word.
import { LIBRARY, OTIS, facts } from '../story.js';
import { hand, release, word, tiptoe, threshold, shoulder } from '../minigames/all.js';

export default {
  number: 'IV', title: tr('The Garden of Death'),
  titleOf: state => (facts(state).wall === 'papa' ? tr('The Last Night') : tr('The Garden of Death')),
  titles: ['The Dark · By the Fire', 'The House · The Word', 'The Garden · The Farewell', 'Her Name · Past the Chair', 'Tears · Too Late', 'Midnight · Too Late: the Wall'],
  choices: [
    { id: 'door', title: tr('Past the chair'), weight: '⚑', options: [{ id: 'pass', label: tr('Walk past Papa') }, { id: 'stay', label: tr('Stay at the door') }, { id: 'wake', label: tr('Wake Papa') }] },
    { id: 'name', title: tr('Her name'), options: [{ id: 'named', label: tr('“…and give rest to Lady Eleanore”') }, { id: 'unnamed', label: tr('“Lord, let him sleep”') }] },
  ],
  steps: [
    // 4.1 the dark | 4С.1 by the fire
    async g => {
      const { wall, shares } = facts(g.state);
      if (wall === 'go') {
        await dark(g);
        return;
      }
      await g.scene('library', { here: ['otis', 'virginia'], moods: { otis: 'neutral', virginia: 'sad' }, keys: LIBRARY.evening });
      await g.plate(tr('Evening by the fire; the whole family.'));
      await g.say('virginia', 'He asked me to go with him into the Garden of Death. Through the wall. To pray for him');
      if (shares) {
        await g.say('otis', 'You told us about him before. I believe you');
      } else {
        await g.say('washington', 'How many times have you been to him, Ginny?');
        await g.plate(tr('She does not answer. Papa touches her forehead — then looks at her longer, and stops smiling.'));
        g.mood('otis', 'sad');
      }
      await g.scene('tapestry', {});
      await g.plate(tr('Papa takes a candle and climbs to the Tapestry Chamber: it is empty, the tapestry hangs still. He knocks politely on the wall with his knuckles.'));
      await g.say('otis', 'Sir?');
      await g.plate(tr('Silence.'));
      await g.scene('library', { here: ['otis', 'virginia'], moods: { otis: 'thinking', virginia: 'sad' }, keys: LIBRARY.evening });
      await g.say('otis', 'We are going to London. Tomorrow morning, all of us');
      await g.plate(tr('Mrs Otis nods.'));
      await g.say('twin_a', 'And the ghost?');
      await g.plate(tr('Nobody answers. Washington sits down beside her on the window-sill, without a word, turning his little black stick in his fingers.'));
    },
    // 4.2 the house looking for her | 4С.2 the word
    async g => {
      const { wall, shares, trap } = facts(g.state);
      if (wall === 'go') {
        await g.scene('hall', {});
        await g.plate(tr('Only you see this. The supper bell; Virginia is not there. Mrs Otis calls from the stairs; the twins run up and down the corridor.'));
        await g.say('mrs_otis', 'Virginia! Ginny!', { how: 'calling up the stairs, worried' });
        await g.scene('tapestry', {});
        await g.plate(tr('Washington with a lantern opens the Tapestry Chamber: empty; the tapestry hangs still.'));
        if (shares) {
          await g.plate(tr('He beats on the wall with his fist:'));
          await g.say('washington', 'Give her back!', { how: 'shouting, beating on the wall' });
          await g.plate(tr('The wall is dead. He sits down under the tapestry with his lantern.'));
        } else if (trap === 'watch') {
          await g.plate(tr('He looks round the empty room, and goes. In the window of the hall — his lantern down by the pond.'));
        } else {
          await g.plate(tr('He does not knock. He sets his lantern on the floor and sits down under the tapestry — to wait.'));
        }
        await g.scene('library', { here: ['otis'], moods: { otis: 'sad' }, keys: LIBRARY.night });
        await g.plate(tr('In the library Papa takes her drawing from his desk and puts it in his inside pocket.'));
        await g.say('otis', 'The gypsies were camped by the field');
        g.here('otis', false);
        await g.plate(tr('Hoofbeats in the yard: Papa and Cecil gallop off to the gypsy camp. Mrs Otis sits in the hall in her shawl, and does not get up.'));
        return;
      }
      await g.scene('corridor', { here: ['otis', 'virginia'], moods: { otis: 'neutral', virginia: 'sad' }, keys: OTIS });
      await g.plate(tr('At her door.'));
      await g.say('otis', 'Promise me: never alone. Not to him, not after him');
      await g.plate(tr('He holds out his hand.'));
      await g.play(word);
      await g.say('virginia', 'I promise');
      await g.plate(tr('He sets an armchair at her door and sits down in it with a book.'));
      await g.say('otis', 'I’ll sit here. I can’t sleep anyway');
      g.mark('word', 'given', tr('You promised Papa: “Never alone.”'));
    },
    // 4.3 the Garden | 4С.3 the farewell
    async g => {
      const { wall, hunger, plays } = facts(g.state);
      if (wall === 'go') {
        await g.scene('death', { here: ['simon', 'virginia'], moods: { simon: 'tired', virginia: 'sad' } });
        await g.plate(tr('The moon, the long grass, the white stars of the hemlock, the old yew; a nightingale. Here he is without his irons — simpler, and older. They sit down in the grass.'));
        if (hunger === 'bread') await g.plate(tr('He takes her parcel out of his sleeve, untouched, and lays it on the grass between them.'));
        else await g.say('simon', 'You said then: “You killed her. Nothing else matters.” Do you think so still?');
        await pray(g);
        return;
      }
      await g.scene('corridor', { here: ['otis', 'virginia'], moods: { otis: 'tired', virginia: 'neutral' }, keys: OTIS });
      await g.plate(tr('Night. Papa is asleep in the armchair, the book on his knees.'));
      g.here('simon', true);
      if (plays) {
        g.mood('simon', 'neutral');
        await g.plate(tr('At the far end of the corridor — Sir Simon in full array: fetters, cloak, eyes like coals. But he has carried his chains in his hand all the way from the corner.'));
        await g.say('narrator', 'For the first time in three hundred years Sir Simon walked down the corridor without a single sound');
      } else {
        g.mood('simon', 'tired');
        await g.plate(tr('He comes barely visible, without his chains, a faint light.'));
      }
      await g.plate(tr('He stops at her door. Virginia sees the light under it, and opens.'));
      await g.plate(tr('He bows.'));
      await g.say('simon', 'I have come to take my leave. It is the custom');
      if (hunger === 'bread') await g.say('simon', 'No one has offered me bread for three hundred years');
      else await g.say('simon', 'Of everyone. Even of those who read me morals');
      await g.plate(tr('And he goes off down the corridor, toward the Tapestry Chamber.'));
    },
    // 4.4 ⚑ her name | 4С.4 ⚑ past the chair
    async g => {
      const { wall, plays, wished } = facts(g.state);
      if (wall === 'go') {
        await g.scene('death', { here: ['simon', 'virginia'], moods: { simon: 'tired', virginia: 'sad' } }, { cut: true });
        await name(g);
        return;
      }
      await g.scene('corridor', { here: ['otis', 'virginia', 'simon'], moods: { otis: 'tired', virginia: 'sad', simon: 'tired' }, keys: OTIS }, { cut: true });
      await g.plate(tr('She stands on the threshold; his light is going away down the corridor.'));
      const door = await g.choose('door', { 'virginia#chest': [
        { id: 'pass', label: tr('Walk past Papa') },
        { id: 'stay', label: tr('Stay at the door') },
        { id: 'wake', label: tr('Wake Papa') },
      ] });
      if (door === 'pass') {
        await g.play(tiptoe);
        await g.plate(tr('She catches him up at the Tapestry Chamber.'));
        await g.say('virginia', 'I will come');
        await g.plate(tr('He looks at her a long time.'));
        await g.say('simon', 'You promised your father. I heard');
        await g.say('virginia', 'I know');
        await g.plate(tr('The wall parts.'));
      } else if (door === 'stay') {
        await g.play(threshold);
        if (wished) {
          await g.say('virginia', 'Good night, sir', { how: 'a whisper after him down the corridor' });
          await g.plate(tr('He stops, without turning round.'));
          await g.say('simon', 'Good night, Miss Virginia');
        } else {
          await g.plate(tr('He does not stop.'));
        }
        g.here('simon', false);
        await g.plate(tr('His light vanishes into the wall. She shuts her door. Papa sleeps.'));
      } else {
        await g.play(shoulder);
        g.mood('otis', 'surprised');
        await g.plate(tr('Papa wakes and sees the light at the end of the corridor. He gets up.'));
        g.mood('otis', 'neutral');
        await g.say('otis', 'Sir. My daughter stays', { how: 'slowly, very politely, standing between them' });
        if (plays) await g.plate(tr('The ghost makes a long, old-fashioned bow; he still holds his chains in his hand.'));
        else await g.plate(tr('The ghost nods slightly.'));
        if (wished) await g.say('simon', 'Good night, Miss Virginia');
        g.here('simon', false);
        await g.plate(tr('He goes into the wall. Papa takes her by the hand.'));
      }
      g.apply('door');
    },
    // 4.5 tears | 4С.5 too late: the dark, the Garden, ⚑ her name
    async g => {
      const { wall, door } = facts(g.state);
      if (wall === 'go') {
        await g.scene('death', { here: ['simon', 'virginia'], moods: { simon: 'tired', virginia: 'sad' } }, { cut: true });
        await tears(g);
        return;
      }
      if (door !== 'pass') return;
      await dark(g);
      await g.scene('death', { here: ['simon', 'virginia'], moods: { simon: 'tired', virginia: 'sad' } });
      await g.plate(tr('The Garden: the moon, the long grass, the hemlock, the yew, the nightingale. They sit down in the grass.'));
      await pray(g);
      await name(g);
    },
    // 4.6 midnight | 4С.5 too late: tears, midnight, Papa at the wall, the chamber
    async g => {
      const { wall, door, shares, trap, named, warned } = facts(g.state);
      if (wall === 'go') {
        await g.scene('hall', { here: ['otis', 'virginia'], moods: { otis: 'sad', virginia: 'tired' }, keys: OTIS });
        await g.plate(tr('The hall. The clock strikes — and with its last stroke the whole house falls silent: no wind, no creaking boards. Papa and Cecil have just come back with nothing.'));
        await g.plate(tr('The panel on the landing of the stairs opens with a crack; on the landing stands Virginia, pale, with a little casket in her hands.'));
        if (shares) await g.plate(tr('Washington runs down from the Tapestry Chamber first and seizes both her hands.'));
        else {
          await g.plate(tr('She stands on the landing and does not come down till Papa climbs up to her himself.'));
          if (trap === 'watch') await g.plate(tr('Washington runs in with his lantern from the pond, last of all.'));
          else await g.plate(tr('Washington comes from the Tapestry Chamber first, and stops two steps below her.'));
        }
        await g.plate(tr('Mrs Otis rushes to her and takes her face in her hands.'));
        await g.say('otis', 'How could you!');
        await g.say('virginia', 'Papa, I have been with the ghost. He is dead. Come');
        if (named) await g.say('virginia', 'He said her name');
        else await g.say('virginia', 'He was a very wicked man. I prayed for him');
        await g.scene('chamber', { here: ['virginia'], moods: { virginia: 'sad' } });
        await g.plate(tr('With candles — behind the panel, into the secret chamber. A skeleton chained to an iron ring, in the patch of moonlight from the little window; its fingers stretch toward an old trencher and ewer that stand just out of reach. Virginia kneels down.'));
        await g.say('twin_a', 'The almond! The dry almond has blossomed!', { how: 'at the little window, astonished, not loud' });
        await g.plate(tr('In the moonlight the tree is white.'));
        if (warned) await g.plate(tr('In the casket, old jewels — and on top of them, her candle-end.'));
        else await g.plate(tr('In the casket, old jewels.'));
        return;
      }
      if (door !== 'pass') return;
      await g.scene('death', { here: ['simon', 'virginia'], moods: { simon: 'tired', virginia: 'sad' } }, { cut: true });
      await tears(g);
      await g.scene('corridor', { here: ['otis'], moods: { otis: 'tired' }, keys: OTIS });
      await g.plate(tr('The clock strikes — and the whole house falls silent at once.'));
      g.mood('otis', 'afraid');
      await g.plate(tr('The silence wakes Papa: the armchair, the open door, the empty bed. He wakes no one.'));
      await g.scene('tapestry', {});
      await g.plate(tr('He takes a candle to the Tapestry Chamber and knocks on the wall with his knuckles, as he did in the evening:'));
      await g.say('otis', 'Sir. Ginny');
      await g.plate(tr('Silence. He sets the candle on the floor and sits down facing the tapestry. The wall parts: Virginia, with the casket.'));
      g.here('virginia', true);
      g.mood('virginia', 'tired');
      await g.say('otis', 'You promised');
      await g.say('virginia', 'Yes');
      await g.wait(2000);
      await g.say('otis', 'Show me');
      await g.plate(tr('He does not give her his hand.'));
      await g.scene('chamber', { here: ['virginia'], moods: { virginia: 'sad' } });
      await g.plate(tr('She leads him behind the tapestry, down a narrow passage in the wall, into the secret chamber — the one behind the panel on the stair landing: the skeleton, the trencher, the ewer. Papa stands in the doorway with his candle while she prays on her knees.'));
      await g.plate(tr('In the little window — the almond, in white blossom.'));
      if (warned) await g.plate(tr('In the casket, jewels — and on top of them, her candle-end.'));
      else await g.plate(tr('In the casket, jewels.'));
    },
  ],
};

// 4.1 / 4С.5: the dark beyond the wall, the voices; holding his hand
async function dark(g) {
  await g.scene('dark', { here: ['simon', 'virginia'], moods: { simon: 'tired', virginia: 'afraid' } });
  await g.plate(tr('Darkness beyond the wall: only his pale light, and her face and hands in it. Shadows, wings, whispers:'));
  await g.say('voices', 'Go back, little Virginia! Go back!');
  await g.say('simon', 'Do not listen');
  await g.play(hand);
}
// 4.3 / 4С.5: his one request
async function pray(g) {
  await g.say('simon', 'Pray with me. I do not remember the words. Of her — we will not speak', { how: '“of her” said quickly, passing it by; he does not say her name' });
}
// 4.4 / 4С.5: ⚑ her name — she prays aloud, he repeats after her word for word
async function name(g) {
  const { plays } = facts(g.state);
  await g.plate(tr('She prays aloud; he repeats after her, word for word.'));
  const name = await g.choose('name', { 'virginia#chest': [
    { id: 'named', label: tr('“…and give rest to Lady Eleanore”') },
    { id: 'unnamed', label: tr('“Lord, let him sleep”') },
  ] });
  if (name === 'named') {
    await g.say('virginia', 'Lord, have mercy on him — and give rest to Lady Eleanore', { how: 'praying aloud, simply, like a child' });
    g.mood('simon', 'angry');
    await g.plate(tr('She begins with her, by name. He repeats — up to the name — and falls silent. He gets up and walks away from her to the edge of the grass.'));
    if (plays) await g.say('simon', 'Madam, I said: of her we will not speak. I am Sir Simon de Canterville, and I do not bargain at a graveside', { how: 'drawing himself up, cold and proud' });
    else await g.plate(tr('He says nothing.'));
    await g.plate(tr('She waits, and prays no further. The nightingale falls silent. He looks a long time at the soft earth under the yew. Then, so quietly that it can hardly be heard:'));
    g.mood('simon', 'sad');
    await g.say('simon', 'Eleanore', { how: 'barely audible, the first time in three hundred years' });
    if (plays) await g.say('simon', 'There. Your father would be pleased: a bargain', { how: 'dryly' });
    await g.plate(tr('He sits down again — further off than before — and repeats the prayer to the end: for her, then for himself. He does not look at Virginia. The nightingale sings no more.'));
  } else {
    await g.say('virginia', 'Lord, let him sleep', { how: 'praying aloud, simply, like a child' });
    await g.plate(tr('She prays for him alone, as he asked. He repeats it like a child, and looks at her. The nightingale sings. Nobody speaks of Lady Eleanore.'));
  }
  g.apply('name');
}
// 4.5 / 4С.5: tears; the casket; letting go of his hand; he sleeps
async function tears(g) {
  const { named, wished } = facts(g.state);
  await g.plate(tr('“And a little child gives away its tears”: Virginia weeps — for him.'));
  if (named) await g.plate(tr('She takes his hand herself; he does not take it away, and does not raise his eyes from the earth.'));
  else {
    g.mood('simon', 'surprised');
    await g.plate(tr('He looks at her tears as at a miracle.'));
  }
  await g.plate(tr('He takes a little casket out of his sleeve and lays it in her palm, without a word.'));
  await g.play(release);
  g.mood('simon', 'tired');
  await g.plate(tr('He lies down in the grass under the yew.'));
  if (wished) await g.say('simon', 'Good night, Miss Virginia', { how: 'very softly, falling asleep' });
  else await g.say('simon', 'Farewell', { how: 'very softly, falling asleep' });
  g.here('simon', false);
  if (named) await g.plate(tr('Silence. He is gone.'));
  else await g.plate(tr('The nightingale sings. He is gone.'));
}
