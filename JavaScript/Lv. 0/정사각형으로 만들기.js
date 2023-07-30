function solution(arr) {
  let row = arr.length;
  let col = arr[0].length;

  if (row > col) {
    arr.forEach((el, idx) => {
      arr[idx] = el.concat(Array.from({ length: row - col }, () => 0));
    });
  }

  if (row < col) {
    while (row !== col) {
      arr.push(Array.from({ length: col }, () => 0));
      row++;
    }
  }

  return arr;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181830
