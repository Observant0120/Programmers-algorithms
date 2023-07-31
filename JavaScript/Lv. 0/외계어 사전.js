function solution(spell, dic) {
  const test = spell.sort().join("");

  for (let i = 0; i < dic.length; i++) {
    const matching = [...dic[i]].sort().join("").indexOf(test);
    if (matching !== -1) return 1;
  }
  return 2;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120869
