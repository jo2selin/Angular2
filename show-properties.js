/// <reference path="typings/angular2/angular2.d.ts" />
/// <reference path="FriendsService.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var FriendsService = (function () {
    function FriendsService() {
        this.names = ["Jacob", "Aarav", "Martín", "Shannon", "Ariana", "Kai"];
    }
    return FriendsService;
})();
// class DisplayComponent {
//   myName: string;
//   names: string[];
//   constructor(friendsService: FriendsService) {
//     this.myName = "Alice";
//     this.names = friendsService.names;
//     console.log(this.names);
//   }  
// }
var TodoList = (function () {
    function TodoList() {
        this.todos = ["Eat Breakfast", "Walk Dog", "Breathe"];
    }
    TodoList.prototype.addTodo = function (todo) {
        this.todos.push(todo);
    };
    TodoList.prototype.doneTyping = function ($event) {
        console.log($event.which);
        if ($event.which === 9) {
            this.addTodo($event.target.value);
            $event.target.value = null;
        }
    };
    TodoList = __decorate([
        angular2_1.Component({
            selector: 'display',
            appInjector: [FriendsService, TodoList]
        }),
        angular2_1.View({
            template: "\n\t\t\n\t\t\n\t\t<input #myname (keyup) placeholder=\"liveValue\">\n\t\t<p>{{myname.value}}</p>\n\t\t<br/>\n\t\t<br/>\n\t\t<ul>\n\t\t   <li *ng-for=\"#todo of todos\">\n\t\t     {{ todo }}\n\t\t   </li>\n\t\t</ul>\n\t\t<input #todotext (keyup)=\"doneTyping($event)\">\n\t\t<button (click)=\"addTodo(todotext.value)\">Add Todo</button>\n\n\t",
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [])
    ], TodoList);
    return TodoList;
})();
angular2_1.bootstrap(TodoList);
