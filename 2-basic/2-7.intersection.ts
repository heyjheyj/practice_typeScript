{
  // Intersection Types : &
  // 타입을 결합시켜서 만들수 있음

  type Student = {
    name: string;
    score: number;
  }

  type Worker = {
    employeeId: number;
    work: () => void
  }

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work())
  }

  // 모든 값을 넣어주지 않으면 에러가 발생
  internWork({
  name: 'angela',
  employeeId: 2,
  score: 20,
  work: function (): void {
    throw new Error('Function not implemented.')
  }
})

}