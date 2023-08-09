function solution(n) {
  const board = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );

  let number = 1;
  let direction = "right";
  let row = 0;
  let col = 0;

  while (number <= n * n) {
    switch (direction) {
      case "left":
        while (board[row]?.[col] !== undefined && board[row]?.[col] === 0) {
          board[row][col] = number;
          number++;
          col--;
        }
        col++;
        row--;
        direction = "up";
        break;
      case "right":
        while (board[row]?.[col] !== undefined && board[row]?.[col] === 0) {
          board[row][col] = number;
          number++;
          col++;
        }
        col--;
        row++;
        direction = "down";
        break;
      case "up":
        while (board[row]?.[col] !== undefined && board[row]?.[col] === 0) {
          board[row][col] = number;
          number++;
          row--;
        }
        row++;
        col++;
        direction = "right";
        break;
      case "down":
        while (board[row]?.[col] !== undefined && board[row]?.[col] === 0) {
          board[row][col] = number;
          number++;
          row++;
        }
        row--;
        col--;
        direction = "left";
        break;
    }
  }
  return board;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181832
