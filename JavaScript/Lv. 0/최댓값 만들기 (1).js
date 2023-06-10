function solution(numbers) {
  numbers.sort((a, b) => a - b);

  return numbers[numbers.length - 1] * numbers[numbers.length - 2];
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120847
