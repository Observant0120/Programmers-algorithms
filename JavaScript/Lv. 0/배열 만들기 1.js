function solution(n, k) {
  const result = [];
  let multiple = k;
  while (n >= k) {
    result.push(k);
    k += multiple;
  }
  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181901
