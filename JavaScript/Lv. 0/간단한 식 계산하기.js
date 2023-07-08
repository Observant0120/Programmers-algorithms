function solution(binomial) {
  let [a, op, b] = binomial.split(" ");

  if (op === "+") return +a + +b;
  if (op === "-") return a - b;
  if (op === "*") return a * b;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181865
