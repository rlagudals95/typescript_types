import { CoffeeMaker } from './abstraction'

const maker = CoffeeMaker.makeMachine(14);
maker.makeCoffee(3);
    // maker. 이렇게 .만찍어도 많은 함수가 보인다... 이럴때 추상화가 필요! 사용하는 사람이 간편하게 도와줌 
    // 외부에서 알 필요없는 함수들은 private 선언


console.log(maker)