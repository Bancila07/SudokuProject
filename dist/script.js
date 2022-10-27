var vars = {
  difficulty: 1,
  boards: {
    empty: [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0]],
    start: [
      [1,2,3,6,7,8,9,4,5],
      [5,8,4,2,3,9,7,6,1],
      [9,6,7,1,4,5,3,2,8],
      [3,7,2,4,6,1,5,8,9],
      [6,9,1,5,8,3,2,7,4],
      [4,5,8,7,9,2,6,1,3],
      [8,3,6,9,2,4,1,5,7],
      [2,1,9,8,5,7,4,3,6],
      [7,4,5,3,1,6,8,9,2]],
    veryEasy: [
      [0,0,5,0,0,2,0,0,6],
      [4,0,0,0,0,0,0,0,0],
      [3,6,0,8,9,0,5,1,4],
      [6,9,0,0,0,8,0,0,0],
      [5,0,3,7,0,1,2,0,9],
      [0,0,0,5,0,0,0,8,7],
      [2,4,6,0,7,3,0,5,8],
      [0,0,0,0,0,0,0,0,3],
      [8,0,0,2,0,0,7,0,0]],
    medEasy: [
      [0,7,3,0,0,0,6,4,0],
      [9,0,0,1,0,8,0,0,7],
      [8,0,0,0,7,0,0,0,1],
      [0,2,0,0,6,0,0,7,0],
      [0,0,5,8,0,7,1,0,0],
      [0,1,0,0,9,0,8,0,0],
      [2,0,0,0,3,0,0,6,0],
      [5,0,0,4,0,9,0,0,2],
      [0,8,9,0,0,0,4,3,0]],
    mild: [
      [7,0,2,8,0,6,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [8,0,0,4,0,0,2,0,7],
      [5,0,0,2,0,0,0,8,0],
      [2,8,0,7,0,9,0,3,5],
      [0,1,0,0,0,8,0,0,6],
      [3,0,7,0,0,4,0,0,8],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,9,0,7,1,0,2]],
    medium: [
      [0,0,0,0,0,0,0,0,0],
      [8,0,0,0,2,0,0,0,5],
      [0,0,0,0,0,6,2,4,0],
      [0,3,8,0,0,7,1,0,0],
      [2,0,4,0,0,0,3,0,9],
      [0,0,7,4,0,0,5,2,0],
      [0,7,2,5,0,0,0,0,0],
      [6,0,0,0,8,0,0,0,1],
      [0,0,0,0,0,0,0,0,0]],
    hard: [
      [0,9,0,0,1,0,0,0,0],
      [0,0,0,0,2,0,0,0,6],
      [0,0,1,9,0,0,8,2,4],
      [0,0,5,0,0,0,0,1,7],
      [0,0,0,4,3,7,0,0,0],
      [4,6,0,0,0,0,9,0,0],
      [9,4,3,0,0,5,2,0,0],
      [2,0,0,0,9,0,0,0,0],
      [0,0,0,0,4,0,0,3,0]],
    evil: [
      [0,0,1,0,0,7,0,6,0],
      [4,0,0,6,0,0,3,0,5],
      [6,0,0,0,0,0,0,4,0],
      [0,0,0,5,0,9,0,0,0],
      [0,1,4,0,0,0,2,7,0],
      [0,0,0,7,0,2,0,0,0],
      [0,3,0,0,0,0,0,0,1],
      [7,0,8,0,0,6,0,0,4],
      [0,4,0,2,0,0,8,0,0]],
    impossible: [
      [0,0,0,7,0,0,0,0,0],
      [1,0,0,0,0,0,0,0,0],
      [0,0,0,4,3,0,2,0,0],
      [0,0,0,0,0,0,0,0,6],
      [0,0,0,5,0,9,0,0,0],
      [0,0,0,0,0,0,4,1,8],
      [0,0,0,0,8,1,0,0,0],
      [0,0,2,0,0,0,0,5,0],
      [0,4,0,0,0,0,3,0,0]],
    problem: null,
    solution: null
  },
  DOMview: null,
  goingBack: false,
  clock: null,
  isTicking: false,
  timer: null,
  min: null,
  sec: null,
  clear: null,
  allowResClick: false
};
const util = {
  clone: function (arr) {
    // copiaza o matrice 2D,  înseamnă că este creată o matrice separată completă, nu doar cu o referință
    const output = [];
    for (let i = 0; i < arr.length; i++) {
      output[i] = [];
      for (let j = 0; j < arr[i].length; j++) {
        output[i][j] = arr[i][j];
      }
    }
    return output;
  },
  clear: function (arr) {
    // șterge matricea
    let i = arr.length;
    while (i--) {
      let j = arr[i].length;
      while (j--) {
        arr[i][j] = 0;
      }
    }
    return arr;
  },
  contains: function (arr, obj) {
    // caută obiect în matrice
    let i = arr.length;
    while (i--) {
      if (arr[i] == obj) {
        return true;
      }
    }
    return false;
  },
  compare: function (arr1, arr2) {
    // compară intrările de matrice 2d, presupunând aceeași lungime
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr1[i].length; j++) {
        if (arr1[i][j] !== arr2[i][j]) {
          return false;
        }
      }
    }
    return true;
  },
  getRand: function (min, max) {
    return Math.round(Math.random() * (max - min) + min); // număr aleator de la min-max
  },
  // Functia pentru ceas
  startClock: function () {
    if (!vars.isTicking) {
      vars.clock = setInterval(util.ticClock, 1000);
      vars.isTicking = true;
    }
  },
  stopClock: function () {
    vars.clear = clearInterval(vars.clock);
    vars.isTicking = false;
  },
  resetClock: function () {
    vars.timer = vars.min = vars.sec = 0;
    $('.minutes').text(vars.min);
    $('.seconds').text('00');
  },
  ticClock: function () {
    vars.timer++;
    vars.min = Math.floor(vars.timer / 60);
    vars.sec = vars.timer % 60;
    if (vars.sec < 10) {
      vars.sec = '0' + vars.sec;
    }
    $('.minutes').text(vars.min);
    $('.seconds').text(vars.sec);
  }
};
// Funcția puzzle
const puzzle = {
  permuteRowColGroups: function (board) {
    const pBoard = util.clone(board);
    const rowGrp1 = util.getRand(0, 2) * 3 + 1;
    let rowGrp2 = util.getRand(0, 2) * 3 + 1;
    while (rowGrp2 == rowGrp1) {
      rowGrp2 = util.getRand(0, 2) * 3 + 1;
    }
    const temp1 = [pBoard[rowGrp1 - 1], pBoard[rowGrp1], pBoard[rowGrp1 + 1]];
    pBoard[rowGrp1 - 1] = pBoard[rowGrp2 - 1];
    pBoard[rowGrp1] = pBoard[rowGrp2];
    pBoard[rowGrp1 + 1] = pBoard[rowGrp2 + 1];
    pBoard[rowGrp2 - 1] = temp1[0];
    pBoard[rowGrp2] = temp1[1];
    pBoard[rowGrp2 + 1] = temp1[2];
    const colGrp1 = util.getRand(0, 2) * 3 + 1;
    let colGrp2 = util.getRand(0, 2) * 3 + 1;
    while (colGrp2 == colGrp1) {
      colGrp2 = util.getRand(0, 2) * 3 + 1; // coloana 2 nu poate fi aceeași cu coloana 1
    }
    for (let j = 0; j < 9; j++) {
      const temp2 = {
        first: pBoard[j][colGrp1 - 1],
        second: pBoard[j][colGrp1],
        third: pBoard[j][colGrp1 + 1]
      }; // se stocheaza valorile curente ale celulei grupului de col 1
      pBoard[j][colGrp1 - 1] = pBoard[j][colGrp2 - 1];
      pBoard[j][colGrp1] = pBoard[j][colGrp2];
      pBoard[j][colGrp1 + 1] = pBoard[j][colGrp2 + 1];
      pBoard[j][colGrp2 - 1] = temp2.first;
      pBoard[j][colGrp2] = temp2.second;
      pBoard[j][colGrp2 + 1] = temp2.third;
    }
    return pBoard;
  },
  permuteRowCol: function (board) {
    const pBoard = util.clone(board);
    for (let i = 0; i < 3; i++) { // manipulalam rândurile și coloanele din același grup
      const row1 = util.getRand(0, 2) + 3 * i; // 1 rand se manipuleaza
      let row2 = util.getRand(0, 2) + 3 * i; // 2 rand se manipuleaza
      while (row2 == row1) {
        row2 = util.getRand(0, 2) + 3 * i;
      }
      let temp = pBoard[row1]; // depozitați primul rând
      pBoard[row1] = pBoard[row2]; // schimbă rândurile
      pBoard[row2] = temp; // schimbă rândurile
      const col1 = util.getRand(0, 2) + 3 * i;
      let col2 = util.getRand(0, 2) + 3 * i;
      while (col2 == col1) {
        col2 = util.getRand(0, 2) + 3 * i; // coloana 2 nu poate fi aceeași cu coloana 1
      }
      for (let j = 0; j < pBoard.length; j++) {
        temp = pBoard[j][col1]; // stocați valoarea curentă a celulei col 1
        pBoard[j][col1] = pBoard[j][col2]; //schimbă celula col1 cu celula col2
        pBoard[j][col2] = temp; // schimbă celula col2 cu celula col1
      }
    }
    return pBoard;
  },
  permuteNumbers: function (board) {
    const permutedBoard = util.clone(board);
    const left = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const linked = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // generează permutare
    for (let i = 0; i < 9; i++) {
      let index = 0;
      let replacement = 0;
      while (index == replacement) { // nu pot fi la fel
        index = util.getRand(0, left.length - 1);
        replacement = left[index]; // selectați aleatoriu un număr de înlocuire
      }
      left.splice(index, 1); // împiedică utilizarea din nou a numărului
      linked[i] = replacement; //înlocuiți 1-9 cu înlocuitorul său
    }
    for (let j = 0; j < 9; j++) {
      for (let k = 0; k < 9; k++) {
        if (board[j][k]) { //dacă celula de bord nu este 0
          permutedBoard[j][k] = linked[board[j][k] - 1]; //înlocuiți numerele cu legăturile lor
        }
      }
    }
    return permutedBoard;
  },
  solveBoard: function (board) {
    let a;
    let sqnum;
    let j;
    let i;
    vars.goingBack = false;
    const solved = util.clone(board); // începeți cu sugestiile de pe tablă
    const markedup = util.clone(vars.boards.empty); //gol 9x9
    const bySquares = puzzle.rowsToSquares(board);
    // verificați coloanele, rândurile, pătratele pentru indicii
    for (i = 0; i < 9; i++) {
      for (j = 0; j < 9; j++) {
        const avail = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // numere totale disponibile - vom reduce acest lucru bifând rânduri, coloane, casete
        for (let k = 0; k < 9; k++) {
          const rnum = board[i][k];
          const cnum = board[k][j];
          sqnum = Math.floor(i / 3) * 3 + Math.floor(j / 3);
          const cellnum = bySquares[sqnum][k];
          if (rnum && avail.indexOf(rnum) >= 0) {
            avail.splice(avail.indexOf(rnum), 1); //celula nu poate avea aceeași valoare ca o altă celulă de pe același rând
          }
          if (cnum && avail.indexOf(cnum) >= 0) {
            avail.splice(avail.indexOf(cnum), 1); //celula nu poate avea aceeași valoare ca o altă celulă din aceeași coloană
          }
          if (cellnum && avail.indexOf(cellnum) >= 0) {
            avail.splice(avail.indexOf(cellnum), 1); // celula nu poate avea aceeași valoare ca o altă celulă de pe același rând
          }
        }
        markedup[i][j] = avail;
      }
    }
    // acum avem valorile pe care fiecare celulă ,începem algoritmul
    let freeRow;
    let freeCol;
    // obține prima celulă mutabilă
    for (a = 0; a < 9; a++) {
      for (let b = 0; b < 9; b++) {
        if (!solved[a][b]) {
          freeRow = a;
          freeCol = b;
          a = 9;
          b = 9;
        }
      }
    }
    // porniți algoritmul de căutare
    for (a = 0; a < 81; a++) {
      i = Math.floor(a / 9);
      j = a % 9;
      // toate celulele pe care trebuie să le schimbăm (cele care au 0)
      if (!board[i][j]) {
        sqnum = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        const cell = 3 * (i % 3) + (j % 3);
        let value = markedup[i][j][0]; // valoarea inițială încercată pentru fiecare celulă
        let index = 0;
        // backtracking
        if (vars.goingBack) {
          index = markedup[i][j].indexOf(solved[i][j]); //indicele curent în markup
          // dacă aceasta este ultima valoare disponibilă, continuați să reveniți
          if (index + 1 == markedup[i][j].length) {
            // verificați dacă aceasta este prima celulă din placa de sudoku
            if (i == freeRow && j == freeCol) {
              console.log('Cannot be solved!');
              return false;
            } else { // setați celula la 0 și continuați să reveniți
              solved[i][j] = 0;
              a = a - 2;
            }
          } else { //în caz contrar, începeți de la următoarea valoare disponibilă
            index++;
            value = markedup[i][j][index];
            vars.goingBack = false;
          }
        }
        // încercați toate valorile disponibile în markup
        while (index < markedup[i][j].length) {
          // dacă nu este valid, creșteți indicele și valoarea
          if (!puzzle.checkValid(value, solved, i, j, sqnum, cell)) {
            index++;
            value = markedup[i][j][index];
            if (index >= markedup[i][j].length) { // dacă nu mai sunt valori, întoarce-te!
              if (i == freeRow && j == freeCol) {
                console.log('Cannot be solved!');
                return false;
              }
              solved[i][j] = 0;
              vars.goingBack = true;
              a = a - 2;
            }
          }
          else {
            solved[i][j] = value;
            vars.goingBack = false;
            break;
          }
        }
      }
      else if (vars.goingBack) {// continua sa te intorci
        a = a - 2;
      }
    }
    return solved;
  },
  checkValid: function (num, solBoard, row, col, sq, cell) {
// num = număr de verificat;
// solBoard = placă de soluție parțial umplută;
// rând = rând de celulă de verificat;
// col = coloana celulei de verificat (zero-indexată)
    const asSquares = puzzle.rowsToSquares(solBoard);
    for (let i = 0; i < 9; i++) {
      if (num == solBoard[row][i] && i !== col) {
        return false;
      }
      if (num == solBoard[i][col] && i !== row) {
        return false;
      }
      if (num == asSquares[sq][i] && i !== cell) {
        return false;
      }
    }
    return true;
  },
  bruteSolve: function (board) {
    let a;
    vars.goingBack = false;
    const solved = util.clone(board);
    let freeRow;
    let freeCol;
    // obține prima celulă mutabilă
    for (a = 0; a < 9; a++) {
      for (let b = 0; b < 9; b++) {
        if (!board[a][b]) {
          freeRow = a;
          freeCol = b;
          a = 9;
          b = 9;
        }
      }
    }
    // porniți algoritmul de căutare
    for (a = 0; a < 81; a++) {
      const i = Math.floor(a / 9);
      const j = a % 9;
      // toate celulele pe care trebuie să le schimbăm (cele care au 0)
      if (!board[i][j]) {
        const sqnum = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        const cell = 3 * (i % 3) + (j % 3);
        let value = 1; // valoarea inițială încercată pentru fiecare celulă
        // backtracking, incrementați celula curentă și verificați dacă >9
        if (vars.goingBack) {
          value = solved[i][j] + 1;
          if (value > 9) {
            // verificați dacă aceasta este prima celulă
            if (i == freeRow && j == freeCol) {
              console.log('Cannot be solved!');
              return false;
            }
            // setați celula la 0 și continuați să reveniți
            solved[i][j] = 0;
            a = a - 2;
          }
        }
        while (value < 10) {
          if (!puzzle.checkValid(value, solved, i, j, sqnum, cell)) {
            value++;
            // dacă valoarea > 9, întoarceți-vă!
            if (value > 9) {
              solved[i][j] = 0;
              if (i == freeRow && j == freeCol) {
                console.log('Cannot be solved!');
                return false;
              }
              vars.goingBack = true;
              a = a - 2;
            }
          }
          else {
            solved[i][j] = value;
            vars.goingBack = false;
            break;
          }
        }
      }
          // celule diferite de zero
      else if (vars.goingBack) {
        // continua sa te intorci
        a = a - 2;
      }
    }
    return solved;
  },
  removeCells: function (board, number) {
    const removed = puzzle.rowsToSquares(board); // obține tabla în configurația pătrată: eliminat[square][label]
    for (let i = 0; i < removed.length; i++) {
      const toBeRemoved = [];
      let j = number;
      while (j--) {
        const candidate = util.getRand(0, 8);
        if (!util.contains(toBeRemoved, candidate)) {
          toBeRemoved.push(candidate);
          removed[i][candidate] = 0;
        } else {
          j++;
        }
      }
    }
    return puzzle.squaresToRows(removed);
  },
  rowsToCols: function (byRows) {
    const byCols = util.clone(byRows);
    const rowFlat = [].concat.apply([], byRows);
    for (let i = 0; i < rowFlat.length; i++) {
      const col = i % 9;
      const row = Math.floor(i / 9);
      byCols[col][row] = rowFlat[i];
    }
    return byCols;
  },
  rowsToSquares: function (byRows) {
    const bySquares = util.clone(byRows);
    let square;
    let label;
    for (let row = 0; row < byRows.length; row++) {
      for (let col = 0; col < byRows[row].length; col++) {
        square = Math.floor(row / 3) * 3 + Math.floor(col / 3);
        label = ((row % 3) * 3) + (col % 3);
        bySquares[square][label] = byRows[row][col];
      }
    }
    return bySquares;
  },
  squaresToRows: function (bySquares) {
    const byRows = util.clone(bySquares);
    for (let sq = 0; sq < bySquares.length; sq++) {
      for (let lb = 0; lb < bySquares[sq].length; lb++) {
        const row = Math.floor(sq / 3) * 3 + Math.floor(lb / 3);
        const col = ((sq % 3) * 3) + (lb % 3);
        byRows[row][col] = bySquares[sq][lb];
      }
    }
    return byRows;
  },
  genNewBoard: function () {
    if (vars.difficulty == 1) {
      var newBoard = puzzle.removeCells(vars.boards.start, 4);
    } else if (vars.difficulty == 2) {
      var newBoard = puzzle.removeCells(vars.boards.start, 5);
    } else if (vars.difficulty == 3) {
      var newBoard = util.clone(vars.boards.medEasy);
    } else if (vars.difficulty == 4) {
      var newBoard = util.clone(vars.boards.mild);
    } else if (vars.difficulty == 5) {
      var newBoard = util.clone(vars.boards.medium);
    } else if (vars.difficulty == 6) {
      var newBoard = util.clone(vars.boards.hard);
    } else if (vars.difficulty == 7) {
      var newBoard = util.clone(vars.boards.evil);
    } else if (vars.difficulty == 8) {
      var newBoard = util.clone(vars.boards.impossible);
    }
    newBoard = puzzle.permuteNumbers(newBoard);
    newBoard = puzzle.permuteRowCol(newBoard);
    newBoard = puzzle.permuteRowColGroups(newBoard);
    vars.boards.problem = newBoard;
    return newBoard;
  },
  displayBoard: function (rowMaskedBoard) {
    const sqMaskedBoard = puzzle.rowsToSquares(rowMaskedBoard);
    $(".square").each(function (square) {
      const $cells = $(this).find('.cell');
      const $cellVals = $cells.find('.value');
      for (let i = 0; i < 9; i++) { // loop through cells in square
        $cells.eq(i).removeClass('valid error');
        let disp = sqMaskedBoard[square][i];
        const $val = $cellVals.eq(i);
        if (disp == 0) {
          disp = '';
          $val.removeClass('immutable');
        } else {
          $val.addClass('immutable');
        }
        $val.text(disp);
      }
    });
  },
  getBoardFromDisplay: function () {
    const board = [];
    $(".square").each(function (square) {
      const sqArr = [];
      const cellVals = $(this).find('.cell .value');
      for (let i = 0; i < 9; i++) {
        let text = cellVals.eq(i).text();
        if (!text) {
          text = '0';
        }
        sqArr.push(text);
      }
      board.push(sqArr);
    });
    return puzzle.squaresToRows(board);
  },
  applyLabels: function () {
    $(".square").each(function () {
      const $labels = $(this).find(".label");
      for (let i = 0; i < 9; i++) {
        $labels.eq(i).text(i + 1);
      }
    });
  },
  applyEventHandlers: function () {
    $("#pause").click(function () {
      $(".numbers-bar").hide();
      util.stopClock();
      vars.isTicking = false;
      $(this).hide();
      $('#resume').show();
    });
    $("#resume").click(function () {
      if (!vars.isTicking) {
        $(".sudoku").show();

        $(".numbers-bar").show();
        util.startClock();
        vars.isTicking = true;
        $(this).hide();
        $('#pause').show();
      }
    });
    $("#restart").click(function () {
      puzzle.displayBoard(vars.boards.problem);
      util.resetClock();
    });
    $("#solve").click(function () {
      puzzle.displayBoard(vars.boards.solution);
    });
    $("#new").click(puzzle.newPuzzle);
    $('.cell').click(function () {
      $('.cell').removeClass('selected');
      $(this).addClass('selected');
    });
    $('.difficulty').change(function () {
      vars.difficulty = $(this).val();
    })
    $('body').keydown(function (key) {
      if (key.which >= 37 && key.which <= 40) {
        key.preventDefault();
        puzzle.moveSelected(key.which);
      }
    });
    // Picking numbers for cells
    $('body').keypress(function (key) {
      const number = key.which - 48;
      puzzle.userPick(number);
    });
    $('.number').click(function () {
      const number = Number($(this).text());
      puzzle.userPick(number);
    });
  },
  userPick: function (number) {
    const $curCell = $(".cell.selected");
    const $curSq = $curCell.parent();
    const cellNum = $curCell.index();
    const colGroup = $curSq.index();
    const srowNum = $curSq.parent().index();
    const row = srowNum * 3 + Math.floor(cellNum / 3);
    const col = colGroup * 3 + (cellNum % 3);
    const $target = $curCell.find('.value');
    if (!$target.hasClass('immutable')) {
      if (number >= 1 && number <= 9) {
        var correct = (number == vars.boards.solution[row][col]);
        if (correct) {
          $curCell.addClass('valid');
          $curCell.removeClass('error');
        } else {
          $curCell.addClass('error');
          $curCell.removeClass('valid');
        }
        $target.text(number);
      }
      else if (number == (8 - 48) || number == (46 - 48)) {
        $target.text("");
        $curCell.removeClass("valid error");
      }
    }
  },
  moveSelected: function (arrowKey) {
    puzzle.storeDOMviewCells();
    const $cellsInRows = vars.DOMview;
    const $selCell = $(".cell.selected");
    const $curSq = $selCell.parent();
    const cellNum = $selCell.index();
    const colGroup = $curSq.index();
    const srowNum = $curSq.parent().index();
    const row = srowNum * 3 + Math.floor(cellNum / 3);
    const col = colGroup * 3 + (cellNum % 3);
    $selCell.removeClass('selected');
    // stânga
    if (arrowKey == 37) {
      if (col == 0) {
        if (row == 0) {
          $selCell.addClass('selected');
        } else {
          $cellsInRows[row - 1][8].addClass('selected');
        }
      } else {
        $cellsInRows[row][col - 1].addClass('selected');
      }
    }
    // sus
    else if (arrowKey == 38) {
      if (row == 0) {
        $cellsInRows[row][col].addClass('selected');
      } else {
        $cellsInRows[row - 1][col].addClass('selected');
      }
    }
    // dreapta
    else if (arrowKey == 39) {
      if (col == 8) {
        if (row == 8) {
          $selCell.addClass('selected');
        } else {
          $cellsInRows[row + 1][0].addClass('selected');
        }
      } else {
        $cellsInRows[row][col + 1].addClass('selected');
      }
    }
    // jos
    else if (arrowKey == 40) {
      if (row == 8) {
        $cellsInRows[row][col].addClass('selected');
      } else {
        $cellsInRows[row + 1][col].addClass('selected');
      }
    }
  },
  storeDOMviewCells: function () {
    vars.DOMview = util.clear(util.clone(vars.boards.problem));
    $(".square").each(function (sq) {
      const $cells = $(this).children();
      for (let i = 0; i < 9; i++) { //buclă prin celule în pătrat
        const $cell = $cells.eq(i);
        const cellNum = $cell.index();
        const $square = $cell.parent();
        const row = $square.parent().index() * 3 + Math.floor(cellNum / 3);
        const col = $square.index() * 3 + (cellNum % 3);
        vars.DOMview[row][col] = $cell;
      }
    });
  },
  newPuzzle: function () {
    const board = puzzle.genNewBoard();
    puzzle.displayBoard(board);
    vars.boards.problem = util.clone(board);
    vars.boards.solution = puzzle.bruteSolve(board);
    util.resetClock();
    util.startClock();
  },
  init: function () {
    puzzle.applyLabels();
    puzzle.newPuzzle();
    puzzle.applyEventHandlers();
  },
  runTests: function () {
    let i = 20;
    const bruteRuns = [];
    let bruteAvgTime = 0;
    const hybridRuns = [];
    const hybridAvgTime = 0;
    while (i--) {
      const startBrute = performance.now();
      const board = puzzle.bruteSolve(puzzle.genNewBoard());
      const bruteTime = performance.now() - startBrute;
      bruteRuns.push(bruteTime);
    }
    for (let j = 0; j < bruteRuns.length; j++) {
      bruteAvgTime += bruteRuns[j];
    }
    bruteAvgTime = bruteAvgTime / bruteRuns.length;
    console.log("Brute force algorithm, avg time: " + bruteAvgTime + " ms");

    const bruteEasyStart = performance.now();
    let hardBruteBoard = puzzle.bruteSolve(vars.boards.empty);
    const bruteEasyTime = performance.now() - bruteEasyStart;
    console.log("Brute force algorithm, empty puzzle: " + bruteEasyTime + " ms");

    const bruteHardStart = performance.now();
    hardBruteBoard = puzzle.bruteSolve(vars.boards.hard);
    const bruteHardTime = performance.now() - bruteHardStart;
    console.log("Brute force algorithm, difficult puzzle: " + bruteHardTime + " ms");
  }
};

puzzle.init();
