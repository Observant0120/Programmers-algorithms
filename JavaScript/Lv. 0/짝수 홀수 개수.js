function solution(num_list) {
  let oddCount = 0;
  let evenCount = 0;

  num_list.forEach((el) => {
    el % 2 === 0 ? evenCount++ : oddCount++;
  });

  return [evenCount, oddCount];
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120824
