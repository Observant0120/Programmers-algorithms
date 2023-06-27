function solution(strArr) {
  return strArr.map((el, idx) =>
    idx % 2 === 0 ? el.toLowerCase() : el.toUpperCase()
  );
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181875
