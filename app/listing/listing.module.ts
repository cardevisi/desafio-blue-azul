import { NgModule } from '@angular/core';
import { ListingComponent } from './listing.component';

@NgModule({
    declarations:[ ListingComponent ],
    exports: [ ListingComponent ]
})

export class ListingModule {}