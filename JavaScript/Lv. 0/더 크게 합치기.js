function solution(a, b) {
  const StringAB = Number("" + a + b);
  const StringBA = Number("" + b + a);

  return StringAB >= StringBA ? StringAB : StringBA;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181939
