{
    // 객체지향 적으로 변경
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    class CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7; // private로 정보은닉 외부에서 이 정보는 알필요가 없다
        private coffeeBeans: number = 0; // private 외부 직접변경 x

        //protect는 이 클래스를 상속한 자식에선 접근가능
      

        private constructor(coffeeBeans: number) { 
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker { 
            return new CoffeeMaker(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) { //coffeeBeans를  private로 선언해 coffeeBeans을 이렇게 함수를 통해 바꿔줘야한다
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            };
            this.coffeeBeans += beans;
        }

        makeCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) { 
                throw new Error('not enough coffe beans!');
            }

            this.coffeeBeans -= shots*CoffeeMaker.BEANS_GRAMM_PER_SHOT; 

            return {
                shots,
                hasMilk: false
            }
        }
    }

    const maker = new CoffeeMaker(32); // constructor에 private를 선언해 에러
    const maker2 = CoffeeMaker.makeMachine; 


    //maker.coffeeBeans = 3;
    //maker.coffeeBeans = -3;// 이렇게 정의할 수 있어 오류가 생김
    // 그래서 은닉하기 위해 public , private, proteced같은 다양한 level의 정보를 은닉
    // public은 기본적으로 생략되어 있음
    
    maker.fillCoffeeBeans(32);
}