function solution(myString, pat) {
  const regExp = new RegExp(pat, "i");
  return regExp.test(myString) ? 1 : 0;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181878
