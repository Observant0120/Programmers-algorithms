function solution(myString, pat) {
  return myString.slice(0, myString.lastIndexOf(pat) + pat.length);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181872
