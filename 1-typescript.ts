console.log('Hello World!!!!');

class Car {
  engine: number;
  constructor() {
    this.engine = 1;
  }
}

// 2강. 타입스크립트란?

// 일단 공식문서를 차근차근 읽어보기

// 브라우저와 node 모두 typescript를 읽을 수 없음
// ts-node 이용하거나(npm install -g ts-node, ts-node main.ts)
// tsc main.ts를 입력해 js파일로 변환한 뒤 읽거나

// tsc -h
// 옵션을 볼 수 있음 watch 모드 이용해봄
// tsc main.ts -w, ts파일이 변경되면 js파일 내용도 함께 변경됨
