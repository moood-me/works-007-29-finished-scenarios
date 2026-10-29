// The attic's one moment is chapter 3's (3.2, «Зверинец» 0): Jack, grown, at the hatch. As the scene opens he wears his
// grown look, the suit bag left out (unless the game has set another).
if (!scene.state.jack_wear) scene.set('jack_wear', { ...scene.kit.cast.characters.jack_grown, parts: [] });
