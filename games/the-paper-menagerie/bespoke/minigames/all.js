// The game's mini-games at stage 3 (scenario §7), each a stub (stub.js): its name, its gesture (the scenario's
// dictionary: hold — not to let go, to keep safe; let go — to allow to leave; lead slowly — carefully, to make up one's
// mind; tap — to pick up; fold — to run along a line: to make, to fold), what the hands will do, what is felt and how a
// miss is left in the story, the plate's line, the point its mark stands on — a person or an element of the scene the
// step plays it on (in a stand-in scene too: story.js PLACES), and the miss's petal. All of them one finger on a phone;
// after a miss — “Next”; a skip never changes the branch.
import { stub } from './stub.js';

const HOLD = tr('hold'), LET_GO = tr('hold, then let go'), SLOW = tr('lead slowly'), TAP = tr('tap'), FOLD = tr('fold along the line'),
  TRACE = tr('trace the strokes');

// prologue
export const palms = stub({ title: tr('Palms'), gesture: HOLD, at: 'jack#chest',
  about: tr('Eight seconds: keep a finger on the paper tiger in the boy’s palms while Mom breathes on it — it grows warm, its sides rise, it stands up on its paws and growls, a rustle. Let go too soon — the tiger rolls off onto the table, and stands up and growls all the same. Wonder through tears.'),
  phrase: tr('A tiger of red paper with gold stars in his palms. Mom breathes on it.'),
  miss: tr('Missed: the tiger rolls off onto the table — and stands up anyway') });
// chapter 1
export const ingot = stub({ title: tr('The Fold'), gesture: FOLD, at: 'jack#chest',
  about: tr('Six seconds: two folds along the lines, and the yellow paper is a little ingot, a yuanbao, for the dead. Off the line — the ingot comes out crooked, and Mom laughs: “For Grandma, this one is good enough.” A quiet Sunday morning, the two of them at the table.'),
  phrase: tr('A square of yellow paper. Two folds along the lines.'),
  miss: tr('Missed: the ingot comes out crooked') });
export const scraps = stub({ title: tr('The Scraps'), gesture: TAP, at: 'scraps',
  about: tr('Eight seconds: five red scraps of Laohu blown across the wet grass — catch them one by one before the wind takes them. Missed — the ear is carried across the street into the drain by the road: Laohu stays one-eared to the end of the game.'),
  phrase: tr('Red scraps on the grass, and the wind.'),
  miss: tr('Missed: the ear goes into the drain — Laohu one-eared to the end') });
export const tape = stub({ title: tr('The Tape'), gesture: HOLD, at: 'laohu',
  about: tr('Six seconds: hold the two halves level while Mom tapes them — she lays the scraps along the old lines, her hands and his on the oilcloth. Slipped — the seam comes out crooked: Laohu limps worse to the end of the game.'),
  phrase: tr('Two halves of the tiger, a roll of tape. “Two hands aren’t enough.”'),
  miss: tr('Missed: the seam is crooked — Laohu limps worse to the end') });
// chapter 2
export const hand = stub({ title: tr('The Hand'), gesture: LET_GO, at: 'mom#chest',
  about: tr('Ten seconds: hold her hand; her fingers weaken, and the sign “Let go” lights up for eight seconds — lift the finger. Missed, or the finger never lifted — Dad’s palm comes down over both hands, and they let go together. The only “let go” before the finale «The Smoke». Silence, the lamp.'),
  phrase: tr('Her hand in his. Dad asleep on the chair.'),
  miss: tr('Missed: Dad’s palm on top — they let go together') });
// chapter 3
export const stroke = stub({ title: tr('Stroking'), gesture: SLOW, at: 'laohu',
  about: tr('Five seconds: run a finger slowly down the paper tiger’s back. Too quick — he grumbles, and lies down all the same. Then he purrs, lies down in Jack’s lap — and unfolds.'),
  phrase: tr('Laohu rubs against his hand.'),
  miss: tr('Missed: he grumbles — and lies down all the same') });
export const peel = stub({ title: tr('The Tape, Her Last'), gesture: SLOW, at: 'jack#chest',
  about: tr('Five seconds: peel off her fresh strip of tape, slowly, so the overlapping edges of the tear come apart and lie side by side. The mirror of the tape in chapter 1: he held while she taped; her last strip he peels himself. Too quick — the edge of the tear stays folded under: “I can’t see. Probably — ‘alone’.” The same meaning; the paper whole.'),
  phrase: tr('A fresh strip of tape over the tear; a word under the overlap.'),
  miss: tr('Missed: the edge stays folded — “probably ‘alone’”') });
export const sign = stub({ title: tr('The Character'), gesture: TRACE, at: 'jack#chest',
  about: tr('Ten seconds: write 爱 under her sign with Dad’s pen, stroke by stroke. Mom’s language at home — from memory, a pale hint; otherwise copying her sign, stroke after stroke. Missed — the sign comes out crooked and stays so, in the finales «The Tiger» and «The Letter». One sign — ten seconds; the sheet has dozens of columns.'),
  phrase: tr('Her sign at the bottom of the sheet, and room under it.'),
  miss: tr('Missed: the sign comes out crooked, and stays so') });
// the finales
export const fold = stub({ title: tr('Folding the Tiger'), gesture: FOLD, at: 'jack#chest',
  about: tr('Eight seconds: fold the sheet along its old lines — the paper remembers them; the crooked fold at the tail it does not find, and the tiger folds without it. Her lines go inside, last of all her 爱 and his under it. Missed — the folds find themselves: the paper folds on its own.'),
  phrase: tr('The sheet still trembles along the tiger’s folds.'),
  miss: tr('Missed: the folds find themselves') });
export const smooth = stub({ title: tr('Smoothing the Sheet'), gesture: SLOW, at: 'jack#chest',
  about: tr('Eight seconds: smooth the sheet with a palm on the porch step as it gets dark. It trembles along its folds one last time — and lies flat; the folds are seen, and move no more. Missed — the sheet lies flat all the same.'),
  phrase: tr('Her sheet on the step under the lamp.'),
  miss: tr('Missed: the sheet lies flat by itself') });
export const flame = stub({ title: tr('Over the Fire'), gesture: LET_GO, at: 'jack#chest',
  about: tr('Eight seconds: hold the sheet over the fire in her bucket — the flame takes an edge — and let go. Missed, or held too long — the flame takes the sheet itself. The smoke goes up through the apple tree.'),
  phrase: tr('Her bucket under the apple tree; the fire.'),
  miss: tr('Missed: the flame takes the sheet itself') });
