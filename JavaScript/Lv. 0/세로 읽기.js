function solution(my_string, m, c) {
  const regExp = new RegExp(`.{${m}}`, "g");
  const row = my_string.match(regExp);
  return row.reduce((acc, cur) => acc + cur[c - 1], "");
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181904
