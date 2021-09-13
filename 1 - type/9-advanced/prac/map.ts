{
    type Video = {
        title: string;
        author: string;
        desc: string;
    }

    // type VideoOptional = {
    //     title?: string;
    //     author?: string;
    //     desc?: string
    // }

    type VideoReadOnly = {
        readonly title: string;
        readonly author: string;
        readonly desc: string;
    }

    // 위 코드를 더 간결하게 재사용성 높게 고쳐보자

    type Optional<T> = {
        [P in keyof T]?: T[P] // for ... in

    }

    type VideoOptional = Optional<Video>; // video의 key들을 for in 으로 돌면서 title과 author을 
    // string optional로 만든다


    // Video가 optional로!
    const videoOp: VideoOptional = {
        title: 'hi',
        
    }

    /////

    type Animal = {
        name: string;
        age: number;
    }

    type AnimalOptional = Optional<Animal>;

    const animal: Animal = { // error
        name: 'hmk',
    }

    const animalOp: AnimalOptional = { // good
        name: 'hmk',
    }

    // readonly 추가
    type ReadOnly<T> = {
       readonly [P in keyof T]: T[P];
    }

    animal.name = 'ellie';
    const video: ReadOnly<Video> = {
        title: 'hi',
        author: 'hmk'
    }

    //video.author = 'khj' // readonly 에러발생

    // null 인 값도 사용가능한 map
    type Nullable<T> = { [P in keyof T]: T[P] | null };
    const obj2: Nullable<Video> = {
        title: null,
        author: null,
        desc: null,
    }

    // proxy 타입 커스텀

    type Proxy<T> = {
        get(): T;
        set(value: T): void;
    }

    type Proxify<T> = {
        [P in keyof T]: Proxy<T[P]>
    }
}