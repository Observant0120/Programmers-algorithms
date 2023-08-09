function solution(dots) {
  let result = 0;

  const calculation = ([x1, y1], [x2, y2], [x3, y3], [x4, y4]) => {
    const Diff12 = (y2 - y1) / (x2 - x1);
    const Diff34 = (y4 - y3) / (x4 - x3);
    if (Diff12 === Diff34) result++;
  };

  calculation(...dots);
  calculation(dots[0], dots[2], dots[1], dots[3]);
  calculation(dots[0], dots[3], dots[1], dots[2]);

  return result > 0 ? 1 : 0;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120875
