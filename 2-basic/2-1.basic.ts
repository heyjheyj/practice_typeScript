// 다른 파일에서 이름이 충돌될 수 있으므로 scope을 이용해서 작성할 것

{
  // Javascript

  // old: var 💩
  // let es6
  // const 

  // primitive: number, string, boolean, bigint, symbol, null, undefined
  // Object: function, array ...

  // number
  const num: number = -6;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // 💩
  let age: number | undefined; // optional
  age = 1;
  age = undefined;
  function find(): number | undefined {
    return undefined;
  }
  
  // null
  let person: null // 💩
  let person2: string | null;

  // unknown 💩
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = 'hello';

  // void 아무것도 리턴하지 않을 때 쓰는 것
  function print(): void {
    console.log('hello')
    return;
  }

  let unusable: void = undefined; // 💩

  // never 리턴할 계획이 없어!! 라고 명시하는 것, return도 작성하면 에러 발생
  function throwError(message: string): never {
      // message -> server(log)
      throw new Error(message)
      // while(true) {

      // }
  }

  // object
  let obj: Object; // 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'angela', age: 20})
  acceptSomeObject({ name: 'john', age: 30})
}