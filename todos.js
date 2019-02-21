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


//added new comment for test

//Pls work on version 4 - Booleans, I'll proceed with Version - 5 Loops of Logic

//jun command me to type whatever title












