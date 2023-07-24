function solution(numbers, k) {
  return numbers[(k * 2 - 1) % numbers.length];
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120843
