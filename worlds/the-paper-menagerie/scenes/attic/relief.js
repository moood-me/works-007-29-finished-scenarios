// The land of the attic is its floor (0) everywhere but in the open hatch: a well 1.15 m deep (across 0.65…1.35,
// distance 3.0…3.8), where whoever comes up the ladder from the hall stands — chest and head above the floor.
return -1.15 * anim.span(across, 0.64, 0.66) * (1 - anim.span(across, 1.34, 1.36)) * anim.span(distance, 2.99, 3.01) * (1 - anim.span(distance, 3.79, 3.81));
