// the ocean in the bucket: its face lit from within, slow bright glints wandering over it, a swell of light
fn shade(painted: vec4f, at: vec2f, uv: vec2f) -> vec4f {
  let q = vec2f(at.x / 0.138, (at.y + 0.296) / 0.03);
  let inside = 1.0 - smoothstep(0.85, 1.0, length(q));
  let t = u_time;
  let swell = 0.75 + 0.25 * noise1(t * 0.35);
  let glint = noise2(vec2f(at.x * 40.0 + t * 0.6, at.y * 120.0 - t * 0.4)) * noise2(vec2f(at.x * 25.0 - t * 0.3, at.y * 90.0 + t * 0.5));
  let sea = mix(vec3f(0.35, 0.8, 0.72), vec3f(0.95, 1.0, 0.95), smoothstep(0.2, 0.55, glint));
  emission = sea * inside * swell * 1.6;
  return painted;
}
