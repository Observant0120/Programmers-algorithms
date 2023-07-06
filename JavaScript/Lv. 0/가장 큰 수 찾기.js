function solution(array) {
  const maxNum = array.reduce((max, cur) => (cur > max ? cur : max));
  return [maxNum, array.indexOf(maxNum)];
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120899
