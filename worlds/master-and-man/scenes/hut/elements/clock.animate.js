// The pendulum ticks to and fro, a beat each 0.4 s — easing at each end as a pendulum does.
e.layer("pendulum").rotate = 0.22 * Math.sin(e.t * Math.PI * 2 / 0.8);
