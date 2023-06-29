function solution(arr1, arr2) {
  if (arr1.length > arr2.length) return 1;
  if (arr1.length < arr2.length) return -1;

  const arrSum1 = sum(arr1);
  const arrSum2 = sum(arr2);

  return arrSum1 > arrSum2 ? 1 : arrSum1 < arrSum2 ? -1 : 0;
}

const sum = (arr) => {
  return arr.reduce((acc, cur) => acc + cur, 0);
};

// https://school.programmers.co.kr/learn/courses/30/lessons/181856
