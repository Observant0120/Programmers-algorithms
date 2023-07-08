function solution(my_string) {
  const result = [];
  for (let i = 0; i < my_string.length; i++) {
    result.push(my_string.slice(i));
  }
  return result.sort();
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181909
