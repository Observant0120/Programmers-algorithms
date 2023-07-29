function solution(sides) {
  const [side, longSide] = sides.sort((a, b) => a - b);
  const twoSideSum = side + longSide;
  let result = 0;

  for (let i = longSide; i + side > longSide; i--) {
    result += i + side > longSide ? 1 : 0;
  }

  for (let i = longSide + 1; twoSideSum > i; i++) {
    result += twoSideSum > i ? 1 : 0;
  }

  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120868
