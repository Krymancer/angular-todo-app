import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Todo from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  @Output() addTodo = new EventEmitter<Todo>();

  todoTitle : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
    console.log('todoContent', this.todoTitle)
    if(this.todoTitle.trim()){
      this.addTodo.emit({
        id: -1,
        title: this.todoTitle,
        completed: false
      });
      this.todoTitle = '';
    }
  }

  handleChange(event: Event){
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if(value){
      this.todoTitle = value;
    }
  }

}
