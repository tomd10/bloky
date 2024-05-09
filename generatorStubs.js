

javascript.javascriptGenerator.forBlock['tone'] = function(block, generator) {
  var dropdown_note = block.getFieldValue('note');
  var dropdown_time = block.getFieldValue('time');
  // TODO: Assemble javascript into code variable.
  var code = 'sheet.push({tone:' + dropdown_note +', time: ' + dropdown_time +'});\n';
  return code;
};

javascript.javascriptGenerator.forBlock['semitone'] = function(block, generator) {
  var dropdown_tone = block.getFieldValue('tone');
  var dropdown_time = block.getFieldValue('time');
  // TODO: Assemble javascript into code variable.
  var code = 'sheet.push({tone:' + dropdown_tone +', time: ' + dropdown_time +'});\n';
  return code;
};

javascript.javascriptGenerator.forBlock['pause'] = function(block, generator) {
  var dropdown_time = block.getFieldValue('time');
  // TODO: Assemble javascript into code variable.
  var code = 'sheet.push({tone:' + '0' +', time: ' + dropdown_time +'});\n';
  return code;
};

javascript.javascriptGenerator.forBlock['midi'] = function(block, generator) {
  var number_tone = block.getFieldValue('tone');
  var dropdown_time = block.getFieldValue('time');
  // TODO: Assemble javascript into code variable.
  var code = 'sheet.push({tone:' + number_tone +', time: ' + dropdown_time +'});\n';
  return code;
};

javascript.javascriptGenerator.forBlock['repeat'] = function(block, generator) {
  var number_rep = block.getFieldValue('rep');
  var statements_code = generator.statementToCode(block, 'code');
  // TODO: Assemble javascript into code variable.
  var code = 'for (let i = 0; i <' + number_rep + '; i++) {' + statements_code + '};\n';
  return code;
};