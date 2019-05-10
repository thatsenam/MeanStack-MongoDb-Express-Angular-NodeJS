import { Component, OnInit } from '@angular/core';
import { TodosList } from "../db/Google";
import { Todo } from '../pojo/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todoList: Todo[] = null
  ngOnInit() {

  }


  newTodo: string;
  todos: any;
  todoObj: any;

  constructor() {
    this.newTodo = '';
    this.todos = [];
    this.todoList = TodosList()
  }

  addTodo(event) {
    let newOne: Todo = {
      title: this.newTodo,
      completed: false,
      id: Math.random()
      , userId: Math.random()
    }
    this.todos.push(this.todoObj);
    this.todoList.unshift(newOne)

    this.newTodo = '';
    event.preventDefault();
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
    this.todoList.splice(index, 1)
    console.log(index, 'delete request')
  }

  deleteSelectedTodos() {

    for (var i = (this.todos.length - 1); i > -1; i--) {
      if (this.todos[i].completed) {
        this.todos.splice(i, 1);
      }
    }
  }


}
