{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  type Milk = 'no milk' | 'with milk'

  interface CoffeeMaker {
    makerCoffee(shots: number, milk: Milk): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; 
    private coffeeBeans: number = 0;
    private coffee: CoffeeCup = {
      shots: 0,
      hasMilk: false
    }

    constructor(beans: number) {
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
      console.log('Ready to extract shots...π₯')
    }

    private extract(shots: number) {
      console.log(`Pulling ${shots} shots... `)
      this.coffee.shots = shots;

      return this.coffee
    }

    private pourMilk(milk: Milk) {
      console.log('pouring milk...π₯')
      return this.coffee.hasMilk = true;
    }

    makerCoffee(shots: number, milk: Milk):CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      if (milk === 'no milk') {
        this.coffee.hasMilk = false;
        return this.extract(shots)
      } else {
        this.pourMilk(milk)
        return this.extract(shots)
      }
    }
  }

  // μμ ν΄λμ€μμ μ΄μ©ν  μ μλ κ²μ νΉνν΄μ λ§λ€ μ μμ
  class CafeLatteMachine extends CoffeeMachine {
    constructor(beans:number, public readonly serialNumber: string) {
      super(beans);
      this.serialNumber = serialNumber;
    }

    private steamMilk(): void {
      console.log('steamed milk...')
    }
    
    makeCoffee(shots: number, milk: Milk): CoffeeCup {
      // superλ₯Ό μ΄μ©νλ©΄ λΆλͺ¨ ν¨μλ₯Ό μ¬μ©ν  μ μμ
      const coffee = super.makerCoffee(shots, milk)
      this.steamMilk();
      return coffee
    }
  }

  const machine = new CoffeeMachine(30);
  console.log(machine);
  
  const latteMachine = new CafeLatteMachine(30, 'amateur');
  console.log(latteMachine)

  const coffee1 = latteMachine.makeCoffee(2, 'with milk')
  console.log('coffee1', coffee1)
  
  const coffee2 = latteMachine.makeCoffee(1, 'no milk')
  console.log('coffee2', coffee2)

  const coffee3 = latteMachine.makeCoffee(1, 'with milk')
  console.log('coffee3', coffee3)
}