import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ListingComponent } from './listing/listing.component';
import { PaginationComponent } from './paginate-list/paginate-list.component';

const appRoutes : Routes = [
    { path: '', component: PaginationComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: ListingComponent }
];

export const routing = RouterModule.forRoot(appRoutes);