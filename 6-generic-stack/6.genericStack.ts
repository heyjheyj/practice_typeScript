interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>; // StackNode | undefined;
};

class StackImpl<T> implements Stack<T> {
  private _size: number = 0; // 내부에서 쓰이는 변수 앞에 언더바
  private head?: StackNode<T>; // StackNode | undefined;

  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }

  push(value: T): void {
    if (this.capacity === this.size) {
      throw new Error("Stack is full!!");
    }
    const node = { value, next: this.head };
    this.head = node;
    this._size++;
  }

  pop(): T {
    // null == undefined, null !== undefined
    if (this.head == null) {
      throw new Error("Stack is empty");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl<string>(5);
stack.push("steve 1");
stack.push("biden 2");
stack.push("bob 3");
while (stack.size !== 0) {
  console.log(stack.pop());
}

const stack2 = new StackImpl<number>(5);
stack2.push(789);
stack2.push(456);
stack2.push(123);
while (stack2.size !== 0) {
  console.log(stack2.pop());
}
