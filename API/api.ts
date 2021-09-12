{
    Array; // ctrl + 왼쪽 마우스 클릭해서 js api를 읽어보자!
    
    [1,2].map


    type Student = {
        passed: boolean;
    }

    const students: Student[] = [
        { passed: true },
        { passed: true },
        { passed: false },
    ]

    const result =  students.every(student => {
        return student.passed
    }); // 한번이라도 false인 인자가 있다면 이값은 false를 리턴

    console.log(result);

    // every를 이용한 type검사

    class Animal { }
    class Cat extends Animal {
        isCat: boolean = true;
    }

    class Dog extends Animal {
        isDog: boolean = false;
    }

    const animals: Animal[] = [new Cat(), new Cat(), new Dog()]


    function isCat(animal: Animal): animal is Cat {
        return (animal as Cat).isCat !== undefined;
    }

    animals.every<Cat>(isCat) //  new Dog()이 포홤되 false출력
}