{
    interface Employee {
        pay(): void;
    }

    class FullTimeEmploy implements Employee {
        pay() {
            console.log('full time')
        }
        workFullTime() {
            
        }
    }

    class PartTimeEmployee implements Employee {
        pay() {
            console.log('part time')
        }
        workPartTime() {
            
        }
    }

    // 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 좋지않다..!
    function payBad(employee: Employee): Employee {
        
        employee.pay();
        return employee;
    }

    // generic에 조건을 준다 Employee를 확장한 요소만 가능!
    function pay<T extends Employee>(employee:T):T {
        
        employee.pay();
        return employee;
    }


    const ellie = new FullTimeEmploy();
    const bob = new PartTimeEmployee();
    ellie.workFullTime();
    bob.workPartTime();

    const ellieAfterPay = payBad(ellie);
    const bobAfterPay = payBad(bob);
    ellieAfterPay.pay();

    interface Obj {
        name: string;
        age: number;
    }

    class getObj implements Obj {
        
        constructor() {
            
        }

        name: string;
        age: number;

        getValue<T extends Obj>(obj:Obj ,value: T): T {
            
            obj.name

            return value
        }
    }

    // ogj와 key값을 받아 value를 리턴하는 방법
    // T 그리고 T안의 키값으로 K 제네릭을 설정
    function getValue<T,K extends keyof T >(obj: T, key:K): T[K] {
       
        return obj[key];
    }


    const obj = {
        name: 'ellie',
        age: 20,
    }

    const obj2 = {
        animal: 'horse',
        age: 3
    }

    console.log(getValue(obj, 'name'));
    console.log(getValue(obj, 'age'));
    console.log(getValue(obj, 'age'));


}