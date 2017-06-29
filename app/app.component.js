System.register(['angular2/core', './contact-form.component', './signup.component', './changePassword.component'], function(exports_1, context_1) {
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
    var core_1, contact_form_component_1, signup_component_1, changePassword_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            },
            function (signup_component_1_1) {
                signup_component_1 = signup_component_1_1;
            },
            function (changePassword_component_1_1) {
                changePassword_component_1 = changePassword_component_1_1;
            }],
        execute: function() {
            //var $=jQuery
            AppComponent = (function () {
                function AppComponent() {
                    $("#search").keyup(function (e) {
                        var text = e.target.value;
                        var url = "https://api.spotify.com/v1/search?type=artist&q=" + text;
                        if (text.length < 3)
                            return;
                        $.getJSON(url, function (result) {
                            console.log(result);
                        });
                    });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        //template: '<contact-form></contact-form><signup></signup>',
                        //template: '<changePass></changePass>',
                        template: "\n    <input style='width: 300px' type='text' id='search' name='search' class='form-control' placeholder='Type to search...' />\n    ",
                        directives: [contact_form_component_1.ContactFormComponent, signup_component_1.SignUpComponent, changePassword_component_1.changePassComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map