function solution(i, j, k) {
  let result = 0;
  let kCheck = String(k);

  while (i <= j) {
    let check = String(i);
    if (check.includes(kCheck)) {
      for (let num = 0; num < check.length; num++) {
        check[num].includes(kCheck) ? result++ : null;
      }
    }
    i++;
  }
  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120887
