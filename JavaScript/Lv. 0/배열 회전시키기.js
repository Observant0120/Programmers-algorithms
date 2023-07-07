function solution(numbers, direction) {
  if (direction === "right") {
    numbers.unshift(numbers.pop());
    return numbers;
  } else {
    numbers.push(numbers.shift());
    return numbers;
  }
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120844
