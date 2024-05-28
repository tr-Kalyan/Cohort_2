/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.Todos = [];
  }
  add(Todo){
    this.Todos.push(Todo);
  }
  remove(indexOfTodo){
    if (indexOfTodo >= 0 && indexOfTodo<this.Todos.length){
      this.Todos.splice(indexOfTodo,1)
      return "Todo activity deleted"
    }
    return "Index out of range/Enter index number only"
    
  }
  
  update(index,updatedTodo){
    if (index >= 0 && index < this.Todos.length){
      this.Todos[index] = updatedTodo;
      return "Todo activity updated"
    }
    return null;
  }

  getAll(){
    return this.Todos;
  }

  get(indexOfTodo){
    if (indexOfTodo >= 0 && indexOfTodo < this.Todos.length){
      return this.Todos[indexOfTodo];
    }
    return null;
    
  }

  clear() {
    this.Todos = []; // Clear all todos
}

}

module.exports = Todo;
