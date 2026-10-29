// A mini-game at stage 3 (moood-me/moood docs/writing/game-stages.md): not the game of the hands yet — a mark on the
// scene's point to press, the language's plate with the line the mini-game will have, and a card saying what it will be
// (its gesture, what the hands do, the mood, what a miss leaves: scenario §7); the ghost finger shows the press at the
// play's first stub and whenever the player stands still (the language's tricks.teach). Pressed, it opens its two
// outcomes as petals — played well, or missed — so that the review sees the trace a miss leaves in the story (the
// one-eared tiger, the crooked seam…); the chapters read it (`missed`). Skipped (the page's ⏭) — played well: a skip
// never changes the story (scenario §7). At stage 5 each is a mini-game of its own in its place.
//   stub({title, gesture, about, phrase, at, miss}) → a minigame for g.play: {title, about: its seconds, skipped,
//     missed, run}
//     title — its name, gesture — the word of the scenario's dictionary of gestures, about — what the hands will do
//     and what is felt, phrase — the plate's line, at — the point its mark stands on ('id#point' | a person's or an
//     element's id), miss — the petal of the miss: what it leaves
export function stub({ title, gesture, about, phrase, at, miss }) {
  return {
    title, about: 10, skipped: { missed: false }, missed: { missed: true },
    async run(g, b) {
      const mg = g.minigame({ phrase });
      g.card(title, gesture, about);
      const mark = mg.mark({ at: at.includes('#') ? at : `${at}@` });
      const press = mg.press({ on: mark, petals: [{ id: 'well', label: tr('Played well') }, { id: 'missed', label: miss }] });
      b.minigame.tricks.teach(mg, [press], { id: 'stub' });
      const { id } = await new Promise(ok => press.on('choose', ok));
      mg.snap({ at: mark });
      await mg.end({ as: id === 'missed' ? 'neutral' : 'clean' });
      return { missed: id === 'missed' };
    },
  };
}
