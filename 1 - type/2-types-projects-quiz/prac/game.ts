{
    type Direction = 'up' | 'down' | 'left' | 'right';
    const position = {
        x :0,
        y: 0
    }

    

    function move(direction:Direction) {
        switch (direction) {
            case 'up': position.y += 1
                break; // 이걸 작성해야 밑의 케이스까지 실행됨
            case 'down': position.y -= 1
                break;
            case 'left': position.x -= 1
                break;
            case 'right': position.x += 1
                break;
        }
        
    }
}