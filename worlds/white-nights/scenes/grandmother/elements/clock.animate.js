// The pendulum swings, a little under a second and a quarter each way and back
e.layer('pendulum').rotate = 0.1 * Math.sin(e.t * Math.PI * 2 / 1.24);
