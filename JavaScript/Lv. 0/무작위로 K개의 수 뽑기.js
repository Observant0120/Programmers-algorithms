function solution(arr, k) {
  const set = new Set(arr);

  return set.size > k
    ? [...set].slice(0, k)
    : [...set].concat(Array.from({ length: k - set.size }, () => -1));
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181858
