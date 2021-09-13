{
    // 꼬박꼬박 타입을 정의해주지 않아도 됨
    // 그러나 타입을 정확하게 명시하는 것이 좋다..!

    let text = 'hello'; // 타입선언을 안해도 string 타입이 정의됨
    text = 1; 
    
    function print(message = 'hello') { // 파라미터 기본값과 타입은 string으로 자동으로 정의
        console.log(message);
    };

    print('hello');

    function add(x: number, y: number):number {
        return x + y;
    }

    const result = add(1, 2);
}