function solution(my_string, num1, num2) {
  const [changeString1, changeString2] = [my_string[num1], my_string[num2]];
  const coppyArray = [...my_string];

  [coppyArray[num1], coppyArray[num2]] = [changeString2, changeString1];

  return coppyArray.join("");
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120895
