{
    // union type  => 간단하게 or로 생각해보자
    // 특정 타입을 |을 이용해 딱 정해준다

    type Direction = 'left' | 'right' | 'up' | 'down';

    function move(direction: Direction) {
        console.log(direction);
    };

    move('down'); // 문자열 입력시 자동완성 'left' | 'right' | 'up' | 'down'

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 4; // error

    // login 함수 예시 success or fail

    type SuccessState = {
        response: {
            body: string;
        };
    }

    type FailState = {
        reason: string;
    }

    type LoginState = SuccessState | FailState


    function login(id:string, password:string ): LoginState {
        return {
            response: {
                body: 'login success'
            }
        }
    };

    //printLoginState(state)
    //success => 🐱‍🏍body
    //fail => 😅

    function printLoginState(state: LoginState) {

        // 썩 좋은 방법은 아님...!
        if ('response' in state) { // response라는 key가 state안에 있다면(성공) 조건
            console.log(`🐱‍🏍 ${state.response}`);
        } else {
            console.log(`😂 ${state.reason}`)
        }

        // discrimiated를 알아보자
    }

}

