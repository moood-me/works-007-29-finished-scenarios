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
const BY_HER = [1.0, 3.62, 0.58];
const DOOR_IN = [2.3, 1.95];
const PHONE = [5.32, 5.62];
// the camera's values a piece begins at (its first shot over them), and the two ways the eye looks (the script's
// `view`: camera_on, the corridor's lamps)
const CAM = {
  camera_target: null, camera_shot: 'full', camera_frame: null, camera_glide: 1.5, camera_x: 0, camera_h: 0, camera_z: 0,
  camera_look: 0, camera_pitch: 0, camera_yaw: 0, camera_roll: 0,
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
    jack_on: null, jack_a: 1.45, jack_d: 3.15, jack_turn: 250, jack_do: 'showing_suit', jack_look: 'mom', jack_reach: null,
    jack_wear: null, jack_with: null,
    nurse_a: 4.95, nurse_d: 15, nurse_turn: 180, nurse_do: 'stand', nurse_look: null, nurse_reach: null,
    phone_off: false,
  };
  // the evening (2.2): the lamp lit, the three of them as the ward's picture has them
  const EVENING = { ...CAM, ...ROOM, ...PEOPLE, lamp: 1 };
  // the night: the lamp low, Mom asleep in bed (on her back, her head on the pillow, her right hand on the near side)
  const IN_BED = { mom_on: 'bed_top#lie', mom_a: 0.72, mom_d: 3.85, mom_turn: 90, mom_do: 'lie_bed', mom_look: null };
  const sitBy = (p, look) => {
    p.on(BY_HER);
    p.turn(200);
    p.do('sitting_on_bed');
    p.look(look);
  };
  const up = p => {
    p.on(null);
    p.do('stand');
  };
  return {
    // 2.1, out in the corridor at the ward's door: Dad with his oranges, Jack with the suit bag held up and the ticket;
    // the nurse comes down the corridor and passes them, out of sight behind us
    door: {
      tells: ['door:dad', 'door:nurse', 'door:ticket', 'door:book', 'door:tiger'],
      seconds: 20,
      from: () => ({
        ...CAM, ...CORRIDOR, ...PEOPLE, camera_z: 1.2,
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
        s.camera({ target: 'jack', shot: 'medium' });
        s.tell('door:ticket');
        await s.wait(3);
        s.camera({ target: 'dad', shot: 'medium' });
        s.tell('door:book');
        await s.wait(3);
        s.camera({ target: null });
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
            await dad.walk([[-1.5, 3.0]]);
            dad.on(CHAIR);
            dad.turn(115);
            dad.wear(null);
            dad.do('reading_seated');
            dad.look('dad#book');
          })(),
          (async () => {
            await s.wait(0.8);
            await jack.walk([[1.45, 3.15]]);
            await jack.turn(250);
            jack.look('mom');
          })(),
        );
        s.camera({ target: 'mom', shot: 'medium' });
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
      from: () => ({ ...EVENING, camera_target: 'mom', camera_shot: 'medium' }),
      run: async s => {
        const jack = s.person('jack'),
          mom = s.person('mom');
        await jack.walk([[0.75, 3.1], [-0.2, 3.32]]);
        await jack.turn(330);
        jack.look('laohu');
        jack.reach({ l: 'laohu' });
        s.camera({ target: 'laohu', shot: 'close' });
        mom.look('laohu');
        await s.wait(1.2);
        s.tell('once:touch');
        mom.reach({ r: 'jack#hand_l' });
        await s.wait(2.2);
        jack.reach(null);
        mom.reach(null);
        await jack.walk([[0.95, 3.12]]);
        await jack.turn(245);
        jack.look('mom');
        s.camera({ target: 'mom', shot: 'close' });
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
      from: () => ({ ...EVENING, jack_a: 0.95, jack_d: 3.12, jack_turn: 245, camera_target: 'mom', camera_shot: 'close' }),
      run: async s => {
        const mom = s.person('mom');
        mom.reach(null);
        s.camera({ target: 'mom', shot: 'close' });
        mom.look('laohu');
        s.tell('talk_grandma:say');
        await s.wait(4);
        mom.mood('sad');
        await s.wait(2);
        s.person('dad').look('mom');
        s.camera({ target: null });
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
      from: () => ({ ...EVENING, jack_a: 0.95, jack_d: 3.12, jack_turn: 245, camera_target: 'mom', camera_shot: 'close' }),
      run: async s => {
        const mom = s.person('mom');
        mom.reach(null);
        s.camera({ target: 'mom', shot: 'close' });
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
      from: () => ({ ...EVENING, jack_a: 0.95, jack_d: 3.12, jack_turn: 245, camera_target: 'mom', camera_shot: 'medium' }),
      run: async s => {
        const mom = s.person('mom'),
          jack = s.person('jack');
        mom.reach(null);
        jack.wear(JACK_NOBAG);
        await jack.walk([[BY_HER[0], 3.3]]);
        sitBy(jack, 'mom');
        jack.do('hold_hand_bed');
        jack.reach({ r: 'mom#hand_l', l: 'mom#hand_l' });
        mom.look('jack');
        s.camera({ target: 'mom', shot: 'medium' });
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
      from: () => ({ ...EVENING, lamp: 0.6, jack_a: 0.95, jack_d: 3.12, jack_turn: 245 }),
      run: async s => {
        const dad = s.person('dad');
        s.camera({ target: null });
        s.move('lamp', 0.6, { over: 3 });
        dad.wear(DAD_PLAIN);
        up(dad);
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
        ...EVENING, lamp: 0.6, jack_a: 0.95, jack_d: 3.12, jack_turn: 245,
        dad_on: null, dad_a: DOOR_IN[0], dad_d: DOOR_IN[1], dad_turn: 285, dad_do: 'stand', dad_wear: DAD_PLAIN, dad_look: 'jack',
      }),
      run: async s => {
        const jack = s.person('jack'),
          mom = s.person('mom'),
          dad = s.person('dad');
        up(jack);
        s.tell('stay:say');
        await jack.walk([[-1.45, 2.95]]);
        await jack.turn(300);
        jack.look('chair');
        await s.wait(0.6);
        s.set('suit_on_chair', true);
        jack.wear(JACK_NOBAG);
        jack.do('stand');
        await jack.walk([[BY_HER[0], 3.3]]);
        sitBy(jack, 'mom');
        jack.do('hold_hand_bed');
        jack.reach({ r: 'mom#hand_l', l: 'mom#hand_l' });
        dad.look('jack');
        await s.wait(1.5);
        dad.look('mom');
        await s.wait(1);
        await dad.walk([[2.8, 1.5]]);
        dad.here(false);
        s.camera({ target: 'mom', shot: 'close' });
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
        ...EVENING, lamp: 0.6, jack_a: 0.95, jack_d: 3.12, jack_turn: 245,
        dad_on: null, dad_a: DOOR_IN[0], dad_d: DOOR_IN[1], dad_turn: 285, dad_do: 'stand', dad_wear: DAD_PLAIN, dad_look: 'jack',
      }),
      run: async s => {
        const jack = s.person('jack'),
          mom = s.person('mom');
        up(jack);
        await jack.walk([[0.8, 3.25]]);
        await jack.turn(230);
        jack.reach({ l: 'mom#hand_l' });
        mom.reach({ l: 'jack#hand_l' });
        s.camera({ target: 'mom', shot: 'medium' });
        s.tell('go:hand');
        await s.wait(2.5);
        jack.reach(null);
        mom.reach(null);
        s.person('dad').walk([[2.8, 1.5]]);
        await jack.walk([[2.05, 2.15]]);
        s.camera({ target: null });
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
        ...CAM, ...ROOM, ...PEOPLE, ...IN_BED, lamp: 0.3,
        jack_on: CHAIR, jack_a: CHAIR[0], jack_d: CHAIR[1], jack_turn: 105, jack_do: 'sitting_on_bed', jack_wear: JACK_NOBAG,
        jack_look: 'mom',
        camera_target: 'mom', camera_shot: 'medium',
      }),
      run: async s => {
        const mom = s.person('mom'),
          jack = s.person('jack');
        mom.mood('tired');
        mom.look('suit_chair#bag');
        s.tell('night:bag');
        await s.wait(2);
        up(jack);
        await jack.walk([[-1.5, 2.9]]);
        await jack.turn(330);
        jack.reach({ r: 'suit_chair#bag' });
        await s.wait(1.5);
        jack.reach(null);
        await jack.walk([[-1.7, 3.05]]);
        jack.on(CHAIR);
        jack.turn(105);
        jack.do('sitting_on_bed');
        jack.look('mom');
        s.camera({ target: 'laohu', shot: 'close' });
        mom.look('laohu');
        s.tell('night:tiger');
        await s.wait(3);
        s.camera({ target: 'mom', shot: 'close' });
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
        camera_target: 'jack', camera_shot: 'medium',
      }),
      run: async s => {
        const dad = s.person('dad'),
          jack = s.person('jack');
        await s.wait(2);
        s.camera({ target: null });
        await dad.walk([[4.5, 7.4]]);
        await dad.turn(150);
        jack.look('dad');
        s.tell('phone:dad');
        await s.wait(2.5);
        s.set('phone_off', false);
        jack.with([]);
        jack.do('stand');
        s.camera({ target: 'jack', shot: 'medium' });
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
        ...CAM, ...ROOM, ...PEOPLE, lamp: 0.3,
        mom_on: null, mom_a: -1.15, mom_d: 3.72, mom_turn: 215, mom_do: 'folding', mom_wear: MOM_MENU, mom_look: 'mom#hands',
        camera_target: 'mom', camera_shot: 'medium',
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
          ...CAM, ...ROOM, ...PEOPLE, ...IN_BED, lamp: 0.3,
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
          await jack.walk([[BY_HER[0], 3.3]]);
          sitBy(jack, 'mom');
        }
        s.tell('friday:back');
        await s.wait(2.5);
        s.camera({ target: went ? 'menu_house' : 'nightstand_top', shot: 'close' });
        jack.look(went ? 'menu_house' : 'nightstand_top');
        s.tell('friday:house');
        await s.wait(3);
        jack.look('mom');
        s.camera({ target: 'mom', shot: 'medium' });
        await s.wait(2);
      },
    },
    // after M5: the lamp lower still, the two of them by her
    silence: {
      after: ['friday'],
      tells: ['silence:dark'],
      seconds: 6,
      run: async s => {
        s.camera({ target: null });
        await s.move('lamp', 0.15, { over: 4 });
        s.tell('silence:dark');
        await s.wait(2);
      },
    },
  };
}
return { wall, town: { far, near }, film };
