function solution(arr) {
  const front = arr.indexOf(2);
  const back = arr.lastIndexOf(2);

  return front !== -1 ? arr.slice(front, back + 1) : [-1];
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181894
