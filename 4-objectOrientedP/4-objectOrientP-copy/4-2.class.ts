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

        constructor(coffeeBeans: number, shots:number) {
            this.coffeeBeans = coffeeBeans;
            this.coffee.shots = shots
        }

        makeCoffee(): CoffeeCup {
            if (this.coffeeBeans < this.coffee.shots * MakeCoffee.BEANS_GRAM_PER_SHOTS) {
                throw new Error ('Not enough Coffee Beans')
            }
            this.coffeeBeans -= this.coffee.shots * MakeCoffee.BEANS_GRAM_PER_SHOTS;
            return this.coffee
        }
    }

    const coffee = new MakeCoffee(40, 9)
    console.log(coffee)

    // const result = coffee.makeCoffee()
    // console.log(result)
}
