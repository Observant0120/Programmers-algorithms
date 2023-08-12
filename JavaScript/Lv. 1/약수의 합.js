function solution(n) {
  let result = 0;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (!(n % i)) {
      result += i !== n / i ? i + n / i : i;
    }
  }

  return result;
}
// https://school.programmers.co.kr/learn/courses/30/lessons/12928
