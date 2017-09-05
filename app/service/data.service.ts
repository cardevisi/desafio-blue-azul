import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Vehicle } from '../shared/models/vehicle';

@Injectable()
    export class DataService {

        private messageSource = new BehaviorSubject<Array<any>>([]);
        private vehicles = [
        {   
            "combustivel" : "Flex",
            "imagem" : null,
            "marca" : "Volkswagem",
            "modelo" : "Gol",
            "placa" : "FFF-5498",
            "valor" : "20000"
        },
        { 
            "combustivel" : "Gasolina",
            "imagem" : null,
            "marca" : "Volkswagem",
            "modelo" : "Fox",
            "placa" : "FOX-4125",
            "valor" : "20000"
        },
        { 
            "combustivel" : "Alcool",
            "imagem" : "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
            "marca" : "Ford",
            "modelo" : "Fusca",
            "placa" : "PAI-4121",
            "valor" : "20000"
        },
        { 
            "combustivel" : "Alcool",
            "imagem" : "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
            "marca" : "Subaru",
            "modelo" : "Fusca",
            "placa" : "PAI-4121",
            "valor" : "20000"
        },
        { 
            "combustivel" : "Gasolina",
            "imagem" : "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
            "marca" : "Fusca",
            "modelo" : "Fusca",
            "placa" : "PAI-4121",
            "valor" : "20000"
        }];
        
        public currentMessage = this.messageSource.asObservable();
        
        constructor() { 
            this.messageSource.next(this.vehicles);
        }
        
        changeMessage(vehicle: Vehicle) {
            this.vehicles.unshift(vehicle);
            this.messageSource.next(this.vehicles);
        }
}