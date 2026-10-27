// A Tuesday evening in the night class: Charlie, on his feet at his desk, reads aloud from his reader; Miss Kinnian
// listens by the blackboard, smiling, and the two students watch him. He looks up from the page to her — has he got it
// right? — and she nods him on with her smile; the young student turns to the old one, who smiles back; Charlie goes
// back to the page.
return [
  {
    name: 'reading',
    run: async s => {
      s.person('charlie').look('charlie#book');
      s.person('kinnian').look('charlie');
      s.person('young_student').look('charlie');
      s.person('old_student').look('charlie');
      await s.wait(8);
    },
  },
  {
    name: 'he looks up',
    run: async s => {
      s.person('charlie').look('kinnian');
      s.person('charlie').mood('surprised');
      await s.wait(1.2);
      s.person('charlie').mood('smile');
      await s.wait(4);
    },
  },
  {
    name: 'the students',
    run: async s => {
      s.person('young_student').look('old_student');
      s.person('young_student').mood('smile');
      await s.wait(0.7);
      s.person('old_student').look('young_student');
      await s.wait(4);
    },
  },
  {
    name: 'the page again',
    run: async s => {
      s.person('charlie').look('charlie#book');
      await s.wait(0.6);
      s.person('young_student').look('charlie');
      s.person('old_student').look('charlie');
      await s.wait(6);
    },
  },
];
