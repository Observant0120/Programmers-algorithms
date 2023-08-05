function solution(code) {
  let result = "";
  let mode = 0;

  [...code].forEach((el, idx) => {
    switch (el) {
      case "1":
        mode ? (mode = 0) : (mode = 1);
        break;
      default:
        if (mode && idx % 2) result += el;
        if (!mode && !(idx % 2)) result += el;
        break;
    }
  });
  return result ? result : "EMPTY";
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181932
