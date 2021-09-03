import { number } from "prop-types";

{
    // 자주 쓰는건 썩 좋진 않다..!

    function jsStrFunc(): any {
        return 'hello';
    }
    const result = jsStrFunc();
    (result as string).length // result라는 변수를 string으로 사용할 것이라고 선언 (사실원래 함수 리턴값이 string이긴하다..)
    
    console.log((result as string).length);


    const wrong: any = 5;
    //console.log((wrong as number[]).push(1)); // 이건 너무 잘못되서...! 에러발생...!
    
    function findNumbers(): number[] | undefined {
        return undefined;
    };

    const numbers = findNumbers()!;
    //number.push(2); // numbers는 arr or undefined 일 수 있어서 에러
    number.push(2); // number! 느낌표를 붙이면 arr 임을 확신 한다는 표현

    const button = document.querySelector('class')!;
    
}