function solution(hp) {
  let result = 0;

  while (hp >= 5) {
    hp -= 5;
    result++;
  }
  while (hp >= 3) {
    hp -= 3;
    result++;
  }
  while (hp >= 1) {
    hp -= 1;
    result++;
  }
  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120837
