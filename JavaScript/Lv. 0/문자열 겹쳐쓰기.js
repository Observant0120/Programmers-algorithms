function solution(my_string, overwrite_string, s) {
  const front = my_string.slice(0, s);
  const middle = overwrite_string;
  const back = my_string.slice(front.length + middle.length);

  return front + middle + back;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181943
