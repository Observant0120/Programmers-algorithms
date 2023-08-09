function solution(babbling) {
  const pron = new RegExp("aya|ye|woo|ma", "g");
  let result = 0;

  babbling.forEach((el) => {
    const search = el.split(pron).reduce((acc, cur) => acc + cur.length, 0);
    if (!search) result++;
  });

  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120956
