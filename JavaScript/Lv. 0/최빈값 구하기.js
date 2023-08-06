function solution(array) {
  const obj = {};
  let max = [0, 0];

  for (let i of array) {
    obj[i] = (obj[i] || 0) + 1;
    if (obj[i] > max[1]) {
      max[0] = i;
      max[1] = obj[i];
    }
  }

  const mode = Object.values(obj).filter((el) => el === max[1]);

  return mode.length === 1 ? max[0] : -1;
}
// https://school.programmers.co.kr/learn/courses/30/lessons/120812
