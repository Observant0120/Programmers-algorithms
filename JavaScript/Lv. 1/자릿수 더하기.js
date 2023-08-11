function solution(n) {
  return [...String(n)].reduce((acc, cur) => acc + Number(cur), 0);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12931
