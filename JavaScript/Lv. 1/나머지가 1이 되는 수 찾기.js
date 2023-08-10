function solution(n) {
  let i = 0;
  while (i <= n) {
    if (n % i === 1) return i;
    i++;
  }
}

// https://school.programmers.co.kr/learn/courses/30/lessons/87389
