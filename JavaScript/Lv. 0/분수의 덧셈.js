function cal_gcd(a, b) {
  return a % b === 0 ? b : cal_gcd(b, a % b);
}

function solution(denum1, num1, denum2, num2) {
  const denum = denum1 * num2 + denum2 * num1;
  const num = num1 * num2;
  const gcd = cal_gcd(denum, num);

  return [denum / gcd, num / gcd];
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120808
