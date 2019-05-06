import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Todo } from '../pojo/todo'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {

  }
  getTodos(url: string) {
    return this.httpClient.get<Todo[]>(url)
  }
}
