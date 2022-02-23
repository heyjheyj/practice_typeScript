// {
//   type CoffeeCup = {
//     shots: number,
//     hasMilk: boolean;
//   }

//   const BEAN_GRAM_PER_SHOT: number = 7;

//   let coffeeBeans: number = 0;
//   function makeCoffee(shots: number):CoffeeCup {
//     if(coffeeBeans < shots * BEAN_GRAM_PER_SHOT) {
//       throw new Error('Not enough coffee Beans!')
//     }
//     coffeeBeans -= shots * BEAN_GRAM_PER_SHOT;
//     return {
//       shots: shots,
//       hasMilk: false, 
//     }
//   }

//   coffeeBeans += 3 * BEAN_GRAM_PER_SHOT;
//   const coffee = makeCoffee(2);
//   console.log(coffee)
// }

// {
//   type CoffeeCup = {
//     shots: number,
//     hasMilk: boolean
//   }

//   type Milk = 'no milk' | 'with milk'

//   const BEANS_CRAM_PER_SHOT: number = 6;

//   let coffeebeans: number = 0;
//   function CoffeeMaker(shots: number, hasMilk: Milk):CoffeeCup {
//     let mycoffee = {
//       shots: shots,
//       hasMilk: false
//     }

//     if(coffeebeans < shots * BEANS_CRAM_PER_SHOT) {
//       throw new Error('not enough coffee beans')
//     }
//     coffeebeans = coffeebeans - shots*BEANS_CRAM_PER_SHOT
//     if(hasMilk === 'no milk') {
//       mycoffee.hasMilk = false;
//     } else {
//       mycoffee.hasMilk = true;
//     }
//     return mycoffee;
//   }

//   coffeebeans = 4 * BEANS_CRAM_PER_SHOT;
//   const myCoffee = CoffeeMaker(2, 'no milk')
//   console.log(myCoffee)
// }


{
  type Message = {
    user: string,
    text: string,
    hasImage: boolean
  }

  type Image = 'no image' | 'with image'

  function cocainTalk(user: string, text: string, hasImage: Image): Message {
    let message = {
      user: user,
      text: text,
      hasImage: false
    }
    if(hasImage === 'no image') {
      message.hasImage = false;
    } else {
      message.hasImage = true;
    }

    return message;
  }

  const mymessage = cocainTalk('hj', 'hello', 'no image')
  console.log(mymessage)
}