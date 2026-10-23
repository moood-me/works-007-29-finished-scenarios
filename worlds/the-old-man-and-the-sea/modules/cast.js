// The people of «The Old Man and the Sea» as people in a scene (an element with "person"): who they are — figures of
// shapes in this world's style, plain flat shapes in warm sun-faded colours lit by the scene's own light, with a simple
// face so faces read — and what they move by (the motions in cast.data.json). cast.md says who is who.
return {
  ...data,
  characters: {
    // Santiago: old, thin and gaunt, the skin burnt dark brown by the sun, short white hair and a white stubble of
    // beard, a faded blue shirt patched many times, old trousers rolled up, barefoot
    santiago: {
      kind: 'shapes', style: 'gulf', who: 'old', garment: 'none', hair: 'short', barefoot: 'both', parts: ['stubble'],
      body: { height: 0.97, thick: 0.8, shoulders: 1.02, arms: 1.03 },
      colors: { skin: '#8f5f43', hair: '#c4bfb5', top: '#8ea3ae', bottom: '#8d7f68' },
    },
    // Manolin, the boy: slight and quick, black hair, a white undershirt, dark shorts, barefoot
    manolin: {
      kind: 'shapes', style: 'gulf', who: 'teen', garment: 'none', hair: 'short', barefoot: 'both',
      body: { height: 0.84, thick: 0.78, shoulders: 0.9 },
      colors: { skin: '#b07c58', hair: '#1f1a18', top: '#e7e2d6', bottom: '#3f4c62' },
    },
    // the boy's father, a fisherman of the lucky boat: thickset, a cap, a work shirt with the sleeves, dark trousers
    father: {
      kind: 'shapes', style: 'gulf', who: 'man', garment: 'none', hair: 'short', hat: 'cap',
      body: { height: 0.99, thick: 1.12, shoulders: 1.08 },
      colors: { skin: '#9c6a4b', hair: '#221c19', top: '#b9a582', bottom: '#4a4538', hat: '#4c463d', shoes: '#2b241f' },
    },
  },
  shapes: {
    // the world's style: the engine's flat geometry — straight edges, plain colours, the scene's light and shadows —
    // with a simple face (eyes, brows, nose, mouth) so the faces read
    styles: { gulf: { from: 'flat', name: 'The Gulf', line: 0.8, face: 'simple' } },
    parts: {
      // a short close beard over the jaw and the chin, below the mouth (the colour of the hair)
      stubble: {
        name: 'stubble',
        draw: F => {
          const h = F.head;
          const r = h.r * h.out;
          F.cap(h.at, h.axes, h.egg.map(v => v * r * 1.02), [0, -0.95, 0.3], 0.62, F.colors.hair, h.sides, h.square);
        },
      },
    },
  },
};
