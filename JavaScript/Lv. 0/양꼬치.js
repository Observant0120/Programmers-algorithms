function solution(n, k) {
  const drinkService = Math.floor(n / 10);
  const lambSkewers = 12000 * n;
  const drink = 2000 * k;
  
  return lambSkewers + drink - (drinkService * 2000);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120830