{
  // type assertion 💩

  function jsString(): any {
    return 'hello';
  }

  const result = jsString();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)) // 완전 에러 ☠️


  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers()!; // 여기도 ! 사용 가능함
  // numbers.push(2) // 완전 에러가 남 😱
  numbers!.push(2) // 이건 분명 배열이야 나는 장담해! 할 때 느낌표 작성함
}