import { Component, Output, EventEmitter } from '@angular/core';
import { Vehicle } from '../shared/models/vehicle';

@Component({
    selector: 'register',
    templateUrl: './app/register/register.component.html'
})

export class RegisterComponent {
    @Output() vehicleCreated = new EventEmitter();
    newVehicle: Vehicle = new Vehicle();
    active: boolean = true;

    onSubmit(event) {
        console.log('event', this.newVehicle);
        event.preventDefault();
        this.vehicleCreated.emit({vehicle: this.newVehicle });
        this.newVehicle = new Vehicle();
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}