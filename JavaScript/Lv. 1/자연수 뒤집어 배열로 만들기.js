function solution(n) {
  return String(n)
    .split("")
    .reverse()
    .map((el) => parseInt(el));
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12932
