function solution(my_string) {
  let result = "";
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i].charCodeAt() <= 90) {
      result += my_string[i].toLowerCase();
    } else {
      result += my_string[i].toUpperCase();
    }
  }
  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120893
