function solution(arr, n) {
  return arr.length % 2
    ? arr.map((el, idx) => (!(idx % 2) ? (el += n) : el))
    : arr.map((el, idx) => (idx % 2 ? (el += n) : el));
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181854
