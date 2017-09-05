import { ChangeDetectionStrategy, Component, Input , Output, EventEmitter} from '@angular/core';
import { Vehicle } from '../shared/models/vehicle';
import { PaginationInstance } from '../../node_modules/ngx-pagination';
import { DataService } from "../service/data.service";


@Component({
  //moduleId: module.id,
  selector: 'pagination',
  templateUrl: './app/paginate-list/paginate-list.component.html',
  styleUrls: ['./app/paginate-list/paginate-list.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class PaginationComponent {
    @Input() vehicles : Vehicle;

    private vehicleData: Vehicle;
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

    constructor(private data: DataService) {}

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

    createdVehicle(vehicleData) {
        this.collection = vehicleData;
    }

    ngOnInit() {
        let that = this;
        this.data.currentMessage.subscribe(function(vehicleData) {
            that.createdVehicle(vehicleData);
        });
    }
}