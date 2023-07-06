function solution(age) {
  let alphabet = "abcdefghij";

  return String(age)
    .split("")
    .map((el) => alphabet[el])
    .join("");
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120834
