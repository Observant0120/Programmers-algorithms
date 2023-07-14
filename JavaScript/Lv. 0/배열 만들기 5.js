function solution(intStrs, k, s, l) {
  const result = [];
  intStrs.forEach((el) => {
    const compareNum = Number(el.slice(s, s + l));
    if (compareNum > Number(k)) result.push(compareNum);
  });
  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181912
