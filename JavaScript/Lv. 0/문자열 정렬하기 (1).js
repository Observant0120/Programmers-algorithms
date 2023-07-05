function solution(my_string) {
  return [...my_string]
    .filter((el) => Number.isInteger(Number(el)))
    .map((el) => Number(el))
    .sort((a, b) => a - b);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120850
