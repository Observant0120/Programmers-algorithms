function solution(my_string, target) {
  const regExp = new RegExp(target);
  return regExp.test(my_string) ? 1 : 0;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181843
