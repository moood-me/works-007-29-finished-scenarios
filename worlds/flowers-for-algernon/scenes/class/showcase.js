// A Tuesday evening in the night class: Charlie, on his feet at his desk, reads aloud from his reader; Miss Kinnian
// listens by the blackboard, smiling, and the two students watch him. He looks up from the page at the room — has he
// got it right? — and, seeing them all listening, smiles; the old student glances at the young one, and the young one smiles too; Charlie goes
// back to the page.
return [
  {
    name: 'reading',
    run: async s => {
      s.person('charlie').look(null);
      s.person('kinnian').look('charlie');
      s.person('young_student').look('charlie');
      s.person('old_student').look('charlie');
      await s.wait(8);
    },
  },
  {
    name: 'he looks up',
    run: async s => {
      s.person('charlie').look([0.6, 1.6, 1.5]);
      s.person('charlie').mood('surprised');
      await s.wait(1.2);
      s.person('charlie').mood('smile');
      await s.wait(4);
    },
  },
  {
    name: 'the students',
    run: async s => {
      s.person('old_student').look('young_student');
      await s.wait(0.8);
      s.person('young_student').mood('smile');
      await s.wait(4);
    },
  },
  {
    name: 'the page again',
    run: async s => {
      s.person('charlie').look(null);
      await s.wait(0.6);
      s.person('young_student').look('charlie');
      s.person('old_student').look('charlie');
      await s.wait(6);
    },
  },
];
