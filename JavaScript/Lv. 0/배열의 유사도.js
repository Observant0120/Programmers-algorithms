function solution(s1, s2) {
  const intersection = s1.filter((x) => s2.includes(x));
  return intersection.length;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120903