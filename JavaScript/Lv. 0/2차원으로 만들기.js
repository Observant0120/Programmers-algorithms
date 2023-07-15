function solution(num_list, n) {
  const result = [];
  let i = 0;

  while (num_list[i] !== undefined) {
    result.push(num_list.slice(i, i + n));
    i += n;
  }

  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120842
