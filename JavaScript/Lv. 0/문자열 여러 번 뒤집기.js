function solution(my_string, queries) {
  const transform = [...my_string];
  queries.forEach(([s, e]) => {
    const reverse = transform.slice(s, e + 1).reverse();
    for (let i = 0; s <= e; i++) {
      transform[s] = reverse[i];
      s++;
    }
  });
  return transform.join("");
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181913
