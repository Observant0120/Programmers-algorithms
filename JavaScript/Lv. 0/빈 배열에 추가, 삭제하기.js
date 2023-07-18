function solution(arr, flag) {
  const result = [];
  arr.forEach((el, idx) => {
    let repetition = el;
    while (repetition !== 0) {
      if (flag[idx]) {
        result.push(el);
        result.push(el);
        repetition--;
      } else {
        result.pop();
        repetition--;
      }
    }
  });
  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181860
