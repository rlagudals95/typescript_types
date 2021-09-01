{
    const fruits: string[] = ['apple', 'banana'];
    const fruits2: Array<string> = ['apple', 'banana'];

    const scores: number[] = [1, 2];
    const scores2: Array<number> = [1, 2];

    function printArray(fruits: readonly string[]) { // 인자로 받은 fruits는 함수로 절대 변경불가
        fruits.push() // 변경 불가 에러
    };

    //tuple 서로 다른 타입의 데이터를 담을 수 있는 배열 // 사용 지향
    // tuple => interface, type alias, class로 대체
    let student: [string, number];
    student = ['name', 123];

    const [name, age] = student;
}