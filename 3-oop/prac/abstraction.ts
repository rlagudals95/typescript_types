{
    // CoffeeMaker를 좀 더 깔끔하게 간단하게 만들어보자
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }
    
    //interface는 쉽게말해 나와 소통하려면 나는 이런 규약을 가지고 있어!라고 명시해놓은 것(계약자)
    //class는 interface에서 규약된 함수를 모두 구현해야한다
    //얼마만큼의 행동을 약속할지 결정할 수 있음
    interface CoffeeMaker {
        
        makeCoffee(shots: number): CoffeeCup;
    }

    // interface 와 class의 이름을 구분짓는데는 여러 방법이 있다
    // ICoffeeMaker & CoffeeMaker
    // CoffeeMaker & CoffeeMakerImpl 
    // 혹은 임의로 지정
    class CoffeeMachine implements CoffeeMaker{ // 이 class는 CoffeeMaker 인터페이스를 따라가는 아이
        private static BEANS_GRAMM_PER_SHOT: number = 7; 
        private coffeeBeans: number = 0; 


        private constructor(coffeeBeans: number) { 
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker { 
            return new CoffeeMachine(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            };
            this.coffeeBeans += beans;
        }

        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) { 
                throw new Error('not enough coffe beans!'); // shot 한개를 만들 커피콩이 안되면 에러
            }
           
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT; // 커피 콩에서 샷 1잔 만큼의 콩분량 제거
            
        }

        private preheat(): void {
            console.log('heating up...');
        }

        private extract(shots: number ):CoffeeCup { // shot을 전달받아 몇잔의 커피를 만들 수 있다 return
            console.log(`pulling ${shots} shots....`)
            return {
                shots,
                hasMilk: false
            }
        }

        makeCoffee(shots: number): CoffeeCup {   // 외부에선 이것만 사용해도 무방
                this.grindBeans(shots); // 콩을갈고
                this.preheat(); // 데운다
                return this.extract(shots) // 커피 추출
        }
    }
    
    const maker:CoffeeMachine = CoffeeMachine.makeMachine(32);
    maker.fillCoffeeBeans(32);
    // maker. 이렇게 .만찍어도 많은 함수가 보인다... 이럴때 추상화가 필요! 사용하는 사람이 간편하게 도와줌 
    // 외부에서 알 필요없는 함수들은 private 선언
    maker.makeCoffee(2);

    const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
    // interface로 타입선언시 makeCoffee만 사용가능
    maker2.makeCoffee(2);


    // export { CoffeeMaker } 
}

    

