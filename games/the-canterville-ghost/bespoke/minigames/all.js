// The game's mini-games at stage 3 (scenario §7), each a stub (stub.js): its name, its gesture (the scenario's
// dictionary: touch nothing — to look, listen, wait it out, stay; pull slowly — to make up one's mind; trace — to draw;
// balance — to carry quietly; hold — not to let go; let go — to let him go), what the hands will do, what is felt and
// how a miss is left in the story, the plate's line, the point its mark stands on — a person of the scene the step
// plays it on (in a stand-in scene too: story.js PLACES).
import { stub } from './stub.js';

const STILL = tr('touch nothing'), PULL = tr('pull slowly'), TRACE = tr('trace'), BALANCE = tr('balance'), HOLD = tr('hold'),
  LET_GO = tr('hold, then let go');

// prologue
export const glass = stub({ title: tr('The Window'), gesture: STILL, at: 'virginia#chest',
  about: tr('Six seconds of lightning: look at the dark window and touch nothing — and in the glass, behind the family’s backs, an old face with eyes like coals looks at the clean floor. Touched — the lightning goes out sooner, and she will say “There was someone… I think.” Alone in seeing it.'),
  phrase: tr('Everyone is laughing. The window is dark, and the rain lashes it.') });
// chapter I
export const door = stub({ title: tr('The Door'), gesture: PULL, at: 'virginia#chest',
  about: tr('Open her door a crack, slowly, so that it does not creak. Too quick — it creaks, and the ghost turns at the sound and looks into the crack with burning eyes. Fear and curiosity at one o’clock at night.'),
  phrase: tr('In the corridor: chains, steps, a groan. Light under her door.') });
export const sketch = stub({ title: tr('The Sketch'), gesture: TRACE, at: 'virginia#chest',
  about: tr('Draw the brush along the old trunk of the almond, in one stroke. A slip — the trunk on the sketch is a blot, and stays so: in “The Stain” she leaves him that very sketch. Her own quiet work.'),
  phrase: tr('The old dry almond tree, the easel, a wet brush.') });
// chapter II
export const candle = stub({ title: tr('The Candle'), gesture: BALANCE, at: 'virginia#chest',
  about: tr('Carry the candle down the dark corridor to his room so that it does not go out. It goes out — she whispers in the dark and he answers out of the dark; the stub stays all the same. Alone, at a quarter to midnight, to the murderer’s room.'),
  phrase: tr('A quarter to midnight. A candle, and the long corridor to the Tapestry Chamber.') });
export const portrait = stub({ title: tr('The Portrait'), gesture: TRACE, at: 'otis#chest',
  about: tr('Draw Papa at his lamp with a pencil, one line. A slip — the line goes askew; Papa: “My nose is longer, I believe,” laughs, and stands the drawing by his inkstand all the same. Two people who cannot sleep.'),
  phrase: tr('Papa at his desk under the lamp; the sketchbook on her knees.') });
// chapter III
export const nightingale = stub({ title: tr('The Nightingale'), gesture: STILL, at: 'simon#chest',
  about: tr('Ten seconds: touch nothing and listen — the tapestries darken, in the window, instead of the avenue, moonlit grass, and a nightingale sings. Touched — he breaks off: “You are not listening,” and finishes it shorter.'),
  phrase: tr('“Far away beyond the pine-woods there is a little garden…”') });
// chapter IV
export const hand = stub({ title: tr('The Hand'), gesture: HOLD, at: 'simon#chest',
  about: tr('Twelve seconds in the dark: hold his cold hand while the voices whisper “Go back!” The finger slips — her hand searches in the dark, and his finds hers by itself. Fear, and a hand that holds.'),
  phrase: tr('Darkness. Shapes, wings, whispers — and his pale hand.') });
export const release = stub({ title: tr('Let Go'), gesture: LET_GO, at: 'simon#chest',
  about: tr('His hand grows weak in hers: hold it a moment, then let it go. Held too long — it slips out by itself. Letting him go to sleep.'),
  phrase: tr('His hand is growing weak.') });
export const word = stub({ title: tr('The Word'), gesture: HOLD, at: 'otis#chest',
  about: tr('Five seconds: lay her hand in Papa’s and hold it. Let go first — she takes her hand back, and Papa holds it a moment longer. A promise given with the hand.'),
  phrase: tr('Papa holds out his hand: “Promise.”') });
export const tiptoe = stub({ title: tr('On Tiptoe'), gesture: BALANCE, at: 'virginia#chest',
  about: tr('Past the chair, past the sleeping face, on tiptoe, eight seconds. A board creaks — Papa mutters “Ginny?..” and sleeps on. A word broken quietly.'),
  phrase: tr('Papa asleep in the chair, the book on his knees. His light going down the corridor.') });
export const threshold = stub({ title: tr('The Threshold'), gesture: STILL, at: 'virginia#chest',
  about: tr('Six seconds on the threshold: touch nothing while his light goes away. Touched — she takes half a step over the threshold and stops; he does not turn. Staying.'),
  phrase: tr('His light is going away down the corridor.') });
export const shoulder = stub({ title: tr('The Shoulder'), gesture: PULL, at: 'otis#chest',
  about: tr('Reach slowly for Papa’s shoulder, five seconds. Too sharp — Papa starts up, the book falls. Calling him to stand beside her.'),
  phrase: tr('Papa asleep in the chair at her door.') });
