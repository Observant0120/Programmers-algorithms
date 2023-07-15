function solution(a, d, included) {
  return included
    .map((_, idx) => a + d * idx)
    .reduce((acc, cur, idx) => (included[idx] ? acc + cur : acc), 0);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181931
