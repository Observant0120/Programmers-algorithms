function solution(arr, queries) {
  const result = [];
  queries.forEach(([s, e, k]) => {
    const queryCondition = arr.slice(s, e + 1).filter((el) => el > k);
    queryCondition.length
      ? result.push(Math.min(...queryCondition))
      : result.push(-1);
  });
  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181923
