fn shade(painted: vec4f, at: vec2f, uv: vec2f) -> vec4f {
  let lit = layer(1, at);
  let roll = 0.5 + 0.5 * sin(at.y * 7.0 - u_time * 1.3 + at.x * 2.0);
  let bubble = step(0.78, noise2(vec2f(at.x * 60.0, at.y * 16.0 + u_time * 1.8)));
  emission = lit.rgb * (0.7 + 0.6 * roll + 1.2 * bubble) * u_glow;
  return painted;
}
