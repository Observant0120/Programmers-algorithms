function solution(board) {
  const copyBoard = board.map((row) => [...row]);

  for (let i = 0; i < copyBoard.length; i++) {
    for (let j = 0; j < copyBoard[i].length; j++) {
      if (board[i][j]) {
        if (copyBoard[i - 1]?.[j] !== undefined) copyBoard[i - 1][j] = 1;
        if (copyBoard[i + 1]?.[j] !== undefined) copyBoard[i + 1][j] = 1;
        if (copyBoard[i]?.[j - 1] !== undefined) copyBoard[i][j - 1] = 1;
        if (copyBoard[i]?.[j + 1] !== undefined) copyBoard[i][j + 1] = 1;

        if (copyBoard[i - 1]?.[j - 1] !== undefined)
          copyBoard[i - 1][j - 1] = 1;
        if (copyBoard[i - 1]?.[j + 1] !== undefined)
          copyBoard[i - 1][j + 1] = 1;
        if (copyBoard[i + 1]?.[j - 1] !== undefined)
          copyBoard[i + 1][j - 1] = 1;
        if (copyBoard[i + 1]?.[j + 1] !== undefined)
          copyBoard[i + 1][j + 1] = 1;
      }
    }
  }
  return copyBoard.reduce(
    (acc, cur) => acc + cur.filter((el) => el === 0).length,
    0
  );
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120866
