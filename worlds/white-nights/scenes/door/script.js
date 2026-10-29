// The door: the key `door` (shut, open) swings it about its hinges over a second (door_turn: 270 shut, 350 open); as
// the scene opens it stands as `door` says.
const TURN = { shut: 270, open: 350 };
scene.set('door_turn', TURN[scene.state.door] ?? 270);
scene.on('change', 'door', (v) => scene.move('door_turn', TURN[v] ?? 270, { over: 1.1, ease: 'inOut' }));
