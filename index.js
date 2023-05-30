// 필요한 모듈을 불러옵니다.
const express = require('express');

// Express 앱을 초기화합니다.
const app = express();
const port = 3000;
const c = 'd';
const d = 'e';

// 루트 URL('/')에 대한 GET 요청을 처리합니다.
app.get('/', (req, res) => {
  res.send(`안녕하세요, Express.js! a + b: ${c}`);
});

// 웹 서버를 시작하고 주어진 포트에서 실행합니다.
app.listen(port, () => {
  console.log('내가 맘대로 짜놓은 것');
  console.log(d);
  console.log(`Express 앱이 http://localhost:${port}에서 실행 중입니다.`);
  for (var i = 0; i < 5; i++ ) {
    console.log(d);
  }
});
