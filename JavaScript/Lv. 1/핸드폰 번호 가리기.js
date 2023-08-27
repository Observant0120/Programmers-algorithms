function solution(phone_number) {
  return phone_number
    .split("")
    .map((el, idx) => (idx < phone_number.length - 4 ? "*" : el))
    .join("");
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12948
