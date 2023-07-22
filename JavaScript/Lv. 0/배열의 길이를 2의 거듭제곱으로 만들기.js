function solution(arr) {
  return [
    ...arr,
    ...Array(2 ** Math.ceil(Math.log2(arr.length)) - arr.length).fill(0),
  ];
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181857
