function solution(numbers) {
  let result = 0;

  for (let i = 1; i <= 9; i++) {
    if (numbers.indexOf(i) === -1) result += i;
  }

  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/86051
