function solution(n) {
  const numberString = String(n);
  let result = 0;

  for (let i = 0; i < numberString.length; i++) {
    result += Number(numberString[i]);
  }

  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120906
