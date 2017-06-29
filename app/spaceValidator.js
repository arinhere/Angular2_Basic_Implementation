System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var spaceValidator;
    return {
        setters:[],
        execute: function() {
            spaceValidator = (function () {
                function spaceValidator() {
                }
                spaceValidator.validateUnique = function (control) {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if (control.value == "arin")
                                resolve({ validateUnique: true });
                            else
                                resolve(null);
                        }, 1000);
                    });
                };
                spaceValidator.validateSpace = function (control) {
                    if (control.value.indexOf(' ') >= 0)
                        return { validateSpace: true };
                    return null;
                };
                return spaceValidator;
            }());
            exports_1("spaceValidator", spaceValidator);
        }
    }
});
//# sourceMappingURL=spaceValidator.js.map