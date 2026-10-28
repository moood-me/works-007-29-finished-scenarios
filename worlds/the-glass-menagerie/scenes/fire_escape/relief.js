// The flat is on the top floor over an alley: the landing is at the flat's floor (0), the alley 9 m below it — from
// a step out from the viewer to the tenement's back wall (distance 4.65), and past the building's corner on the left
// (across −1.9) on along the street; the rooms behind the wall are at the flat's floor. Where the viewer stands is
// the dance hall's side of the alley.
return distance > 1 && (distance < 4.65 || across < -1.9) ? -9 : 0;
