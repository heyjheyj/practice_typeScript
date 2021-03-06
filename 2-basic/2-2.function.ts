{

  // sum function

  // javascript ๐ฉ
  function jsAdd(num1, num2) {
    return num1 + num2
  }

  // typescript ๐
  function tsAdd(num1: number, num2: number):number {
    return num1 + num2
  }


  // fetch

  // javascript ๐ฉ
  function jsFetchNum(id) {
    // code ..
    // code ..
    return new Promise((res, rej) => {
      res(100);
    })
  }

  // typescript ๐
  function tsFetchNum(id: string): Promise<number> {
    // code ..
    // code ..
    return new Promise((res, rej) => {
      res(100);
    })
  }

  // javascript => typescript
  // optional parameter "?" ์ด๊ฑธ ์ด์ฉํ๋ฉด ๋ฉ๋๋ค.
  // ์ ๋ฌํด๋ ๋๊ณ  ์๋ ๋ง๊ณ , ํ๋ ํ๋ผ๋ฏธํฐ์ ๋ฌผ์ํ๋ฅผ ๋ถ์ด๋ฉด ๊ฐ์ด ์์ด๋ ํจ์๋ฅผ ์ด์ฉํ  ์ ์์
  // function printName(firstName: string, lastName: string | undefined) { <= ์ด๋ ๊ฒ ์ธ์๋ ์์, ๊ทธ๋ฌ๋ ์ด๋ ๊ฒ ํ๋ฉด undefined๋ฅผ ๋ช์ํด์ค์ผ ํจ
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
