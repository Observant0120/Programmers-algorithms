function solution(strArr) {
  const result = {};
  strArr.forEach((el) => {
    result[el.length] = result[el.length]
      ? (result[el.length] += 1)
      : (result[el.length] = 1);
  });
  return Math.max(...Object.values(result));
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181855
