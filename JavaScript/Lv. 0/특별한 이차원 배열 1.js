function solution(n) {
  const result = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );

  for (let i = 0; i < n; i++) {
    result[i][i] = 1;
  }

  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181833
