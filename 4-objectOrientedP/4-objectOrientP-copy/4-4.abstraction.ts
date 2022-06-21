{
    type CoffeeCup = {
        shots: number
        hasMilk: Milk
        withIce: Ice
    }
    type Milk = 'no milk' | 'with milk'
    type Ice = 'no ice' | 'with ice'

    class CoffeeMaKer {
        beans
        public static BEANS_GRAM_PER_SHOTS = 8
        coffee = {
            shots: 0,
            hasMilk: 'no milk',
            withIce: 'no ice'
        }

        constructor(beans: number) {
            this.beans = beans
        }

        prepare() {
            console.log('....heated🍜')
        }

        fillBeans(beans: number) {
            this.beans = beans
        }

        makeCoffee(shots: number, milk:Milk, ice: Ice): CoffeeCup {
            if (this.beans < shots * CoffeeMaKer.BEANS_GRAM_PER_SHOTS) {
                throw new Error ('not enough coffeebeans for shots')
            }
            this.beans -= shots * CoffeeMaKer.BEANS_GRAM_PER_SHOTS
            return {
                shots,
                hasMilk: milk,
                withIce: ice
            }
        }
    }

    const coffee = new CoffeeMaKer(50)
    coffee.prepare()
    console.log(coffee.makeCoffee(4, 'with milk', 'no ice'))
}
