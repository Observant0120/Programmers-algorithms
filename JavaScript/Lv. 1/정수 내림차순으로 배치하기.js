function solution(n) {
  return parseInt(
    String(n)
      .split("")
      .map((el) => parseInt(el))
      .sort((a, b) => b - a)
      .join("")
  );
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12933
