function solution(x) {
  return x %
    String(x)
      .split("")
      .map((el) => Number(el))
      .reduce((acc, cur) => acc + cur) ===
    0
    ? true
    : false;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12947
