import { Component } from '@angular/core';
import { Model,toDoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.htm',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();

  getName(){
    return this.model.user;
  }

  getItems(){
    return this.model.items.filter(item => !item.action);
  }

  addItem(value){
    if(value != ""){
      this.model.items.push(new toDoItem(value,false));
    }
  }
}
