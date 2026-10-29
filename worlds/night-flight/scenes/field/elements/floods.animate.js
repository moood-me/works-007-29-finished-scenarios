for (let i = 0; i < 3; i++) e.layer(`lit${i}`).alpha = e.state[`flood_${i}`] ?? e.state.floods;
