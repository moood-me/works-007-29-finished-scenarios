// The game's mini-games (scenario §7; the pieces' contract, game.md «Stage 5 — pieces») on the language of mini-games —
// each {title, about (its seconds), skipped (what it leaves in the story when skipped: as played cleanly), missed (the
// trace a miss leaves, §7 — the chapters read it), points (where its marks stand), keys (what of the scene it moves),
// run(g, b, opts, signal)}; what they share is hands.js. The scenario's dictionary of gestures: lead or pull slowly — a
// way, reaching, making up one's mind; hold — not letting go, not giving way; hold, then let go — holding till it is
// time and letting it go: from hand to hand, or off on its way; balance — carrying, keeping. The flag the player leads
// along the map in the prologue they hold by Trelew in 3.6 (or lead into the sea, to the bearing) — and in the finale
// lead on, or take down; the switch that lights the field for Pellerin and for the European mail is pulled down on
// “Stand down”.
import { lead, hold } from './flag.js';
import { pen as write } from './pen.js';
import { light as lights } from './light.js';
export { default as box } from './box.js';
export { default as spanner } from './spanner.js';
export { default as stick } from './stick.js';
export { default as climb } from './climb.js';
export { default as chocks } from './chocks.js';
export { default as tape } from './tape.js';

// М1 “The Flag” — the bureau's map
export const flag = lead({ flag: 'blue', at: 'map#blue', to: 'san_julian', target: 'map#san_julian',
  phrase: tr('“Patagonian: passed San Julián. Sky clear.” The blue flag goes up the south line, to San Julián.') });
export const flag_north = lead({ flag: 'north', at: 'map#north', to: 'field', target: 'map#field',
  phrase: tr('“Asunción: landed.” The northern flag comes home to the field.') });
export const flag_sea = lead({ flag: 'blue', at: 'map#blue', to: 'sea', target: 'map#sea',
  phrase: tr('By the bearing — over the sea, a hundred and fifty east of Trelew. She watches where he puts it.') });
export const flag_hold = hold({ flag: 'blue', at: 'map#blue',
  phrase: tr('The telegraphist counts the fuel under his breath, minute by minute. Rivière’s finger on the blue flag by Trelew.') });
export const flag_red = lead({ flag: 'red', at: 'map#red', to: 'north', target: 'map#north_end',
  phrase: tr('The red flag at the field; the line north.') });
export const flag_blue = lead({ flag: 'blue', at: 'map#blue', to: 'san_julian', target: 'map#san_julian',
  phrase: tr('“Patagonian: passed San Julián. Sky clear.” The same knock as yesterday.') });
export const flag_late = lead({ flag: 'red', at: 'map#red', to: 'north', target: 'map#north_end',
  phrase: tr('“Release.” Yesterday’s red flag, still at the field.') });
export const flag_down = lead({ flag: 'red', at: 'map#red', to: 'off', target: 'map_drawer#drawer',
  phrase: tr('Dawn, grey. The inker is silent. The red flag comes off the map, into the drawer.'),
  slid: tr('Too quick — the flag fell. Rivière picks it up.'), fell: tr('The flag fell. Rivière picks it up.') });
// М2 “The Pen”
export const pen = write({ insert: 'paper', open: 'paper_open',
  phrase: tr('The order lies on the packed tool box; the pen in Rivière’s hand.'), blotted: tr('Too quick — a blot.'), hesitant: tr('The pen hesitates — a blot.') });
export const log = write({ insert: 'log_page', open: 'log_open',
  phrase: tr('The log open under the lamp; rain on the glass. One line for Fabien.'), blotted: tr('Too quick — a blot.'), hesitant: tr('The pen hesitates — a blot.') });
// М8 “The Light”
export const light = lights({ phrase: tr('Twenty past ten. Over the dark field the drone of an engine, lower and lower; Rivière’s hand on the switch.'),
  helped: tr('Too quick — the switch jams; a mechanic finishes pulling it.'), other: tr('The switch is pulled for him — a mechanic’s hand.') });
export const light_european = lights({ phrase: tr('Ten to three. The European mail under the hangar’s lamps, its engine warming; the field behind it dark.'),
  helped: tr('Too quick — the switch jams; a mechanic finishes pulling it.'), other: tr('The switch is pulled for him — a mechanic’s hand.') });
export const light_off = lights({ down: true, phrase: tr('The field lit to its edge, the plane ready. The same switch, the same hand.'),
  helped: tr('Too quick — the switch jams; Robineau finishes pulling it.'), other: tr('The switch is pulled for him — Robineau’s hand.') });
