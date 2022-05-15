{
    const obj = {
        name: 'john'
    }

    // type도 동일

    type Animal = {
        name: string;
        age: number;
        sex: 'male' | 'female'
    }

    type Name = Animal['name'] // typeof Name === string
    const text: Name = 'dog'

    type Sex = Animal['sex'] // male | female

    type keys = keyof Animal

    const key: keys = 'age' // console.log(key) === age

    type Person = {
        name: string;
        gender: Animal['sex']
    }

    const person: Person = {
        name: 'john',
        gender: 'male'
    }
}