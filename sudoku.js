var _ = require('lodash');
var data = ".94...13..............76..2.8..1.....32.........2...6.....5.4.......8..7..63.4..8",
    dataArray = data.split(''),
    puzzle = {};
    var row1 = '',
        row2 = '',
        row3 = '',
        row4 = '',
        row5 = '',
        row6 = '',
        row7 = '',
        row8 = '',
        row9 = '';


dataArray.forEach(function (value, index){
  puzzle[index + 1] = {"possibles": [],
                        "value":  value};
  if (index < 9) {
    puzzle[index + 1].row = 1
  } else if (index < 18) {
    puzzle[index + 1].row = 2
  } else if (index < 27) {
    puzzle[index + 1].row = 3
  } else if (index < 36) {
    puzzle[index + 1].row = 4
  } else if (index < 45) {
    puzzle[index + 1].row = 5
  } else if (index < 54) {
    puzzle[index + 1].row = 6
  } else if (index < 63) {
    puzzle[index + 1].row = 7
  } else if (index < 72) {
    puzzle[index + 1].row = 8
  } else {
    puzzle[index + 1].row = 9
  }
});

function columnBuilder(puzzle) {
  Object.keys(puzzle).forEach(function (value, index) {
    if ((index + 1)%9 == 0) {
      puzzle[index + 1].column = 9
    } else if ((index + 2)%9 == 0) {
      puzzle[index + 1].column = 8
    } else if ((index + 3)%9 == 0) {
      puzzle[index + 1].column = 7
    } else if ((index + 4)%9 == 0) {
      puzzle[index + 1].column = 6
    } else if ((index + 5)%9 == 0) {
      puzzle[index + 1].column = 5
    } else if ((index + 6)%9 == 0) {
      puzzle[index + 1].column = 4
    } else if ((index + 7)%9 == 0) {
      puzzle[index + 1].column = 3
    } else if ((index + 8)%9 == 0) {
      puzzle[index + 1].column = 2
    } else if ((index + 9)%9 == 0) {
      puzzle[index + 1].column = 1
    }
  });
};

function quadrantBuilder(puzzle) {
  Object.keys(puzzle).forEach(function (value, index) {
    if (puzzle[index + 1].row < 4 && puzzle[index + 1].column < 4) {
      puzzle[index + 1].quadrant = 1
    } else if (puzzle[index + 1].row < 4 && puzzle[index + 1].column < 7) {
      puzzle[index + 1].quadrant = 2
    } else if (puzzle[index + 1].row < 4 && puzzle[index + 1].column <= 9) {
      puzzle[index + 1].quadrant = 3
    } else if (puzzle[index + 1].row < 7 && puzzle[index + 1].column < 4) {
      puzzle[index + 1].quadrant = 4
    } else if (puzzle[index + 1].row < 7 && puzzle[index + 1].column < 7) {
      puzzle[index + 1].quadrant = 5
    } else if (puzzle[index + 1].row < 7 && puzzle[index + 1].column <= 9) {
      puzzle[index + 1].quadrant = 6
    } else if (puzzle[index + 1].row <= 9 && puzzle[index + 1].column < 4) {
      puzzle[index + 1].quadrant = 7
    } else if (puzzle[index + 1].row <= 9 && puzzle[index + 1].column < 7) {
      puzzle[index + 1].quadrant = 8
    } else if (puzzle[index + 1].row <= 9 && puzzle[index + 1].column <= 9) {
      puzzle[index + 1].quadrant = 9
    }
  })
}

function boardPrinter(puzzle) {
  // var row1 = '',
  //     row2 = '',
  //     row3 = '',
  //     row4 = '',
  //     row5 = '',
  //     row6 = '',
  //     row7 = '',
  //     row8 = '',
  //     row9 = '';
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



function fillingInitialPossibles(puzzle) {
  Object.keys(puzzle).forEach(function (value, index) {
    if (puzzle[index + 1].value != '.') {
      puzzle[index + 1].possibles.push(puzzle[index + 1].value)
    }
  });
};

function firstCheckForPossibles(puzzle) {
  Object.keys(puzzle).forEach(function (value, index) {
  if (puzzle[index + 1].possibles.length != 1) {
    Object.keys(puzzle).forEach(function (valueInternal, indexInternal) {
      var notPossibles = [];
      var possiblesToAdd = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
      if ((puzzle[index + 1].row == puzzle[indexInternal +1].row) || (puzzle[index + 1].column == puzzle[indexInternal +1].column) || (puzzle[index +1].quadrant == puzzle[indexInternal + 1].quadrant)) {
        console.log(puzzle[index + 1].row);
        console.log(puzzle[indexInternal +1].row);
        notPossibles = notPossibles.push(puzzle[indexInternal + 1].value);
        // console.log(puzzle[indexInternal + 1].value);
        // notPossibles = _.uniq(notPossibles);
        //
        // possiblesToAdd = _.difference(possiblesToAdd, notPossibles);
        // console.log(possiblesToAdd);
      }
      // console.log(notPossibles);
    })
  }
  });
};

function checkSolved(puzzle) {
  var solved = true;
  Object.keys(puzzle).forEach(function (value, index) {
    if (puzzle[index + 1].possibles.length != 1) {
      solved = false
    }
  });
  if (solved == false) {
    console.log("Puzzle not solved. Try again.")
  } else if  (solved == true) {
    console.log("Puzzle Solved!");
  }
};

// function slicingAndDicing(puzzle) {
//   Object.keys(puzzle).forEach(function (value, index) {
//
//   })
// }

boardPrinter(puzzle);
columnBuilder(puzzle);
quadrantBuilder(puzzle);
fillingInitialPossibles(puzzle);
checkSolved(puzzle);
firstCheckForPossibles(puzzle);
console.log(puzzle);
