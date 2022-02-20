/**
 * Let's make a game 🕹
 */

type Position = {
  x : number,
  y: number
}
type Command = 'up' | 'down' | 'left' | 'right';

let position: Position = {
  x: 0,
  y: 0
}

function move(command: Command):Position {
  switch (command) {
    case 'up':
      return position = {
        x: position.x,
        y: position.y + 1, // position.y += 1
      }
    case 'down':
      return position = {
        x: position.x,
        y: position.y - 1
      }
    case 'left':
      return position = {
        x: position.x - 1,
        y: position.y
      }
    case 'right':
      return position = {
        x: position.x +1,
        y: position.y
      }
    default:
      throw new Error('unknown error')
  }
}

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}


// 답안

const xyposition = { x: 0, y: 0}

function moveon(direction: 'up' | 'down' | 'left' | 'right') {
  switch(direction) {
    case 'up' :
      position.y += 1;
      break;
    case 'down' :
      position.y -= 1;
      break;
    case 'left' :
      position.x -= 1;
      break;
    case 'right':
      position.x += 1;
      break;
    default:
      throw new Error(`unknown direction: ${direction}`)
  }
}