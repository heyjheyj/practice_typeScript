{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  type Milk = 'no milk' | 'with milk'

  class CoffeeMaker {
    static BEANS_GRAM_PER_SHOT: number = 7; // class Level
    coffeeBeans: number = 0 // instance (object) level
    coffee: CoffeeCup = {
      shots: 0,
      hasMilk: false
    }

    constructor(beans: number) {
      this.coffeeBeans = beans;
      this.coffee;
    }

    static makeMachine(coffeebeans: number) {
      return new CoffeeMaker(coffeebeans)
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

  const coffeeMachine = CoffeeMaker.makeMachine(30)
  
  console.log(coffeeMachine.makerCoffee(2, 'with milk'))
  console.log(coffeeMachine.makerCoffee(1, 'no milk'))
}