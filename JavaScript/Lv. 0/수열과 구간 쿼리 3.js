function solution(arr, queries) {
  queries.forEach(([swapIdx1, swapIdx2]) => {
    [arr[swapIdx1], arr[swapIdx2]] = [arr[swapIdx2], arr[swapIdx1]];
  });
  return arr;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181924
