function solution(num_list, n) {
  return num_list.slice(n).concat(num_list.slice(0, n));
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181891
