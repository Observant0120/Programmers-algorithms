function solution(str_list) {
  let result = [];
  for (let i = 0; i < str_list.length; i++) {
    if (str_list[i] === "l") {
      result = str_list.slice(0, i);
      break;
    }
    if (str_list[i] === "r") {
      result = str_list.slice(i + 1);
      break;
    }
  }
  return result;
}
// https://school.programmers.co.kr/learn/courses/30/lessons/181890
