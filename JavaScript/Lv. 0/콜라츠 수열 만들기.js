function solution(n) {
  const result = [n];
  while (n !== 1) {
    if (n % 2 === 1) {
      n = 3 * n + 1;
      result.push(n);
    }
    if (n % 2 === 0) {
      n /= 2;
      result.push(n);
    }
  }
  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181919
