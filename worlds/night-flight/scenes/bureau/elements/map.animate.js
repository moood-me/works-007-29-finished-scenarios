// (Stage 5) The flag in Rivière's hand (`flag_hand`) led along its way: from where its own key puts it to `flag_to`
// (`off` — down into the drawer under the map) as far as `flag_u` says; sliding off its line, askew, by `flag_slip`.
// Its point `led` (the cloth, where his hand is) goes with it.
const S = e.state;
const name = S.flag_hand;
if (name && name !== 'none') {
  const M = e.lib.MAP;
  const a = M.where(name, S[name]) ?? M.FIELD;
  const b = M.to(name, S.flag_to) ?? a;
  const u = S.flag_u ?? 0;
  const slip = S.flag_slip ?? 0;
  const led = e.layer('led');
  led.x = (b[0] - a[0]) * u - 0.03 * slip;
  led.y = (b[1] - a[1]) * u + 0.07 * slip;
  led.rotate = -0.8 * slip;
  e.at(a[0] + led.x + 0.02, a[1] + led.y + 0.11, 'led');
}
