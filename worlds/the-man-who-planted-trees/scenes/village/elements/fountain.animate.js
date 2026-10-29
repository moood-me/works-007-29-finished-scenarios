// the fountain's water, as much as `fountain`
const k = e.state.fountain ?? 0;
e.layer("pool").alpha = k;
e.layer("jet").alpha = k;
