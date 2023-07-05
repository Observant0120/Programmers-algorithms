function solution(todo_list, finished) {
  return todo_list.filter((_, idx) => !finished[idx]);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181885
