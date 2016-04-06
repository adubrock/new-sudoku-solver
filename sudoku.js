'use strict'
var _ = require('lodash');
var data = ".3..1........427.3.2.9.6.4.5...2....349..............1.....9.....6....8...5..346.",
// var data = ".94...13..............76..2.8..1.....32.........2...6.....5.4.......8..7..63.4..8",
// var data = "............942.8.16.....29........89.6.....14..25......4.......2...8.9..5....7..",
// var data = ".....7....9...1.......45..6....2.....36...41.5.....8.9........4....18....815...32",
// var data = ".5247.....6............8.1.4.......97..95.....2..4..3....8...9......37.6....91...",
// var data = ".9.........1..6....6..8..7.3......1.....39.......5...217.4...28.....3....86....57",
// var data = ".....5....2...4.1..3..8..2......84..8..6......9..1.7.5..6......95...3.6...3.....1",
// var data = "5...68..........6..42.5.......8..9....1....4.9.3...62.7....1..9..42....3.8.......",
// var data = ".7..21..4....3....6.1.....2.......6...86..7.319.....4..1....2.842.9..............",
// var data = "........1..7.5.3.9..48...2...........3...57....942.........3.....1...4.7.6.278...",
// var data = ".....8..3.16.2.9.7.3...46...........9.5...2...2.13...9..3....2..7...5.........4..",
    dataArray = data.split(''),
    puzzleToSolve = {};
    var puzzleStates = [];


dataArray.forEach(function (value, index){
  puzzleToSolve[index + 1] = {"possibles": [],
                        "value":  value};
  if (index < 9) {
    puzzleToSolve[index + 1].row = 1
  } else if (index < 18) {
    puzzleToSolve[index + 1].row = 2
  } else if (index < 27) {
    puzzleToSolve[index + 1].row = 3
  } else if (index < 36) {
    puzzleToSolve[index + 1].row = 4
  } else if (index < 45) {
    puzzleToSolve[index + 1].row = 5
  } else if (index < 54) {
    puzzleToSolve[index + 1].row = 6
  } else if (index < 63) {
    puzzleToSolve[index + 1].row = 7
  } else if (index < 72) {
    puzzleToSolve[index + 1].row = 8
  } else {
    puzzleToSolve[index + 1].row = 9
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
  var row1 = '',
      row2 = '',
      row3 = '',
      row4 = '',
      row5 = '',
      row6 = '',
      row7 = '',
      row8 = '',
      row9 = '';
  console.log(' –––––––––––');
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
  console.log('|' + row1.substr(0, 3) + '|' + row1.substr(3, 3) + '|' + row1.substr(6, 3) + '|');
  console.log('|' + row2.substr(0, 3) + '|' + row2.substr(3, 3) + '|' + row2.substr(6, 3) + '|');
  console.log('|' + row3.substr(0, 3) + '|' + row3.substr(3, 3) + '|' + row3.substr(6, 3) + '|');
  console.log(' –––––––––––');
  console.log('|' + row4.substr(0, 3) + '|' + row4.substr(3, 3) + '|' + row4.substr(6, 3) + '|');
  console.log('|' + row5.substr(0, 3) + '|' + row5.substr(3, 3) + '|' + row5.substr(6, 3) + '|');
  console.log('|' + row6.substr(0, 3) + '|' + row6.substr(3, 3) + '|' + row6.substr(6, 3) + '|');
  console.log(' –––––––––––');
  console.log('|' + row7.substr(0, 3) + '|' + row7.substr(3, 3) + '|' + row7.substr(6, 3) + '|');
  console.log('|' + row8.substr(0, 3) + '|' + row8.substr(3, 3) + '|' + row8.substr(6, 3) + '|');
  console.log('|' + row9.substr(0, 3) + '|' + row9.substr(3, 3) + '|' + row9.substr(6, 3) + '|');
  console.log(' –––––––––––');
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
    var notPossibles = [];
    var possiblesToAdd = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    Object.keys(puzzle).forEach(function (valueInternal, indexInternal) {
      if ((puzzle[index + 1].row == puzzle[indexInternal +1].row) || (puzzle[index + 1].column == puzzle[indexInternal +1].column) || (puzzle[index +1].quadrant == puzzle[indexInternal + 1].quadrant)) {
        notPossibles.push(puzzle[indexInternal + 1].value);
        notPossibles = _.uniq(notPossibles);
        possiblesToAdd = _.difference(possiblesToAdd, notPossibles);        // console.log(possiblesToAdd);
      }
    })
    puzzle[index + 1].possibles = possiblesToAdd;
  }
  });
};

function possiblesToValue(puzzle) {
  Object.keys(puzzle).forEach(function (value, index) {
    if ((puzzle[index + 1].possibles.length == 1) && (puzzle[index + 1].value == '.')) {
      puzzle[index + 1].value = puzzle[index + 1].possibles.join();
    }
  });
}
// These are the recurring functions

function solver(puzzle) {
  checkSolved(puzzle);
};

function checkSolved(puzzle) {
  var solved = true;
  Object.keys(puzzle).forEach(function (value, index) {
    if (puzzle[index + 1].possibles.length != 1) {
      solved = false
    }
  });
  if (solved == false) {
    // console.log("Puzzle not solved. Try again.");
    console.log('sending following puzzle to guess');
    boardPrinter(puzzle);
    guess(puzzle);
    // boardPrinter(guessedPuzzle[0]);
    // var check = checkForPossibles(guessedPuzzle[0]);
    // console.log (check);
  } else if  (solved == true) {
    console.log("Puzzle Solved!");
    // console.log(puzzle);
    boardPrinter(puzzle);
  }
};

function guess(puzzle) {
  var guessedPuzzle;
  var notGuessedPuzzle;
  var thirdNotGuessedPuzzle;
  // var x;
  // var y;
  Object.keys(puzzle).forEach(function (value, index) {
    if (puzzle[index + 1].possibles.length === 2 && !guessedPuzzle) {
      guessedPuzzle = {};
      notGuessedPuzzle = {};
      // var stringy = JSON.stringify(puzzle);
      guessedPuzzle = JSON.parse(JSON.stringify(puzzle));
      notGuessedPuzzle = JSON.parse(JSON.stringify(puzzle));
      // console.log(guessedPuzzle);
      // Object.assign(guessedPuzzle, puzzle);
      // Object.assign(notGuessedPuzzle, puzzle);
      // x = (index + 1);
      // guessedPuzzle = puzzle;
      // notGuessedPuzzle = puzzle;
      // console.log(notGuessedPuzzle[index + 1]);
      guessedPuzzle[index + 1].value = guessedPuzzle[index + 1].possibles[0];
      // console.log(notGuessedPuzzle[index + 1]);
      notGuessedPuzzle[index + 1].value = notGuessedPuzzle[index + 1].possibles[1];
      // console.log(notGuessedPuzzle[index + 1]);
      //
      // console.log(guessedPuzzle[index +1].possibles)
      guessedPuzzle[index + 1].possibles = [guessedPuzzle[index + 1].value];
      // console.log(guessedPuzzle[index +1].possibles);
      notGuessedPuzzle[index + 1].possibles = [notGuessedPuzzle[index + 1].value];
      // console.log(notGuessedPuzzle[index +1].possibles)
      console.log('should run once');
      console.log('guessed at ' + (index + 1));
      // return;
      // console.log(puzzle);
    }
  });
  if (!guessedPuzzle) {
    Object.keys(puzzle).forEach(function (value, index) {
      if (puzzle[index + 1].possibles.length === 3 && !guessedPuzzle) {
        guessedPuzzle = {};
        notGuessedPuzzle = {};
        thirdNotGuessedPuzzle = {};
        // var stringy = JSON.stringify(puzzle);
        guessedPuzzle = JSON.parse(JSON.stringify(puzzle));
        notGuessedPuzzle = JSON.parse(JSON.stringify(puzzle));
        thirdNotGuessedPuzzle = JSON.parse(JSON.stringify(puzzle));
        // console.log(guessedPuzzle);
        // Object.assign(guessedPuzzle, puzzle);
        // Object.assign(notGuessedPuzzle, puzzle);
        // x = (index + 1);
        // guessedPuzzle = puzzle;
        // notGuessedPuzzle = puzzle;
        // console.log(notGuessedPuzzle[index + 1]);
        guessedPuzzle[index + 1].value = guessedPuzzle[index + 1].possibles[0];
        // console.log(notGuessedPuzzle[index + 1]);
        notGuessedPuzzle[index + 1].value = notGuessedPuzzle[index + 1].possibles[1];
        thirdNotGuessedPuzzle[index + 1].value = thirdNotGuessedPuzzle[index + 1].possibles[2];
        // console.log(notGuessedPuzzle[index + 1]);
        //
        // console.log(guessedPuzzle[index +1].possibles)
        guessedPuzzle[index + 1].possibles = [guessedPuzzle[index + 1].value];
        // console.log(guessedPuzzle[index +1].possibles);
        notGuessedPuzzle[index + 1].possibles = [notGuessedPuzzle[index + 1].value];
        // console.log(notGuessedPuzzle[index +1].possibles)
        thirdNotGuessedPuzzle[index + 1].possibles = [thirdNotGuessedPuzzle[index + 1].value];
        console.log('should run once');
        console.log('Three-way guessed at ' + (index + 1));
        // return;
        // console.log(puzzle);
      }
    });
  }
  if (!guessedPuzzle) {
    console.log('guessed puzzle undefined');
    console.log(puzzle);
    possiblesToValue2(JSON.parse(puzzleStates.shift()));

    // boardPrinter(puzzle);
  }
  else {
    puzzleStates.push(JSON.stringify(notGuessedPuzzle));
    if (thirdNotGuessedPuzzle) {
      puzzleStates.push(JSON.stringify(thirdNotGuessedPuzzle));
    }
    console.log('pushed to puzzle states');
    console.log('puzzle states length = ' + puzzleStates.length);
    // return [guessedPuzzle, notGuessedPuzzle];
    checkForPossibles(guessedPuzzle);
  }
  // puzzleStates.push(JSON.stringify(notGuessedPuzzle));
  // if (thirdNotGuessedPuzzle) {
  //   puzzleStates.push(JSON.stringify(thirdNotGuessedPuzzle));
  // }
  // console.log('pushed to puzzle states');
  // console.log('puzzle states length = ' + puzzleStates.length);
  // // return [guessedPuzzle, notGuessedPuzzle];
  // checkForPossibles(guessedPuzzle);
};

function checkForPossibles(puzzle) {
  // console.log(puzzle);
  var error = false;
  Object.keys(puzzle).forEach(function (value, index) {
  if (puzzle[index + 1].possibles.length != 1) {
    var notPossibles = [];
    var possiblesToAdd;
    Object.keys(puzzle).forEach(function (valueInternal, indexInternal) {
      if ((puzzle[index + 1].row == puzzle[indexInternal + 1].row) || (puzzle[index + 1].column == puzzle[indexInternal +1].column) || (puzzle[index +1].quadrant == puzzle[indexInternal + 1].quadrant)) {
        notPossibles.push(puzzle[indexInternal + 1].value);
        // if (puzzle[indexInternal + 1].value == puzzle[index + 1].value) {
        //   error = true;
        // }
      // console.log(possiblesToAdd);
      }
    });
    notPossibles = _.uniq(notPossibles);
    possiblesToAdd = _.difference(puzzle[index + 1].possibles, notPossibles);
    puzzle[index + 1].possibles = possiblesToAdd;
    // if (possiblesToAdd.length === 0) {
    //   error = true;
    //   console.log("ERROR!!");
    //   console.log('Error in check for possibles; shifting to next puzzle in puzzle states');
    //   console.log(puzzleStates.length);
    //   boardPrinter(puzzle);
    //   possiblesToValue2(JSON.parse(puzzleStates.shift()));
    // } else if (possiblesToAdd.length != 0) {
    //   console.log ("No Error " + (index + 1));
    // }
  }
  });
  boardPrinter(puzzle);
  // console.log('done with possibles iterations')
  // console.log(error);
  if (error) {
    // possiblesToValue2(JSON.parse(puzzleStates.shift()));
    // console.log('Error in check for possibles; shifting to next puzzle in puzzle states');
    // boardPrinter(puzzle);
    // console.log("?");
    // console.log(puzzleStates.length);
  } else {
    console.log(error);
    console.log("no error; feeding puzzle into possiblesToValue2")
    possiblesToValue2(puzzle);
  }
};

function possiblesToValue2(puzzle) {
  var badValue;
  Object.keys(puzzle).forEach(function (value, index) {
    if ((puzzle[index + 1].possibles.length == 1) && (puzzle[index + 1].value == '.')) {
      puzzle[index + 1].value = puzzle[index + 1].possibles.join();
    }
  });
  Object.keys(puzzle).forEach(function (value, index) {
    if (!badValue) {
      Object.keys(puzzle).forEach(function (valueInternal, indexInternal) {
        if ((puzzle[index + 1].value == puzzle[indexInternal + 1].value) && ((puzzle[index + 1].row == puzzle[indexInternal + 1].row) || (puzzle[index + 1].column == puzzle[indexInternal + 1].column) || (puzzle[index + 1].quadrant == puzzle[indexInternal + 1].quadrant)) && ((index + 1) != (indexInternal + 1)) && (puzzle[index + 1].value != '.'))  {
          badValue = true;
          console.log('Error value at index ' + (index + 1) + ' with ' + (indexInternal + 1));
          console.log('Index ' + (index + 1) + ' value: ' + puzzle[index + 1].value + '; Index ' + (indexInternal + 1) + ' value: ' + puzzle[indexInternal + 1].value);
          boardPrinter(puzzle);
        }
      });
    }
  });
  console.log(badValue);
  if (badValue) {
    console.log('Error in values. Shifting to next puzzle in puzzle states.')
    solver(JSON.parse(puzzleStates.shift()));
  }
  // boardPrinter(puzzle);
  else if (!badValue) {
    solver(puzzle);
  }
}
// function slicingAndDicing(puzzle) {
//   var column = sliceColumns(puzzle),
//       row = checkRow(puzzle);
//
//   Object.keys(puzzle).forEach(function (value, index) {
//     if (puzzle[index + 1].value == '.') {
//       Object.keys(puzzle)
//     }
//   })
// }
//
// function sliceColumns(puzzle) {
//
// }

boardPrinter(puzzleToSolve);
columnBuilder(puzzleToSolve);
quadrantBuilder(puzzleToSolve);
fillingInitialPossibles(puzzleToSolve);
firstCheckForPossibles(puzzleToSolve);
possiblesToValue(puzzleToSolve);
// boardPrinter(puzzleToSolve);
// console.log(puzzleToSolve);
solver(puzzleToSolve);
// order: solver, checkSolved, checkForPossibles, possiblesToValue2, solver
// checkForPossibles(puzzle);
// checkSolved(puzzle);
// console.log(puzzle);
