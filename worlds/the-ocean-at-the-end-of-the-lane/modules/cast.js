// The people of «The Ocean at the End of the Lane» as people in a scene (an element with "person"): figures of shapes in
// this world's style — the engine's round, big-headed `soft` figures, lit by the scene's own light, with simple faces —
// and the motions in cast.data.json (Kimodo's, put there with put_motion). cast.md says who is who and what each motion is.
return {
  ...data,
  characters: {
    // the boy, seven: small and slight, brown hair, a blue-grey jumper, grey shorts, long grey socks, brown sandals
    boy: { kind: 'shapes', style: 'lane', who: 'child', garment: 'none', hair: 'short', socks: true,
      body: { height: 0.68, thick: 0.84 },
      colors: { skin: '#f1d3bb', hair: '#5a3d28', top: '#7a8fb0', bottom: '#62656c', socks: '#c9c4b8', shoes: '#6b4a32' } },
    // Lettie Hempstock, "eleven — for a long time": short red-brown hair, a faded green frock to the knee, a mustard
    // cardigan over it, green wellingtons to the knee
    lettie: { kind: 'shapes', style: 'lane', who: 'child', garment: 'frock', hair: 'bob', socks: true,
      body: { height: 0.8, thick: 0.86 },
      colors: { skin: '#f0cfb4', hair: '#9a4a26', top: '#c49a45', garment: '#7d9268', socks: '#33503a', shoes: '#33503a' } },
    // old Mrs Hempstock, the grandmother: ancient and small, a white bun, a long dark plum dress, a grey shawl
    gran: { kind: 'shapes', style: 'lane', who: 'old', garment: 'dress', hair: 'bun', scarf: true,
      body: { height: 0.86, thick: 1.12 },
      colors: { skin: '#e8c9b3', hair: '#efebe3', top: '#4a3446', garment: '#4a3446', accent: '#8d8a84', shoes: '#2a2526' } },
  },
  shapes: {
    // the world's style: the engine's soft figures, coloured and shaded by the scene's light, simple faces
    styles: { lane: { from: 'soft', name: 'The Lane', paint: 'lit', line: 1.6, face: 'simple' } },
    garments: {
      // a child's frock: from the waist to the knee, the cardigan's sleeves above it and the shins bare below
      frock: { name: 'frock', hang: [{ to: 1.05, from: 'waist', flare: 0.35, off: 0.94 }], short: true, bodice: true },
    },
  },
};
