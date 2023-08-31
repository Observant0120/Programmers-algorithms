function solution(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += i % 2 === 0 ? "수" : "박";
  }
  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12922
