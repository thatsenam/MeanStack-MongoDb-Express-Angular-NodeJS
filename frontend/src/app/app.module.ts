import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CounterComponent } from './counter/counter.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TickComponent } from './tick/tick.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TodosComponent } from './todos/todos.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HomeComponent,
    TickComponent,
    NotfoundComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot([
      {
        path: 'counter',
        component: CounterComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'tick',
        component: TickComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'todos',
        component: TodosComponent
      },
      {
        path: '**',
        component: NotfoundComponent
      },
    ], {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
