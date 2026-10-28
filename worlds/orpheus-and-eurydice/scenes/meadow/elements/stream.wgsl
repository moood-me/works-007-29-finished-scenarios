// The stream's light flowing: its painting (k 0) brightened and dimmed by two slow soft noises carried along the way it
// runs (to the right and away), so pale swells of light go down it; its bright middle glows a little (emission).
fn shade(painted: vec4f, at: vec2f, uv: vec2f) -> vec4f {
  let c = layer(0, at);
  let flow = vec2f(-u_time * 0.35, u_time * 0.55);
  let a = noise2(vec2f(at.x * 0.9, at.y * 0.9) + flow);
  let b = noise2(vec2f(at.x * 3.1 + 7.0, at.y * 3.1) + flow * 1.8);
  let k = 0.78 + 0.3 * a + 0.16 * b;
  let bright = smoothstep(0.3, 0.6, luma(c.rgb));
  emission = c.rgb * bright * k * 0.15;
  return vec4f(c.rgb * k, c.a);
}
