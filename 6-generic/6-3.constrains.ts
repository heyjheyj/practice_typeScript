interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log("full time!");
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log("part time!");
  }
  workPartTime() {}
}

// 세부적인 타입을 받아서 추상적인 타입으로 다시 리턴하는 함수는 💩
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

// Employee만 확장한 타입만 받을 수 있음
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const john = new FullTimeEmployee();
const bob = new PartTimeEmployee();

const johnAfterPay = pay(john);
const bobAfterPay = pay(bob);
// johnAfterPay.workFullTime() 안됨...
