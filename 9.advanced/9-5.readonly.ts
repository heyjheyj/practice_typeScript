{
    type Todo = {
        title: string;
        description: string
    }

    function display(todo: Readonly<Todo>) {
        // todo.title = 'ger' Readonly를 써서 타이틀을 수정할 수 없음
    }
}
