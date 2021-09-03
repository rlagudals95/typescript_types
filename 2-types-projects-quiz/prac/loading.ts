{
    type LoadingState = {
        state: 'loading';
    };

    type SuccessState = {
        state: 'success';
        response: {
            body: string;
        };
    }

    type FailState = {
        state: 'fail';
        reason: string;
    }

    type ResourceLoadState = LoadingState | SuccessState | FailState;

    function stat(state:ResourceLoadState) {
        switch (state.state) {
            case 'loading':
                console.log('loading...');
                break;
            case 'success':
                console.log(`${state.response.body}`);
                break;
            case 'fail':
                console.log(`${state.reason}`);
                break;
            default:
                throw new Error(`unknown state ${state}`)
        }
    }
        
    stat({ state: 'loading' });
    stat({ state: 'success', response: { body: 'loaded' } });
    stat({ state: 'fail', reason: 'no network' });

}