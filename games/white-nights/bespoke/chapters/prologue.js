// Prologue. “The Empty City” (scenario §5). Evening: the city has gone to the dachas; the Dreamer walks along the
// canal, tapping the granite with his stick, and talks to a house that has been painted yellow; ⚑ a bow to it. Only
// colour (§3); no map after it: the play goes straight on into the first night (`onward`).
// Reads: nothing. Leaves: choices.bow.
export default {
  number: '', title: tr('The Empty City'), onward: true,
  titles: ['The Yellow House'],
  choices: [
    { id: 'bow', title: tr('Before the yellow house'), options: [{ id: 'bow', label: tr('Bow to the house') }, { id: 'pass', label: tr('Pass by as if you did not know it') }] },
  ],
  steps: [
    // the empty city; the yellow house; ⚑ a bow; the lamp lit
    async g => {
      await g.scene('evening', { here: ['dreamer', 'yardman'], moods: { dreamer: 'neutral', yardman: 'neutral' } });
      g.title(tr('White Nights'));
      await g.plate(tr('Evening. The city has emptied: everyone has gone to their dachas, and carts of furniture trail along the streets. The Dreamer walks along the canal, tapping the granite with his stick.'));
      await g.think('dreamer', 'Eight years in Petersburg — and not a single acquaintance. The houses, though — the houses I know');
      await g.plate(tr('He stops before a house that has been repainted.'));
      g.mood('dreamer', 'sad');
      await g.say('dreamer', 'They have painted you. Yellow. The villains', { how: 'to the house, offended for a friend: in earnest, as of a person; a pause before “the villains”' });
      const bow = await g.choose('bow', { 'dreamer#chest': [
        { id: 'bow', label: tr('Bow to the house') },
        { id: 'pass', label: tr('Pass by as if you did not know it') },
      ] });
      if (bow === 'bow') {
        await g.plate(tr('He bows to the house. A yardman with a broom bursts out laughing.'));
        g.mood('yardman', 'laugh');
        await g.say('yardman', 'Who are you talking to, sir?');
        g.mood('dreamer', 'laugh');
        await g.plate(tr('The Dreamer blushes — and laughs himself.'));
      } else {
        await g.think('dreamer', 'Awkward. People might think things');
        await g.plate(tr('The house stays alone.'));
      }
      g.apply('bow');
      g.mood('dreamer', 'neutral');
      g.set('lamp', 1, 3);
      await g.plate(tr('The dusk turns white; the lamp is lit.'));
    },
  ],
};
