function solution(bin1, bin2) {
  const decimalNum = (binaryNum) => {
    let result = 0;
    for (let [i, j] = [binaryNum.length - 1, 0]; i >= 0; i--) {
      result += Number(binaryNum[i]) * Math.pow(2, j);
      j++;
    }
    return result;
  };

  const binaryNum = (decimalNum) => {
    let result = [];
    if (decimalNum === 0) return "0";
    while (decimalNum !== 1) {
      result.push(decimalNum % 2);
      decimalNum = Math.floor(decimalNum / 2);
      if (decimalNum === 1) result.push(1);
    }
    return result.reverse().join("");
  };

  let result = decimalNum(bin1) + decimalNum(bin2);
  return binaryNum(result);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120885
