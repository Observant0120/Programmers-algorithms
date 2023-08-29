function solution(arr) {
  return arr.length !== 1 ? arr.filter((el) => Math.min(...arr) < el) : [-1];
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12935
