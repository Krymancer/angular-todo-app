import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Todo from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo :  Todo;
  @Output() onDelete = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  toogleDone() {
    this.todo.completed = !this.todo.completed;
  }

  deleteTodo() {
    this.onDelete.emit(this.todo.id);
  }

}
