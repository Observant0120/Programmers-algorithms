function solution(arr, delete_list) {
  const deleteList = new Set(delete_list);
  return arr.filter((el) => !deleteList.has(el));
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181844
