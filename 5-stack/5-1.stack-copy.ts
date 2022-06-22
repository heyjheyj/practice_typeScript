{
    interface Stack {
        readonly size: number
        push(value:string): void
        pop(): string
    }

    type StackNode = {
        readonly value: string
        readonly next?: StackNode
    }

    class StackClass implements Stack {
        private _size: number = 0
        private head?: StackNode

        constructor(readonly capacity: number) {}

        get size() {
            return this._size
        }

        push(value: string):void {
            if(this._size === this.capacity) {
                throw new Error ('Stack is Full!!!')
            }
            const node: StackNode = {value: value, next: this.head }
            this.head = node;
            this._size++;
        }

        pop(): string {
            if (this.head == null) {
                throw new Error('Stack is Empty')
            }
            const node = this.head;
            this.head = node.next
            this._size--;
            return node.value
        }
    }

    const stack = new StackClass(4)
    stack.push('hy 1')
    stack.push('ee 2')
    stack.push('ws 3')
    stack.push('ss 4')
    while (stack.size !== 0) {
        console.log(stack.pop())
    }
}
