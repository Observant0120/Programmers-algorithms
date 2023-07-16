function solution(arr, queries) {
  queries.forEach(([s, e]) => {
    const query = arr.slice(s, e + 1).map((el) => ++el);
    for (let i = 0; i < query.length; i++) {
      arr[s + i] = query[i];
    }
  });
  return arr;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181883
