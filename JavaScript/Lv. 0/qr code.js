function solution(q, r, code) {
  let result = "";
  for (let i = 0; i < code.length; i++) {
    result += i % q === r ? code[i] : "";
  }
  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181903
