function solution(myString, pat) {
  let result = 0;
  let searchStr = myString;
  for (let i = 0; i <= myString.length; i++) {
    i = searchStr.indexOf(pat);
    if (i === -1) break;
    searchStr = searchStr.slice(i + 1);
    result++;
  }
  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181871
