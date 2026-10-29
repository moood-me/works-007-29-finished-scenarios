// The finale (scenario §9), by the rule of facts: «Минута» (A, he never said it before the fourth night) — the rainy
// morning, Matryona's “From the young lady, is it?”, her letter, ⚑ the cobweb, “A whole minute of bliss!”; «Утро» (A,
// he said it) — the letter, the carts coming back from the dachas, the embankment by day, a nanny at her place by the
// railing; «Минута: лестница» (C, she went) — no letter, “No, Matryona. Nothing”, ⚑ the cobweb; «Мезонин» (C, he
// confessed in the rain) — the evening in the mezzanine, two cups, ten strikes, she at the little window as at the
// railing — ⚑ the call (М8); «Булавка» (U, silent on Sunday) — she unpins herself and goes, Grandmother pins him to
// her dress (М9); «Окно» (U4, or U with the letter on the table) — Monday morning, the window shut all the game opened
// (М7). The finale's name comes over black after it (game.js closing); the step remembers which it played
// (marks.ending).
// Stand-ins (story.js PLACES): the mezzanine — Grandmother's room downstairs; the embankment by day — the embankment.
// Reads: facts — ending, left, confessed, hand, promise, sunday, story, couldnt, bowed. Leaves: choices.cobweb |
// choices.call; marks.ending.
import { facts } from '../story.js';
import { pinned, open_window, CARDS } from '../minigames/all.js';

export default {
  number: '', title: tr('The Finale'),
  titles: ['The Morning After', 'The Last Shot'],
  choices: [
    { id: 'cobweb', title: tr('The cobweb'), options: [{ id: 'sweep', label: tr('“Matryona, take the cobweb down at last”') }, { id: 'leave', label: tr('“Leave it”') }] },
    { id: 'call', title: tr('At ten, at the little window'), options: [{ id: 'reach', label: tr('Reach for her') }, { id: 'still', label: tr('Touch nothing') }] },
  ],
  steps: [
    // the morning after (or the evening, or Sunday going on): the letter, the room, the choice
    async g => {
      const f = facts(g.state);
      if (f.ending === 'minute' || f.ending === 'morning') {
        await g.scene(f.ending === 'minute' ? 'morning' : 'sunny', { here: ['dreamer', 'matryona'], moods: { dreamer: 'sad', matryona: 'thinking' } });
        await g.plate(f.ending === 'minute' ? tr('Morning, rain. Matryona brings a letter.') : tr('Morning. Matryona brings a letter.'));
        await g.say('matryona', 'From the young lady, is it?', { how: 'the same question as on the first day; indifferent, the eyes sharp' });
        await g.plate(tr('He opens the letter. Her voice:'));
        await letter(g, f);
        if (f.ending === 'minute') {
          const cobweb = await g.choose('cobweb', { 'dreamer#chest': [
            { id: 'sweep', label: tr('“Matryona, take the cobweb down at last”') },
            { id: 'leave', label: tr('“Leave it”') },
          ] });
          if (cobweb === 'sweep') await g.say('dreamer', 'Matryona, take the cobweb down at last');
          else await g.say('dreamer', 'Leave it');
          g.apply('cobweb');
        } else {
          await g.say('dreamer', 'Matryona, the cobweb, if you would…');
          await g.say('matryona', 'I’ll take it down, sir, I’ll take it d…', { how: 'unhurried, and cut off' });
          await g.plate(tr('Outside, carts rumble: the city is coming back from the dachas — the prologue the other way round. Her “I’ll take it down” is finished into an empty doorway: he has put on his hat and gone out.'));
        }
        return;
      }
      if (f.ending === 'stairs') {
        await g.scene('morning', { here: ['dreamer', 'matryona'], moods: { dreamer: 'sad', matryona: 'thinking' }, keys: { matryona_with: [], matryona_reach: null } });
        await g.plate(tr('Morning, rain. No letter: everything was said on the stairs.'));
        await g.say('matryona', 'From the young lady, is it?', { how: 'the same question as on the first day; indifferent, the eyes sharp' });
        await g.say('dreamer', 'No, Matryona. Nothing');
        if (f.sunday === 'out') {
          g.set('hat_peg', true);
          await g.plate(tr('A boy from Grandmother’s brings his hat.'));
          await g.say('matryona', 'Shall I give the boy a kopeck?');
        }
        const cobweb = await g.choose('cobweb', { 'dreamer#chest': [
          { id: 'sweep', label: tr('“Matryona, take the cobweb down at last”') },
          { id: 'leave', label: tr('“Leave it”') },
        ] });
        if (cobweb === 'sweep') await g.say('dreamer', 'Matryona, take the cobweb down at last');
        else await g.say('dreamer', 'Leave it');
        g.apply('cobweb');
        return;
      }
      if (f.ending === 'mezzanine') {
        await g.scene('mezzanine', { here: ['dreamer'], moods: { dreamer: 'smile', nastya: 'smile' }, keys: { dreamer_spot: 'table', nastya_spot: 'hatch', cups: 1 } });
        await g.plate(tr('Evening, the mezzanine. He has moved in. On the little table, two cups.'));
        await g.say('babushka', 'Nastenka, are you here?', { at: 'narrator', how: 'from downstairs' });
        g.here('nastya', true);
        g.set('cups', 2);
        await g.plate(tr('She comes up with the tea, laughing, and calls him:'));
        g.set('nastya_spot', 'table');
        if (f.story === 'plain') await g.say('nastya', 'My copyist');
        else if (f.story === 'type') await g.say('nastya', 'My type');
        else await g.say('nastya', 'My Venetian');
        if (f.sunday === 'hand') await g.plate(tr('She sets his cup before him and sits down across from him, not beside him.'));
        if (f.sunday === 'out') {
          await g.say('nastya', 'Remember, you went out and left your hat behind?');
          g.mood('nastya', 'laugh');
          await g.plate(tr('She laughs.'));
        }
        if (f.couldnt) {
          g.mood('nastya', 'neutral');
          await g.plate(tr('She sets down his cup and for a second lays her hand on his elbow, as under the awning. She does not laugh.'));
        }
        g.set('nastya_spot', 'window');
        g.set('nastya_reach', null);
        await g.plate(tr('Ten o’clock strikes. She goes to the little window of the mezzanine and stands leaning on it — just as at the railing: the first night, quoted.'));
        const off = g.card(CARDS.call.title, CARDS.call.gesture, CARDS.call.about);
        const call = await g.choose('call', { 'dreamer#chest': [
          { id: 'reach', label: tr('Reach for her') },
          { id: 'still', label: tr('Touch nothing') },
        ] });
        off();
        if (call === 'reach') {
          await g.say('nastya', 'What?', { how: 'turning round' });
          await g.say('dreamer', 'Nothing. The tea is getting cold');
          g.set('nastya_spot', 'table');
          await g.plate(tr('She comes back to the table.'));
        } else await g.plate(tr('She stands at the window till the last stroke, then sits down.'));
        g.apply('call');
        return;
      }
      if (f.ending === 'pin') {
        await g.scene('grandmother', { here: ['babushka', 'nastya', 'dreamer', 'lodger'], moods: { babushka: 'afraid', nastya: 'sad', dreamer: 'sad' }, keys: { pin: 'taut', door: 'open', nastya_spot: 'stand', lodger_spot: 'chair' } });
        await g.plate(tr('Not a word. With her own hand she unpins Grandmother’s pin.'));
        g.set('pin', 'off');
        await g.say('babushka', 'Nastenka? Are you here? Who is here?', { how: 'her hands rising, searching' });
        g.here('nastya', false);
        g.here('lodger', false);
        await g.plate(tr('Nastenka goes with the Lodger. Grandmother’s hands find the skirt of his coat, and she pins it to her dress.'));
        g.set('dreamer_spot', 'stool');
        g.set('pin', 'him');
        await g.say('babushka', 'Sit with me, sir. Read to me');
        const r = await g.play(pinned);
        if (r.again) {
          await g.say('babushka', 'Sit', { how: 'sharply' });
          await g.plate(tr('She pins him again; then holds his sleeve with her hand.'));
        }
        return;
      }
      // the Window: U4 — Matryona and the frock coat; U, the letter on the table — nothing comes
      await g.scene('morning', { here: ['dreamer', 'matryona'], moods: { dreamer: 'sad', matryona: 'thinking' }, keys: { moment: 'none', coat_drying: f.letter === 'U4' } });
      // (`monday` reads `coat_drying`: set before it)
      g.set('moment', 'monday');
      if (f.letter === 'U4') {
        await g.plate(tr('Monday morning. Matryona, back from the market, hangs his frock coat up by the stove.'));
        await g.say('matryona', 'Second day it won’t dry. Stood in the rain, did you?');
        await g.plate(tr('And, not looking at him:'));
        await g.say('matryona', 'Grandmother’s Fyokla, the deaf one, was shouting it down the whole row: a bridegroom’s come for their young lady. Yesterday, after mass');
        await g.plate(tr('He does not answer.'));
      } else {
        await g.plate(tr('Monday morning. Nothing comes.'));
        await g.say('dreamer', 'Matryona, wasn’t there…');
        await g.say('matryona', 'There wasn’t, sir');
      }
      const r = await g.play(open_window);
      if (r.matryona) await g.plate(tr('Matryona opens it herself, grumbling.'));
      g.set('window', 1, 2);
      g.set('wet', 1, 4);
    },
    // the last shot
    async g => {
      const f = facts(g.state);
      if (f.ending === 'minute' || f.ending === 'stairs') {
        await g.scene('morning', { here: ['dreamer', 'matryona'], moods: { dreamer: 'sad', matryona: 'neutral' }, keys: { moment: 'corner' } }, { cut: true });
        if (g.state.choices.cobweb === 'sweep') g.set('cobweb', 0, 2);
        if (g.state.choices.cobweb === 'sweep') await g.plate(tr('Matryona, grumbling, takes the long brush and sweeps the cobweb down. The empty corner looks strangely bare.'));
        else await g.plate(tr('She nods with relief. Suddenly it seems to him that she has grown old — and the room with her.'));
        await g.say('dreamer', 'A whole minute of bliss! Is that so little, even for the whole of a man’s life?..', { how: 'quietly, without pathos; the question is real — he does not know himself' });
        await g.plate(g.state.choices.cobweb === 'sweep' ? tr('The last shot: Matryona by the bare corner. The window is shut.') : tr('The last shot: Matryona by the cobweb. The window is shut.'));
      } else if (f.ending === 'morning') {
        await g.scene('town', { here: ['dreamer', 'nanny', 'child', 'passerby', 'yardman'], moods: { dreamer: 'thinking' } });
        await g.plate(tr('The embankment by day: the city is back from the dachas, people walk by. A passer-by catches his shoulder:'));
        await g.say('passerby', 'Pardon');
        if (f.bowed) await g.plate(tr('He nods to the yellow house.'));
        else await g.plate(tr('He looks at the water.'));
        await g.plate(tr('At her place by the railing, someone’s nanny with a child; the child eats a bagel and drops crumbs into the canal. He stands a step away from them — farther than he need. The last shot: the nanny, the bagel, the railing, he to one side.'));
      } else if (f.ending === 'mezzanine') {
        await g.scene('mezzanine', { here: ['dreamer', 'nastya'], moods: { dreamer: 'sad', nastya: 'neutral' }, keys: { dreamer_spot: 'table', nastya_spot: 'table', cups: 2, cold: true } }, { cut: true });
        await g.plate(tr('She chose, and it hurts; he knows that at ten she will stand at the window. The last shot: two cups, one gone cold.'));
      } else if (f.ending === 'pin') {
        await g.scene('grandmother', { here: ['babushka', 'dreamer'], moods: { babushka: 'smile', dreamer: 'sad' }, keys: { pin: 'him', door: 'open', dreamer_spot: 'stool', dreamer_with: ['book'] } }, { cut: true });
        await g.plate(tr('He reads to her the Lodger’s book from the mezzanine.'));
        await g.say('babushka', 'And what’s that rustling in there?', { how: 'patting his pocket' });
        await g.plate(tr('He takes out the letter and hides it again. The last shot: the bright line of the pin between her dress and his coat.'));
      } else {
        await g.scene('morning', { here: ['dreamer', 'yard_man', 'yard_woman'], moods: { dreamer: 'sad' }, keys: { moment: 'none', coat_drying: f.letter === 'U4', window: 1, wet: 1 } }, { cut: true });
        g.set('moment', 'window');
        await g.plate(tr('Below — the yard, the rain, an ordinary day; nobody looks up. The rain floods the sill and the table under it; he does not shut the window. The last shot: the open window, the wet sill, his hand on it — his face not seen.'));
      }
      g.mark('ending', f.ending, null);
    },
  ],
};

// Her letter (§9, «Письмо»: in «Минута» and «Утро»), read in her voice: its beginning, the line of the hand, the line of
// the promise (only «Минута» without «Признался»), the signature
async function letter(g, f) {
  if (f.left) await g.say('nastya', 'Forgive me. In a week I am marrying him', { at: 'narrator', how: 'reading her own letter aloud, quietly, as written' });
  else if (f.ending === 'morning') await g.say('nastya', 'You told me then, at the railing. And still I… In a week I am marrying him. Grandmother cried and ate pie', { at: 'narrator', how: 'reading her own letter aloud, quietly, as written' });
  else if (f.confessed) await g.say('nastya', 'In a week I am marrying him. Oh, why are you not he! Why is he not you!', { at: 'narrator', how: 'reading her own letter aloud, quietly, as written' });
  else await g.say('nastya', 'Forgive me… In a week I am marrying him. I will love you as a brother, more than a brother…', { at: 'narrator', how: 'reading her own letter aloud, quietly, as written' });
  if (f.hand === 'hold') await g.say('nastya', 'You squeezed my hand so hard. It still hurts', { at: 'narrator', how: 'reading her own letter aloud, quietly, as written' });
  else if (f.hand === 'reach') await g.say('nastya', 'Why did you call me?', { at: 'narrator', how: 'reading her own letter aloud, quietly, as written' });
  if (f.ending === 'minute' && !f.confessed) {
    if (f.promise === 'promise') await g.say('nastya', 'You kept your word', { at: 'narrator', how: 'reading her own letter aloud, quietly, as written' });
    else if (f.promise === 'joke') await g.say('nastya', 'And you did say then — how can one promise such a thing', { at: 'narrator', how: 'reading her own letter aloud, quietly, as written' });
    else await g.say('nastya', 'You said nothing then, at the corner. I still don’t know what it was', { at: 'narrator', how: 'reading her own letter aloud, quietly, as written' });
  }
  if (f.left) await g.say('nastya', 'Be happy', { at: 'narrator', how: 'reading her own letter aloud, quietly, as written' });
  else await g.say('nastya', 'Your Nastenka', { at: 'narrator', how: 'reading her own letter aloud, quietly, as written' });
}
