function solution(num_list) {
  const oddIdxSum = num_list.reduce(
    (acc, cur, idx) => ((idx + 1) % 2 ? acc + cur : acc),
    0
  );
  const evenIdxSum = num_list.reduce(
    (acc, cur, idx) => (!((idx + 1) % 2) ? acc + cur : acc),
    0
  );

  return Math.max(oddIdxSum, evenIdxSum);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181887
