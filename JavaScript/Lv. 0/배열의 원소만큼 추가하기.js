function solution(arr) {
  const result = [];

  arr.forEach((el) => {
    let repetition = el;
    while (repetition !== 0) {
      result.push(el);
      repetition--;
    }
  });

  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181861
