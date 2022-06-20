{
  // Union Types: OR
  type Direction = 'right' | 'left' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('left')

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16

  // function login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    }
  }
  type FailState = {
    reason: string;
  }
  type LoginState = SuccessState | FailState

  // function login(id:string, password: string): Promise<LoginState> {
  function loginFunction(): LoginState {
    return {
      response: {
        body: 'logged in!'
      }
    }
  }

  // printLoginState(state)
  // success -> 🎉 body
  // fail -> 😢 reason

  function printLoginStateFunction(state: LoginState): void {
    if('response' in state) {
      console.log(`🎉 ${state.response.body}`)
    } else {
      console.log(`😢 ${state.reason}`)
    }
  }
}

type Success = {
  response : {
    body: string
  }
}

type Fail = {
  reason: string
}

type Result = Success | Fail

// function login -> success, fail
function login (id:string, pw: string): Result {

  return {
    response: {
      body: 'logged in!'
    }
  }
}

function loginState(state:Result): void {
  if ('response' in state) {
    console.log(`🎉 ${state.response.body}`)
  } else {
    console.log(`${state.reason}😭`)
  }
}
