function solution(board, k) {
  let result = 0;
  board.forEach((el, i) => {
    for (let j = 0; j < el.length; j++) {
      if (i + j <= k) result += board[i][j];
    }
  });
  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181829
