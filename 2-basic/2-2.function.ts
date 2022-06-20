{

  // sum function

  // javascript 💩
  function jsAdd(num1, num2) {
    return num1 + num2
  }

  // typescript 💕
  function tsAdd(num1: number, num2: number):number {
    return num1 + num2
  }


  // fetch

  // javascript 💩
  function jsFetchNum(id) {
    // code ..
    // code ..
    return new Promise((res, rej) => {
      res(100);
    })
  }

  // typescript 💕
  function tsFetchNum(id: string): Promise<number> {
    // code ..
    // code ..
    return new Promise((res, rej) => {
      res(100);
    })
  }

  // javascript => typescript
  // optional parameter "?" 이걸 이용하면 됩니다.
  // 전달해도 되고 아님 말고, 하는 파라미터에 물음표를 붙이면 값이 없어도 함수를 이용할 수 있음
  // function printName(firstName: string, lastName: string | undefined) { <= 이렇게 쓸수도 있음, 그러나 이렇게 하면 undefined를 명시해줘야 함
  function printName(firstName: string, lastName?: string) {
    console.log(firstName)
    console.log(lastName)
  }
  printName('Steve', 'Jobs');
  printName('Joe')
  printName('Bread', undefined);

  // Default Parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage()

  // Rest parameter
  function sum(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(sum(1,2,3))
  console.log(sum(1,2,3,4))
}


{

  function tsFunction(id: string): Promise<number> {
    // code ..
    // code ..
    // code ..
    return new Promise((res, rej) => {
      res(200)
    })
  }

}
