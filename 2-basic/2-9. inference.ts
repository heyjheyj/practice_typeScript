{
  // Tpye interence
  // 타입이 뻔한 경우에는 안써줘도 괜찮음요. 그렇지만 안 쓰는게 좋아요... 타입을 명시하는 게 좋음ㅠㅠ

  let text = 'hello';
  
  function print(message: string = 'hello') {
    console.log(message);
  }
  print('hoho')

  function add(x:number, y:number):number {
    return x + y;
  }
  const result = add(1,2)
}