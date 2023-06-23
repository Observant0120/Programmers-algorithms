function solution(num_list) {
  let evenStr = "";
  let oddStr = "";

  num_list.forEach((el) => (el % 2 === 0 ? (evenStr += el) : (oddStr += el)));

  return parseInt(evenStr) + parseInt(oddStr);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181928
