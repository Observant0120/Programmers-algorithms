function solution(array, n) {
  array.sort((a, b) => a - b);

  let i = 0,
    smallNumber = 0,
    highNumber = 0;

  while (i < array.length) {
    if (array[i] >= n) {
      smallNumber = n - array[i - 1];
      highNumber = array[i] - n;
      return smallNumber <= highNumber ? array[i - 1] : array[i];
    } else if (array[array.length - 1] <= n) {
      return array[array.length - 1];
    }
    i++;
  }
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120890
