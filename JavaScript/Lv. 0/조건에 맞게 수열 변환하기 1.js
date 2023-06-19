function solution(arr) {
  return arr.map((el) => {
    if (el >= 50 && el % 2 === 0) return el / 2;
    if (el < 50 && el % 2 === 1) return el * 2;
    return el;
  });
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181882
