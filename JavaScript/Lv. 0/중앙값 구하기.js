function solution(array) {
  array.sort((a,b) => a-b);
  
  return array[Math.floor(array.length / 2)];
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120811