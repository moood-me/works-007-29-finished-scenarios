// The flat is a floor up: beyond the back wall, outside the window (left of the hall), the land drops 3.2 m to the
// street, so the gas lamp and the houses across stand down there (their elevation is over it).
return distance > 8.6 && across < -0.3 ? -3.2 : 0;
