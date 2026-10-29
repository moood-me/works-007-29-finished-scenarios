// The game's mini-games and guidings at stage 3 (scenario §7), each a stub (stub.js): its name, its gesture (the
// scenario's gestures for the whole game: press and hold — to push the rod in, to root; pull slowly — to reach; hold
// the finger — not to let go; let go — to let go; tap an acorn — to count with him), what the hands will do, what is
// felt and how a miss is left in the story, the plate's line, the point its mark stands on — a person of the scene the
// step plays it on (in a stand-in scene too: story.js PLACES). A guiding (`guiding: true`) is a light gesture with no
// miss — not a mini-game (§7).
import { stub } from './stub.js';

const PRESS = tr('press and hold'), PULL = tr('pull slowly'),
  HOLD = tr('hold the finger'), LET_GO = tr('hold, then let go'),
  TAP = tr('tap an acorn'), DOWN = tr('press and hold, then pull down');

// МИ1 — the prologue
export const acorns = stub({ title: tr('A Hundred Acorns'), gesture: TAP, at: 'elzeard#chest',
  about: tr('The table close up, acorns as big as a finger: tap away the cracked ones, eight or ten of them; the good ones go to Elzéard. A miss — he finishes the sorting himself, without a word and faster, and takes one cracked acorn out of “your” heap. Counting with him, in silence.'),
  phrase: tr('A sack of acorns poured out on the table; the lamp.') });
// МИ2 — chapter I
export const hand_in = stub({ title: tr('Handing Them'), gesture: PULL, at: 'elzeard#chest',
  about: tr('The rod comes out of the earth: draw an acorn slowly to the hole and lay it in — five times. A miss — Elzéard takes up the pail himself, and the Traveller stands there empty-handed. Being of use beside him.'),
  phrase: tr('The rod goes into the earth; a hole; the pail of acorns.') });
// МИ3 — chapter II
export const stream = stub({ title: tr('The Stream'), gesture: HOLD, at: 'traveller#chest',
  about: tr('Both put their palms into the water: hold the finger down, and the sound of the water grows. A miss — the Traveller pulls his hand out; Lina: “Scared of cold water?” The first water of their lives.'),
  phrase: tr('Cold water in a bed that was dry.') });
// МИ4 — chapter III
export const beech = stub({ title: tr('The Beech'), gesture: DOWN, at: 'traveller#chest',
  about: tr('Push the rod in, set the sapling, press the earth down: press and hold, then pull down. A miss — the beech stands crooked: on the Slope he leaves it, “it’ll grow anyway”; on the Road he straightens it again, so that the row stays straight. A tree of his own.'),
  phrase: tr('His own rod; a beech sapling.') });
// МИ5, МИ6 — the epilogue
export const linden = stub({ title: tr('The Linden'), gesture: PRESS, at: 'traveller#chest',
  about: tr('Push the spade in, set the sapling, press the earth: press and hold — the same blow as the rod’s on the slope in chapter I. A miss — Lina presses the earth down with her foot: “There.” Where the stump was.'),
  phrase: tr('A linden sapling, a spade, the square.') });
export const hand = stub({ title: tr('The Hand'), gesture: LET_GO, at: 'elzeard#chest',
  about: tr('The old man’s hand on the rod beside the Traveller’s: hold, then let go. Let go at once — the rod wavers, the old man steadies it and nods: “Hold it.” Not let go for fifteen seconds — the old man takes his hand away himself. Taking the rod from him.'),
  phrase: tr('The rod between two hands.') });

// the guidings (no miss)
export const trunks = stub({ title: tr('From Trunk to Trunk'), gesture: PULL, at: 'traveller#chest', guiding: true,
  about: tr('Lead the Traveller with your finger from trunk to trunk, slowly: he touches the bark, listens. A pause meant: forty seconds of near silence — leaves, birds.'),
  phrase: tr('Oaks taller than a man; leaves; birds.') });
export const count = stub({ title: tr('The Last Ten'), gesture: TAP, at: 'elzeard#chest', guiding: true,
  about: tr('Elzéard counts the acorns in tens; the last ten are the player’s to count — a tap on each, close up. Then he says: “A hundred.”'),
  phrase: tr('Acorns in tens on the table.') });
export const row = stub({ title: tr('Along the Row'), gesture: PULL, at: 'traveller#chest', guiding: true,
  about: tr('Lead the Traveller slowly along the row, Jan beside him: the row runs straight to the very top of the slope.'),
  phrase: tr('Trunks in a row, as straight as a regiment.') });
export const door = stub({ title: tr('The Door'), gesture: PULL, at: 'traveller#chest', guiding: true,
  about: tr('Pull the open door to, slowly, and prop it shut with a stick.'),
  phrase: tr('The house is empty and clean; the door is open.') });
export const stumps = stub({ title: tr('Among the Stumps'), gesture: PRESS, at: 'traveller#chest', guiding: true,
  about: tr('Plant beside the old man among the stumps: press and hold — the same dull blow of the rod.'),
  phrase: tr('Stumps; the old man’s rod goes into the earth.') });
