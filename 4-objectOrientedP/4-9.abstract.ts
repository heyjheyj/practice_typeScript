// abstract class는 그 자체로 객체(instance)를 만들 수 없음
// 자식들마다 달라질 수 있는 method 들에는 protected abstract를 앞에 붙이고 안에 로직을 넣지 않아야 함
// 자식 클래스에서 해당 로직들을 각각 작성해주면 됨

// abstract를 이용하면 꼭 자식 클래스에서 그 기능을 명시해줘야 함

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

  abstract class CoffeeMachine implements CoffeeMaker {
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

    protected abstract extract(shots: number): CoffeeCup;

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

  class CafeLatteMachine extends CoffeeMachine {
    constructor(beans:number, public readonly serialNumber: string) {
      super(beans);
      this.serialNumber = serialNumber;
    }

    private steamMilk(): void {
      console.log('steamed milk...')
    }

    protected extract(shots: number): { shots: number; hasMilk?: boolean | undefined; sugar?: boolean | undefined; } {
        this.steamMilk();
        return {
          shots,
          hasMilk: true,
        }
    }
  }

  const machines: CoffeeMaker[] = [
    // new CoffeeMachine(30), 이 클래스는 추상화되었기 때문에 instance로 만들 수 없음
    new CafeLatteMachine(20, '1'),
  ];

  machines.forEach(machine => {
    console.log('----------------------------------')
    machine.makerCoffee(1, 'with milk', 'with sugar');
  })
}
