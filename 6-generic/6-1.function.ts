{
  // 넘버를 받아서 넘버를 리턴하는 함수, parameter가 number인지 체크하는 함수
  function checkNotNullBad(arg: number | null): number {
    if(arg == null) {
      throw new Error('not valid number!')
    }
    return arg
  }

  // 어떤 타입이든 받아서 리턴하는 함수
  function checkNotNullAnyBad(arg: any | null): any {
    if(arg == null) {
      throw new Error('not valid number')
    }
    return arg;
  }

  // generic 함수. T를 받아서 T 를 리턴
  function checkNotNull<T>(arg: T | null): T {
    if(arg == null) {
      throw new Error('not valid number')
    }
    return arg;
  }
  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true)
}