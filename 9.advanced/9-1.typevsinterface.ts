type PositionType = {
    x: number;
    y: number;
}

interface PositionInterface {
    x: number;
    y: number;
}



// Object 가능
const obj1: PositionType = {
    x: 1,
    y: 2
}

const obj2: PositionInterface = {
    x: 1,
    y: 2,
    z: 1
}

// class 가능

class Pos1 implements PositionType {
    x: number;
    y: number
}

class Pos2 implements PositionInterface {
    x: number;
    y: 1;
    z: number
}

// Extends

interface ZpositionInterface extends PositionInterface {
    z: number;
}

// type ZPositionType extends PositionType {
//     z: number
// }

type ZPositiontype = PositionType & { z: number };


// only interface can be merged
interface PositionInterface {
    z: number
}

// type PositionType {}
// Type aliases can use computed properties
type Person = {
    name: string,
    age: number
}

type Name = Person['name'] // Name의 type은 string