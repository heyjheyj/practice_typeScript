// 상속의 문제점 : 족보가 꼬인다 🤢
// 상속이 심화될수록 기능이 꼬이는 문제점이 있음
// tpyescript에서는 하나 이상의 부모 class를 상속할 수 없음

// favor Composition over inheritance!
// overEngineering x

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

    private pourMilk(milk?: Milk) {
      console.log('pouring milk...🥛')
      return this.coffee.hasMilk = true;
    }

    makerCoffee(shots: number, milk?: Milk, sugar?: Sugar):CoffeeCup {
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
    makeCoffee(shots: number, milk: Milk, sugar: Sugar): CoffeeCup {
      // super를 이용하면 부모 함수를 사용할 수 있음
      const coffee = super.makerCoffee(shots, milk, sugar)
      this.steamMilk();
      return coffee
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(private beans: number, private getCoffee: AutomaticSugarMixer) {
      super(beans);
    }

    makeCoffee(shots: number, milk: Milk, sugar: Sugar) {
      let result = super.makerCoffee(shots, milk, sugar)
      return this.getCoffee.addSugar(result)
    }
  }

  // 싸구려 우유 거품기
  class CheapMilkSteamer {
    private steamMilk(): void {
      console.log('Steaming some milk...🥛')
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  // 설탕 제조기
  class AutomaticSugarMixer {
    private getSugar() {
      console.log('Getting some sugar from candy...🍬')
      return true;
    }
    addSugar(cup: CoffeeCup) : CoffeeCup {
      const sugar = this.getSugar()
      return {
        ...cup,
        sugar: sugar
      }
    }
  }

  // composition
  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(private beans: number, private milk: CheapMilkSteamer, private sugar: AutomaticSugarMixer) {
      super(beans)
    }
    makerCoffee(shots: number): CoffeeCup {
      const coffee = super.makerCoffee(shots);
      return this.milk.makeMilk(this.sugar.addSugar(coffee));
    }
  }

  const mycoffee = new SweetCaffeLatteMachine(30, new CheapMilkSteamer, new AutomaticSugarMixer);
  const result = mycoffee.makerCoffee(3)
  console.log(result)
}