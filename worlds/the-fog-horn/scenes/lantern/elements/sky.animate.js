const f = e.state.fog;
e.layer('fog').alpha = f;
e.layer('moon').alpha = 1 - 0.9 * f;
e.glow('moonglow', 1 - 0.8 * f);
