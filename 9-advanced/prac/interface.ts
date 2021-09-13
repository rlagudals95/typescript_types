{
    // type 과 inter페이스의 차이점

    type PositionType = {
        x: number;
        y: number;
    }


    // 아래 두가지 interface는 자동으로 합쳐진다 
    interface PositionInterface {
        x: number;
        y: number;
    }

    interface PositionInterface {
        z: number;
    }


    // 둘 다 할 수 있는 기능
    // obj 생성
    const obj1: PositionType = {
        x: 1,
        y: 1
    }

    const obj2: PositionInterface = {
        x: 1,
        y: 1,
        z: 3 
    }

    // class에서 구현 사능
    class Pos1 implements PositionType {
        x: number;
        y: number;
    }

    class Pos2 implements PositionInterface {
        x: number;
        y: number;
    }

    // extends 가능 (확장가능)

    interface ZPositionInterface extends PositionInterface {
        z: number;
    }

    type ZPositionType = PositionType & { z: number };
    

    // 2021 - 09 - 13 기준 interface만 결합이 가능하다 
    // 중복해서 interface를 작성하면 합쳐짐
    interface PositionInterface {
        x: number;
        y: number;
    }

    interface PositionInterface {
        z: number;
    }


    // type PositionType {  작성부터 에러 ' 이름 중복 '

    // }

    // type은 computed property 사용가능
    
    type Person = {
        name: string,
        age: number,
    }

    type Name = Person['name']; // Name이라는 type은 Person의 name이라는 type을 사용한다!

    type NumberType = number;

    // union type 작성가능
    type Direction = 'left'|'right'|'top'|'bottom'
}