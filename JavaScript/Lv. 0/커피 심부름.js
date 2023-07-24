function solution(order) {
  const menu = new Map();
  const americano = [
    "americano",
    "iceamericano",
    "americanoice",
    "hotamericano",
    "americanohot",
    "anything",
  ];
  const latte = [
    "cafelatte",
    "icecafelatte",
    "cafelatteice",
    "hotcafelatte",
    "cafelattehot",
  ];

  for (let i = 0; i < americano.length; i++) {
    menu.set(americano[i], 4500);
    latte[i] && menu.set(latte[i], 5000);
  }

  return order.reduce((acc, cur) => acc + menu.get(cur), 0);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/181837
