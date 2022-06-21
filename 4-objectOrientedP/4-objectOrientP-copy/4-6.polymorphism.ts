{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
        sugar?: boolean
    }

    type Milk = 'no milk' | 'with milk'


    class CoffeeMachine {
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
            if (beans < 0) {
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
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
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

        makerCoffee(shots: number, milk: Milk): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            if (milk === 'no milk') {
                return this.extract(shots)
            } else {
                this.pourMilk(milk)
                return this.extract(shots)
            }
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        milk
        constructor(beans:number, shots:number, milk: Milk) {
            super(beans)
            this.milk = milk
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makerCoffee(shots, this.milk)
            return {
                ...coffee,
                sugar: true
            }
        }

    }

    const machines = [
        new CoffeeMachine(33),
        new SweetCoffeeMaker(30, 2, 'with milk')
    ]

    machines.forEach(machine => {
        console.log('-------------------------------------')
        console.log(machine.makerCoffee(1, 'no milk'))
        }
    )
}
