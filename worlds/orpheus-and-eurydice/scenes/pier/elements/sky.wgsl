// The sky as painted (k 0), its stars (k 1) twinkling — each small patch of the sky its own slow beat, so no two stars
// twinkle together — and the drifting clouds (k 2) laid over them.
fn shade(painted: vec4f, at: vec2f, uv: vec2f) -> vec4f {
  let base = layer(0, at);
  let stars = layer(1, at);
  let clouds = layer(2, at);
  let cell = floor(at * 90.0);
  let rate = 0.35 + 0.9 * hash2(cell);
  let phase = hash2(cell + vec2f(17.0, 5.0));
  let tw = 0.55 + 0.45 * sin((u_time * rate + phase) * 6.2831853);
  var c = vec4f(base.rgb * (1.0 - stars.a) + stars.rgb * tw, 1.0);
  emission = stars.rgb * tw * 0.35;
  c = vec4f(c.rgb * (1.0 - clouds.a) + clouds.rgb, 1.0);
  return c;
}
