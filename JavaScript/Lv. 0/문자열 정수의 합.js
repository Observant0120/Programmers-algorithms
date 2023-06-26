function solution(num_str) {
  return num_str.split("").reduce((acc, cur) => Number(acc) + Number(cur));
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181849
