// The people of «Of Mice and Men» as people in a scene (an element with "person"): who they are — figures of shapes in
// this world's style, plain straight-edged shapes in work clothes, lit by the scene's own light (the dust and the low
// sun of the Salinas valley), faces simple enough to read from across a fire — and how they move: the motions in
// cast.data.json (Kimodo's, put there with put_motion). cast.md says who is who and what each motion is.
return {
  ...data,
  characters: {
    // George Milton: small and quick, a dark face, restless eyes, sharp strong features; a denim coat over a work
    // shirt, denim trousers, a black shapeless hat
    george: { kind: 'shapes', style: 'dust', who: 'man', garment: 'jacket', hair: 'short', hat: 'hat',
      body: { height: 0.95, thick: 0.86, shoulders: 0.96 },
      colors: { skin: '#b0805e', hair: '#241c18', top: '#cbbfa6', garment: '#4b5f7d', bottom: '#3d4c66', hat: '#2a2725', shoes: '#3b2c21' } },
    // Lennie Small: huge, shapeless of face, pale; wide sloping shoulders, long heavy arms; the same denim, the same
    // black hat
    lennie: { kind: 'shapes', style: 'dust', who: 'man', garment: 'jacket', hair: 'short', hat: 'hat',
      body: { height: 1.1, thick: 1.4, shoulders: 1.26, arms: 1.08, neck: 0.75 },
      colors: { skin: '#d8b092', hair: '#8b6c48', top: '#b5a88e', garment: '#566b8c', bottom: '#46597b', hat: '#2e2b29', shoes: '#3b2c21' } },
  },
  shapes: {
    // the world's style: the engine's flat geometry — straight edges, plain colours under the scene's light — with a
    // simple face (eyes, brows, a nose, a mouth) that takes a mood
    styles: { dust: { from: 'flat', name: 'Dust', line: 0.8, face: 'simple' } },
  },
};
