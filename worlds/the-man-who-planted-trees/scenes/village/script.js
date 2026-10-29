// The village's mechanics. Its people's ages by `time` (lib.AGES): Lina, the Traveller and Jan dressed in the cast's
// look of that year as `time` changes and as the scene opens — Lina without her mug while it stands upside down on the
// stump (`mug`, the prologue). A game sets `time` and never names a look.
const AGE_OF = ["lina", "traveller", "jan"];
function dress() {
  const ages = scene.lib.AGES[scene.get("time")] ?? scene.lib.AGES.prologue;
  for (const id of AGE_OF) {
    const name = ages[id];
    let wear = name ? scene.kit.cast.characters[name] : null;
    if (id === "lina" && !name && scene.get("mug")) wear = { parts: [] };
    scene.set(`${id}_wear`, wear);
  }
}
dress();
scene.on("change", "time", dress);
scene.on("change", "mug", dress);

// the pieces (the game sets `beat`: modules/beats, lib.film) — each lays out its own start, never `time`
scene.kit.beats.play(scene, scene.lib.film(scene));
