// The paper frog Dad holds on his palm in the doorway (`dad_frog`, the whole house awake): one of the green ones, a
// layer the animate carries to his hands as he stands. It is drawn before him (inFront).
if (e.state.dad_frog) {
  e.layer('frog', { box: [-0.05, -0.05, 0.05, 0.01] }, l => e.lib.frog(l, 0, 1, '#7fb46a', '#5e9450'));
}
