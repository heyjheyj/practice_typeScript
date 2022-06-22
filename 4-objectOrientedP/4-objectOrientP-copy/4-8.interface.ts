{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        sugar?: boolean;
    }

    type Milk = 'no milk' | 'with milk'
    type Sugar = 'no sugar' | 'with sugar'

    interface CoffeeMaker {
        makerCoffee(shots: number, milk: MilkFrother, sugar:SugarProvider, ): CoffeeCup
}


    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;
        private coffee: CoffeeCup = {
            shots: 0,
            hasMilk: false,
            sugar: false,
        }

        constructor(beans: number, private milk: MilkFrother, private sugar: SugarProvider) {
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

        private extract(shots: number) {
            console.log(`Pulling ${shots} shots... `)
            this.coffee.shots = shots;

            return this.coffee
        }

        private pourMilk(milk?: Milk) {
            console.log('pouring milk...🥛')
            return this.coffee.hasMilk = true;
        }

        makerCoffee(shots: number, milk: MilkFrother, sugar: SugarProvider):CoffeeCup {
            this.grindBeans(shots)
            this.preheat();
            const coffee = this.extract(shots)
            const withMilk = milk.makeMilk(coffee)
            return sugar.addSugar(withMilk)
        }
    }

    interface MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup
    }

    interface SugarProvider {
        addSugar(cup:CoffeeCup): CoffeeCup
    }

    // 싸구려 우유 거품기
    class CheapMilkSteamer implements MilkFrother{
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
    class FancyMilkSteamer implements MilkFrother{
        private steamMilk(): void {
            console.log('Fancy Steaming some milk...🥛')
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }
    class ColdMilkSteamer implements MilkFrother{
        private steamMilk(): void {
            console.log('Cold some milk...🥛')
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }
    class NoMilk implements MilkFrother{
        makeMilk (cup: CoffeeCup): CoffeeCup {
            return cup
    }
}

    // 설탕 제조기
    class AutomaticSugarMixer implements SugarProvider{
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
    class SugarMixer implements SugarProvider{
        private getSugar() {
            console.log('Getting some sugar from jar...')
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
    // class SweetCaffeLatteMachine extends CoffeeMachine {
    //     constructor(private beans: number, private milk: MilkFrother, private sugar: SugarProvider) {
    //         super(beans)
    //     }
    //     makerCoffee(shots: number): CoffeeCup {
    //         const coffee = super.makerCoffee(shots);
    //         return this.milk.makeMilk(this.sugar.addSugar(coffee));
    //     }
    // }
    //
    // const mycoffee = new SweetCaffeLatteMachine(30, new CheapMilkSteamer, new AutomaticSugarMixer);
    // const result = mycoffee.makerCoffee(3)
    // console.log(result)

    // milk
    const cheapMilkMaker = new CheapMilkSteamer()
    const fancyMilkMaker = new FancyMilkSteamer()
    const coldMilkMaker = new ColdMilkSteamer()
    const noMilkMaker = new NoMilk()

    // sugar
    const candySuger = new AutomaticSugarMixer()
    const sugar = new SugarMixer()

    // coffeeMaker
    const sweetCandyMachine = new CoffeeMachine(12, fancyMilkMaker, candySuger)
    sweetCandyMachine.fillCoffeeBeans(30)
    sweetCandyMachine.makerCoffee(2, coldMilkMaker, sugar)
}
