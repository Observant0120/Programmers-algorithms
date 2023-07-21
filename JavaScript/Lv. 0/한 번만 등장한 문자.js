function solution(s) {
  const store = {};
  let result = "";

  for (let i = 0; i < s.length; i++) {
    store[s[i]] = (store[s[i]] || 0) + 1;
  }

  for (let i in store) {
    if (store[i] === 1) result += i;
  }

  return [...result].sort().join("");
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120896
