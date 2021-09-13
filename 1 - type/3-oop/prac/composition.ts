{
// 상속의 문제점은 뭐가 있을까....?
// 상속의 깊이가 깊어질 수록 서로관의 관계가 복잡해 질 수 있다...    
    
    
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        serialNumber?: string;
        hasSugar?: boolean;
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
        constructor(beans: number, milkFrother: CheapMileSteamer) {
            
            super(beans);
            
        }


        makeCoffee(shots: number): CoffeeCup {
            // super을 이용해 상속하는 부모 함수 사용가능
            const coffee = super.makeCoffee(shots);
            
            return this.milkFrother.makeMilk(coffee);
        }

    }

    // 우유 거품기
    class CheapMileSteamer {
        private steamMilk(): void {
            console.log('steaming some milk');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true
            }
        }
    }

    // 설탕 제조기
    class AutoMaticSugarMixer {
        private getSugar() {
            console.log('getting some sugar from jar');

        }
        addSugar(cup: CoffeeCup):CoffeeCup {
            const sugar = this.getSugar();
            
            return {
                ...cup,
                hasSugar:true
            }
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {

        constructor(private beans: number, private sugar: AutoMaticSugarMixer) {
            super(beans);
        }

        makeCoffee(shots: number): CoffeeCup {
            // super을 이용해 상속하는 부모 함수 사용가능
            const coffee = super.makeCoffee(shots);
           

            return this.sugar.addSugar(coffee);
        }

    }

    // 2개의 클래스 상속불가
    class SweetCafeLatteMachine extends CoffeeMachine {
        constructor(private beans: number,
                    private sugar: AutoMaticSugarMixer,
                    private milk: CheapMileSteamer) {
            super(beans);
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(this.sugar.addSugar(sugarAdded));
            // 결국 객체 스프레드 문법 ... 으로 각 객체들이 추가된다
        }
    }

    // composition을 이용하면??
    


    // 다형성을 이용하면 한가지의 class나 한가지의 interface를 이용해 다른방식으로 만든 class를 만들 수 있다
    // 다양한 클래스를 만들 수 있다.
    // const machines: CoffeeMaker[] = [
    //     new CoffeeMachine(16),
    //     new CaffeLatteMachine(16, '1'),
    //     new SweetCoffeeMaker(16),
    //     new CoffeeMachine(16),
    //     new CaffeLatteMachine(16, '1'),
    //     new SweetCoffeeMaker(16),
    // ];

    // machines.forEach((machine) => {
    //     console.log('-------------------------')
    //     machine.makeCoffee(1);
    // })
 
}
