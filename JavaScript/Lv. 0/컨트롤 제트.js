function solution(s) {
  let result = 0;
  const splitArray = s.split(" ");

  for (let i = 0; i < splitArray.length; i++) {
    result +=
      splitArray[i] !== "Z"
        ? parseInt(splitArray[i])
        : -parseInt(splitArray[i - 1]);
  }

  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120853
