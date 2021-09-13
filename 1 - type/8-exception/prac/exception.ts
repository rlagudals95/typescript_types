{
    //java: Exception
    //javascript : Error

    type Direction = 'up' | 'down' | 'left' | 'right';
    const position = {
        x :0,
        y: 0
    }

    

    function move2(direction : 'up' | 'down' | 'left' | 'right' |'he')  {
        switch (direction) {
            case 'up': position.y += 1
                break; // 이걸 작성해야 밑의 케이스까지 실행됨
            case 'down': position.y -= 1
                break;
            case 'left': position.x -= 1
                break;
            case 'right': position.x += 1
                break;
            case 'he': position.x += 1
                break;
            default:
                const invalid: never = direction; // 여기 올 수 있는 case는 모든 케이스를 다루고 남은
                // never밖에서 없기 때문에 string으로 인식안해서 에러가 발생하지 않는다
                throw new Error(`unknown direction: ${invalid}`)
        }
        
    }

}
