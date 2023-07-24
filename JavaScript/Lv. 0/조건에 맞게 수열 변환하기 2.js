function solution(arr) {
  let result = 0;
  while (true) {
    let compareArr = [...arr];
    arr = arr.map((el) => {
      if (el > 50 && !(el % 2) && el !== 99) return (el /= 2);
      else if (el < 50 && el % 2) return (el = el * 2 + 1);
      return el;
    });
    if (
      compareArr.filter((el, idx) => el === arr[idx]).length ===
      compareArr.length
    )
      return result;
    result++;
  }
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181881
