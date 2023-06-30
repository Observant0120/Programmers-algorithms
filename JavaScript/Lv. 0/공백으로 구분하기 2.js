function solution(my_string) {
  const deleteSpace = /\s{2,}/g;
  return my_string.trim().replaceAll(deleteSpace, " ").split(" ");
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181868
