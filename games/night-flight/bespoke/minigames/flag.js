// М1 «The Flag» (scenario §7) — the bureau's map of the three lines; Rivière's hand on a flag. Two of them:
//   lead({...}) — lead slowly (a trace): a dashed mark on the flag where it stands (`map#<flag>`), the finger along its
//     line to where it goes (`map#<station>`, the drawer under the map for `off`), the flag going with it (`flag_hand`
//     the flag, `flag_to` where, `flag_u` 0…1 — the world's map, the pieces' contract). Too quick or off the line — the
//     flag slides off it (`flag_slip`, a mistake; the plate says so), and at the end Rivière sets it by hand. There —
//     the flag's own key set to where it went, nobody's hand on it (clean; flawed if it slid).
//   hold({...}) — hold, by its count (3.6, no bearing): a groove on the blue flag by Trelew — Rivière's finger on it
//     while the telegraphist counts the fuel (SECONDS from the first touch). Let go too soon — the flag rocks (a pulse of
//     `flag_slip`, a mistake) and stays where it is; hold again. The count out — the end (clean; flawed if it rocked).
//   What he does: Rivière moves the night along the map with his own hand — or holds it where it stopped.
//   What he wants: the line kept whole, every mail where it is.
//   How it is for him: the tapping of the inker, the clock; the night his.
//   What the player feels: a slow, careful hand on a small thing that stands for a man.
//   → lead: { slid }; hold: { slips }
import { keys, settle, count, line, keep } from './hands.js';

const FAST = 0.45; // of the line a second: quicker — the flag slides off
const SECONDS = 5;
const ROCK = 1; // s the flag rocks

export function lead({ phrase, flag, at, to, target, slid = tr('Too quick — the flag slid off the line.') }) {
  return {
    title: tr('The Flag'),
    about: 6,
    skipped: { slid: false },
    missed: { slid: true },
    points: [at, target],
    keys: ['flag_hand', 'flag_to', 'flag_u', 'flag_slip', ...(to === 'off' ? ['drawer'] : [])],
    async run(g, b, opts, signal) {
      const mg = g.minigame({ phrase });
      const send = keys(g);
      // (played through or cut short: the flag where it went, out of his hand)
      const there = () => {
        g.set('flag_u', 1);
        g.set('flag_slip', 0);
        g.set(flag, to);
        g.set('flag_hand', 'none');
        if (to === 'off') g.set('drawer', 0);
      };
      const over = settle(signal, there);
      g.set('flag_hand', flag);
      g.set('flag_to', to);
      g.set('flag_u', 0);
      g.set('flag_slip', 0);
      if (to === 'off') g.set('drawer', 1);
      let off = false;
      const r = await line(g, b, mg, { from: at, to: target, fast: FAST, progress: u => send('flag_u', u),
        off: () => { if (!off) { off = true; g.set('flag_slip', 1, 0.3); mg.plate.set({ phrase: slid }); } } });
      if (!r) return this.skipped;
      // (slid: Rivière sets it by hand)
      if (off) g.set('flag_slip', 0, 0.6);
      if (!(await count(mg, off ? 1 : 0.5))) return this.skipped;
      there();
      over();
      await mg.end({ as: r.self ? 'neutral' : off ? 'flawed' : 'clean' });
      return { slid: off };
    },
  };
}

export function hold({ phrase, flag, at }) {
  return {
    title: tr('The Flag'),
    about: SECONDS,
    skipped: { slips: 0 },
    missed: { slips: 1 },
    points: [at],
    keys: ['flag_hand', 'flag_slip'],
    async run(g, b, opts, signal) {
      const mg = g.minigame({ phrase });
      const over = settle(signal, () => { g.set('flag_hand', 'none'); g.set('flag_slip', 0); });
      g.set('flag_hand', flag);
      g.set('flag_slip', 0);
      const send = keys(g);
      // (the flag rocks a second when the finger slips: up and back)
      let rocked = -Infinity;
      const r = await keep(g, b, mg, { at, seconds: SECONDS, take: 0.8,
        frame: () => { const k = mg.t - rocked; send('flag_slip', k < ROCK ? 0.6 * Math.sin(Math.PI * k / ROCK) : 0); },
        slip: () => { rocked = mg.t; mg.plate.set({ phrase: tr('The finger slipped; the flag rocked and stayed where it was.') }); } });
      if (!r) return this.skipped;
      g.set('flag_hand', 'none');
      over();
      await mg.end({ as: r.slips ? 'flawed' : 'clean' });
      return r;
    },
  };
}
