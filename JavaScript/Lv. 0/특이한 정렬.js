function solution(numlist, n) {
  numlist.sort((a, b) => a - b);

  const less = numlist.filter((el) => el < n);
  const above = numlist.slice(less.length);
  const result = [];

  let lessIdx = less.length - 1;
  let aboveIdx = 0;
  while (numlist.length !== result.length) {
    if (lessIdx === -1) {
      result.push(above[aboveIdx++]);
      continue;
    }
    if (!above[aboveIdx]) {
      result.push(less[lessIdx--]);
      continue;
    }

    const aboveDiffer = above[aboveIdx] - n;
    const lessDiffer = n - less[lessIdx];

    if (aboveDiffer <= lessDiffer) result.push(above[aboveIdx++]);
    else result.push(less[lessIdx--]);
  }

  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181834
