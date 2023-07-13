function solution(n) {
  if (n < 4) return 0;

  let result = 0,
    count = 0,
    i = 4;

  while (i !== n + 1) {
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        count += 2;
        count += i / j === j ? 1 : 0;
      }
      if (count >= 3) {
        result++;
        count = 0;
        break;
      }
    }
    i++;
  }
  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120846
