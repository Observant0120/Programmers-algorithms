function solution(my_string) {
  return [...my_string].reduce((acc, cur) => {
    if (Number.isInteger(Number(cur))) {
      return acc + Number(cur);
    }
    return acc;
  }, 0);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120851
