function solution(my_string) {
  const result = new Map();

  for (let i = 65; i <= 90; i++) {
    result.set(String.fromCharCode(i), 0);
  }
  for (let i = 97; i <= 122; i++) {
    result.set(String.fromCharCode(i), 0);
  }
  for (let i = 0; i < my_string.length; i++) {
    result.set(my_string[i], result.get(my_string[i]) + 1);
  }

  return Array.from(result.values());
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181902
