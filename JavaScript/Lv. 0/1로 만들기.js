function solution(num_list) {
  let result = 0;
  num_list.forEach((num) => {
    while (num !== 1) {
      num = num % 2 ? (num - 1) / 2 : num / 2;
      result++;
    }
  });
  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181880
