"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var StringFilterPipe = (function () {
    function StringFilterPipe() {
    }
    StringFilterPipe.prototype.transform = function (value, q) {
        if (!q || q === '') {
            return value;
        }
        return value.filter(function (item) { return (item['marca'].toLowerCase().indexOf(q.toLowerCase()) != -1) || item['combustivel'].toLowerCase().indexOf(q.toLowerCase()) != -1; });
    };
    StringFilterPipe = __decorate([
        core_1.Pipe({
            name: 'stringFilter'
        })
    ], StringFilterPipe);
    return StringFilterPipe;
}());
exports.StringFilterPipe = StringFilterPipe;
//# sourceMappingURL=paginate-filter.pipes.js.map