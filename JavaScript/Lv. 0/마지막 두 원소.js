function solution(num_list) {
  const lastEl = num_list[num_list.length - 1];
  const secondLastEl = num_list[num_list.length - 2];

  lastEl > secondLastEl
    ? num_list.push(lastEl - secondLastEl)
    : num_list.push(lastEl * 2);

  return num_list;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181927
