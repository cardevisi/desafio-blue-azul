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
//our root app component
var core_1 = require("@angular/core");
var vehicle_1 = require("./shared/models/vehicle");
var Pagination = (function () {
    function Pagination() {
        this.collection = [];
        console.log(this.vehicles);
        this.collection = [
            {
                "combustivel": "Flex",
                "imagem": null,
                "marca": "Volkswagem",
                "modelo": "Gol",
                "placa": "FFF-5498",
                "valor": "20000"
            },
            {
                "combustivel": "Gasolina",
                "imagem": null,
                "marca": "Volkswagem",
                "modelo": "Fox",
                "placa": "FOX-4125",
                "valor": "20000"
            },
            {
                "combustivel": "Alcool",
                "imagem": "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
                "marca": "Volkswagen",
                "modelo": "Fusca",
                "placa": "PAI-4121",
                "valor": "20000"
            },
            {
                "combustivel": "Alcool",
                "imagem": "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
                "marca": "Volkswagen",
                "modelo": "Fusca",
                "placa": "PAI-4121",
                "valor": "20000"
            }
        ]; //this.vehicles;
        /*for (let i = 1; i <= 100; i++) {
          this.collection.push(`item ${i}`);
        }*/
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", vehicle_1.Vehicle)
    ], Pagination.prototype, "vehicles", void 0);
    Pagination = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pagination',
            templateUrl: '../app/listing/listing.component.html',
        }),
        __metadata("design:paramtypes", [])
    ], Pagination);
    return Pagination;
}());
exports.Pagination = Pagination;
//# sourceMappingURL=pagination.component.js.map