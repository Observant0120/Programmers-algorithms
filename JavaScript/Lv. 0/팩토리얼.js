function solution(n) {
  let factorialValue = 1;
  const factorial = {};

  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= i; j++) {
      factorialValue *= j;
    }
    factorial[i] = factorialValue;
    factorialValue = 1;
  }

  const result = Object.entries(factorial).filter((el) => el[1] <= n);

  return Number(result[result.length - 1][0]);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120848
