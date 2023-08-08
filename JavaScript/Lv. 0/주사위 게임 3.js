function solution(a, b, c, d) {
  const diceRecord = new Map();

  [a, b, c, d].forEach((el) => {
    diceRecord.set(el, (diceRecord.get(el) || 0) + 1);
  });

  const dice = [...diceRecord].sort((a, b) => b[1] - a[1]);

  for (const [num, count] of dice) {
    if (count === 4) return 1111 * num;
    if (count === 3) return Math.pow(10 * num + dice[1][0], 2);
    if (count === 2 && dice[1][1] === 2)
      return (num + dice[1][0]) * Math.abs(num - dice[1][0]);
    if (count === 2) return dice[1][0] * dice[2][0];
    return Math.min(a, b, c, d);
  }
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181916
