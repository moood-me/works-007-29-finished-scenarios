// The game's mini-games and guidings (scenario §7; their points and keys — game.md «Stage 5 — pieces», the table: the
// single truth for the scenes' authors), each a module {title, about (its seconds), skipped (what it leaves in the
// story when skipped: as played cleanly), missed (the trace a miss leaves), points (where its marks stand), keys (what
// of the scene it moves), run(g, b, opts, signal)} on the language of mini-games; what they share is hands.js. The
// scenario's gestures for the whole game: press and hold — to push the rod in, to root; pull slowly — to reach; hold
// the finger — not to let go; let go — to let go; tap an acorn — to count with him. Each mini-game comes back with what
// a miss leaves in the story (§7), and the chapters read it; a guiding (no miss) leaves nothing.
// prologue
export { default as acorns } from './acorns.js';
// chapter I
export { default as hand_in } from './hand_in.js';
// chapter II
export { default as stream } from './stream.js';
// chapter III
export { default as beech } from './beech.js';
// the epilogue
export { default as linden } from './linden.js';
export { default as hand } from './hand.js';
// the guidings
export { trunks, count, row, door, stumps } from './guidings.js';
