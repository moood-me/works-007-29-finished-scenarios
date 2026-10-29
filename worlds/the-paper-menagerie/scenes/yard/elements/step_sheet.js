// Her sheet laid flat on the top step (the ending «Письмо», `step_sheet`), from above (metres, its middle at the
// element's place; y toward the viewer): the cream back up, her columns, the old tape across, her 爱 at the bottom.
if (!e.state.step_sheet) return;
e.kit.paper.letter(g, 0, 0, 0.13, { tear: e.state.tear ?? 'taped', hanzi: e.state.hanzi ?? 0, crooked: e.state.hanzi_crooked });
e.at(0, 0, 'sheet');
