function solution(my_str, n) {
  let result = [];

  while (my_str.length !== 0) {
    result.push(my_str.slice(0, n));
    my_str = my_str.slice(n);
  }
  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120913
