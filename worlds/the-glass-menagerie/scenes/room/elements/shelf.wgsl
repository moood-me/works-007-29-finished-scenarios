// The glass's glints: the painting as it is, and over it the layer of glints shining by themselves, each trembling
// slowly on its own (noise over where it is and the time) — glass catching a lamp as the air moves.
fn shade(painted: vec4f, at: vec2f, uv: vec2f) -> vec4f {
  let base = layer(0, at);
  let glint = layer(1, at);
  let n = noise2(vec2f(at.x * 23.0 + u_time * 0.4, at.y * 19.0 - u_time * 0.3));
  let k = u_shine * (0.8 + 2.4 * n * n);
  emission = glint.rgb * k;
  return glint + base * (1.0 - glint.a);
}
