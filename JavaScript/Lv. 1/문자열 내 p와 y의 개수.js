function solution(s) {
  const pMatch = s.match(/p/gi);
  const yMatch = s.match(/y/gi);

  const pNumber = pMatch !== null ? pMatch.length : 0;
  const yNumber = yMatch !== null ? yMatch.length : 0;

  return pNumber === yNumber ? true : false;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12916
