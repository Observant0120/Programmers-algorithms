function solution(array, height) {
  let result = 0;

  array.forEach((el) => {
    if (el > height) result++;
  });

  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120585
