function solution(A, B, count = 0) {
  if (A === B) return count;
  if (A.length === count) return -1;

  return solution(A.at(-1) + A.slice(0, A.length - 1), B, ++count);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120921
