function solution(numLog) {
  let result = "";
  for (let i = 0; i < numLog.length; i++) {
    switch (numLog[i + 1] - numLog[i]) {
      case 1:
        result += "w";
        break;
      case -1:
        result += "s";
        break;
      case 10:
        result += "d";
        break;
      case -10:
        result += "a";
        break;
    }
  }
  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181925
