function solution(polynomial) {
  const [x, d] = polynomial.split(" ").reduce(
    (acc, cur) => {
      if (cur === "+") return acc;

      cur.at(-1) === "x"
        ? cur.length === 1
          ? acc[0]++
          : (acc[0] += Number(cur.slice(0, cur.length - 1)))
        : (acc[1] += Number(cur));

      return acc;
    },
    [0, 0]
  );

  let result = x ? (x === 1 ? "x" : `${x}x`) : "";
  result += d ? (x ? ` + ${d}` : d) : "";

  return result;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120863
