function solution(arr, k) {
  return k % 2 === 1 ? arr.map((ele) => ele * k) : arr.map((ele) => ele + k);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181835
