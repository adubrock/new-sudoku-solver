var data = ".94...13..............76..2.8..1.....32.........2...6.....5.4.......8..7..63.4..8",
    dataArray = data.split(''),
    puzzle = {};



dataArray.forEach(function (value, index){
  puzzle[index + 1] = {"possibles": [],
                        "value":  value};
});

function boardPrinter(puzzle) {
  var row1 = '',
      row2 = '',
      row3 = '',
      row4 = '',
      row5 = '',
      row6 = '',
      row7 = '',
      row8 = '',
      row9 = '';
  console.log(' _________');
  Object.keys(puzzle).forEach(function (value, index){
    if (index < 9) {
      row1 = row1.concat(puzzle[value].value)
    } else if (index < 18) {
      row2 = row2.concat(puzzle[value].value)
    } else if (index < 27) {
      row3 = row3.concat(puzzle[value].value)
    } else if (index < 36) {
      row4 = row4.concat(puzzle[value].value)
    } else if (index < 45) {
      row5 = row5.concat(puzzle[value].value)
    } else if (index < 54) {
      row6 = row6.concat(puzzle[value].value)
    } else if (index < 63) {
      row7 = row7.concat(puzzle[value].value)
    } else if (index < 72) {
      row8 = row8.concat(puzzle[value].value)
    } else {
      row9 = row9.concat(puzzle[value].value)
    }
  });
  console.log('|' + row1 + '|');
  console.log('|' + row2 + '|');
  console.log('|' + row3 + '|');
  console.log('|' + row4 + '|');
  console.log('|' + row5 + '|');
  console.log('|' + row6 + '|');
  console.log('|' + row7 + '|');
  console.log('|' + row8 + '|');
  console.log('|' + row9 + '|');
  console.log(' _________');
};

boardPrinter(puzzle);
