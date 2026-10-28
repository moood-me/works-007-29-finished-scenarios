// He sniffs: the head bobbing quickly in short bursts that come and go, and turning slowly up and down between them.
const burst = Math.max(0, e.anim.noise(e.t * 0.5, 3));
const sniff = Math.sin(e.t * 26) * 0.07 * burst;
const look = e.anim.noise(e.t * 0.3, 8) * 0.18;
e.layer('head').rotate = look + sniff;
