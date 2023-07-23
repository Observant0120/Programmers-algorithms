function solution(n, slicer, num_list) {
  const [s, e, i] = [...slicer];
  switch (n) {
    case 1:
      return num_list.slice(0, e + 1);
    case 2:
      return num_list.slice(s);
    case 3:
      return num_list.slice(s, e + 1);
    case 4:
      return num_list.slice(s, e + 1).filter((_, idx) => !(idx % i));
  }
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181897
