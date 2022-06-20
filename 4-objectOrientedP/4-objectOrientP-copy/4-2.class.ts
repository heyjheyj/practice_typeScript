{
    type CoffeeCup = {
        shots: number
        hasMilk: boolean
    }

    class MakeCoffee {
        static BEANS_GRAM_PER_SHOTS = 7;
        coffeeBeans: number = 0;
        coffee: CoffeeCup = {
            shots: 0,
            hasMilk: false
        }

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
            this.coffee;
        }

        makeCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * MakeCoffee.BEANS_GRAM_PER_SHOTS) {
                throw new Error ('Not enough Coffee Beans')
            }
            this.coffeeBeans -= shots * MakeCoffee.BEANS_GRAM_PER_SHOTS;
            return this.coffee
        }
    }

    const coffee = new MakeCoffee(40)
    console.log(coffee.makeCoffee(9))

    // const result = coffee.makeCoffee()
    // console.log(result)
}

// static을 사용하면 this로 접근하는 것이 아니라 객체의 value처럼 접근이 가능
