/// <reference path="typings/angular2/angular2.d.ts" />
/// <reference path="FriendsService.ts" />

import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';

class FriendsService {
  names: string[];
  constructor() {
    this.names = ["Jacob", "Aarav", "Martín", "Shannon", "Ariana", "Kai"];
  }
}

// class DisplayComponent {
//   myName: string;
//   names: string[];
  
//   constructor(friendsService: FriendsService) {
//     this.myName = "Alice";
//     this.names = friendsService.names;
//     console.log(this.names);
//   }  
// }

@Component({
  selector: 'display',
  appInjector: [FriendsService,TodoList]
})

@View({
	template: `
		
		
		<input #myname (keyup) placeholder="liveValue">
		<p>{{myname.value}}</p>
		<br/>
		<br/>
		<ul>
		   <li *ng-for="#todo of todos">
		     {{ todo }}
		   </li>
		</ul>
		<input #todotext (keyup)="doneTyping($event)">
		<button (click)="addTodo(todotext.value)">Add Todo</button>

	`,
	directives: [NgFor, NgIf]
})

class TodoList {
  todos: string[];
  constructor() {
    this.todos = ["Eat Breakfast", "Walk Dog", "Breathe"];
  }
  addTodo(todo: string) {
    this.todos.push(todo);
  }
  doneTyping($event) {
	  console.log($event.which);
    if($event.which === 9) {
      this.addTodo($event.target.value);
      $event.target.value = null;
    }
  }
}
bootstrap(TodoList);
