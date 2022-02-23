{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  type Milk = 'no milk' | 'with milk'

  // public 따로 지정하지 않으면 전부 public
  // private 외부에서 볼 수 없고 접근할 수 없음
  // protected 외부에서 접근할 수 없지만 이 클래스를 상속한 자식 클래스에서만 사용가능

  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class Level, 외부에서 접근할 필요가 없으므로 private
    private coffeeBeans: number = 0 // instance (object) level, 이것도 외부에서 접근하면 안되는 state
    coffee: CoffeeCup = {
      shots: 0,
      hasMilk: false
    }

    // 외부에서 constructor 생성자를 접근하지 못하도록 하고, 다른 함수들을 이용해서 변경하도록 만들어줌
    private constructor(beans: number) {
      this.coffeeBeans = beans;
      this.coffee;
    }

    static makeMachine(coffeebeans: number) {
      return new CoffeeMaker(coffeebeans)
    }

    fillCoffeeBeans(beans: number) {
      if(beans < 0 ) {
        throw new Error('value for beans should be greater than 0')
      } else {
        this.coffeeBeans += beans;
      }
    }

    makerCoffee(shots: number, milk: Milk):CoffeeCup {
      if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT){
        throw new Error('Not enough coffee beans')
      }
      if (milk === 'no milk') {
        this.coffee.hasMilk = false;
      } else {
        this.coffee.hasMilk = true;
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      this.coffee.shots = shots;

      return this.coffee
    }
  }

  // const coffee = new CoffeeMaker(50);
  // const client1 = coffee.makerCoffee(3, 'with milk');

  const coffeeMachine = CoffeeMaker.makeMachine(40);
  coffeeMachine.fillCoffeeBeans(40);
  console.log(coffeeMachine)
  let result = coffeeMachine.makerCoffee(3, 'no milk')
  console.log(result)
  console.log(coffeeMachine);
}

{
  class User {
    // firstName: string;
    // lastName: string;
    // fullName: string;

    get fullName() : string { // get함수를 이용해서 fullName을 바꿔줄 수 있도록 하면 변경된 이름이 출력됨
      return `${this.firstName} ${this.lastName}`
    }
    private internalAge = 4;

    get age(): number {
      return this.internalAge;
    }

    set age(num: number) {
      if (num < 0 ) {
        throw new Error('value for age should be greater than 0')
      }
      this.internalAge = num
    }

    // constructor 인자 앞에 public, private 등을 붙이면 자동으로 맴버변수로 설정됨
    constructor(public firstName: string, private lastName: string) {
      // this.firstName = firstName;
      // this.lastName = lastName;
      // this.fullName = `${firstName} ${lastName}`
    }    
  }

  // const user = new User();  2개 인자가 필요하다고 오류냄
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor

  const user = new User('Steve', 'Jobs');
  console.log(user.fullName); // Steve Jobs
  user.firstName = 'john';
  user.age = 6;
  // console.log(user.fullName); // Steve Jobs, firstName을 다른 값으로 할당했지만 fullName 값 자체가 변한게 아니므로 변경되지 않음
  console.log(user.fullName) // john jobs, get fullName()은 맴버 변수처럼 접근이 가능
  console.log(user);
}
