{
    // ogj에 접근하는 방법
    const obj = {
        name: 'ellie'
    }

    obj.name; // ellie
    obj['name'] // ellie

    type Animal = {
        name: string;
        age: number;
        gender: 'male' | 'female'
    }

    type Name = Animal['name']
    const text: Name = 1333
    const text2: Name = 'hmk'
    // Name은 string 타입 지정

    type Gender = Animal['gender'] // 'male' | 'female'

    type Keys = keyof Animal // Animal의 모든 키를 keys에 할당
    
    const key: Keys = 'name'

    type Person = {
        name: string;
        gender: Animal['gender']; // 'male' | 'female'
    }

    const person: Person = {
        name: 'ellie',
        gender: 'male'
    }
}