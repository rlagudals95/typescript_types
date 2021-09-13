{
    // 객체지향 적으로 변경
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    class CoffeeMaker { // 절차지향 코드를 그대로 가져와 let, const , function같은 선언키워드 제거
        static BEANS_GRAMM_PER_SHOT: number = 7; // class level
        coffeeBeans: number = 0; // instance level

        // class level은 새로운 객체를 생성할 때마다 같이 생성되지 않으며 
        // 사용시 this 대신 class 이름을 사용한다

        constructor(coffeeBeans: number) { //object를 만들때 가장먼저 호출되는 함수 // class를 가지고 instance(object)를 만들때 사용 / 생성자 함수
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker { // 외부에서 사용가능
            return new CoffeeMaker(coffeeBeans);
        }

        makeCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) { //class안의 멤버 변수에 접근하려면 this사용
                throw new Error('not enough coffe beans!');
            }

            this.coffeeBeans -= shots*CoffeeMaker.BEANS_GRAMM_PER_SHOT; // 만든 만큼 콩을 제거

            return {
                shots,
                hasMilk: false
            }
        }
    }

    const maker = new CoffeeMaker(32);
    console.log(maker) // { BEANS_GRAMM_PER_SHOT: 7, coffeeBeans: 32 } 객체 출력

    const maker2 = CoffeeMaker.makeMachine(3);
    console.log(maker2);

    // Math.abs >> 자바스크립트 Math 같은 내장함수들도 class level로 정의 된 함수들!

}