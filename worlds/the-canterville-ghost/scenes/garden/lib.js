// The garden's pieces (the game's `beat`; modules/beats; notes.md «Pieces»). Places in metres: across (right of the
// middle), away. He sits in the grass before the yew at HIM, she kneels a step from him at HER; the soft open earth
// lies under the yew at EARTH.
const HIM = [1.2, 5.3];
const HER = [-0.3, 4.7];
const EARTH = [2.3, 5.6];
const CAM = { camera_target: null, camera_shot: 'full', camera_frame: null, camera_glide: 1.5, camera_x: 0, camera_h: 0, camera_z: 0,
  camera_look: 0, camera_pitch: 0, camera_yaw: 0, camera_roll: 0 };
const shot = (target, size, frame = null) => ({ ...CAM, camera_target: target, camera_shot: size, camera_frame: frame });
// the two at their places as the look has them: he sits in the grass looking at the earth, she kneels praying
const AT = {
  simon_fade: 0, simon_a: HIM[0], simon_d: HIM[1], simon_turn: 235, simon_do: 'sit_ground', simon_look: 'earth', simon_reach: null, simon_with: [],
  virginia_a: HER[0], virginia_d: HER[1], virginia_turn: 125, virginia_do: 'pray', virginia_look: 'simon', virginia_reach: null, virginia_with: [],
};

function film(scene) {
  return {
    // 4.3: the two walk in through the long grass from the far side and sit at their places (`parcel`: he has her
    // parcel and lays it on the grass)
    garden_come: {
      tells: ['garden_come:sat', 'garden_come:parcel'],
      seconds: 10,
      from: () => ({ ...AT, simon_a: 1.4, simon_d: 11, simon_turn: 180, simon_do: 'stand', simon_look: null, virginia_a: 0.4, virginia_d: 11.2,
        virginia_turn: 180, virginia_do: 'stand', virginia_look: 'simon', ...CAM }),
      run: async s => {
        const p = s.person('simon');
        const v = s.person('virginia');
        const parcel = !!scene.get('parcel');
        if (parcel) {
          s.set('parcel', false);
          p.with(['parcel']);
        }
        await s.all(p.walk([[1.3, 7.5], [HIM[0], HIM[1] - 0.1]]), v.walk([[0.2, 7.5], HER]));
        await s.all(p.turn(235), v.turn(125));
        p.do('sit_ground');
        v.do('pray');
        p.look('virginia');
        s.camera({ target: 'virginia', shot: 'full', frame: 0.4 });
        s.tell('garden_come:sat');
        await s.wait(2);
        if (parcel) {
          p.with([]);
          s.set('parcel', true);
        }
        s.tell('garden_come:parcel');
        p.look('earth');
        await s.wait(1);
      },
    },
    // 4.4 «named» (plays: cold): he gets up, walks to the edge of the grass and stands half turned from her; the
    // nightingale falls silent
    named: {
      tells: ['named:stand'],
      seconds: 10,
      from: () => ({ ...AT, ...shot('simon', 'medium') }),
      run: async s => {
        const p = s.person('simon');
        p.look(null);
        p.do('stand');
        await s.wait(0.8);
        s.move('nightingale', 0, { over: 3 });
        await p.walk([[2.0, 6.2], [2.9, 7.0]]);
        await p.turn(160);
        p.look([3.6, 6.0, 1.2]);
        s.tell('named:stand');
        await s.wait(2);
      },
    },
    // 4.4 «named»: he looks at the soft earth — «Eleanore» — walks back and sits further off
    named_back: {
      after: ['named'],
      tells: ['named_back:name', 'named_back:sat'],
      seconds: 10,
      from: () => ({ ...AT, nightingale: 0, simon_a: 2.9, simon_d: 7.0, simon_turn: 160, simon_do: 'stand', simon_look: [3.6, 6.0, 1.2], ...shot('simon', 'close') }),
      run: async s => {
        const p = s.person('simon');
        s.camera({ target: 'simon', shot: 'close' });
        p.look('earth');
        await s.wait(1.5);
        s.tell('named_back:name');
        await s.wait(2);
        s.camera({ target: null });
        await p.walk([[1.75, 5.7]]);
        await p.turn(235);
        p.do('sit_ground');
        p.look('virginia');
        s.tell('named_back:sat');
        await s.wait(1);
      },
    },
    // 4.4 «not named»: he says it again and looks at her; the nightingale sings
    unnamed: {
      tells: ['unnamed:look'],
      seconds: 6,
      from: () => ({ ...AT, ...shot('simon', 'close') }),
      run: async s => {
        const p = s.person('simon');
        await s.wait(1.5);
        p.look('virginia');
        s.tell('unnamed:look');
        s.move('nightingale', 1, { over: 2 });
        await s.wait(3);
      },
    },
    // 4.5: she weeps (`named`: and reaches for his hand); he takes the casket from his sleeve and lays it in her palm
    tears: {
      after: ['garden_come', 'named_back', 'unnamed'],
      tells: ['tears:weep', 'tears:casket'],
      seconds: 12,
      from: () => ({ ...AT, ...shot('virginia', 'full', 0.4) }),
      run: async s => {
        const p = s.person('simon');
        const v = s.person('virginia');
        s.camera({ target: 'virginia', shot: 'full', frame: 0.4 });
        v.do('weep');
        s.tell('tears:weep');
        p.look('virginia');
        await s.wait(3.5);
        if (scene.get('named')) {
          v.do('pray');
          v.reach({ r: 'simon#hand_l' });
          await s.wait(1.5);
          v.reach(null);
        }
        p.with(['casket']);
        p.look('simon#hand_r');
        await s.wait(1);
        v.do('pray');
        p.reach({ r: 'virginia#hand_r' });
        p.look('virginia');
        v.look('simon#hand_r');
        await s.wait(2);
        p.with([]);
        v.with(['casket']);
        s.tell('tears:casket');
        await s.wait(1.5);
      },
    },
    // 4.5 after М7: he lies down under the yew and goes into the earth; the nightingale as the game says
    sleep: {
      after: ['tears'],
      tells: ['sleep:lie', 'sleep:gone'],
      seconds: 10,
      from: () => ({ ...AT, virginia_with: ['casket'], ...CAM }),
      run: async s => {
        const p = s.person('simon');
        const v = s.person('virginia');
        s.camera({ target: null });
        p.reach(null);
        p.look(null);
        p.do('stand');
        v.look('simon');
        await s.wait(0.6);
        await p.go('lie_down', { to: EARTH, turn: 270 });
        s.tell('sleep:lie');
        v.look('earth');
        await s.move('simon_fade', 1, { over: 5 });
        p.here(false);
        s.tell('sleep:gone');
        await s.wait(1);
      },
    },
  };
}

return { film };
