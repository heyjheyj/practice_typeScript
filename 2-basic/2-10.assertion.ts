{
  // type assertion π©

  function jsString(): any {
    return "hello";
  }

  const result = jsString();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // μμ  μλ¬ β οΈ

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers()!; // μ¬κΈ°λ ! μ¬μ© κ°λ₯ν¨
  // numbers.push(2) // μμ  μλ¬κ° λ¨ π±
  numbers!.push(2); // μ΄κ±΄ λΆλͺ λ°°μ΄μ΄μΌ λλ μ₯λ΄ν΄! ν  λ λλν μμ±ν¨
}

// μ₯λ΄ν  μ μμ λλ !λ₯Ό μ°μΈμ
{
  const button = document.querySelector('class')!
  if(button) {
    button.addEventListener('scroll', () => console.log('scroll'))
  }
}
