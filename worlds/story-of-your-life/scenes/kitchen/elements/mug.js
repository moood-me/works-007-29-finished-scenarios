// Louise's mug on the table, from its foot: deep blue glaze, cream inside the rim; its sides the points her hands
// hold it by (`grip_r` — her right hand's, she facing us; `grip_l`), its top where the steam rises (`top`).
g.fillStyle = '#34507a';
g.beginPath();
g.moveTo(-0.05, -0.105);
g.lineTo(0.05, -0.105);
g.lineTo(0.048, 0);
g.lineTo(-0.048, 0);
g.closePath();
g.fill();
g.fillStyle = '#efe6d2';
g.fillRect(-0.05, -0.108, 0.1, 0.008);
g.strokeStyle = '#34507a';
g.lineWidth = 0.011;
g.beginPath();
g.arc(0.055, -0.055, 0.022, -1.3, 1.3);
g.stroke();
e.at(-0.05, -0.055, 'grip_r');
e.at(0.05, -0.055, 'grip_l');
e.at(0, -0.11, 'top');
