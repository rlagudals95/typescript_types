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

    //const maker = new CoffeeMaker(32); // constructor에 private를 선언해 에러
    const maker2 = CoffeeMaker.makeMachine(32); 

    //console.log(maker2)

    //maker.coffeeBeans = 3;
    //maker.coffeeBeans = -3;// 이렇게 정의할 수 있어 오류가 생김
    // 그래서 은닉하기 위해 public , private, proteced같은 다양한 level의 정보를 은닉
    // public은 기본적으로 생략되어 있음
    
    //maker.fillCoffeeBeans(32);

    class User {
        // private firstName: string;
        // private lastName: string;
        // fullName: string;
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`
        }

        private internalAge = 4;

        // getter는 읽기 전용
        // setter는 쓰기 전용
        // get age(): number {
        //     return this.internalAge;
        // }

        set age(num: number) {
            if (num < 0) {
                throw new Error('숫자가 부정확합니다');
            }
            this.internalAge = num;
        }

        constructor(private firstName: string,private lastName: string) { // 주석친 부분을 이렇게 함수인자에 private선언을 해줌으로써 코드를 깔끔하게 쓸수 있다.
            // this.firstName = firstName;
            // this.lastName = lastName
            //this.fullName = `${firstName} ${lastName}`
        }
    }

    const user = new User('steve', 'Jobs');
    console.log(user.fullName);
    //user.firstName = 'hmk'; // 중간에 firstName을 바꿔줘도 동일하게 steve Jobs 출력
    // 이것을 fullName을 게터 get을 이용해서 선언해주면 유동적으로 바뀐다
    console.log(user.fullName); // hmk Jobs 출력

    user.age = 6; // setter 호출  internalAge을 6으로 업데이트
    console.log('유저정보',user)
}


