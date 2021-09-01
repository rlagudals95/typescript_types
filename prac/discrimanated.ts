{
    type SuccessState = {
        result:'success',
        response: {
            body: string;
        };
    }

    type FailState = {
        result:'fail',
        reason: string;
    }

    type LoginState = SuccessState | FailState


    function login(id:string, password:string ): LoginState {
        return {
            result:'success',
            response: {
                body: 'login success'
            }
        }
    };

    //printLoginState(state)
    //success => 🐱‍🏍body
    //fail => 😅

    function printLoginState(state: LoginState) {
        state.result// success or fail
        // 썩 좋은 방법은 아님...!
        if (state.result ==='success') { // response라는 key가 state안에 있다면(성공) 조건
            console.log(`🐱‍🏍 ${state.response}`);
        } else {
            console.log(`😂 ${state.reason}`)
        }
        // discrimiated를 알아보자
    }

}