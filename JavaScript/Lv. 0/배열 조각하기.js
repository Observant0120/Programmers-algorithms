function solution(arr, query) {
  query.forEach((el, idx) => {
    switch (idx % 2) {
      case 0:
        arr = arr.slice(0, el + 1);
        break;
      case 1:
        arr = arr.slice(el);
        break;
    }
  });
  return arr;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181893
