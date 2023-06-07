function solution(sides) {
  sides.sort((a, b) => a - b);
  return sides[sides.length - 1] < sides[0] + sides[1] ? 1 : 2;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120889