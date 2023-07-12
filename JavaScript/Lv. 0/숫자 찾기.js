function solution(num, k) {
  const result = String(num).indexOf(String(k));

  return result >= 0 ? result + 1 : result;
}

// // https://school.programmers.co.kr/learn/courses/30/lessons/181867
