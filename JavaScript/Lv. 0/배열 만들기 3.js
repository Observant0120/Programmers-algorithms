function solution(arr, intervals) {
  return intervals.flatMap(([s, e]) => arr.slice(s, e + 1));
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181895
