// The paper deer on the counter by the sill, gold-brown, facing the goats (modules/paper: deer); its head a little
// layer ticked now and then by the animate. (Not there while the kitchen is packed.)
if (e.state.packed) return;
e.layer('deer', { pivot: [0, 0] }, l => e.kit.paper.deer(l, 0, -1));
e.at(-0.06, -0.19, 'deer');
