function solution(my_string, index_list) {
  let result = "";
  index_list.forEach((el) => (result += my_string[el]));
  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181915
