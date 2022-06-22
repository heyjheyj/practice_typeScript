console.log(this)

console.clear()

function simpleFunc() {
    console.log(this)
}

class Counter {
    count = 0

    // arrow function을 이용하면 bind를 하지 않아도 this의 정보를 잃지 않음
    increase = () => {
        console.log(this)
    }

    // increase = function () {
    //     console.log(this)
    // }
}

const counter = new Counter()
counter.increase()
// const caller = counter.increase // 여기서 this의 정보를 잃어버린 것
const caller = counter.increase.bind(counter) // this의 정보를 잃어버리지 않기 위해서 bind라는 함수를 이용해 묶어줘야 함
caller()

class Bob {

}
const bob = new Bob()
bob.run = counter.increase
bob.run()
