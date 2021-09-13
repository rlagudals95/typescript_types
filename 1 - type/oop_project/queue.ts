{
    interface Queue {
        readonly size: number;
        push(value: string): void;
        shift(): void;

    }

    type QueueNode = {
        readonly value: string;
        readonly before?: QueueNode;
        
    }

    class QueueImpl implements Queue {
        private _size: number = 0;
        private foot?: QueueNode;
        private _capacity: number = 10;


        constructor(capacity: number) {
            this._capacity = capacity
        }
        shift(): void {
            const node = this.foot;
            this.foot = node?.before;
            this._size--;
        }

        get size() {
            return this._size;
        };

        push(value: string): void {
            if (this.size === this._capacity) {
                throw new Error(`${this._capacity}이하로 스택을 만들어줄래요~?`);
            }
            
            const node: QueueNode = {value: value , before: this.foot} // 새로 들어오는 요소
            this.foot = node; 
            this._size++; 
        };

    }

    const queue = new QueueImpl(3);
    queue.push('h');
    queue.push('m');
    queue.push('k');

    console.log(queue.shift());
    console.log(queue.shift());
    console.log(queue.shift());
    
}