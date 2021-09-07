{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
        serialNumber?: string;
    };

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    // interface => implements, class상속 => extends    

    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
        private coffeeBeans: number = 0; // instance (object) level

        constructor(coffeeBeans: number) {
        this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
        return new CoffeeMachine(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) {
        if (beans < 0) {
            throw new Error('value for beans should be greater than 0');
        }
        this.coffeeBeans += beans;
        }

        clean() {
        console.log('cleaning the machine...🧼');
        }

        private grindBeans(shots: number) {
        console.log(`grinding beans for ${shots}`);
        if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
            throw new Error('Not enough coffee beans!');
        }
        this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preheat(): void {
        console.log('heating up... 🔥');
        }

        private extract(shots: number): CoffeeCup {
        console.log(`Pulling ${shots} shots... ☕️`);
        return {
            shots,
            hasMilk: false,
        };
        }

        makeCoffee(shots: number): CoffeeCup {
        this.grindBeans(shots);
        this.preheat();
        return this.extract(shots);
        }
    }
    
    // constructor가 private면 상속불가 proteced or private로 설정
    class CaffeLatteMachine extends CoffeeMachine {
        // 상속된 자식 클래스는 생성자함수 정의시 파라미터를 부모의 것을 써주고
        // super 함수에 그 파라미터를 써줘야한다.
        constructor(beans: number,public readonly serialNumber: string) {
            super(beans);
            this.serialNumber = serialNumber
        }


        // 자식 클래스에서 부모 클래의 함수를 덮어 씌워 다른기능을 만들 수 있다.
        private steamMilk(): void {
            console.log('steaming some milk....');
        }

        makeCoffee(shots: number): CoffeeCup {
            // super을 이용해 상속하는 부모 함수 사용가능
            const coffee = super.makeCoffee(shots);
            
            this.steamMilk();
            return {
                ...coffee, // 부모 함수 모두 호출
                hasMilk: true, // 우유만 추가!
                serialNumber: this.serialNumber,
            }
        }

    }

    const machine = new CoffeeMachine(23);

    //CaffeLatteMachine 은 CoffeeMachine상속받아 내부 함수 모두 사용가능
    const laffeMachine = new CaffeLatteMachine(23, 'starbucks');

    const coffee = laffeMachine.makeCoffee(1);
    console.log(coffee)
  
}
