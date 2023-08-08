function solution(lines) {
  const start = lines.map((v) => v[0]);
  const end = lines.map((v) => v[1]);

  let count = 0;
  let intersection = 0;

  for (let i = Math.min(...start); i <= Math.max(...end); i++) {
    for (let j = 0; j < lines.length; j++) {
      if (i >= start[j] && i < end[j]) count++;
    }
    if (count >= 2) intersection++;
    count = 0;
  }

  return intersection;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120876
