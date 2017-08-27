"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var register_component_1 = require("./register/register.component");
var listing_component_1 = require("./listing/listing.component");
var paginate_list_component_1 = require("./paginate-list/paginate-list.component");
var appRoutes = [
    { path: '', component: paginate_list_component_1.PaginationComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: '**', component: listing_component_1.ListingComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map