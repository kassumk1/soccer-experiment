const jsPsych = initJsPsych();

jsPsych.run([
  {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: 'Hello, jsPsych is working! Press any key to continue.'
  }
]);
