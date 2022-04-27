import { Component, OnInit } from '@angular/core';
import Todo from '../../models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {id: 1, title: 'Learn Angular', completed: false},
      {id: 2, title: 'Learn Vue', completed: false},
      {id: 3, title: 'Learn React', completed: true},
      {id: 4, title: 'Learn Next', completed: false},
      {id: 5, title: 'Learn Nuxt', completed: false}
    ];
  }

  deleteTodo(id: number){
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  addTodo(todo: Todo){
    todo.id = this.todos.length + 1;
    this.todos.push(todo);
  }

}
