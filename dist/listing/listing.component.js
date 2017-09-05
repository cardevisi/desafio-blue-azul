"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ListingComponent = (function () {
    function ListingComponent() {
        this.vehicle = [
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
            }
        ];
    }
    ListingComponent = __decorate([
        core_1.Component({
            //moduleId: module.id, //permite chamar os template que estao no mesmo diretorio
            selector: 'vehicles',
            templateUrl: './app/listing/listing.component.html'
        })
    ], ListingComponent);
    return ListingComponent;
}());
exports.ListingComponent = ListingComponent;
//# sourceMappingURL=listing.component.js.map