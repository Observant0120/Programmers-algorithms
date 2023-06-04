function solution(money) {
  const coffeeCount = Math.floor(money/5500);
  const remainder = money - (coffeeCount * 5500);
  
  return [coffeeCount, remainder];
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120819