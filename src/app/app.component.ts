import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  inputHint = 'What needs to be done?';
  todos = [];
  todo = '';
  filterType = 'All';
  isToggleAll = false;

  private apiBase = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>(this.apiBase)
      .subscribe(data => {
        this.todos = data;
      });
  }

  addTodo(){
    if (this.todo) {
      let newTodo = {
        text: this.todo,
        done: false
      };

      this.http.post(this.apiBase, newTodo)
        .subscribe(data => {
          this.todos = this.todos.concat(data);
          this.todo = '';
        })
    }
  }

  clearCompleted() {
    this.todos.filter(item => item.done)
      .forEach(item => {
        this.removeTodo(item);
      });
  }

  updateFilterType(value) {
    console.log(value);
    this.filterType = value;
  }

  toggleAll() {
    this.todos.forEach(item => {
      item.done = this.isToggleAll;
    });
  }

  removeTodo(todo) {
    this.http.delete(`${this.apiBase}/${todo.id}`)
      .subscribe(data => {
        this.todos = this.todos.filter(item => item !== todo);
      });
  }

  updateTodo(todo) {
    this.http.put(`${this.apiBase}/${todo.id}`, todo)
      .subscribe();
  }
}
