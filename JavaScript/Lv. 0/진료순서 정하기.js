function solution(emergency) {
  const sorted = [...emergency].sort((a, b) => b - a);
  const ranking = Array.from({ length: emergency.length }, (v, i) => i + 1);
  const store = {};
  const result = [];

  for (let i = 0; i < sorted.length; i++) {
    store[sorted[i]] = ranking[i];
  }

  for (let i = 0; i < emergency.length; i++) {
    result.push(store[emergency[i]]);
  }

  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120835
