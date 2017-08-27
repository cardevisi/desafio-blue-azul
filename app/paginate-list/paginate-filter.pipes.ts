import { Pipe } from '@angular/core';

@Pipe({
    name: 'filterByTitle'   
})

export class FilterByTitle {
    
    transform(vehicles, digitado) {
        console.log(vehicles, digitado);
    }
}