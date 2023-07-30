function solution(arr) {
  const result = [];
  arr.forEach((el) => {
    if (!result.length) result.push(el);
    else if (result.at(-1) === el) result.pop();
    else result.push(el);
  });
  return result.length ? result : [-1];
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181859
