{
// function add(num1: number, num2: number): number {
//     return num1 + num2;
// }

// function jsFetchNum(id:String):Promise<number> {
//     //code...
//     return new Promise((resolve, reject) => {
//         resolve(100);
//     });
// }

// optional parameter
function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);

   
}
    printName('hm', 'kim');
    printName('hm');
    

//default parameter
    function printMessage(message:string = 'default message') {
        console.log(message);
    }
    printMessage();

//rest parameter 모든 인자들을 스프레드 문법을 통해서 특정 타입으로 받을 수 있다
    
    function addNumbers(...numbers: number[]):number {
        
        return numbers.reduce((a, b) => a + b);
    }

    console.log(addNumbers(1, 2));
}