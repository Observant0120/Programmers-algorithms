function solution(num, count = 0) {
  if (num === 1) return count;
  if (count > 500) return -1;
  if (num % 2 === 0) num /= 2;
  else if (num % 2 === 1) num = num * 3 + 1;

  return solution(num, ++count);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12943
