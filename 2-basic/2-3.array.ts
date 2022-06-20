{
  // Array
  const fruits: string[] = ['🍏', '🍌', '🍉'];
  const scores: Array<number> = [1, 2, 3];

  // readonly는 Array<number>랑 같이 쓸 수 없어요.
  // readonly는 함수 안에서 파라미터를 변경할 수 없다는 것을 명시
  function printArray(fruits: readonly string[]) {
    // fruits.push('🍊') readonly 때문에 변경이 안됨
  }

  // Tuple -> interface, type alias, class로 변경해서 사용하는 것이 좋음
  let student: [string, number];
  student=['name', 123];
  // 이렇게 접근하면 어떤 값이 들어있는지 알기 어려움
  student[0] // name
  student[1] // 123
  const [name, age] = student;


}
