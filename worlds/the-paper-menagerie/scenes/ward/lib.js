// What the ward's walls share: hospital paint in two tones — a pale mint-cream above, a sage-green gloss below a
// grey-green rail at 1.2 m — and a darker skirting, over x0…x1 of a wall 2.7 m high (metres from its foot, y up
// negative). The caller cuts its own openings (clip) before calling.
function wall(g, x0, x1) {
  const w = x1 - x0;
  g.fillStyle = '#e4e8d6';
  g.fillRect(x0, -2.72, w, 2.74);
  g.fillStyle = '#a9bca4';
  g.fillRect(x0, -1.2, w, 1.22);
  g.fillStyle = 'rgba(255,255,255,0.08)';
  for (let x = x0; x < x1 - 0.3; x += 0.9) g.fillRect(x, -1.18, 0.3, 1.0);
  g.fillStyle = '#8fa48f';
  g.fillRect(x0, -1.25, w, 0.06);
  g.fillStyle = '#c9d3c0';
  g.fillRect(x0, -1.27, w, 0.015);
  g.fillStyle = '#6f7f6e';
  g.fillRect(x0, -0.1, w, 0.12);
  g.fillStyle = '#eef0e4';
  g.fillRect(x0, -2.72, w, 0.06);
}
// The town's blocks (town and town_windows paint the same ones): [x, width, height] in the town's metres — a far row of
// taller ones, a near row of lower ones before them.
const far = Array.from({ length: 30 }, (_, i) => [
  -145 + i * 10 + anim.hash(i, 1) * 5,
  9 + anim.hash(i, 2) * 9,
  16 + anim.hash(i, 3) * 16,
]);
const near = Array.from({ length: 26 }, (_, i) => [
  -148 + i * 12 + anim.hash(i, 4) * 6,
  10 + anim.hash(i, 5) * 8,
  6 + anim.hash(i, 6) * 12,
]);

// ── the pieces (stage 5: modules/beats; the game's contract — docs/new-games/bumazhny-zverinec/game.md) ──
// Where things are: Mom's place on the bed's edge, Dad's chair by the window, the ward's door (inside and out in the
// corridor), the bed's edge by her hand where Jack sits, the payphone's spot in the corridor.
const SEAT_MOM = [0.38, 3.6, 0.58];
const CHAIR = [-1.85, 3.2, 0.46];
const BY_HER = [1.15, 3.62, 0.58];
const DOOR_IN = [2.3, 1.95];
const PHONE = [5.32, 5.62];
// the camera's values a piece begins at (its first shot over them), and the two ways the eye looks (the script's
// `view`: camera_on, the corridor's lamps)
const CAM = {
  camera_target: null, camera_shot: 'full', camera_frame: null, camera_glide: 1.5, camera_x: 0, camera_h: 0, camera_z: 0,
  camera_look: 0, camera_pitch: 0, camera_yaw: 0, camera_roll: 0,
};
// a camera of its own (the operator's framing in a room this small goes behind people and into the bed): the eye
// [across, distance, height] looking at a point [across, distance, height], world metres; in the corridor the camera
// rides corridor_eye (across 4.35, distance −1.6, facing as the world), so its eye is given from there
const DEG = 180 / Math.PI;
const VIEW = ([ex, ez, eh], [tx, tz, th], base = [0, 0]) => ({
  camera_target: null, camera_x: ex - base[0], camera_z: ez - base[1], camera_h: eh - 1.7,
  camera_yaw: Math.atan2(tx - ex, tz - ez) * DEG, camera_pitch: Math.atan2(th - eh, Math.hypot(tx - ex, tz - ez)) * DEG,
});
const OUT = [4.35, -1.6];
const SH = {
  wide: VIEW([0, 0, 1.7], [0, 10, 1.7]),
  // Mom on the bed's edge, from her right (she looks at Jack standing or sitting on her right) / from her left (the tiger)
  mom_r: VIEW([0.95, 2.05, 1.35], [0.4, 3.6, 1.05]),
  mom_l: VIEW([-0.45, 2.3, 1.35], [0.35, 3.6, 1.05]),
  // the two of them on the bed's edge
  two: VIEW([0.75, 1.75, 1.4], [0.7, 3.6, 0.95]),
  // the bedside table: the tiger (or where it stood), the oranges, the paper house
  tiger: VIEW([-1.0, 3.0, 1.25], [-0.5, 3.97, 0.82]),
  // Mom lying in bed, from above the bed's near side
  bed: VIEW([0.45, 2.75, 1.65], [0.05, 3.98, 0.8]),
  // the chair by the window, the bag over its back
  chair: VIEW([-0.7, 2.1, 1.35], [-1.9, 3.25, 0.65]),
  // Mom standing at the window
  window: VIEW([0.1, 2.2, 1.45], [-1.15, 3.72, 1.2]),
  // the corridor: wide from the eye, then nearer; Jack and Dad at the ward's door; Jack at the payphone
  c_wide: VIEW([4.35, -0.4, 1.7], [4.35, 12, 1.5], OUT),
  c_jack: VIEW([3.7, 0.7, 1.6], [4.5, 2.25, 1.5], OUT),
  c_dad: VIEW([4.95, 0.8, 1.6], [3.75, 2.45, 1.55], OUT),
  c_phone: VIEW([4.3, 3.2, 1.6], [5.3, 5.6, 1.4], OUT),
  c_hall: VIEW([4.35, 1.0, 1.7], [4.6, 8, 1.4], OUT),
};
const ROOM = { view: 'room', camera_on: null, corridor_lights: 0 };
const CORRIDOR = { view: 'corridor', camera_on: 'corridor_eye', corridor_lights: 1 };
function film(scene) {
  const cast = scene.kit.cast.characters;
  const JACK_NOBAG = { ...cast.jack_grown, parts: [] };
  const DAD_PLAIN = { ...cast.dad_grey, parts: [] };
  // Mom folding the hospital menu: her look with a white sheet in her hands
  const MOM_MENU = { ...cast.mom_ill, parts: ['sheet'], colors: { ...cast.mom_ill.colors, accent: '#f3f0e6' } };
  // nobody holds anything, nobody carried, nobody reaching (each piece's people begin from it, then its own)
  const PEOPLE = {
    mom_on: SEAT_MOM, mom_a: SEAT_MOM[0], mom_d: SEAT_MOM[1], mom_turn: 170, mom_do: 'sitting_on_bed', mom_look: 'jack',
    mom_reach: null, mom_wear: null, mom_with: null,
    dad_on: CHAIR, dad_a: CHAIR[0], dad_d: CHAIR[1], dad_turn: 115, dad_do: 'reading_seated', dad_look: 'dad#book',
    dad_reach: null, dad_wear: null, dad_with: null,
    jack_on: null, jack_a: 1.5, jack_d: 3.0, jack_turn: 250, jack_do: 'showing_suit', jack_look: 'mom', jack_reach: null,
    jack_wear: null, jack_with: null,
    nurse_a: 4.95, nurse_d: 15, nurse_turn: 180, nurse_do: 'stand', nurse_look: null, nurse_reach: null,
    phone_off: false,
  };
  // the evening (2.2): the lamp lit, the three of them as the ward's picture has them
  const EVENING = { ...CAM, ...ROOM, ...PEOPLE, lamp: 1 };
  // the night: the lamp low, Mom asleep in bed — on her back on the sheet (held over the bed by `_on`, as a seat holds
  // one sitting), her head on the pillow, her right hand on the near side
  const IN_BED = { mom_on: [0.72, 3.98, 0.5], mom_a: 0.72, mom_d: 3.98, mom_turn: 90, mom_do: 'lie_bed', mom_look: null };
  // sitting down (the motion sit_down, ending over the seat), then held on it, a seated loop
  const sit = async (p, seat, turn, loop = 'sitting_on_bed') => {
    await p.go('sit_down', { to: [seat[0], seat[1]], turn });
    p.on(seat);
    p.do(loop);
  };
  const sitBy = async (p, look) => {
    p.look(look);
    await sit(p, BY_HER, 200);
  };
  // the camera moved to one of the ward's own (SH) over `over` seconds
  const shot = (s, c, over = 1.5) => {
    s.set('camera_target', null);
    for (const k of ['camera_x', 'camera_z', 'camera_h', 'camera_yaw', 'camera_pitch']) s.move(k, c[k], { over, ease: 'inOut' });
  };
  // getting up from where they sit (the motion rise), if they sit
  const up = async (s, id) => {
    const p = s.person(id),
      seat = s.get(`${id}_on`);
    if (!Array.isArray(seat)) return;
    p.on(null);
    await p.go('rise', { from: [seat[0], seat[1]], turn: s.get(`${id}_turn`) });
    p.do('stand');
  };
  return {
    // 2.1, out in the corridor at the ward's door: Dad with his oranges, Jack with the suit bag held up and the ticket;
    // the nurse comes down the corridor and passes them, out of sight behind us
    door: {
      tells: ['door:dad', 'door:nurse', 'door:ticket', 'door:book', 'door:tiger'],
      seconds: 24,
      from: () => ({
        ...CAM, ...CORRIDOR, ...PEOPLE, ...SH.c_wide,
        dad_on: null, dad_a: 3.75, dad_d: 2.45, dad_turn: 150, dad_do: 'stand', dad_wear: DAD_PLAIN, dad_with: ['oranges'],
        dad_look: 'jack',
        jack_a: 4.5, jack_d: 2.25, jack_turn: 215, jack_look: 'dad',
        nurse_a: 4.95, nurse_d: 15.5, nurse_turn: 180,
      }),
      run: async s => {
        s.tell('door:dad');
        await s.wait(2);
        const nurse = s.person('nurse');
        await nurse.walk([[5.05, 6.5]]);
        s.tell('door:nurse');
        s.person('jack').look('nurse');
        s.person('dad').look('nurse');
        await nurse.walk([[5.15, 2.2], [5.2, -3]]);
        nurse.here(false);
        s.person('jack').look('dad');
        s.person('dad').look('jack');
        shot(s, SH.c_jack);
        s.tell('door:ticket');
        await s.wait(3);
        shot(s, SH.c_dad);
        s.tell('door:book');
        await s.wait(3);
        shot(s, SH.c_wide);
        s.person('jack').look('corridor_left#door');
        s.person('dad').look('corridor_left#door');
        s.tell('door:tiger');
        await s.wait(2.5);
      },
    },
    // 2.2: in from the door; Dad puts his oranges down on the bedside table and goes to his chair by the window with
    // his phrasebook; Jack to the bed's foot, the bag held up; she looks at her son
    ward_in: {
      tells: ['ward_in:greet'],
      seconds: 9,
      from: () => ({
        ...EVENING,
        dad_on: null, dad_a: 2.0, dad_d: 1.75, dad_turn: 250, dad_do: 'stand', dad_wear: DAD_PLAIN, dad_with: ['oranges'],
        dad_look: 'mom',
        jack_a: 2.45, jack_d: 2.05, jack_turn: 250, jack_look: 'mom',
      }),
      run: async s => {
        const dad = s.person('dad'),
          jack = s.person('jack');
        await s.all(
          (async () => {
            await dad.walk([[0.4, 2.7], [-0.55, 3.35]]);
            await dad.turn(0);
            dad.with([]);
            dad.wear(null);
            await sit(dad, CHAIR, 115, 'reading_seated');
            dad.look('dad#book');
          })(),
          (async () => {
            await s.wait(0.8);
            await jack.walk([[1.5, 3.0]]);
            await jack.turn(250);
            jack.look('mom');
          })(),
        );
        shot(s, SH.mom_r);
        s.tell('ward_in:greet');
        await s.wait(2);
      },
    },
    // 2.2: Jack's finger on the crooked fold of Laohu's tail; her hand lifts his fingers off; then «Suit? Show me» —
    // she touches the sleeve through the bag
    once: {
      after: ['ward_in'],
      tells: ['once:touch', 'once:suit'],
      seconds: 14,
      from: () => ({ ...EVENING, ...SH.mom_r }),
      run: async s => {
        const jack = s.person('jack'),
          mom = s.person('mom');
        await jack.walk([[0.75, 3.1], [-0.2, 3.32]]);
        await jack.turn(330);
        jack.look('laohu');
        jack.reach({ l: 'laohu' });
        shot(s, SH.tiger);
        mom.look('laohu');
        await s.wait(1.2);
        s.tell('once:touch');
        mom.reach({ r: 'jack#hand_l' });
        await s.wait(2.2);
        jack.reach(null);
        mom.reach(null);
        await jack.walk([[1.5, 3.0]]);
        await jack.turn(250);
        jack.look('mom');
        shot(s, SH.mom_r);
        mom.look('jack#bag');
        s.tell('once:suit');
        await s.wait(1.5);
        mom.reach({ l: 'jack#bag' });
        mom.mood('smile');
        await s.wait(3);
      },
    },
    // «О чём?» — her mother: she looks at Laohu, falls silent, coughs; Dad looks up from his book
    talk_grandma: {
      after: ['once'],
      tells: ['talk_grandma:say', 'talk_grandma:end'],
      seconds: 12,
      from: () => ({ ...EVENING, jack_a: 1.5, jack_d: 3.0, jack_turn: 250, ...SH.mom_r }),
      run: async s => {
        const mom = s.person('mom');
        mom.reach(null);
        shot(s, SH.mom_l);
        mom.look('laohu');
        s.tell('talk_grandma:say');
        await s.wait(4);
        mom.mood('sad');
        await s.wait(2);
        s.person('dad').look('mom');
        shot(s, SH.wide);
        await s.wait(2.5);
        mom.look('jack');
        s.tell('talk_grandma:end');
        await s.wait(2.5);
      },
    },
    // «О чём?» — forty: she laughs, surprised at herself
    talk_forty: {
      after: ['once'],
      tells: ['talk_forty:say', 'talk_forty:end'],
      seconds: 10,
      from: () => ({ ...EVENING, jack_a: 1.5, jack_d: 3.0, jack_turn: 250, ...SH.mom_r }),
      run: async s => {
        const mom = s.person('mom');
        mom.reach(null);
        shot(s, SH.mom_r);
        mom.look('jack');
        s.tell('talk_forty:say');
        await s.wait(3);
        mom.mood('laugh');
        s.person('dad').look('mom');
        await s.wait(3);
        mom.mood('smile');
        s.tell('talk_forty:end');
        await s.wait(3);
      },
    },
    // «О чём?» — her hand: Jack lays the bag across the bed's foot, sits by her and takes her hand in both of his; she
    // reaches for the tiger and cannot, her hand falls back
    talk_hand: {
      after: ['once'],
      tells: ['talk_hand:say', 'talk_hand:end'],
      seconds: 14,
      from: () => ({ ...EVENING, jack_a: 1.5, jack_d: 3.0, jack_turn: 250, ...SH.two }),
      run: async s => {
        const mom = s.person('mom'),
          jack = s.person('jack');
        mom.reach(null);
        jack.wear(JACK_NOBAG);
        await sitBy(jack, 'mom');
        jack.do('hold_hand_bed');
        jack.reach({ r: 'mom#hand_l', l: 'mom#hand_l' });
        mom.look('jack');
        shot(s, SH.two);
        s.tell('talk_hand:say');
        await s.wait(3);
        mom.look('laohu');
        mom.reach({ r: 'laohu' });
        await s.wait(2.5);
        mom.reach(null);
        mom.mood('sad');
        await s.wait(1.5);
        mom.look('jack');
        s.tell('talk_hand:end');
        await s.wait(3);
      },
    },
    // the evening darkening: Dad puts his book away, gets up and goes to the door; at it he turns — «Let's go…»; she —
    // «Go…»; then the choice
    coat: {
      after: ['talk_grandma', 'talk_forty', 'talk_hand'],
      tells: ['coat:dad', 'coat:mom'],
      seconds: 9,
      from: () => ({ ...EVENING, lamp: 0.6, jack_a: 1.5, jack_d: 3.0, jack_turn: 250 }),
      run: async s => {
        const dad = s.person('dad');
        shot(s, SH.wide);
        s.move('lamp', 0.6, { over: 3 });
        dad.wear(DAD_PLAIN);
        await up(s, 'dad');
        await dad.walk([[-1.2, 2.7], [1.0, 2.3], [DOOR_IN[0], DOOR_IN[1]]]);
        await dad.turn(285);
        dad.look('jack');
        s.tell('coat:dad');
        await s.wait(2);
        s.person('mom').look('jack');
        s.tell('coat:mom');
        await s.wait(2);
      },
    },
    // «Остался»: Jack hangs the bag over the chair's back, sits by her and takes her hand; Dad nods and goes; she takes
    // her hand away and turns to the window
    stay: {
      after: ['coat'],
      tells: ['stay:say', 'stay:turn'],
      seconds: 14,
      from: () => ({
        ...EVENING, lamp: 0.6, jack_a: 1.5, jack_d: 3.0, jack_turn: 250,
        dad_on: null, dad_a: DOOR_IN[0], dad_d: DOOR_IN[1], dad_turn: 285, dad_do: 'stand', dad_wear: DAD_PLAIN, dad_look: 'jack',
      }),
      run: async s => {
        const jack = s.person('jack'),
          mom = s.person('mom'),
          dad = s.person('dad');
        await up(s, 'jack');
        s.tell('stay:say');
        await jack.walk([[-1.45, 2.95]]);
        await jack.turn(300);
        jack.look('chair');
        await s.wait(0.6);
        s.set('suit_on_chair', true);
        jack.wear(JACK_NOBAG);
        jack.do('stand');
        await sitBy(jack, 'mom');
        jack.do('hold_hand_bed');
        jack.reach({ r: 'mom#hand_l', l: 'mom#hand_l' });
        dad.look('jack');
        await s.wait(1.5);
        dad.look('mom');
        await s.wait(1);
        await dad.walk([[2.8, 1.5]]);
        dad.here(false);
        shot(s, SH.mom_l);
        jack.reach(null);
        jack.do('sitting_on_bed');
        await s.wait(0.8);
        mom.turn(250);
        mom.look('window#pane');
        s.tell('stay:turn');
        await s.wait(3);
      },
    },
    // «Уехал»: Jack squeezes her hand, walks to the door with his bag and looks back; she looks at the window
    go: {
      after: ['coat'],
      tells: ['go:hand', 'go:door'],
      seconds: 10,
      from: () => ({
        ...EVENING, lamp: 0.6, jack_a: 1.5, jack_d: 3.0, jack_turn: 250,
        dad_on: null, dad_a: DOOR_IN[0], dad_d: DOOR_IN[1], dad_turn: 285, dad_do: 'stand', dad_wear: DAD_PLAIN, dad_look: 'jack',
      }),
      run: async s => {
        const jack = s.person('jack'),
          mom = s.person('mom');
        await up(s, 'jack');
        await jack.walk([[0.8, 3.25]]);
        await jack.turn(230);
        jack.reach({ l: 'mom#hand_l' });
        mom.reach({ l: 'jack#hand_l' });
        shot(s, SH.mom_r);
        s.tell('go:hand');
        await s.wait(2.5);
        jack.reach(null);
        mom.reach(null);
        s.person('dad').walk([[2.8, 1.5]]);
        await jack.walk([[2.05, 2.15]]);
        shot(s, SH.wide);
        await jack.turn(260);
        jack.look('mom');
        mom.look('window#pane');
        s.tell('go:door');
        await s.wait(2.5);
      },
    },
    // «Остался», three in the morning: she wakes and looks at the bag on the chair; Jack gets up and hangs it straight;
    // she looks at the tiger, then at him; they talk; she falls asleep
    night: {
      tells: ['night:bag', 'night:tiger', 'night:talk', 'night:last'],
      seconds: 26,
      from: () => ({
        ...CAM, ...ROOM, ...PEOPLE, ...IN_BED, lamp: 0.45,
        jack_on: CHAIR, jack_a: CHAIR[0], jack_d: CHAIR[1], jack_turn: 105, jack_do: 'sitting_on_bed', jack_wear: JACK_NOBAG,
        jack_look: 'mom',
        ...SH.bed,
      }),
      run: async s => {
        const mom = s.person('mom'),
          jack = s.person('jack');
        mom.mood('tired');
        mom.look('suit_chair#bag');
        s.tell('night:bag');
        await s.wait(2);
        await up(s, 'jack');
        await jack.walk([[-1.5, 2.9]]);
        await jack.turn(330);
        jack.reach({ r: 'suit_chair#bag' });
        await s.wait(1.5);
        jack.reach(null);
        await sit(jack, CHAIR, 105);
        jack.look('mom');
        shot(s, SH.tiger);
        mom.look('laohu');
        s.tell('night:tiger');
        await s.wait(3);
        shot(s, SH.bed);
        mom.look('jack');
        s.tell('night:talk');
        await s.wait(6);
        s.tell('night:last');
        await s.wait(3);
        mom.mood('eyes_closed');
        mom.look(null);
        await s.wait(3);
      },
    },
    // the next morning, out in the corridor: Jack at the payphone, the receiver at his ear, his back to the wall and his
    // head bowed; Dad comes down the corridor from the lifts with a bag of oranges
    phone: {
      tells: ['phone:dad', 'phone:pocket'],
      seconds: 14,
      from: () => ({
        ...CAM, ...CORRIDOR, ...PEOPLE, phone_off: true,
        jack_a: PHONE[0], jack_d: PHONE[1], jack_turn: 215, jack_do: 'phone_call', jack_wear: JACK_NOBAG, jack_with: ['receiver'],
        jack_look: null,
        dad_on: null, dad_a: 4.3, dad_d: 16.5, dad_turn: 180, dad_do: 'stand', dad_wear: DAD_PLAIN, dad_with: ['oranges'],
        dad_look: 'jack',
        ...SH.c_phone,
      }),
      run: async s => {
        const dad = s.person('dad'),
          jack = s.person('jack');
        await s.wait(2);
        shot(s, SH.c_hall, 2.5);
        await dad.walk([[4.4, 7.2], [4.55, 4.35]]);
        await dad.turn(20);
        jack.look('dad');
        s.tell('phone:dad');
        await s.wait(2.5);
        s.set('phone_off', false);
        jack.with([]);
        jack.do('stand');
        shot(s, SH.c_phone);
        s.tell('phone:pocket');
        await s.wait(2.5);
      },
    },
    // «Уехал», a night: Jack and Dad gone home; she stands at the window folding the hospital menu in half; from the
    // door (unseen) Dad's voice
    menu: {
      tells: ['menu:door'],
      seconds: 8,
      from: () => ({
        ...CAM, ...ROOM, ...PEOPLE, lamp: 0.45,
        mom_on: null, mom_a: -1.15, mom_d: 3.72, mom_turn: 215, mom_do: 'folding', mom_wear: MOM_MENU, mom_look: 'mom#hands',
        ...SH.window,
      }),
      run: async s => {
        const mom = s.person('mom');
        await s.wait(3);
        mom.look([2.85, 1.85, 1.5]);
        s.tell('menu:door');
        await s.wait(2.5);
        mom.look('mom#hands');
        await s.wait(2.5);
      },
    },
    // Friday night: the lamp low; Dad asleep on the chair, Mom asleep in bed; Jack (back on the train, «Уехал») comes in
    // with his bag, or (stayed) has been sitting by her all along; he sits on the bed's edge by her hand. Then M5
    friday: {
      tells: ['friday:back', 'friday:house'],
      seconds: 12,
      from: () => {
        const stayed = !!scene.state.suit_on_chair;
        return {
          ...CAM, ...ROOM, ...PEOPLE, ...IN_BED, lamp: 0.45,
          dad_do: 'doze_chair', dad_wear: DAD_PLAIN, dad_look: null,
          ...(stayed
            ? { jack_on: BY_HER, jack_a: BY_HER[0], jack_d: BY_HER[1], jack_turn: 200, jack_do: 'sitting_on_bed', jack_wear: JACK_NOBAG, jack_look: 'mom' }
            : { jack_a: DOOR_IN[0], jack_d: DOOR_IN[1], jack_turn: 250, jack_do: 'stand', jack_wear: null, jack_look: 'mom' }),
        };
      },
      run: async s => {
        const jack = s.person('jack'),
          went = !scene.state.suit_on_chair;
        s.person('mom').mood('eyes_closed');
        s.person('dad').mood('eyes_closed');
        if (went) {
          await jack.walk([[1.3, 3.0]]);
          jack.wear(JACK_NOBAG);
          await sitBy(jack, 'mom');
        }
        s.tell('friday:back');
        await s.wait(2.5);
        shot(s, SH.tiger);
        jack.look(went ? 'menu_house' : 'nightstand_top');
        s.tell('friday:house');
        await s.wait(3);
        jack.look('mom');
        shot(s, SH.bed);
        await s.wait(2);
      },
    },
    // after M5: the lamp lower still, the two of them by her
    silence: {
      after: ['friday'],
      tells: ['silence:dark'],
      seconds: 6,
      run: async s => {
        shot(s, SH.wide);
        await s.move('lamp', 0.25, { over: 4 });
        s.tell('silence:dark');
        await s.wait(2);
      },
    },
  };
}
return { wall, town: { far, near }, film };
