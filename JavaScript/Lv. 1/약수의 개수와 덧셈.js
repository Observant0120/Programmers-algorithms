function solution(left, right) {
  const answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
//제곱근이 정수면 약수의 개수가 홀수다.
// https://school.programmers.co.kr/learn/courses/30/lessons/77884
