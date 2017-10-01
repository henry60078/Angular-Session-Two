import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = 'What needs to be done?';

  todos = [];
  todo = '';
  filterType = 'All';

  addTodo(){
    if (this.todo) {
      let newTodo = {
        text: this.todo,
        done: false
      };

      this.todos = this.todos.concat(newTodo);
      this.todo = '';
    }
  }

  clearCompleted() {
    this.todos = this.todos.filter(item => !item.done);
  }

  updateFilterType(value) {
    console.log(value);
    this.filterType = value;
  }
}
