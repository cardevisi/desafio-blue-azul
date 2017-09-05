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
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var DataService = (function () {
    function DataService() {
        this.messageSource = new BehaviorSubject_1.BehaviorSubject([]);
        this.vehicles = [
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
                "marca": "Ford",
                "modelo": "Fusca",
                "placa": "PAI-4121",
                "valor": "20000"
            },
            {
                "combustivel": "Alcool",
                "imagem": "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
                "marca": "Subaru",
                "modelo": "Fusca",
                "placa": "PAI-4121",
                "valor": "20000"
            },
            {
                "combustivel": "Gasolina",
                "imagem": "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
                "marca": "Fusca",
                "modelo": "Fusca",
                "placa": "PAI-4121",
                "valor": "20000"
            }
        ];
        this.currentMessage = this.messageSource.asObservable();
        this.messageSource.next(this.vehicles);
    }
    DataService.prototype.changeMessage = function (vehicle) {
        this.vehicles.unshift(vehicle);
        this.messageSource.next(this.vehicles);
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map