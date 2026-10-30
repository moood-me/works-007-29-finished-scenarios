// М9 «The Tape» (3.2, the bureau at a quarter past two, after the piece `tape`: Rivière at the inker): pull slowly — a
// dashed ring on the inker (`tel_inker#ink`): each slow pull draws the tape out hand over hand, a word at a time
// (`tape_pull` 0…1). Too quick — the tape runs out by itself (a mistake: the rest comes on its own, and the telegraphist
// reads it). Drawn out — the end (clean; flawed if it ran out).
//   What he does: Rivière pulls Fabien's words out of the machine himself.
//   What he wants: each word as it comes — he waits for each of them.
//   How it is for him: she in the doorway; the pilot on the bench; thirty minutes.
//   What the player feels: drawing something out, slowly, not tearing it.
//   → { self: the tape ran out by itself }
import { keys, settle, slowly, count } from './hands.js';

export default {
  title: tr('The Tape'),
  about: 6,
  skipped: { self: false },
  missed: { self: true },
  points: ['tel_inker#ink'],
  keys: ['tape_pull'],
  async run(g, b, opts, signal) {
    const mg = g.minigame({ phrase: tr('The inker comes to life. Fabien’s words, one by one.') });
    const send = keys(g);
    const over = settle(signal, () => g.set('tape_pull', 1));
    g.set('tape_pull', 0);
    let ran = false;
    // (Fabien's words as they come out under Rivière's hands: opts.words(k) at each third of the tape drawn)
    let said = 0;
    const words = u => { for (; said < 3 && u >= (said + 1) / 3 - 1e-6 && !ran; said++) opts.words?.(said); };
    const r = await slowly(g, b, mg, { at: 'tel_inker#ink', pulls: 4, frame: u => { send('tape_pull', u); words(u); },
      jerk: () => { ran = true; mg.plate.set({ phrase: tr('Too quick — the tape runs out by itself.') }); return true; } });
    if (!r) return this.skipped;
    // (never touched, or left: it ran out by itself — the telegraphist reads it)
    if (r.self && !ran) { ran = true; mg.plate.set({ phrase: tr('The tape runs out by itself.') }); }
    g.set('tape_pull', 1);
    if (!(await count(mg, 0.6))) return this.skipped;
    over();
    await mg.end({ as: ran ? 'flawed' : 'clean' });
    return { self: ran, said };
  },
};
