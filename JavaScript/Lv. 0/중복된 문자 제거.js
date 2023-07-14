function solution(my_string) {
  const deduplication = {};
  let result = "";

  for (let i = 0; i < my_string.length; i++) {
    deduplication[my_string[i]] = true;
  }
  return Object.keys(deduplication).join("");
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120888
