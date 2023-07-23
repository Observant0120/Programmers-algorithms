function solution(arr, queries) {
  queries.forEach(([s, e, k]) => {
    for (let i = s; i <= e; i++) {
      if (!(i % k)) arr[i] += 1;
    }
  });
  return arr;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181922
