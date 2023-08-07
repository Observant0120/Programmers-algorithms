function solution(num, total) {
  const min = Math.ceil(total / num - Math.floor(num / 2));
  return Array.from({ length: num }, (_, i) => i + min);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120923
