{
    function checkNotNull<T>(arg: T | null): T {
        if (arg == null) {
            throw new Error ('not valid number!')
        }
        return arg
    }

    const number = checkNotNull(123)
    const boal: boolean = checkNotNull(true)

}

{
    interface Either<L, R> {
        left: () => L;
        right: () => R;
    }

    class SimpleEither<L, R> implements Either<L, R> {
        constructor(private leftValue: L, private rightValue: R) {}

        left(): L {
            return this.leftValue
        }

        right(): R {
            return this.rightValue
        }
    }

    const Ei: Either<number, number> = new SimpleEither(4, 2)
    console.log(Ei.left())
    console.log(Ei.right())

    const best: Either<object, number> = new SimpleEither({value: 2}, 4)
}

{
    interface Employee {
        pay(): void
    }

    class FullTimeEmployee implements Employee {
        pay() {
            console.log('full Time!!')
        }
        workFullTime() {
            console.log('열심히 일해요')
        }
    }

    class PartTimeEmployee implements Employee {
        pay() {
            console.log('part time!!')
        }

        workPartTime() {
            console.log('쉬엄쉬엄해요')
        }
    }

    function pay<T extends Employee>(employee: T): T {
        employee.pay()
        return employee
    }

    // function pay(employee: Employee): Employee {
    //     employee.pay();
    //     return employee
    // }

    const bob = new FullTimeEmployee()
    const john = new PartTimeEmployee()

    const dd = pay(john)
    dd.workPartTime()
    const ss = pay(bob)
    ss.workFullTime()
    ss.pay()
}

{
    const obj = {
        name: 'john',
        age: 40
    }

    const obj2 = {
        animal: 'dog',
        sex: 'female'
    }

    interface Value {
        item : object,
        value : string
    }

    function getValue<T, P extends keyof T>(item: T, value: P): T[P] {
        return item[value]
    }

    console.log(getValue(obj, 'name')) // john
    console.log(getValue(obj, 'age')) // 40
    console.log(getValue(obj2, 'animal')) // dog
}
