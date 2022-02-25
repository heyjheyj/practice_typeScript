// 배열을 이용하지 않고 하기 array, push 등
var StackImpl = /** @class */ (function () {
    function StackImpl(capacity) {
        this.capacity = capacity;
        this._size = 0;
    }
    Object.defineProperty(StackImpl.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    StackImpl.prototype.push = function (value) {
        if (this.capacity === this.size) {
            throw new Error('Stack is full!!');
        }
        var node = { value: value, next: this.head };
        this.head = node;
        this._size++;
    };
    StackImpl.prototype.pop = function () {
        if (this.head == null) {
            throw new Error('Stack is empty');
        }
        var node = this.head;
        this.head = node.next;
        this._size--;
        return node.value;
    };
    return StackImpl;
}());
var stack = new StackImpl(5);
stack.push('steve 1');
stack.push('biden 2');
stack.push('bob 3');
while (stack.size !== 0) {
    console.log(stack.pop());
}
