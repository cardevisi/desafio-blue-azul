//our root app component
import {Component, Input} from '@angular/core';
import { Vehicle } from '../shared/models/vehicle';

@Component({
  //moduleId: module.id,
  selector: 'pagination',
  templateUrl: './app/paginate-list/paginate-list.component.html',
})

export class PaginationComponent {
  @Input() vehicles : Vehicle;
  collection = [];
  constructor() {
    console.log(this.vehicles);
    this.collection = [
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
            "marca" : "Volkswagen",
            "modelo" : "Fusca",
            "placa" : "PAI-4121",
            "valor" : "20000"
        },
        { 
            "combustivel" : "Alcool",
            "imagem" : "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
            "marca" : "Volkswagen",
            "modelo" : "Fusca",
            "placa" : "PAI-4121",
            "valor" : "20000"
        }
    ];//this.vehicles;

    /*for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }*/
  }
}