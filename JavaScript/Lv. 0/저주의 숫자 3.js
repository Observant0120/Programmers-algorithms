function solution(n) {
  let result = [];
  let i = 1;

  while (result.length < n) {
    if (i % 3 === 0 || String(i).indexOf("3") !== -1) {
      i++;
      continue;
    }
    result.push(i);
    i++;
  }

  return result.pop();
}
// https://school.programmers.co.kr/learn/courses/30/lessons/120871
