function solution(num_list) {
  const multiply = num_list.reduce((acc, cur) => acc * cur);
  const sumOfSquare = Math.pow(
    num_list.reduce((acc, cur) => acc + cur),
    2
  );

  return multiply < sumOfSquare ? 1 : 0;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181929
