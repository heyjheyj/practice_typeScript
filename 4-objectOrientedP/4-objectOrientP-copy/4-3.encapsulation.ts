{
    type CoffeeCup = {
        shots: number
        hasMilk: hasMilk
    }

    type hasMilk = 'no milk'| 'with milk'

    class MakeCoffee {
        private static BEANS_GRAM_PER_SHOTS = 7;
        private coffeeBeans: number = 0;
        coffee: CoffeeCup = {
            shots: 0,
            hasMilk: 'no milk'
        }

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): MakeCoffee {
           return new MakeCoffee(coffeeBeans)
        }

        public fillCoffeeBeans(beans: number) {
            if (beans < 0) throw new Error('value for Beans should be greater than 0')
            this.coffeeBeans += beans
        }

        public makeCoffee(shots: number, milk: hasMilk): CoffeeCup {
            if (this.coffeeBeans < shots * MakeCoffee.BEANS_GRAM_PER_SHOTS) {
                throw new Error ('Not enough Coffee Beans')
            }
            this.coffeeBeans -= shots * MakeCoffee.BEANS_GRAM_PER_SHOTS;
            return {
                shots: shots,
                hasMilk: milk
            }
        }
    }

    const coffee = MakeCoffee.makeMachine(50)
    coffee.fillCoffeeBeans(4)
    console.log(coffee.makeCoffee(4, 'with milk'))

    // const result = coffee.makeCoffee()
    // console.log(result)
}

// static을 사용하면 this로 접근하는 것이 아니라 객체의 value처럼 접근이 가능


{
    class User {
        // firstName: string
        // lastName: string
        // fullName: string

        private internalAge = 30

        constructor(public firstName: string, private lastName: string) {
        }

        get fullName() : string {
            return `${this.firstName} ${this.lastName}`
        }

        get age(): number {
            return this.internalAge
        }

        set age(age: number) {
            if (age < 0) {
                throw new Error ('Age must be greater than 0')
            }
            this.internalAge = age
        }
    }
}
