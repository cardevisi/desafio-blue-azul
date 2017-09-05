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
var PaginationComponent = (function () {
    function PaginationComponent(data) {
        this.data = data;
        this.queryString = '';
        this.maxSize = 7;
        this.directionLinks = true;
        this.autoHide = false;
        this.config = {
            id: 'advanced',
            itemsPerPage: 5,
            currentPage: 1
        };
        this.labels = {
            previousLabel: '<<',
            nextLabel: '>>',
            screenReaderPaginationLabel: 'Pagination',
            screenReaderPageLabel: 'page',
            screenReaderCurrentLabel: "You're on page"
        };
        this.popped = [];
        this.collection = [];
    }
    PaginationComponent.prototype.onPageChange = function (number) {
        console.log('change to page', number);
        this.config.currentPage = number;
    };
    PaginationComponent.prototype.pushItem = function () {
        var item = this.popped.pop() || 'A newly-created meal!';
        this.collection.push(item);
    };
    PaginationComponent.prototype.popItem = function () {
        this.popped.push(this.collection.pop());
    };
    PaginationComponent.prototype.createdVehicle = function (vehicleData) {
        this.collection = vehicleData;
    };
    PaginationComponent.prototype.ngOnInit = function () {
        var that = this;
        this.data.currentMessage.subscribe(function (vehicleData) {
            that.createdVehicle(vehicleData);
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", vehicle_1.Vehicle)
    ], PaginationComponent.prototype, "vehicles", void 0);
    PaginationComponent = __decorate([
        core_1.Component({
            //moduleId: module.id,
            selector: 'pagination',
            templateUrl: './app/paginate-list/paginate-list.component.html',
            styleUrls: ['./app/paginate-list/paginate-list.component.css'],
            changeDetection: core_1.ChangeDetectionStrategy.Default
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=paginate-list.component.js.map