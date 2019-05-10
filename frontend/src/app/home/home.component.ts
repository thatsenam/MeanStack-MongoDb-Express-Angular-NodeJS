import { Component, OnInit } from '@angular/core';
import * as utility from 'underscore'
import { HttpService } from '../services/http.service';
import { Todo } from '../pojo/todo';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  numbers: number[] = [5, 5, 2, 6, 9, 50]
  title = 'frontend';
  todos: Todo[]
  constructor(private api: HttpService) {

  }
  ngOnInit() {
    this.api.getTodos('/api').toPromise().then(todos => {
      this.todos = todos;
      todos.map((item, index, items) => {
        console.log(item.title, item.userId);
      })
    }).catch(err => {
      console.log(err);
    });
  }

}
