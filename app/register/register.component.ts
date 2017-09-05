import { Component, Output, EventEmitter } from '@angular/core';
import { Vehicle } from '../shared/models/vehicle';
import { DataService } from "../service/data.service";

@Component({
    selector: 'register',
    templateUrl: './app/register/register.component.html',
    styleUrls : ['./app/register/register.component.css']
})

export class RegisterComponent {
    @Output() vehicleCreated = new EventEmitter();
    newVehicle: Vehicle = new Vehicle();
    active: boolean = true;

    constructor(private data: DataService) {}

    onSubmit(event) {
        console.log('onSubmit', this.newVehicle);
        event.preventDefault();
        this.data.changeMessage(this.newVehicle);
        this.vehicleCreated.emit({vehicle: this.newVehicle });
        //this.newVehicle = new Vehicle();
        this.active = false;
        //console.log('this.newVehicle', this.newVehicle);
        setTimeout(() => this.active = true, 0);
    }
}