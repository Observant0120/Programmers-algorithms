function solution(my_string) {
  my_string = my_string.split(" ");
  let result = parseInt(my_string[0]);

  for (let i = 1; i < my_string.length; i += 2) {
    if (my_string[i] === "+") {
      result += parseInt(my_string[i + 1]);
    }
    if (my_string[i] === "-") {
      result -= parseInt(my_string[i + 1]);
    }
    if (my_string[i] === "*") {
      result *= parseInt(my_string[i + 1]);
    }
    if (my_string[i] === "/") {
      result /= parseInt(my_string[i + 1]);
    }
  }
  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120902
