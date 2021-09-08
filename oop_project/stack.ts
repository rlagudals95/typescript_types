{
    // oop로 stack 자료구조 만들어보기
    interface Stack {
        readonly size: number;
        push(value: string): void;
        pop(): string;  
    }

    type StackNode = {
        readonly value: string;
        readonly next?: StackNode;
    }

    class StackImpl implements Stack {
        
        private _size: number = 0;
        private head?: StackNode;

        constructor(private capacity: number) {
           
        }

        get size() {
            return this._size;
        };

        push(value: string): void {
            if (this.size === this.capacity) {
                throw new Error('stack is full');
            }
            const node: StackNode = {value: value , next: this.head} // 새로 들어오는 요소
            this.head = node; // 헤드는 새로들어 오는 요소를 가르킴 last in last out
            this._size++; // 사이즈 증가
        };
        pop(): string { // 제거 되는 head를 return

            if (this.head == null) {
                throw new Error('stack is empty'); // 스택이 비어있을때 에러
             }
            const node = this.head;
            this.head = node.next;
            this._size--
            return node.value
            
        }


    }

    const stack = new StackImpl(10);
    stack.push('mac');
    stack.push('os');
    stack.push('linux');

    while (stack.size !== 0) {
        console.log(stack.pop())
    }


}