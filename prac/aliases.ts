{
    // Text 라는 타입은 문자열을 의미 지정
    type Text = string;

    // 밑의 둘은 같은 의미
    const name1: string = 'kim';
    const name2: Text = 'kim'
    
    const address: Text = 'korea';
    type Num = number;

    // 원시 타입 뿐만아니라 객체타입 지정가능
    type Student = {
        name: string,
        age: number
    }

    const student: Student = {
        name: 'kim',
        age: 27
    };

    // string literal types

    type Name = 'name';

    let hmkName: Name;
    hmkName = 'd'; // 어떠한 문자도 재할당 불가

    type JSON = 'json';
    const json: JSON = 'json';

    type boal = true;
    const test: boal = false;
}