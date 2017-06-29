System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MoviesService;
    return {
        setters:[],
        execute: function() {
            MoviesService = (function () {
                function MoviesService() {
                }
                MoviesService.prototype.getChannels = function () {
                    return ["NETFLIX", "HBO", "HULU", "AMAZON PRIME"];
                };
                return MoviesService;
            }());
            exports_1("MoviesService", MoviesService);
        }
    }
});
//# sourceMappingURL=movies.service.js.map