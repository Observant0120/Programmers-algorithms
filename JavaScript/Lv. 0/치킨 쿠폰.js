function solution(chicken, coupon = 0) {
  return chicken / 10 < 1
    ? coupon
    : solution(
        Math.floor(chicken / 10) + (chicken % 10),
        Math.floor(chicken / 10) + coupon
      );
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120884
