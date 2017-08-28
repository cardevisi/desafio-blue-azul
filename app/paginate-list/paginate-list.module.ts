import { NgModule } from '@angular/core';
import { PaginationComponent } from './paginate-list.component';

@NgModule({
    declarations:[ PaginationComponent],
    exports: [ PaginationComponent]
})

export class PaginateModule {}