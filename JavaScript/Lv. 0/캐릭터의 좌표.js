function solution(keyinput, board) {
  const result = [0, 0];
  const boardLimit = [-(board[0] - 1) / 2, -(board[1] - 1) / 2];

  keyinput.forEach((el) => {
    if (el === "left" && result[0] > boardLimit[0]) result[0] -= 1;
    if (el === "right" && result[0] < Math.abs(boardLimit[0])) result[0] += 1;
    if (el === "up" && result[1] < Math.abs(boardLimit[1])) result[1] += 1;
    if (el === "down" && result[1] > boardLimit[1]) result[1] -= 1;
  });

  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120861
