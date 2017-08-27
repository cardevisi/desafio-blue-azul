import { NgModule } from '@angular/core';
import { PaginationComponent } from './paginate-list.component';
import { FilterByTitle } from './paginate-filter.pipes';

@NgModule({
    declarations:[ PaginationComponent],
    exports: [ PaginationComponent]
})

export class PaginateModule {}