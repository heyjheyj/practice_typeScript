{
  // 정보 은닉을 통해서 추상화가 가능 : private을 이용해서 충분히 가능하지만, interface를 이용해서 이용방법을 명시
  // interface를 이용해 사용 가능한 함수들만 접근할 수 있도록 만듦

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  type Milk = 'no milk' | 'with milk'

  interface CoffeeMaker {
    makerCoffee(shots: number, milk: Milk): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makerCoffee(shots: number, milk: Milk): CoffeeCup;
    fillCoffeeBeans(beans: number) : void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; 
    private coffeeBeans: number = 0;
    private coffee: CoffeeCup = {
      shots: 0,
      hasMilk: false
    }

    private constructor(beans: number) {
      this.coffeeBeans = beans;
      this.coffee;
    }

    static makeMachine(coffeebeans: number) {
      return new CoffeeMachine(coffeebeans)
    }

    fillCoffeeBeans(beans: number) {
      if(beans < 0 ) {
        throw new Error('value for beans should be greater than 0')
      } else {
        this.coffeeBeans += beans;
      }
    }

    clean(): void {
        console.log('cleaning the machine....')
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans')
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat(): void {
      console.log('Ready to extract shots...🔥')
    }

    private extract(shots: number) {
      console.log(`Pulling ${shots} shots... `)
      this.coffee.shots = shots;

      return this.coffee
    }

    private pourMilk(milk: Milk) {
      console.log('pouring milk...🥛')
      return this.coffee.hasMilk = true;
    }

    makerCoffee(shots: number, milk: Milk):CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      if (milk === 'no milk') {
        return this.extract(shots)
      } else {
        this.pourMilk(milk)
        return this.extract(shots)
      }
      // if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT){
      //   throw new Error('Not enough coffee beans')
      // }
      // if (milk === 'no milk') {
      //   this.coffee.hasMilk = false;
      // } else {
      //   this.coffee.hasMilk = true;
      // }

      // this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
      // this.coffee.shots = shots;

      // return this.coffee
    }
  }

  // interface에 없는 함수들은 사용할 수 없음

  // let result = coffeeMachine.makerCoffee(3, 'no milk')
  // console.log(result)
  // console.log(coffeeMachine);

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {
    }
    makerCoffee() {
      const coffee = this.machine.makerCoffee(2, 'no milk')
    }
  }

  // class AmateurUser {
  //   constructor(private machine: CoffeeMachine) {
  //   }
  //   makerCoffee() {
  //     const coffee = this.machine.makerCoffee(2, 'no milk')
  //   }
  // }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker){}
    makerCoffee() {
      const coffee = this.machine.makerCoffee(3, 'with milk')
      console.log(coffee)
      this.machine.fillCoffeeBeans(50);
      this.machine.clean()
    }
  }

  // class ProBarista {
  //   constructor(private machine: CommercialCoffeeMaker){}
  //   makeCoffee() {
  //     const coffee = this.machine.makerCoffee(3, 'with milk')
  //     console.log(coffee)
  //     this.machine.fillCoffeeBeans(40);
  //     this.machine.clean();
  //   }
  // }
  const maker: CoffeeMachine = CoffeeMachine.makeMachine(40);
  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);
  pro.makerCoffee()
}