"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//native modules
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser"); //define a plataforma onde a aplicação vai rodar, neste caso no navegador
var forms_1 = require("@angular/forms");
var ngx_pagination_1 = require("ngx-pagination"); // <-- import the module
//Custom Modules
var listing_module_1 = require("./listing/listing.module");
var paginate_list_component_1 = require("./paginate-list/paginate-list.component");
//import { PaginateModule } from './paginate-list/paginate-list.module';
//Custom components
var app_component_1 = require("./app.component");
var user_profile_component_1 = require("./users/user-profile.component");
var user_form_component_1 = require("./users/user-form.component");
var register_component_1 = require("./register/register.component");
var paginate_filter_pipes_1 = require("./paginate-list/paginate-filter.pipes");
var app_routes_1 = require("./app.routes");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                listing_module_1.ListingModule,
                ngx_pagination_1.NgxPaginationModule,
                //PaginateModule,
                app_routes_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                user_profile_component_1.UserProfileComponent,
                user_form_component_1.UserFormComponent,
                register_component_1.RegisterComponent,
                paginate_list_component_1.PaginationComponent,
                paginate_filter_pipes_1.StringFilterPipe
            ],
            bootstrap: [app_component_1.AppComponent] //bootstrap - modulo inicial
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map