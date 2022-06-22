{
    type Todo = {
        title: string;
        description: string
        label: string;
        priority: 'high' | 'low'
    }

    function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
        return {...todo, ...fieldsToUpdate}
    }

    const todo: Todo = {
        title: 'typescript',
        description: 'study hard',
        label: 'study',
        priority: 'high'
    }

    const updated = updateTodo(todo, {description: 'go for it'})
    console.log(updated)
}


