{
  // function login -> success, fail
  // 구분이 쉽도록 동일한 데이터를 가지고 있는 타입으로 만들어주는 것이 좋다.
  // result를 넣어서 구분(discriminated)

  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    result: "fail";
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  // function login(id:string, password: string): Promise<LoginState> {
  function login(): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in!"
      }
    };
  }

  // printLoginState(state)
  // success -> 🎉 body
  // fail -> 😢 reason

  function printLoginState(state: LoginState): void {
    // if('response' in state) {
    //   console.log(`🎉 ${state.response.body}`)
    // } else {
    //   console.log(`😢 ${state.reason}`)
    // }

    if (state.result === "success") {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😢 ${state.reason}`);
    }
  }
}
