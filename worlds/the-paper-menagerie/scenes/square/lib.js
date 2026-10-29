// What the square's two sides share: a row of narrow old houses facing the square over x0…x1 (metres along the row,
// y up negative) — pastel stucco, three storeys under red-brown and grey roofs, white window surrounds, at the ground
// a shop in each with a striped awning. `rnd` is the painting's own seeded random.
function row(g, x0, x1, rnd) {
  const walls = ['#e9cfc0', '#dfe2c9', '#e8dcb2', '#cfdbe0', '#ecd6d2', '#dcd2e4'],
    roofs = ['#a5644f', '#8d8b92', '#b07258'],
    awnings = [
      ['#c9473c', '#f3ece0'],
      ['#3f7b6e', '#f3ece0'],
      ['#3e5d8f', '#f3ece0'],
      ['#c99a3a', '#f3ece0'],
    ];
  g.save();
  g.beginPath();
  g.rect(x0, -13, x1 - x0, 13.05);
  g.clip();
  let x = x0,
    i = 0;
  while (x < x1) {
    const w = 4.2 + rnd() * 1.6,
      h = 8.2 + rnd() * 2.2;
    g.fillStyle = walls[i % walls.length];
    g.fillRect(x, -h, w, h);
    g.fillStyle = roofs[i % roofs.length];
    g.beginPath();
    g.moveTo(x - 0.15, -h);
    g.lineTo(x + w / 2, -h - 1.6 - rnd() * 0.8);
    g.lineTo(x + w + 0.15, -h);
    g.closePath();
    g.fill();
    // the upper windows
    for (let fl = 0; fl < 2; fl++) {
      const y = -4.2 - fl * 2.6;
      for (let k = 0; k < 2; k++) {
        const cx = x + w * (0.3 + k * 0.4);
        g.fillStyle = '#f6f1e6';
        g.fillRect(cx - 0.55, y - 1.7, 1.1, 1.8);
        g.fillStyle = '#60687a';
        g.fillRect(cx - 0.45, y - 1.6, 0.9, 1.6);
        g.fillStyle = '#f6f1e6';
        g.fillRect(cx - 0.03, y - 1.6, 0.06, 1.6);
      }
    }
    // the shop: its window, door and striped awning
    g.fillStyle = '#5c6474';
    g.fillRect(x + 0.4, -2.6, w - 1.6, 2.2);
    g.fillStyle = '#6e4e3a';
    g.fillRect(x + w - 1.05, -2.5, 0.75, 2.5);
    const [a, b] = awnings[i % awnings.length];
    for (let s = 0; s < 8; s++) {
      g.fillStyle = s % 2 ? b : a;
      g.beginPath();
      g.moveTo(x + 0.2 + (s * (w - 0.4)) / 8, -3.2);
      g.lineTo(x + 0.2 + ((s + 1) * (w - 0.4)) / 8, -3.2);
      g.lineTo(x + 0.1 + ((s + 1) * (w - 0.2)) / 8, -2.75);
      g.lineTo(x + 0.1 + (s * (w - 0.2)) / 8, -2.75);
      g.closePath();
      g.fill();
    }
    x += w;
    i++;
  }
  g.restore();
}

// ── the pieces (stage 5: modules/beats; the game's contract — docs/new-games/bumazhny-zverinec/game.md) ──
// the bench's seat where she sits, where Jack stands by her, the coach's door the group goes in at
const SEAT = [-1.3, 4.12, 0.45];
const BY_HER = [-0.15, 3.85];
const DOOR = [2.75, 16.4];
const CAM = {
  camera_target: null, camera_shot: 'full', camera_frame: null, camera_glide: 1.5, camera_x: 0, camera_h: 0, camera_z: 0,
  camera_look: 0, camera_pitch: 0, camera_yaw: 0, camera_roll: 0,
};
// a camera of its own (the operator, framing a seated woman, came in to her lap): the eye [across, distance, height]
// looking at a point [across, distance, height], metres
const DEG = 180 / Math.PI;
const VIEW = ([ex, ez, eh], [tx, tz, th]) => ({
  camera_target: null, camera_x: ex, camera_z: ez, camera_h: eh - 1.7,
  camera_yaw: Math.atan2(tx - ex, tz - ez) * DEG, camera_pitch: Math.atan2(th - eh, Math.hypot(tx - ex, tz - ez)) * DEG,
});
const SH = {
  wide: VIEW([0, 0, 1.7], [0, 10, 1.7]),
  // her face from her left (she looks up at Jack standing there)
  her_r: VIEW([-0.45, 2.5, 1.3], [-1.2, 4.12, 1.0]),
  // her reading, from before her
  her: VIEW([-1.0, 2.55, 1.3], [-1.3, 4.12, 0.98]),
  // her on the right of the frame, the close-up of the sheet opening on its left
  tear: VIEW([-0.7, 2.6, 1.3], [-2.3, 4.2, 0.95]),
  // the two of them
  two: VIEW([-0.3, 1.9, 1.5], [-0.7, 4.0, 1.05]),
  // Jack with the sheet back in his hands
  jack: VIEW([0.75, 2.3, 1.55], [-0.15, 3.85, 1.35]),
};
// the afternoon as the square's picture has it: she on the bench, the guide at the coach's door with her flag, the three
// of the group by it; the close-up of the letter shut
const SQUARE = {
  ...CAM, letter_close: 0,
  translator_on: SEAT, translator_a: SEAT[0], translator_d: SEAT[1], translator_turn: 180, translator_do: 'sitting_on_bed',
  translator_reach: null,
  jack_on: null, jack_a: BY_HER[0], jack_d: BY_HER[1], jack_turn: 255, jack_do: 'stand', jack_wear: { parts: [] }, jack_reach: null,
  guide_a: 3.2, guide_d: 16.2, guide_turn: 205, guide_do: 'showing_suit', guide_with: ['flag'], guide_look: 'translator',
  tourist_cap_look: 'bus#door', tourist_hat_look: 'guide', tourist_coat_look: 'bus#door',
};
function film(scene) {
  // the camera moved to one of the square's own (SH) over `over` seconds
  const shot = (s, c, over = 1.5) => {
    s.set('camera_target', null);
    for (const k of ['camera_x', 'camera_z', 'camera_h', 'camera_yaw', 'camera_pitch']) s.move(k, c[k], { over, ease: 'inOut' });
  };
  return {
    // 3.3: Jack comes up to the bench with the letter; she looks at her watch; he asks; she takes the sheet — it is
    // warm —; it trembles on her knees and she presses it down. Wide, then close on her face
    bench: {
      tells: ['bench:ask', 'bench:warm', 'bench:wind'],
      seconds: 14,
      from: () => ({
        ...SQUARE, translator_with: [], translator_look: null,
        jack_a: 2.4, jack_d: 2.9, jack_turn: 240, jack_with: ['letter'], jack_look: 'translator',
      }),
      run: async s => {
        const her = s.person('translator'),
          jack = s.person('jack');
        await s.all(jack.walk([BY_HER]), (async () => {
          await s.wait(0.6);
          await her.do('check_watch', { loop: false });
          her.do('sitting_on_bed');
        })());
        await jack.turn(255);
        jack.look('translator');
        her.look('jack');
        shot(s, SH.two);
        s.tell('bench:ask');
        await s.wait(3);
        jack.with([]);
        her.with(['letter']);
        her.do('reading_seated');
        her.look('translator#letter');
        jack.look('translator#letter');
        await s.wait(0.6);
        her.mood('surprised');
        her.look('jack');
        shot(s, SH.her_r);
        s.tell('bench:warm');
        await s.wait(2.5);
        her.look('translator#letter');
        her.reach({ r: 'translator#letter' });
        s.tell('bench:wind');
        await s.wait(1.5);
        her.reach(null);
        her.mood('neutral');
        await s.wait(1);
      },
    },
    // she reads (the game says the letter, paragraph by paragraph, over this pose): close on her face, the sheet in her
    // hands, now and then a look up at Jack
    reading: {
      after: ['bench'],
      tells: ['reading:start'],
      seconds: 6,
      from: () => ({
        ...SQUARE, translator_do: 'reading_seated', translator_with: ['letter'], translator_look: 'translator#letter',
        jack_with: [], jack_look: 'translator#letter', ...SH.her,
      }),
      run: async s => {
        const her = s.person('translator');
        shot(s, SH.her);
        her.do('reading_seated');
        her.look('translator#letter');
        s.tell('reading:start');
        await s.wait(3);
        her.look('jack');
        await s.wait(1.2);
        her.look('translator#letter');
        await s.wait(1.8);
      },
    },
    // the tear: she stops at the overlapped edges; the back of the sheet close beside her (the insert letter_close: the
    // tear and its clear strip — `tear`, the game's), she peering at it; then M7 in this pose
    tear: {
      after: ['reading'],
      tells: ['tear:open'],
      seconds: 4,
      from: () => ({
        ...SQUARE, translator_do: 'reading_seated', translator_with: ['letter'], translator_look: 'translator#letter',
        jack_with: [], jack_look: 'translator#letter',
      }),
      run: async s => {
        const her = s.person('translator');
        her.mood('thinking');
        her.look('translator#letter');
        her.do('peel');
        shot(s, SH.tear);
        await s.wait(1.2);
        await s.move('letter_close', 1, { over: 0.8 });
        s.tell('tear:open');
        await s.wait(2);
      },
    },
    // the rest read; Jack takes the sheet back, flat; the guide calls; she gets up and goes to the coach, and is gone
    reading_end: {
      after: ['tear'],
      tells: ['reading_end:back', 'reading_end:guide', 'reading_end:gone'],
      seconds: 22,
      from: () => ({
        ...SQUARE, translator_do: 'reading_seated', translator_with: ['letter'], translator_look: 'translator#letter',
        jack_with: [], jack_look: 'translator#letter', ...SH.tear,
      }),
      run: async s => {
        const her = s.person('translator'),
          jack = s.person('jack'),
          guide = s.person('guide');
        await s.move('letter_close', 0, { over: 0.8 });
        her.do('reading_seated');
        her.look('translator#letter');
        await s.wait(2);
        her.with([]);
        jack.with(['letter']);
        jack.look('jack#letter');
        her.look('jack');
        her.do('sitting_on_bed');
        shot(s, SH.jack);
        s.tell('reading_end:back');
        await s.wait(3);
        shot(s, SH.wide, 2);
        await guide.do('beckon', { loop: false });
        guide.do('showing_suit');
        her.look('guide');
        s.tell('reading_end:guide');
        await s.wait(1.5);
        her.on(null);
        await her.go('rise', { from: [SEAT[0], SEAT[1]], turn: 180 });
        her.look('jack');
        await s.wait(1.5);
        her.look(null);
        await her.walk([[0.4, 7], [DOOR[0], DOOR[1]]]);
        her.here(false);
        jack.look('bus#door');
        s.tell('reading_end:gone');
        await s.wait(2);
      },
    },
  };
}
return { row, film };
