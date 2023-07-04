function solution(box, n) {
  return box.map((el) => Math.floor(el / n)).reduce((acc, cur) => acc * cur);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120845
