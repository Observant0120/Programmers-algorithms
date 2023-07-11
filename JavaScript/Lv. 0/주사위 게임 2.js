function solution(a, b, c) {
  if (a === b && b === c)
    return (
      (a + b + c) *
      (a * a + b * b + c * c) *
      (a * a * a + b * b * b + c * c * c)
    );
  if (a !== b && a !== c && b !== c) return a + b + c;
  return (a + b + c) * (a * a + b * b + c * c);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181930
