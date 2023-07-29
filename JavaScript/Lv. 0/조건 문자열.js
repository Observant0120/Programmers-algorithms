function solution(ineq, eq, n, m) {
  if (ineq === "<") {
    switch (eq) {
      case "=":
        return +(n <= m);
      case "!":
        return +(n < m);
    }
  }
  if (ineq === ">") {
    switch (eq) {
      case "=":
        return +(n >= m);
      case "!":
        return +(n > m);
    }
  }
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181934
