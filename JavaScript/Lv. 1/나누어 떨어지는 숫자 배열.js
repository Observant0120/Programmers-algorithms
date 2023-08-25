function solution(arr, divisor) {
  const result = arr.filter((el) => el % divisor === 0).sort((a, b) => a - b);

  return result.length > 0 ? result : [-1];
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12910
