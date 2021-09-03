{
    // union은 or intersection은 and 

    type Student = {
        name: string,
        score: number,
    };

    type Worker = {
        employeeId: number,
        work: () => void;
    }

    // 두개의 타입을 모두 사용하능
    function interWork(person: Student & Worker) {
        console.log(person.name, person.employeeId, person.work());
     }

    interWork({ // 두개의 타입을 모두 넣어줘야 에러가 뜨지 않는다.
        name: 'kim',
        score: 1,
        employeeId: 123,
        work: () => { }
    })
}