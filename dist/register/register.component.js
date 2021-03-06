"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var vehicle_1 = require("../shared/models/vehicle");
var data_service_1 = require("../service/data.service");
var RegisterComponent = (function () {
    function RegisterComponent(data) {
        this.data = data;
        this.vehicleCreated = new core_1.EventEmitter();
        this.newVehicle = new vehicle_1.Vehicle();
        this.active = true;
    }
    RegisterComponent.prototype.onSubmit = function (event) {
        var _this = this;
        console.log('onSubmit', this.newVehicle);
        event.preventDefault();
        this.data.changeMessage(this.newVehicle);
        this.vehicleCreated.emit({ vehicle: this.newVehicle });
        //this.newVehicle = new Vehicle();
        this.active = false;
        //console.log('this.newVehicle', this.newVehicle);
        setTimeout(function () { return _this.active = true; }, 0);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "vehicleCreated", void 0);
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'register',
            templateUrl: './app/register/register.component.html',
            styleUrls: ['./app/register/register.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map