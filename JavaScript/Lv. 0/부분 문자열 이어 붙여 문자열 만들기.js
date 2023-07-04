function solution(my_strings, parts) {
  let result = "";
  my_strings.forEach((el, idx) => {
    result += el.slice(parts[idx][0], parts[idx][1] + 1);
  });
  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181911
