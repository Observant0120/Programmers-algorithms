function solution(n) {
  let result = 0;
  let isEven = Boolean(n % 2);

  while (n > 0) {
    if (isEven) result += n;
    else result += n * n;
    n -= 2;
  }

  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181935
