function solution(str_list, ex) {
  return str_list.reduce(
    (acc, cur) => (cur.includes(ex) ? acc : acc + cur),
    ""
  );
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181841
