// The game's mini-games at stage 3 (scenario §7), each a stub (stub.js): its name, its gesture (one vocabulary for the
// whole game: hold — not to let go; let go of the finger — to let her go; pull slowly — to dare, to reach; touch
// nothing — to wait it out, not to stir; keep the balance — to carry, to keep), what the hands will do, what is felt and
// how a miss is left in the story, the plate's line, the point its mark stands on — a person of the scene the step
// plays it on (in a stand-in scene too: story.js PLACES), and what a miss gives the story (`missed`). Two of them are
// a choice made by a gesture (М5 «Рука», М8 «Оклик»): at stage 3 a card (CARDS) beside the plain choice of their
// options.
import { stub } from './stub.js';

const HOLD = tr('hold'), LET_GO = tr('let go of the finger'), PULL = tr('pull slowly'),
  STILL = tr('touch nothing'), BALANCE = tr('keep the balance');

// М1 — the first night: the stick, or the arm
export const stick = stub({ title: tr('The Stick'), gesture: BALANCE, at: 'dreamer#chest',
  about: tr('Walk fast with the stick raised and do not break into a run: keep the phone level (or a point in its band with the finger). The gentleman sees the stick: “Pardon… I, as it were…” — and turns off; no fight — he is a coward, you can tell by his walk. A miss: the stick clatters on the cobbles, the gentleman runs from the noise alone, she laughs through her tears.'),
  phrase: tr('A gentleman in a tailcoat, tipsy, quickens his step after her.'), missed: { clatter: true } });
export const arm = stub({ title: tr('The Arm'), gesture: PULL, at: 'dreamer#chest',
  about: tr('Draw the finger slowly until her hand lies on his elbow; jerk it — and she shies away. The gentleman sees a couple and falls behind. A miss: she takes his arm herself: “Come now, give it here.”'),
  phrase: tr('She is almost running; the gentleman behind.'), missed: { herself: true } });
// М2 — the second night
export const pin = stub({ title: tr('The Pin'), gesture: STILL, at: 'dreamer#chest',
  about: tr('Touch nothing for ten seconds while she tells how she sits at Grandmother’s: her fingers twist the hem, the pin glints at his sleeve, and you want to touch it. Success: she unpins it herself — “There, you see how I sit.” A touch: he jerks his arm, a rip, the hem is torn — “Grandmother will kill me,” she laughs. No second try.'),
  phrase: tr('Her hem pinned to his sleeve.'), missed: { torn: true } });
// М3 — the day
export const letter = stub({ title: tr('The Letter'), gesture: BALANCE, at: 'dreamer#chest',
  about: tr('Ten seconds in the wind off the canal: carry the letter and do not drop it (the phone level, or a point in its band). A miss: the envelope falls into a puddle, he snatches it out — a brown stain on the paper, and from then on the envelope is stained wherever it appears.'),
  phrase: tr('The wind off the canal; her letter in his hand.'), missed: { stain: true } });
// М4 — the fourth night (no miss: how he held is what she answers)
export const arm_rain = stub({ title: tr('Arm in Arm'), gesture: HOLD, at: 'dreamer#chest',
  about: tr('Fifteen seconds: the finger on her arm while it pours; the rain grows heavier, and holding matters more. No miss: held fast — she presses close; let go — she takes his arm again (“Where are you going?”) and walks a little ahead.'),
  phrase: tr('Rain; her arm in his.'), missed: { loose: true } });
// М6 — Sunday, C: he takes her hand
export const hand_grandmother = stub({ title: tr('The Hand at Grandmother’s'), gesture: PULL, at: 'dreamer#chest',
  about: tr('About eight seconds: he crosses the room, the finger reaches slowly for her hand on her knee. A miss or a jerk: he takes it abruptly, she starts — but does not take it away.'),
  phrase: tr('Her hand on her knee; the pin between the two dresses.'), missed: { abrupt: true } });
// М7 — the finale «Окно»
export const open_window = stub({ title: tr('The Window'), gesture: PULL, at: 'dreamer#chest',
  about: tr('Draw the finger slowly: he opens the window that has been shut all the game. Below — the yard, the rain, an ordinary day; nobody looks up. The rain floods the sill and the table under it; he does not shut it. A miss: Matryona opens it herself, grumbling.'),
  phrase: tr('The window shut all the game.'), missed: { matryona: true } });
// М9 — the finale «Булавка»
export const pinned = stub({ title: tr('Pinned'), gesture: STILL, at: 'dreamer#chest',
  about: tr('Sit pinned and do not stir while he reads to her — the funny game of the second night has become his fate. A miss: Grandmother: “Sit,” and pins him again; then she holds his sleeve with her hand.'),
  phrase: tr('Grandmother’s pin between her dress and his coat.'), missed: { again: true } });

// the choices made by a gesture: their cards beside the plain choice (stage 3)
export const CARDS = {
  // М5 — the fourth night, A
  hand: { title: tr('The Hand'), gesture: tr('let go / hold / reach'),
    about: tr('Her hand is in his palm and slowly leaves it. Let go (lift the finger) — she runs to him, embraces him, runs back, embraces the Dreamer, kisses him and goes. Hold — she pulls, and you feel her tear free: the figure’s arm tense, the cloth rustling, a vibration where the phone can; after three seconds she frees herself, goes, looks back once. Reach (lead the finger after her hand) — a step after her: “Nastenka!” She stops halfway, the Lodger waits; then she comes back, touches his cheek with her palm, says nothing and goes. She always goes; the gesture chooses how she will remember him.') },
  // М8 — the finale «Мезонин»
  call: { title: tr('The Call'), gesture: tr('reach / touch nothing'),
    about: tr('Ten o’clock strikes; she stands at the little window, leaning, just as at the railing. Reach for her — she turns: “What?” — “Nothing. The tea is getting cold.” She comes back to the table. Touch nothing — she stands at the window till the last stroke, then sits down.') },
};
