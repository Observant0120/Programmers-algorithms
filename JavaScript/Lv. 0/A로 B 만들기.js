function solution(before, after) {
  before = [...before].sort().join("");
  after = [...after].sort().join("");

  return before === after ? 1 : 0;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120886
