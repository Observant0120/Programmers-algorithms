function solution(l, r) {
  const result = [];
  let i = 1;

  while (true) {
    const binary = Number(i.toString(2)) * 5;
    if (r < binary) break;
    if (l <= binary) result.push(binary);
    i++;
  }
  return result.length ? result : [-1];
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181921
