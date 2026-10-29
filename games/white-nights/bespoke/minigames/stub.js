// A mini-game at stage 3 (moood-me/moood docs/writing/game-stages.md): not the game of the hands yet — a mark on the
// scene's point to press, the language's plate with the line the mini-game will have, and a card saying what it will be
// (its gesture, what the hands do, the mood, how a miss is left in the story: scenario §7); the ghost finger shows the
// press at the play's first stub and whenever the player stands still (the language's tricks.teach). Pressed — done, its
// plain outcome (as a mini-game skipped: the same trace in the story). At stage 5 each is a mini-game of its own in its
// place.
//   stub({title, gesture, about, phrase, at, missed}) → a minigame for g.play: {title, about: its seconds, skipped,
//     missed, run}
//     title — its name, gesture — the word of the scenario's gestures, about — what the hands will do and what is
//     felt, phrase — the plate's line, at — the point its mark stands on ('id#point' | a person's or an element's id),
//     missed — what a miss gives the story (the branch check plays it too: check/run.mjs)
export function stub({ title, gesture, about, phrase, at, missed = {} }) {
  return {
    title, about: 10, skipped: {}, missed, points: [at],
    async run(g, b, opts, signal) {
      const mg = g.minigame({ phrase });
      const off = g.card(title, gesture, about);
      signal.addEventListener('abort', off);
      const mark = mg.mark({ at: at.includes('#') ? at : `${at}@` });
      const press = mg.press({ on: mark });
      b.minigame.tricks.teach(mg, [press], { id: 'stub' });
      await new Promise(ok => press.on('press', ok));
      mg.snap({ at: mark });
      await mg.end({ as: 'clean' });
      off();
      return {};
    },
  };
}
