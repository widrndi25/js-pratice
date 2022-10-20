const quotes = [
  { qutote: "칼 마르크스", author: "종교는 모든 인민들의 아편이다." },
  { qutote: "프란시스 베이컨", author: "아는 것이 곧 힘이다." },
  { qutote: "이순신", author: "살고자 하면 죽을 것이고 죽고자 하면 살것이다." },
  { qutote: "이말년", author: "대충 흑백사진에 글쓰면 명언같다." },
  { qutote: "박명수", author: "성의의 표시는 돈으로 하라." },
  { qutote: "마션 첫문장", author: "아무래도 좆됐다." },
  { qutote: "찰리 채플린", author: "웃음 없는 하루는 낭비한 하루다." },
  { qutote: "키케로", author: "삶이 있는 한 희망은 있다." },
  { qutote: "안젤라 데이비스", author: "잊지 마라, 벽을 눕히면 다리가 된다." },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.qutote;
author.innerText = todaysQuote.author;
