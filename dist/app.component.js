"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("./shared/models/user");
var data_service_1 = require("./service/data.service");
var AppComponent = (function () {
    function AppComponent() {
        this.message = 'Hello';
        this.users = [
            { id: 10, name: 'Charles', username: 'servilcha' },
            { id: 25, name: 'Ester', username: 'servilester' },
            { id: 30, name: 'Francis', username: 'servilfrancis' }
        ];
        this.activeUser = user_1.User;
    }
    AppComponent.prototype.selectUser = function (user) {
        this.activeUser = user;
        console.log(this.activeUser);
    };
    ;
    AppComponent.prototype.onUserCreated = function (event) {
        this.users.push(event.user);
    };
    ;
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            providers: [data_service_1.DataService],
            templateUrl: './app/app.component.html',
            styleUrls: ['./app/app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map