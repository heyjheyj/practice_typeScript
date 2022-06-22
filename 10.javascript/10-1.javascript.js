const x = {}
const y = {}
console.log(x)
console.log(y)
console.log(x.toString())
console.log(x.__proto__ === y.__proto__)

const array = []
console.log(array)

console.clear()

function CoffeeMachine(beans) {
    this.beans = beans;
    // Instance member level
    // this.makerCoffee = shots => {
    //     console.log('making...coffee')
    // }
}

// Prototype member Level
CoffeeMachine.prototype.makerCoffee = (shots) => {
    console.log('making....coffee')
}

const machine1 = new CoffeeMachine(20)
const machine2 = new CoffeeMachine(30)
console.log(machine1)
console.log(machine2)

function LatteMachine(milk) {
    this.milk = milk
}

LatteMachine.prototype = Object.create(CoffeeMachine.prototype)

const latteMachine = new LatteMachine(1)
console.log(latteMachine)
