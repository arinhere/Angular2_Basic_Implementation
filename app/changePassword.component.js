System.register(['angular2/core', 'angular2/common', './passwordValidators'], function(exports_1, context_1) {
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
    var core_1, common_1, passwordValidators_1;
    var changePassComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (passwordValidators_1_1) {
                passwordValidators_1 = passwordValidators_1_1;
            }],
        execute: function() {
            changePassComponent = (function () {
                function changePassComponent(fb) {
                    this.len = passwordValidators_1.passwordValidators.passLength();
                    this.form = fb.group({
                        oldpass: ['',
                            common_1.Validators.compose([
                                common_1.Validators.required,
                                common_1.Validators.minLength(passwordValidators_1.passwordValidators.passLength())
                            ])
                        ],
                        newpass: ['',
                            common_1.Validators.compose([
                                common_1.Validators.required,
                                common_1.Validators.minLength(passwordValidators_1.passwordValidators.passLength())
                            ])
                        ],
                        confirmPassword: ['', common_1.Validators.required]
                    }, { validator: passwordValidators_1.passwordValidators.comparePass }); //As this function needs controlgroup, so it has to be called at the end of controlgroup
                }
                //submit function 
                changePassComponent.prototype.changePassword = function () {
                    if (this.form.find("oldpass").value != "11111") {
                        this.form.find("oldpass").setErrors({
                            passIncorrect: true
                        });
                    }
                    console.log(this.form.value);
                };
                changePassComponent.prototype.logdata = function (x) {
                    console.log(x);
                };
                changePassComponent = __decorate([
                    core_1.Component({
                        selector: 'changePass',
                        templateUrl: 'app/changePass.template.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], changePassComponent);
                return changePassComponent;
            }());
            exports_1("changePassComponent", changePassComponent);
        }
    }
});
//# sourceMappingURL=changePassword.component.js.map