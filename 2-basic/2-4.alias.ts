{
  // Type Aliases

  type Text = string;
  const name:Text = 'john';
  const address:Text = 'korea';

  type Num = number;
  type Student = {
    name: string,
    age: number
  };
  
  const student: Student = {
    name: "john",
    age: 20
  }

  // String Literal Types
  type Name = 'name';
  let dogName: Name;
  // dogName = "tommy" <- 에러남
}