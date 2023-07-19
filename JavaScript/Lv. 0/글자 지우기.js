function solution(my_string, indices) {
  const setIndices = new Set(indices);
  return [...my_string].filter((_, idx) => !setIndices.has(idx)).join("");
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181900
