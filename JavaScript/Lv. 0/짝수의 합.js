function solution(n) {
  return Array.from({length : n / 2 + 1}, (even, i) => i * 2).reduce((acc, cur) => acc + cur);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120831