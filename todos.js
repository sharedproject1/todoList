var todoList = {
    todos: ['one', 'two', 'three'],
    displayTodos: function() {
        console.log(this.todos);
    },
    addTodo: function(newTodo) {
        this.todos.push(newTodo);
        this.displayTodos();
    },
    changeTodo: function(todoPosition, todoValue) {
        this.todos[todoPosition] = todoValue;
        this.displayTodos();
    },
    deleteTodo: function(remove) {
        this.todos.splice(remove, 1);
        this.displayTodos();
    }
};

//todoList.deleteTodo(2);









