{
    type SuccessState = {
        result: 'success'
    }

    type NetworkErrorState = {
        result : 'fail';
        reason: 'offline' | 'down' | 'timeout'
    }

    type ResultState = SuccessState | NetworkErrorState

    class NetworkClient {
        tryConnect(): ResultState {}
    }

    class UserService {
        constructor(private client: NetworkClient) {
        }

        login() {
            this.client.tryConnect()
        }

        // login.
    }

    class App {
        constructor(private userService: UserService) {
        }

        run() {
            try {
                this.userService.login()
            } catch (error) {
                // show dialog to user
                // catch로 error를 받으면  error는 any타입이므로 지정
            }

        }
    }

    const client = new NetworkClient()
    const service = new UserService(client)
    const app = new App(service)
    app.run()
}

// 에러 처리를 어디서 하는 게 좋을까 고민을 해보자
// 의미있는 에러 처리를 할 수 있는 곳은? 어딜지?!