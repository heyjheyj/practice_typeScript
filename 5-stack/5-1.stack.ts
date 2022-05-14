// 배열을 이용하지 않고 하기 array, push 등

// 단일 연결리스트 head -> 1 -> 2 -> 3
// 이중 연결리스트는 head -> <- 1 -> <- 2 -> <- 3 양방

interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode; // StackNode | undefined;
};

class StackImpl implements Stack {
  private _size: number = 0; // 내부에서 쓰이는 변수 앞에 언더바
  private head?: StackNode; // StackNode | undefined;

  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }

  push(value: string): void {
    if (this.capacity === this.size) {
      throw new Error("Stack is full!!");
    }
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }

  pop(): string {
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

const stack = new StackImpl(5);
stack.push("steve 1");
stack.push("biden 2");
stack.push("bob 3");
while (stack.size !== 0) {
  console.log(stack.pop());
}
