function solution(order) {
  return String(order)
    .split("")
    .filter((el) => "369".includes(el)).length;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120891
