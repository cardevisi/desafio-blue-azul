//native modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //define a plataforma onde a aplicação vai rodar, neste caso no navegador
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module

//Custom Modules
import { ListingModule } from './listing/listing.module';
import { PaginationComponent } from './paginate-list/paginate-list.component';
import { PaginateModule } from './paginate-list/paginate-list.module';

//Custom components
import { AppComponent } from './app.component';
import { UserProfileComponent } from './users/user-profile.component';
import { UserFormComponent } from './users/user-form.component';
import { RegisterComponent } from './register/register.component';

import { routing } from './app.routes'; 

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      ListingModule,
      NgxPaginationModule,
      routing
  ],
  declarations: [ 
    AppComponent,
    UserProfileComponent,
    UserFormComponent,
    RegisterComponent,
    PaginationComponent
  ],
  bootstrap: [ AppComponent ] //bootstrap - modulo inicial
})

export class AppModule {}