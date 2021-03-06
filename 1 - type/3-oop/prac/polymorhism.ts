{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        serialNumber?: string;
        hasSugar?: boolean;
    };

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    // interface => implements, class์์ => extends    

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
        console.log('cleaning the machine...๐งผ');
        }

        private grindBeans(shots: number) {
        console.log(`grinding beans for ${shots}`);
        if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
            throw new Error('Not enough coffee beans!');
        }
        this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preheat(): void {
        console.log('heating up... ๐ฅ');
        }

        private extract(shots: number): CoffeeCup {
        console.log(`Pulling ${shots} shots... โ๏ธ`);
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
    
    // constructor๊ฐ private๋ฉด ์์๋ถ๊ฐ proteced or private๋ก ์ค์ 
    class CaffeLatteMachine extends CoffeeMachine {
        // ์์๋ ์์ ํด๋์ค๋ ์์ฑ์ํจ์ ์ ์์ ํ๋ผ๋ฏธํฐ๋ฅผ ๋ถ๋ชจ์ ๊ฒ์ ์จ์ฃผ๊ณ 
        // super ํจ์์ ๊ทธ ํ๋ผ๋ฏธํฐ๋ฅผ ์จ์ค์ผํ๋ค.
        constructor(beans: number,public readonly serialNumber?: string) {
            super(beans);
            this.serialNumber = serialNumber
        }


        // ์์ ํด๋์ค์์ ๋ถ๋ชจ ํด๋์ ํจ์๋ฅผ ๋ฎ์ด ์์ ๋ค๋ฅธ๊ธฐ๋ฅ์ ๋ง๋ค ์ ์๋ค.
        private steamMilk(): void {
            console.log('steaming some milk....');
        }

        makeCoffee(shots: number): CoffeeCup {
            // super์ ์ด์ฉํด ์์ํ๋ ๋ถ๋ชจ ํจ์ ์ฌ์ฉ๊ฐ๋ฅ
            const coffee = super.makeCoffee(shots);
            
            this.steamMilk();
            return {
                ...coffee, // ๋ถ๋ชจ ํจ์ ๋ชจ๋ ํธ์ถ
                hasMilk: true, // ์ฐ์ ๋ง ์ถ๊ฐ!
                serialNumber: this.serialNumber,
            }
        }

    }

    class SweetCoffeeMaker extends CoffeeMachine {

        // ์์ ํด๋์ค์์ ๋ถ๋ชจ ํด๋์ ํจ์๋ฅผ ๋ฎ์ด ์์ ๋ค๋ฅธ๊ธฐ๋ฅ์ ๋ง๋ค ์ ์๋ค.


        makeCoffee(shots: number): CoffeeCup {
            // super์ ์ด์ฉํด ์์ํ๋ ๋ถ๋ชจ ํจ์ ์ฌ์ฉ๊ฐ๋ฅ
            const coffee = super.makeCoffee(shots);

            return {
                ...coffee, // ๋ถ๋ชจ ํจ์ ๋ชจ๋ ํธ์ถ
                //hasMilk: true, // ์ฐ์ ๋ง ์ถ๊ฐ!
                hasSugar: true
            }
        }

    }
    
    // ๋คํ์ฑ์ ์ด์ฉํ๋ฉด ํ๊ฐ์ง์ class๋ ํ๊ฐ์ง์ interface๋ฅผ ์ด์ฉํด ๋ค๋ฅธ๋ฐฉ์์ผ๋ก ๋ง๋  class๋ฅผ ๋ง๋ค ์ ์๋ค
    // ๋ค์ํ ํด๋
    const machines: CoffeeMaker[] = [
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
    ];

    machines.forEach((machine) => {
        console.log('-------------------------')
        machine.makeCoffee(1);
    })
 
}
