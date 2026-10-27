// The gallery hangs 17 m over the sea: the land is far down under the water everywhere (the sea's plane at −17), so
// nothing but the sea is under the view; only where the viewer's eye starts it is 0. The tower and all on it stand on
// the unseen `top` (not on the land); what stands out at sea by its distance is placed off the land too ("onLand": false).
return Math.hypot(across, distance) < 1.5 ? 0 : -30;
