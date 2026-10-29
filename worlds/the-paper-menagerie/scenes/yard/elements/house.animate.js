// The kitchen window's warm light comes on with `house_lights`.
e.layer('kitchen_lit').alpha = e.anim.clamp(e.state.house_lights ?? 0, 0, 1);
