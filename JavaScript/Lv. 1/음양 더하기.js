function solution(absolutes, signs) {
  return absolutes
    .map((el, idx) => (signs[idx] ? el : -el))
    .reduce((acc, cur) => acc + cur);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/76501
