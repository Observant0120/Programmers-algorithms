function solution(arr) {
  let stk = [];
  let i = 0;
  arr.forEach((el, idx) => {
    while (i === idx) {
      if (!stk.length) {
        stk.push(el);
        ++i;
      } else if (stk.at(-1) < el) {
        stk.push(el);
        ++i;
      } else {
        stk.pop();
      }
    }
  });
  return stk;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181918
