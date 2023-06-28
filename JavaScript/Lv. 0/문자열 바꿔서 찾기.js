function solution(myString, pat) {
  return +[...myString]
    .map((el) => (el === "A" ? "B" : "A"))
    .join("")
    .includes(pat);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181864
