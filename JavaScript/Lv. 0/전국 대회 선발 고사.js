function solution(rank, attendance) {
  const [a, b, c] = rank
    .map((r, idx) => {
      if (attendance[idx]) return [r, idx, true];
      return [r, idx, false];
    })
    .filter(([_, __, flag]) => flag)
    .sort((a, b) => a[0] - b[0]);

  return 10000 * a[1] + 100 * b[1] + c[1];
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181851
