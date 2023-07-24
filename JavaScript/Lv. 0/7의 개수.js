function solution(array) {
  const result = array.join("").match(/7/g);
  return result !== null ? result.length : 0;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120912
