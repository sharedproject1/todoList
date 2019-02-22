//This is a function//
var todos = ["one", "two", "three"];
    console.log (todos);

function displayTodos (){
    console.log('My todos:', todos); 
}
function addTodos () {
    todos.push ('five');
    displayTodos();
}
function changeTodos () {
    todos[3] = 'four';
    displayTodos();
}
function deleteTodos () {
    todos.splice (3);
    displayTodos ();
}
//This is an Object//

function addTodos (todos) {
    this.todos.push('four');
    this.displayTodos ();
}
function changeTodos (todos){
    this.todos[1] = 'four was updated';
    this.diplayTodos();
}
