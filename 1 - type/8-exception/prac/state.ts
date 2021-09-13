{
    class TimeoutError extends Error {
        
    }

    class offlineError extends Error {
        
    }

    type SuccessState = {
        result: 'success';
    }

    type NetworkErrorState = {
        result: 'fail';
        reason: 'offline' | 'down' | 'timeout';
    }
    type ResultState = SuccessState | NetworkErrorState;

    class NetworkClient {
        tryConnect(): ResultState {
            throw new offlineError ('no network')
        }
    };

    class UserService {
        constructor(private client: NetworkClient) {
            
        }

        login() {

            try {
                 this.client.tryConnect();
            } catch {
                throw new Error('login error')
            }

        }
    }

    const client = new NetworkClient();
    const service = new UserService(client);
    service.login();

    class App {
        constructor(private useService: UserService) { }     
        // UserService의 로그인 보다 App에서 에러를 catch하는 것이 더 좋다
        // 그 이유는 좀 더 의미있는 에러를 보여줄 수 있기 때문!
        run() {
            try {
                this.useService.login();
            } catch {
                throw new Error('login error')
            }

            
        };
    }

    const netService = new UserService(client);
    const app = new App(netService);
    app.run();
}