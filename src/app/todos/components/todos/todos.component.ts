import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos$?: Observable<Todo[]>;

  error: string = '';

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    // subscribe
    this.todos$ = this.todosService.todos$;

    this.getTodos();
  }

  getTodos() {
    this.todosService.getTodos();
  }

  creteTodo() {
    const title = ' Angular!!! 3333';
    this.todosService.creteTodo(title);
  }

  removeTodo() {
    const todoId = '70f02ada-7890-4cbf-bfb1-668f5ac23396';
    this.todosService.removeTodo(todoId);
  }

}
