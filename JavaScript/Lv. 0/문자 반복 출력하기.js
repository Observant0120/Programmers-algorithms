function solution(my_string, n) {
  return [...my_string].reduce((acc, cur) => (acc += cur.repeat(n)), "");
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120825
