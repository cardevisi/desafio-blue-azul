import { ChangeDetectionStrategy, Component, Input , Output, EventEmitter} from '@angular/core';
import { Vehicle } from '../shared/models/vehicle';
import { PaginationInstance } from '../../node_modules/ngx-pagination';

@Component({
  //moduleId: module.id,
  selector: 'pagination',
  templateUrl: './app/paginate-list/paginate-list.component.html',
  styleUrls: ['./app/paginate-list/paginate-list.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class PaginationComponent {
    @Input() vehicles : Vehicle;

    public queryString: string = '';
    public maxSize: number = 7;
    public directionLinks: boolean = true;
    public autoHide: boolean = false;
    public config: PaginationInstance = {
        id: 'advanced',
        itemsPerPage: 5,
        currentPage: 1
    };
    public labels: any = {
        previousLabel: '<<',
        nextLabel: '>>',
        screenReaderPaginationLabel: 'Pagination',
        screenReaderPageLabel: 'page',
        screenReaderCurrentLabel: `You're on page`
    };

    private popped = [];
    private collection = [];

    constructor() {
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
            }
        ];
    }

    onPageChange(number: number) {
        console.log('change to page', number);
        this.config.currentPage = number;
    }

    pushItem() {
        let item = this.popped.pop() || 'A newly-created meal!';
        this.collection.push(item);
    }

    popItem() {
        this.popped.push(this.collection.pop());
    }

    onVehicleCreated(event) {
        console.log('event', event);
        this.collection.push(event.vehicles);
    };
}