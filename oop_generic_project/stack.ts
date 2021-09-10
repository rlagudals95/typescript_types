{
    // oop로 stack 자료구조 만들어보기
    interface Stack<T> {
        readonly size: number;
        push(value: T): void;
        pop(): T;  
    }

    type StackNode<T> = {
        readonly value: T;
        readonly next?: StackNode<T>;
    }

    class StackImpl<T> implements Stack<T> {
        
        private _size: number = 0;
        private head?: StackNode<T>;
        private _capacity: number = 10;

        constructor(private capacity: number) {
            // this._capacity = capacity;
            // if (this._capacity > 10) throw new Error(`${this.capacity}이하로 스택을 만들어줄래요~?`);
        }

        get size() {
            return this._size;
        };

        push(value: T) {
            // if (this.size === this.capacity) {
            //     throw new Error(`${this.capacity}이하로 스택을 만들어줄래요~?`);
            // }
            // node는 새로 들어온 요소 그리고 head는 node
            // next는 현재 head
            // 그리고 현재 head는 새로 들어온 node가 된다!
            const node = { value, next: this.head }; // 타입정보 생략
            this.head = node; // 헤드는 새로들어 오는 요소를 가르킴 last in last out
            this._size++; // 사이즈 증가
        };
        pop(): T { // 제거 되는 head를 return

            if (this.head == null) {
                throw new Error('stack is empdddty'); // 스택이 비어있을때 에러
            }
            // 현재의 head는 next가 되고
            // 현재 head의 value를 return
            const node = this.head;
            this.head = node.next;
            this._size--
            return node.value
            
        }


    }

    const stack = new StackImpl<string>(9);
    stack.push('mac');
    stack.push('os');
    stack.push('linux');
    while (stack.size !== 0) {
        console.log(stack.pop())
    }
    const stack2 = new StackImpl<number>(9);
    stack2.push(123);
    stack2.push(456);
    stack2.push(789);


    while (stack2.size !== 0) {
        console.log(stack.pop())
    }


}