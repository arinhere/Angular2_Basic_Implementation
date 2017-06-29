System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ShowCreator;
    return {
        setters:[],
        execute: function() {
            ShowCreator = (function () {
                function ShowCreator() {
                }
                ShowCreator.prototype.getDirectors = function () {
                    return ["D B Wells", "David Benioff", "John Logan", "Beau Willimon"];
                };
                return ShowCreator;
            }());
            exports_1("ShowCreator", ShowCreator);
        }
    }
});
//# sourceMappingURL=showCreator.service.js.map