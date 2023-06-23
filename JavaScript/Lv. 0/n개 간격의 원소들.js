function solution(num_list, n) {
  return num_list.filter((_, idx) => !(idx % n));
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181888
