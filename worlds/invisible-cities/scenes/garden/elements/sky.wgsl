// the sky: its air, the stars over it each twinkling in its own time, the moon over them
fn shade(painted: vec4f, at: vec2f, uv: vec2f) -> vec4f {
  let air = layer(1, at);
  let st = layer(2, at);
  let mo = layer(3, at);
  let tw = 0.45 + 0.55 * noise2(vec2f(at.x * 160.0 + u_time * 0.3, at.y * 160.0 - u_time * 0.2));
  var c = air;
  c = vec4f(c.rgb * (1.0 - st.a * tw) + st.rgb * tw, max(c.a, st.a));
  c = vec4f(c.rgb * (1.0 - mo.a) + mo.rgb, max(c.a, mo.a));
  return c;
}
