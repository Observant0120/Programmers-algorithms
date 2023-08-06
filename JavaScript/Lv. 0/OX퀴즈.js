function solution(quiz) {
  let result = [];

  quiz.forEach((el) => {
    let array = el.split(" ");
    const operator = array[1];

    array = array
      .filter((el) => Number.isInteger(Number(el)))
      .map((el) => Number(el));

    switch (operator) {
      case "+":
        return array[0] + array[1] === array[2]
          ? result.push("O")
          : result.push("X");
      case "-":
        return array[0] - array[1] === array[2]
          ? result.push("O")
          : result.push("X");
    }
  });
  return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120907
