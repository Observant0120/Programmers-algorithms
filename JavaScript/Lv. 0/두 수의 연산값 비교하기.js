function solution(a, b) {
  const cal1 = Number("" + a + b);
  const cal2 = 2 * a * b;
  return cal1 >= cal2 ? cal1 : cal2;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181938
