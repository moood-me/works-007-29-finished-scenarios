// The game's mini-games at stage 3 (scenario §7), each a stub (stub.js): its name, its gesture (the scenario's
// dictionary: lead or pull slowly — a way, reaching, making up one's mind; hold — not letting go, not giving way; hold,
// then let go — holding till it is time and letting it go: from hand to hand, or off on its way; balance — carrying,
// keeping), what the hands will do, what is felt and how a miss is left in the story, the plate's line, the point its
// mark stands on — a person of the scene the step plays it on (in a stand-in scene too: story.js PLACES), or an
// element's named point (the map's flags, the field's switch, the inker). The flag the player leads along the map in
// the prologue they hold by Trelew in 3.6 (or lead into the sea, to the bearing) — and in the finale lead on, or take
// down; the switch that lights the field for Pellerin and for the European mail is pulled down on “Stand down”.
import { stub } from './stub.js';

const LEAD = tr('lead slowly'), PULL = tr('pull slowly'), HOLD = tr('hold'), LET_GO = tr('hold, then let go'), BALANCE = tr('balance');

// М1 “The Flag” — the bureau's map
export const flag = stub({ title: tr('The Flag'), gesture: LEAD, at: 'map#blue',
  about: tr('Lead the blue flag along the south line, slowly, to San Julián. Too quick — the flag slides off, and Rivière sets it with his hand. The whole night, led by his hand.'),
  phrase: tr('“Patagonian: passed San Julián. Sky clear.”') });
export const flag_north = stub({ title: tr('The Flag'), gesture: LEAD, at: 'map#field',
  about: tr('Lead the northern flag down its line to the field, slowly; the western one, the Chilean, stands there already. Too quick — it slides off, and Rivière sets it with his hand. Two of three are in.'),
  phrase: tr('“Asunción: landed.”') });
export const flag_sea = stub({ title: tr('The Flag'), gesture: LEAD, at: 'map#blue',
  about: tr('Lead the blue flag from Trelew out into the sea, slowly, to the point of the bearing. Too quick — it slides off, and Rivière sets it with his hand. She watches where he puts it.'),
  phrase: tr('“By the bearing — over the sea, a hundred and fifty east of Trelew.”') });
export const flag_hold = stub({ title: tr('The Flag'), gesture: HOLD, at: 'map#blue',
  about: tr('Hold the blue flag by Trelew with Rivière’s finger while the telegraphist counts the fuel, to the last minute. Let go too soon — the flag rocks and stays where it was. Not letting go.'),
  phrase: tr('The telegraphist counts the fuel under his breath, minute by minute.') });
export const flag_red = stub({ title: tr('The Flag'), gesture: LEAD, at: 'map#field',
  about: tr('Lead the red flag, the European, from the field north, slowly. Too quick — it slides off, and Rivière sets it with his hand. The heavy victory, carried.'),
  phrase: tr('The red flag at the field; the line north.') });
export const flag_blue = stub({ title: tr('The Flag'), gesture: LEAD, at: 'map#blue',
  about: tr('Lead the blue flag, the Patagonian, along the south line again — tonight’s. Too quick — it slides off, and Rivière sets it with his hand. The same knock as yesterday.'),
  phrase: tr('“Patagonian: passed San Julián. Sky clear.”') });
export const flag_late = stub({ title: tr('The Flag'), gesture: LEAD, at: 'map#field',
  about: tr('Lead the red flag — yesterday’s, never touched — from the field north, slowly. Too quick — it slides off, and Rivière sets it with his hand. Last night’s plane, sent on at last by his own hand.'),
  phrase: tr('“Release.” The red flag still at the field.') });
export const flag_down = stub({ title: tr('The Flag'), gesture: LEAD, at: 'map#field',
  about: tr('Lead the red flag off the map and into the desk drawer, slowly. Too quick — it falls; Rivière picks it up and puts it in the drawer. The others he takes down by hand, one by one. The night taken down.'),
  phrase: tr('Dawn, grey. The inker is silent.') });
// М2 “The Pen”
export const pen = stub({ title: tr('The Pen'), gesture: LEAD, at: 'riviere#chest',
  about: tr('Sign the order on the tool box in one slow line. Too quick — a blot; Robineau blots it, and it is signed. Signing a man out of twenty years.'),
  phrase: tr('The order lies on the packed tool box.') });
export const log = stub({ title: tr('The Pen'), gesture: LEAD, at: 'riviere#chest',
  about: tr('Write one line in the log, slowly. Too quick — a blot; Rivière blots it himself, and it is written. What will be written of Fabien.'),
  phrase: tr('The log open under the lamp. The rain on the glass.') });
// М3 “The Box”, М4 “The Spanner”
export const box = stub({ title: tr('The Box'), gesture: LET_GO, at: 'roblet#chest',
  about: tr('Hold the packed tool box, then let it go — from Rivière’s hands into Roblet’s. Let go too soon — Roblet takes the box himself. Twenty years handed back.'),
  phrase: tr('Rivière picks up the box.') });
export const spanner = stub({ title: tr('The Spanner'), gesture: LET_GO, at: 'roblet#chest',
  about: tr('Rivière’s palm held out and not taken back, till Roblet’s fingers open slowly and the spanner passes from hand to hand. Held out too short — Roblet lays the spanner on the bench himself. His place at the engine, taken from his hand.'),
  phrase: tr('Rivière holds out his hand for the spanner.') });
// М5 “The Stick”, М6 “Up”
export const stick = stub({ title: tr('The Stick'), gesture: BALANCE, at: 'fabien#chest',
  about: tr('Ten seconds: keep the plane level while the storm throws it. Lose it — the plane goes over on a wing, Fabien rights it himself, and in the lightning, for a moment, there is water below. Carrying it through.'),
  phrase: tr('Darkness, lightning; the plane is thrown about.') });
export const climb = stub({ title: tr('Up'), gesture: PULL, at: 'fabien#chest',
  about: tr('Eight seconds: pull the plane up, slowly, toward the gap. Too sharp — Fabien drags it up himself, with a jerk. Up into what one does not come back from.'),
  phrase: tr('Overhead, a gap in the clouds, and stars in it.') });
// М7 “The Chocks”
export const chocks = stub({ title: tr('The Chocks'), gesture: LET_GO, at: 'riviere#chest',
  about: tr('Rivière’s hand raised: hold it while the engine runs up, then let it go — the chocks are pulled away. Let go too soon — the pilot moves off by himself at the mechanic’s sign. Letting the next man go.'),
  phrase: tr('The engine runs up. The pilot looks at Rivière.') });
// М8 “The Light”
export const light = stub({ title: tr('The Light'), gesture: PULL, at: 'hangar_front#switch',
  about: tr('Pull the switch on the hangar wall down slowly: the floodlights come on one after another, and out of the dark the Chilean mail lands into the light. Too quick — a mechanic finishes pulling it. The light he gives every landing himself.'),
  phrase: tr('The field is dark; the drone of an engine, lower and lower.') });
export const light_european = stub({ title: tr('The Light'), gesture: PULL, at: 'hangar_front#switch',
  about: tr('Pull the switch slowly: the floodlights come on one after another, and the field is light to its very edge. Too quick — a mechanic finishes pulling it. Light for the next one.'),
  phrase: tr('The European mail under the hangar’s lamps; the field behind it dark.') });
export const light_off = stub({ title: tr('The Light'), gesture: PULL, at: 'hangar_front#switch',
  about: tr('The same switch — back the other way, slowly, six seconds: the floodlights he lit ten minutes ago go out one after another. Too quick — Robineau finishes pulling it. The night closed by his own hand.'),
  phrase: tr('The field light to its edge; the plane ready.') });
// М9 “The Tape”
export const tape = stub({ title: tr('The Tape'), gesture: PULL, at: 'tel_inker#ink',
  about: tr('Pull the tape out of the inker, slowly, word by word. Too quick — the tape runs out by itself, and the telegraphist reads it. He waits for each of them — this is how it shows.'),
  phrase: tr('The inker comes to life.') });
