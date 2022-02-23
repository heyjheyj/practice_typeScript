{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    sugar?: boolean;
  }

  type Milk = 'no milk' | 'with milk'
  type Sugar = 'no sugar' | 'with sugar'

  interface CoffeeMaker {
    makerCoffee(shots: number, milk: Milk, sugar:Sugar): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; 
    private coffeeBeans: number = 0;
    private coffee: CoffeeCup = {
      shots: 0,
      hasMilk: false,
      sugar: false,
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

    makerCoffee(shots: number, milk: Milk, sugar: Sugar):CoffeeCup {
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

  // 자식 클래스에서 이용할 수 있는 것을 특화해서 만들 수 있음
  class CafeLatteMachine extends CoffeeMachine {
    constructor(beans:number, public readonly serialNumber: string) {
      super(beans);
      this.serialNumber = serialNumber;
    }

    private steamMilk(): void {
      console.log('steamed milk...')
    }
    makeCoffee(shots: number, milk: Milk, sugar: Sugar): CoffeeCup {
      // super를 이용하면 부모 함수를 사용할 수 있음
      const coffee = super.makerCoffee(shots, milk, sugar)
      this.steamMilk();
      return coffee
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(beans: number, private sugar: boolean) {
      super(beans);
      this.sugar = sugar;
    }

    private addSugar(sugar: Sugar): void {
      this.sugar = true;
      console.log('adding sugar for making coffee sweet🥰')
    }
    makeCoffee(shots: number, milk: Milk, sugar: Sugar) {
      let result = super.makerCoffee(shots, milk, sugar)
      this.addSugar(sugar);
      Object.assign(result, {sugar : this.sugar})
      return result;
    }
  }

  // const machine = new CoffeeMachine(30);
  // console.log(machine);

  // const SugarMachine = new SweetCoffeeMaker(40, true)
  // console.log(SugarMachine)
  // const mycoffee = SugarMachine.makeCoffee(2, 'no milk');
  // console.log(mycoffee)
  

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(30),
    new CafeLatteMachine(20, '1'),
    new SweetCoffeeMaker(30, true),
    new CoffeeMachine(30),
    new CafeLatteMachine(20, '1'),
    new SweetCoffeeMaker(30, true)
  ];

  machines.forEach(machine => {
    console.log('----------------------------------')
    machine.makerCoffee(1, 'with milk', 'with sugar');
  })
  // const latteMachine = new CafeLatteMachine(30, 'amateur');
  // console.log(latteMachine)

  // const coffee1 = latteMachine.makeCoffee(2, 'with milk')
  // console.log('coffee1', coffee1)
  
  // const coffee2 = latteMachine.makeCoffee(1, 'no milk')
  // console.log('coffee2', coffee2)

  // const coffee3 = latteMachine.makeCoffee(1, 'with milk')
  // console.log('coffee3', coffee3)
}