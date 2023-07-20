function solution(my_string) {
  return my_string
    .split(/\D+/)
    .map((el) => Number(el))
    .reduce((acc, cur) => acc + cur);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120864
