{
    function add(t:string, a:number, b:number) {
      
        if (t === 'add') {
            return a + b;
        } else if (t === 'substract') {
            return a - b;
        } else if (t === 'mutiply') {
            return a * b;
        } else if (t === 'divide') {
            return a / b;
        } else if (t === 'remainder') {
            return a % b;
        }
    }

    // clean code
    type Command = 'add' | 'substract'|'multiply' |'divide' |'remainder'

    function calc(command:Command , a: number, b:number):number {
        switch (command) {
            case 'add': return a + b;
            case 'substract': return a - b;
            case 'multiply': return a * b;
            case 'divide': return a / b;
            case 'remainder': return a % b;
            default:
                throw Error('unknown commad');
        }
    };
}