function solution(number) {
  return (
    Array.from(number, (el) => Number(el)).reduce((acc, cur) => acc + cur) % 9
  );
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181914
