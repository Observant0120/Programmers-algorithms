function solution(n) {
  let i = 2;
  let result = {};

  while (n !== 1) {
    if (n % i === 0) {
      n /= i;
      result[i] = i;
    } else {
      i++;
    }
  }
  return Object.values(result);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120852
