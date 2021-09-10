{
    function checkNotNullBad(arg: number | null): number {
        
        if (arg == null) {
            throw new Error('not valid number');
        }
        return arg
    }
    


    function checkNotNullAny(arg: any | null): any {
        
        if (arg == null) {
            throw new Error('not valid number');
        }

        return arg;
    }


    //generic을 이용하면 어떤 타입도 받을 수 있다.


    function checkNotNull<T>(arg:T | null):T {
         if (arg == null) {
            throw new Error('not valid number');
        }

        return arg;
    }

    const number = checkNotNull(123); // 코딩을 하는 시점 선언되는 시점에 checkNotNull은 number을 리턴하는 함수로 된다!
    const boal: boolean = checkNotNull(true);
}