System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var passwordValidators;
    return {
        setters:[],
        execute: function() {
            passwordValidators = (function () {
                function passwordValidators() {
                }
                passwordValidators.passLength = function () {
                    var len = 5;
                    return len;
                };
                passwordValidators.comparePass = function (controlgroup) {
                    var newpass = controlgroup.find("newpass").value;
                    //alert(newpass);
                    var confpass = controlgroup.find('confirmPassword').value;
                    //alert(confpass);
                    if (newpass == '' || confpass == '')
                        return null;
                    if (newpass != confpass)
                        return { comparePass: true };
                    return null;
                };
                return passwordValidators;
            }());
            exports_1("passwordValidators", passwordValidators);
        }
    }
});
//# sourceMappingURL=passwordValidators.js.map