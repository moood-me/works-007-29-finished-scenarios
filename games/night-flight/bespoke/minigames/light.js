// М8 «The Light» (scenario §7: 1.1 and 4.1 — up; Ш3 «Stand down» — down), the field, at the switch on the hangar wall
// (`hangar_front#switch`): pull slowly — a dashed ring on the switch; each slow pull moves its handle (`lever` 0…1) and
// the floodlights come on one after another (`floods`: the world's masts at ⅓, ⅔, 1) — or, down, go out one after
// another. Too quick — the switch jams under his hand and someone else's finishes pulling it (a mistake: a mechanic; on
// «Stand down», Robineau — the rest comes by itself). Pulled through — the end (clean; flawed if it was finished for him).
//   What he does: Rivière gives the light to every landing himself — and on «Stand down» puts it out himself.
//   What he wants: the field light for the man coming down out of the dark; then, the night closed by his own hand.
//   How it is for him: the drone lower and lower; then the floodlights he lit ten minutes ago.
//   What the player feels: a slow pull with a clack at each mast.
//   → { helped: someone else finished it }
import { keys, settle, slowly, count } from './hands.js';

export function light({ phrase, down = false, pulls = 3, helped }) {
  const at = (u, send) => { send('lever', down ? 1 - u : u); send('floods', down ? 1 - u : u); };
  return {
    title: tr('The Light'),
    about: down ? 6 : 4,
    skipped: { helped: false },
    missed: { helped: true },
    points: ['hangar_front#switch'],
    keys: ['lever', 'floods'],
    async run(g, b, opts, signal) {
      const mg = g.minigame({ phrase });
      const send = keys(g);
      const end = down ? 0 : 1;
      const over = settle(signal, () => { g.set('lever', end); g.set('floods', end); });
      g.set('lever', 1 - end);
      g.set('floods', 1 - end);
      let jammed = false;
      const r = await slowly(g, b, mg, { at: 'hangar_front#switch', pulls, frame: u => at(u, send),
        jerk: () => { jammed = true; mg.plate.set({ phrase: helped }); return true; } });
      if (!r) return this.skipped;
      g.set('lever', end);
      g.set('floods', end);
      if (!(await count(mg, 0.6))) return this.skipped;
      over();
      await mg.end({ as: jammed ? 'flawed' : 'clean' });
      return { helped: jammed };
    },
  };
}
