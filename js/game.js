'use strict';
var gBoard;
var gNums;
var gCount;
var gTimer;
var gIntervalId;

var gDifficult = 16;

function initGame() {
  gCount = 1;
  gTimer = 0;
  gNums = nums();
  gBoard = createBoard();
  renderBoard(gBoard);
}

function setDifficult(size) {
  clearInterval(gIntervalId);
  var elH2 = document.querySelector('h2 span');
  elH2.innerText = '0.000';
  gDifficult = size ** 2;
  gNums = nums(size ** 2);
  initGame();
}

function renderBoard(board) {
  var strHTML = '';
  for (var i = 0; i < board.length; i++) {
    strHTML += '<tr>';
    for (var j = 0; j < board[0].length; j++) {
      strHTML += `<td class="cell cell-${i}-${j}"
            onclick="cellClicked(this , ${i} , ${j})">
             ${board[i][j]}</td>`;
    }
    strHTML += '</tr>';
  }
  // console.log('strHTML', strHTML)
  var elBoard = document.querySelector('.board');
  elBoard.innerHTML = strHTML;
}

function createBoard() {
  var board = [];
  for (var i = 0; i < Math.sqrt(gDifficult); i++) {
    board[i] = [];
    for (var j = 0; j < Math.sqrt(gDifficult); j++) {
      board[i][j] = drawNum();
    }
  }
  console.table(board);
  return board;
}

function startTimer() {
  var elTimer = document.querySelector('.timer span');
  gIntervalId = setInterval(function () {
    gTimer += 0.01;
    elTimer.innerText = gTimer.toFixed(3);
  }, 10);
}

function cellClicked(elCell, currI, currJ) {
  if (gCount === gBoard[currI][currJ]) {
    if (gCount === 1) startTimer();
    if (gCount === gDifficult) clearInterval(gIntervalId);
    gCount++;
    // elCell.classList.remove('unclick');
    elCell.classList.add('clicked');
  }
}

function nums(nums) {
  var nums = [];
  for (var i = 1; i <= gDifficult; i++) {
    nums.push(i);
  }
  return nums;
}
