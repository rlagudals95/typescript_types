{
    const MAX_NUM = 6;
    const MAX_STUDENT_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WENDAY = 2;

    // 여러 상수값들을 한곳에 모아 TYPE이 보장됨
    const DAYS_ENUM = Object.freeze({ // 객체를 프리즈, 고정한다.
        "MONDAY": 0, "TUESDAY": 1, "TUESDAY:": 2
    })
    const dayOfToday = DAYS_ENUM.MONDAY;


    enum Days {
        Monday = 'monday', // 0
        Tuesday = 'tuesday', // 1
        Wednesday = 'wednesday', // 2
        Thursday = 'Thursday', // 3
        Friday = 'Friday', // 4
        Saturday = 'Saturday', // 5
        Sunday = 'Sunday'
    }

    // 타입스크립트에선 enum은 가능한 쓰지 않는게 좋다
    console.log(Days.Tuesday);

    // enum type이 같다면 재 할당이 가능하고 다른 타입으로 선언해도 에러가 뜨지 않는다..
    let day: Days = Days.Saturday;
    day = Days.Thursday;
    day = '2';
    
    // 밑의 표현으로 대체 가능..

    type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';

    let dayOfWeek: DayOfWeek = 'Monday';
    dayOfWeek = 'd' // 타입으로 지정한 것 외엔 사용불가 enum을 사용할 필요가 없다
}