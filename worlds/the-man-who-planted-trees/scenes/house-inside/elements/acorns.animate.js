// what the acorns are now: a heap (`heap`), sorted (the cracked put aside), being counted out in tens (`counting`:
// `tens` heaps and the last ten's `counted` share of the tenth, the heap shrinking by as much), or gone into the pail
const s = e.state, mode = s.acorns;
const counting = mode === 'counting';
const done = counting ? Math.min(10, (s.tens ?? 0) + (s.counted ?? 0) / 10) : 0;
const heap = e.layer('heap');
const left = mode === 'heap' || mode === 'sorted' ? 1 : counting ? 1 - done / 10 : 0;
heap.alpha = left > 0.02 ? 1 : 0;
heap.scale = 0.35 + 0.65 * left;
e.layer('cracked').alpha = mode === 'sorted' ? 1 : 0;
for (let k = 0; k < 10; k++) e.layer(`ten${k}`).alpha = counting && done > k + 0.5 ? 1 : 0;
