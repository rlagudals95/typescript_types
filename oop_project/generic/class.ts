import { number } from "prop-types";

{
    
    interface Either<L,R> {
        left: () => L; // number를 return하는 함수
        right: () => R;
    }

    class SimpleEither<L,R> implements Either<L,R> {
        constructor(private leftValue: L,private  rightValue: R) { }


        left():L {
            return this.leftValue;
        };

        right(): R {
            return this.rightValue;
        };
    }

    const either: Either <number,number>= new SimpleEither(4, 5);
    either.left();
    either.right();

    const best = new SimpleEither(4, 'hello');
    const obj = new SimpleEither({name:'hmk'}, 'hello');
    // generic을 이용해 어떤 타입이든 받을 수 있음
}