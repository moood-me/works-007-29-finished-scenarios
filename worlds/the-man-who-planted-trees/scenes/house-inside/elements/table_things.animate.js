// each thing on the table shown by its key
const s = e.state;
e.layer('soup').alpha = s.soup ? 1 : 0;
e.layer('sack').alpha = s.acorns && s.acorns !== 'none' && s.moment === 'arrival' ? 1 : 0;
e.layer('notebook_shut').alpha = s.notebook === 'shut' ? 1 : 0;
e.layer('notebook_open').alpha = s.notebook === 'open' ? 1 : 0;
e.layer('letter').alpha = s.letter ? 1 : 0;
