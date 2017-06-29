System.register(['angular2/core', './movies.service'], function(exports_1, context_1) {
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
    var core_1, movies_service_1;
    var MoviesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (movies_service_1_1) {
                movies_service_1 = movies_service_1_1;
            }],
        execute: function() {
            MoviesComponent = (function () {
                function MoviesComponent(moviesService) {
                    this.topTitle = "List of Channels";
                    this.channelList = moviesService.getChannels();
                }
                MoviesComponent = __decorate([
                    core_1.Component({
                        selector: 'movies',
                        template: "<h2>Top Show: Game of thrones</h2>\n                \n                <table style='padding-top: 10px'>\n                    <tr>\n                        <td style='padding-bottom: 10px; font-size: 20px'>\n                            {{ topTitle }}\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"#channel of channelList\">\n                        <td>{{ channel }}</td>\n                    </tr>\n                </table>\n               ",
                        providers: [movies_service_1.MoviesService]
                    }), 
                    __metadata('design:paramtypes', [movies_service_1.MoviesService])
                ], MoviesComponent);
                return MoviesComponent;
            }());
            exports_1("MoviesComponent", MoviesComponent);
        }
    }
});
//# sourceMappingURL=movies.component.js.map