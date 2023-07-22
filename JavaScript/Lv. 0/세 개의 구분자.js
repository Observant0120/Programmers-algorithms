function solution(myStr) {
  const abcFilter = myStr.split(/[abc]/g).filter((el) => el);
  return abcFilter.length ? abcFilter : ["EMPTY"];
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181862
