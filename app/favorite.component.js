System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var FavoriteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FavoriteComponent = (function () {
                function FavoriteComponent() {
                    //isFavorite=false; By this way, you cannot set the value depeneds on the input
                    this.isFavorite = false; //By this way you are making the value depends on the input fields. is-favorite is the alias.
                    this.changeFavorite = new core_1.EventEmitter(); //Used to publish the event to the client
                }
                FavoriteComponent.prototype.makeFav = function () {
                    this.isFavorite = !this.isFavorite;
                    this.changeFavorite.emit({ newValue: this.isFavorite });
                };
                __decorate([
                    core_1.Input('is-favorite'), 
                    __metadata('design:type', Object)
                ], FavoriteComponent.prototype, "isFavorite", void 0);
                __decorate([
                    //By this way you are making the value depends on the input fields. is-favorite is the alias.
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], FavoriteComponent.prototype, "changeFavorite", void 0);
                FavoriteComponent = __decorate([
                    core_1.Component({
                        selector: 'favorite',
                        template: "<br/><br/>\n    <span style='padding-top: 50px; padding-left: 50px'>\n        <i\n            class=\"glyphicon\" \n            [class.glyphicon-star-empty]=\"!isFavorite\"\n            [class.glyphicon-star]=\"isFavorite\"\n            (click)=\"makeFav()\">\n        </i>        \n    </span>\n    ",
                        styles: ["\n        .glyphicon-star{\n            color: orange;\n        }\n\n        .glyphicon-heart{\n            color: #ccc;\n        }        \n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FavoriteComponent);
                return FavoriteComponent;
            }());
            exports_1("FavoriteComponent", FavoriteComponent);
        }
    }
});
//# sourceMappingURL=favorite.component.js.map